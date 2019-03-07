import { HandlerInput } from 'ask-sdk-core';
import { AlexaRequestTypes, IRequestContext, RequestAdapter, RequestReader } from 'dotup-ts-node-skills';
import { WorkflowState, WorkflowStepState } from './Enumerations';
import { IWorkflowContext } from './Interfaces/IWorkflowContext';
import { IWorkflowRequestHandler } from './Interfaces/IWorkflowRequestHandler';
import { WorkflowController } from './WorkflowController';

// tslint:disable-next-line: no-any : interface-over-type-literal
declare type IndexedMethods = { [key: string]: (context: IRequestContext, wc: WorkflowController<any>) => Promise<void> };

export class WorkflowRequestAdapter extends RequestAdapter {

  constructor() {
    super(
      'WorkflowRequestAdapter',
      AlexaRequestTypes.IntentRequest,
      AlexaRequestTypes.LaunchRequest,
      AlexaRequestTypes.GameEngineInputHandlerEvent
    );
  }

  // tslint:disable-next-line:no-any
  isWorkflowRequestHandler<T>(arg: any): arg is IWorkflowRequestHandler<T> {
    if (arg === undefined) {
      return false;
    } else {
      return (<IWorkflowRequestHandler<T>>arg).handleRequest !== undefined;
    }
  }

  canHandle(handlerInput: HandlerInput) {
    const requestReader = new RequestReader(handlerInput);
    const w = requestReader
      .getRequestAttributes()
      .getworkflowContext();
    const wfm = w.manager;
    const state = w.controller.getWorkflowState();

    if (wfm === undefined || state === WorkflowState.Done) {
      return false;
    }

    if (!this.canHandleName(requestReader.getRequestType())) {
      return false;
    }

    const methodToCall = requestReader.getCurrentRequestOrIntentName()
      .replace('AMAZON.', '')
      .replace('.', '')
      ;

    return wfm.HasHandler(methodToCall, w.controller);
  }

  async handleRequest(context: IRequestContext): Promise<void> {
    const w = context.request
      .getRequestAttributes()
      .getworkflowContext();

    const wc = w.controller;
    const model = wc.getWorkflow();

    // let result: WorkflowResponseState;
    let methodToCall = context.request.getCurrentRequestOrIntentName()
      .replace('AMAZON.', '')
      .replace('.', '')
      ;

    do {
      // delete old stuff. each request should set a state. it is also a request attributes
      model.CurrentWorkflowStepState = undefined;

      let currentStep = w.controller.getCurrentStep();

      // Call the handler
      await this.executeHandler(context, w, methodToCall, model.CurrentWorkflowStepState);

      switch (model.CurrentWorkflowStepState) {

        case WorkflowStepState.GetFromNext:
          currentStep.State = WorkflowState.Done;
          currentStep = wc.getNextStep();
          methodToCall = 'StartStep';
          break;

        case WorkflowStepState.GetFromPrevious:
          currentStep.State = WorkflowState.Unknown;
          currentStep = wc.getPreviousStep(currentStep);
          methodToCall = 'StartStep';
          break;

        case WorkflowStepState.GetFromCurrent:
          // Do not change anything. Comming from Fallback handler
          // currentStep.State = WorkflowItemState.Done;
          // currentStep = wfm.GetPreviousStep(workflow, currentStep);
          methodToCall = 'StartStep';
          break;

        case undefined:
          // tslint:disable-next-line:max-line-length
          const e = `WorkflowRequestAdapter: workflow.CurrentStepState not set. request: ${methodToCall} | workflow: ${currentStep.name} | state: ${model.CurrentWorkflowStepState}`;
          throw new Error(e);
      }

    } while (
      model.CurrentWorkflowStepState !== WorkflowStepState.Processed &&
      model.CurrentWorkflowStepState !== WorkflowStepState.Error &&
      model.CurrentWorkflowStepState !== WorkflowStepState.Processing
    );

    return;
  }

  // tslint:disable:no-any

  private async executeHandler(
    context: IRequestContext,
    w: IWorkflowContext<any>,
    methodToCall: string,
    currentStepState: WorkflowStepState): Promise<void> {

    const wfm = w.manager;
    const wc = w.controller;

    // delete old stuff. each request should set a state. it is also a request attributes
    w.WorkflowStepState = undefined;

    const handler = <IndexedMethods><any>wfm.GetHandler(methodToCall, wc);

    if (handler !== undefined && methodToCall in handler) {
      // if (handler !== undefined && (<any>handler)[methodToCall]) {

      // handler found an method exists
      // tslint:disable-next-line: no-unsafe-any
      await handler[methodToCall](context, wc);

    } else if (this.isWorkflowRequestHandler(handler)) {

      // Call the custom handler
      if (methodToCall in handler) {
        // Call the defined handler
        // tslint:disable-next-line: no-unsafe-any
        await handler[methodToCall](context, wc);
      } else {
        // It's a ICustomWorkflowHandler. Call the default custom handler method
        const custom = (<IWorkflowRequestHandler<any>>handler);
        await custom.handleRequest(
          context,
          wc,
          methodToCall
        );
      }
      // kind: 'ICustomWorkflowHandler'
    } else if (wfm.FallbackHandler !== undefined && wfm.FallbackHandler.canHandle(methodToCall, wc)) {

      // Call the fallback handler
      if (methodToCall in wfm.FallbackHandler) {
        // Call the defined fallback handler for intent
        // tslint:disable-next-line: no-unsafe-any
        await (<any>wfm.FallbackHandler)[methodToCall](context);
      } else {
        // Call the default fallback handler method
        await wfm.FallbackHandler.handleRequest(context, wc, context.request.getCurrentRequestOrIntentName());
      }

    } else {
      // tslint:disable-next-line: max-line-length
      const msg = `WorkflowRequestAdapter: request: ${methodToCall} | workflow: ${wc.getCurrentStepName()} | state: ${currentStepState}`;
      throw new Error(msg);
    }

    return;
  }

}
