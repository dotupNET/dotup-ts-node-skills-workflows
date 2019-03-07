import { KeyValuePair, ObjectTools } from 'dotup-ts-types';
import { WorkflowState } from './Enumerations';
import { IWorkflowHandler } from './Interfaces/IWorkflowHandler';
import { IWorkflowRequestHandler } from './Interfaces/IWorkflowRequestHandler';
import { IWorkflowStepHandler } from './Interfaces/IWorkflowStepHandler';
import { IWorkflowTemplateConfiguration } from './Interfaces/IWorkflowTemplateConfiguration';
import { WorkflowController } from './WorkflowController';
import { WorkflowModel } from './WorkflowModel';
import { WorkflowStepModel } from './WorkflowStepModel';

interface IDictionary<T> {
  [key: string]: T;
}

export class WorkflowManager<T> {

  Name: string;

  WorkflowTemplate: WorkflowModel<T>;

  private readonly handlers: KeyValuePair<number, IWorkflowHandler<T>>[];

  readonly FallbackHandler: IWorkflowRequestHandler<T>;

  private readonly CompletedHandler: IWorkflowRequestHandler<T>;

  constructor(completedHandler?: IWorkflowRequestHandler<T>, fallbackHandler?: IWorkflowRequestHandler<T>) {
    this.handlers = [];

    completedHandler.includedHandler.push(...ObjectTools.GetOwnMethodNames(completedHandler));
    this.CompletedHandler = completedHandler;

    fallbackHandler.includedHandler.push(...ObjectTools.GetOwnMethodNames(fallbackHandler));
    this.FallbackHandler = fallbackHandler;
  }

  AddHandler(workflowHandler: IWorkflowRequestHandler<T> | IWorkflowStepHandler<T>): void {
    this.addHandlerInternal(workflowHandler);
  }

  private addHandlerInternal(workflowHandler: IWorkflowHandler<T>): void {
    const handlerFunctions = ObjectTools.GetOwnMethodNames(workflowHandler);
    workflowHandler.includedHandler.push(...handlerFunctions);
    this.handlers.push({ key: this.handlers.length + 1, value: workflowHandler });
  }

  CreateWorkflow(workflowName: string, payload: T, configuration: IWorkflowTemplateConfiguration<T>[]) {
    this.Name = workflowName;
    const template = new WorkflowModel<T>(workflowName, payload);
    console.log(`Handler registration:`);

    configuration.forEach((item, index) => {
      // add handler
      item.Handler.WorkflowName = item.WorkflowName;
      this.addHandlerInternal(item.Handler);

      console.log(`Step: ${index + 1} - Workflow: ${item.WorkflowName}`);
      console.log(`Included handler: ${item.Handler.includedHandler.join(',')}`);

      // template
      template.WorkflowSteps.push(new WorkflowStepModel(item.WorkflowName));
    });

    this.WorkflowTemplate = template;
  }

  // tslint:disable-next-line:max-line-length
  // handleRequest(args: IWorkflowHandlerArgs<T>): Response | Promise<Response> {
  //   const currentStep = this.getNextWithState(args.Workflow, WorkflowItemState.Active);

  //   const handler = this.handlers.find(item => {
  //     return item.WorkflowName === currentStep.Name;
  //   });

  //   return handler.handleRequest(this, args);
  // }

  GetCurrentStepHandler(workflow: WorkflowModel<T>): IWorkflowHandler<T> {
    const name = workflow.WorkflowSteps[workflow.CurrentWorkflowItemIndex].name;
    const handlerId = workflow.CurrentHandlerId;
    const handler = this.handlers.find(item => item.key === handlerId);

    return handler === undefined ? undefined : handler.value;
  }

  GetHandler(intentOrRequestName: string, wc: WorkflowController<T>): IWorkflowHandler<T> {
    let result: IWorkflowHandler<T>;
    // const requestname = intentOrRequestName.replace('AMAZON.', '');
    // const workflow: WorkflowModel<T> = wc.workflow;
    // const workflowItem: WorkflowStepModel = wc.getCurrentStep();
    const workflowState = wc.getWorkflowState();

    switch (workflowState) {
      case WorkflowState.Done:

        result = this.CompletedHandler;
        wc.getWorkflow().CurrentHandlerId = undefined;
        break;

      default:

        if (wc.getCurrentStep() !== undefined) {
          const h = this.handlers.find(item => item.value.canHandle(intentOrRequestName, wc));
          if (h !== undefined) {
            wc.getWorkflow().CurrentHandlerId = h.key;
            result = h.value;
          }
        }

        if (result === undefined) {
          wc.getWorkflow().CurrentHandlerId = undefined;
        }

    }

    return result;
  }

  HasHandler(intentOrRequestName: string, wc: WorkflowController<T>): boolean {
    // const requestname = intentOrRequestName.replace('AMAZON.', '');

    if (wc === undefined) {
      return false;
    }

    if (wc.getWorkflow().CurrentWorkflowItemIndex < 0) {
      return false;
    }

    const state = wc.getWorkflowState();
    if (state === WorkflowState.Done) {
      return false;
    }

    const handlerIndex = this.handlers.findIndex(handler => {
      return handler.value.canHandle(intentOrRequestName, wc);
    });

    if (handlerIndex > -1) {
      return true;
    } else {
      if (this.FallbackHandler !== undefined && this.FallbackHandler.canHandle(intentOrRequestName, wc)) {
        return true;
      } else {
        return false;
      }
    }
  }

  start(): void {
    const controller = new WorkflowController(this.WorkflowTemplate);
    controller.getNextStep();
  }

  // GetConfigurationFromHandler(): WorkflowItem[] {
  //   return this.handlers.map(handler => {
  //     return new WorkflowItem(handler.WorkflowName);
  //   });
  // }
}
