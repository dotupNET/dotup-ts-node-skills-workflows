import { ArrayTools } from 'dotup-ts-types';
import { WorkflowState, WorkflowStepState } from './Enumerations';
import { WorkflowModel } from './WorkflowModel';
import { WorkflowStepModel } from './WorkflowStepModel';

export class WorkflowController<T> {

  // tslint:disable-next-line: no-any
  private readonly workflow: WorkflowModel<T>;

  // tslint:disable-next-line: no-any
  constructor(workflow: WorkflowModel<any>) {
    this.workflow = workflow;
  }

  getWorkflow(): WorkflowModel<T> {
    return this.workflow;
  }

  get payload(): T {
    return this.workflow.Payload;
  }

  set payload(value: T) {
    this.workflow.Payload = value;
  }

  getCurrentStepName(): string {
    return this.workflow.WorkflowSteps[this.workflow.CurrentWorkflowItemIndex].name;
  }

  addStep(item: WorkflowStepModel, prevoiusItem?: WorkflowStepModel): void {
    ArrayTools.insert(this.workflow.WorkflowSteps, item, prevoiusItem);
  }

  // tslint:disable-next-line: no-any
  add(stepName: string, payload: any, prevoiusItem?: WorkflowStepModel): WorkflowStepModel {
    const newItem = new WorkflowStepModel(stepName);
    newItem.Payload = payload;
    this.addStep(newItem, prevoiusItem);

    return newItem;
  }

  getCurrentStep(): WorkflowStepModel {
    return this.workflow.WorkflowSteps[this.workflow.CurrentWorkflowItemIndex];
  }

  getCurrentPayload<TPayload>(): TPayload {
    return <TPayload>this.workflow.WorkflowSteps[this.workflow.CurrentWorkflowItemIndex].Payload;
  }

  // tslint:disable-next-line: no-any
  setCurrentPayload(key: string, value: any): void {
    const step = this.workflow.WorkflowSteps[this.workflow.CurrentWorkflowItemIndex];
    if (step.Payload === undefined) {
      step.Payload = {};
    }
    // tslint:disable-next-line: no-unsafe-any
    step.Payload[key] = value;
  }

  getNextStepWithState(state: WorkflowState = WorkflowState.Unknown): WorkflowStepModel {

    const list = this.workflow.WorkflowSteps;

    return list
      .find(item => {
        return item.State === state;
      });
  }

  peekNextStep(state?: WorkflowState): [WorkflowStepModel, number];
  peekNextStep(state: WorkflowState = WorkflowState.Unknown): [WorkflowStepModel, number] {
    return this.getNextWithState(state);
  }

  getNextStep(state: WorkflowState = WorkflowState.Unknown): WorkflowStepModel {
    const [nextStep, nextIndex] = this.peekNextStep(state);

    if (nextStep !== undefined) {
      nextStep.State = WorkflowState.Active;
    }
    this.workflow.CurrentWorkflowItemIndex = nextIndex;

    return nextStep;
  }

  // GetCurrentStep(workflow: WorkflowModel<T>): WorkflowItem {
  //   return this.getNextWithState(workflow, WorkflowItemState.Active);
  // }

  peekPreviousStep(
    currentStep: WorkflowStepModel,
    state: WorkflowState = WorkflowState.Done
  ): [WorkflowStepModel, number] {
    const indexOfCurrent = this.workflow.WorkflowSteps.indexOf(currentStep);

    // Not found or first item
    if (indexOfCurrent < 1) {
      return undefined;
    }

    let nextStep: WorkflowStepModel;
    let index = 0;
    for (index; index >= 0; index -= 1) {
      const element = this.workflow.WorkflowSteps[index];

      if (element.State === state) {
        nextStep = element;
        break;
      }
    }

    return [nextStep, index];
  }

  // tslint:disable-next-line: max-line-length
  getPreviousStep(currentStep: WorkflowStepModel, state: WorkflowState = WorkflowState.Done): WorkflowStepModel {
    const [previousStep, previousIndex] = this.peekPreviousStep(currentStep, state);

    if (previousStep !== undefined) {
      previousStep.State = WorkflowState.Active;
    }
    this.workflow.CurrentWorkflowItemIndex = previousIndex;

    return previousStep;
  }

  skipToStep(workflowName: string): WorkflowStepModel {
    let result: WorkflowStepModel;

    this.getCurrentStep().State = WorkflowState.Done;
    do {
      result = this.getNextStep();
      if (result.name !== workflowName) {
        result.State = WorkflowState.Done;
        result = undefined;
      }
    } while (result === undefined);

    return result;
  }

  // setPreviousStep(workflowName: string): WorkflowStepModel {
  //   const currentIndex = this.workflow.CurrentWorkflowItemIndex;
  //   const nextStepIndex = currentIndex + 1; // workflow.WorkflowItems.findIndex(item => item.name === workflowName);

  //   if (nextStepIndex < 0) {
  //     throw new Error(`Workflow step name ${workflowName} not found`);
  //   }

  //   const nextStep = this.workflow.WorkflowSteps[nextStepIndex];
  //   if (currentIndex < nextStepIndex) {
  //     const currentStepName = this.workflow.WorkflowSteps[currentIndex];
  //     throw new Error(`Workflow step ${currentStepName} is not before step ${nextStep.name}`);
  //   }

  //   // tslint:disable-next-line:prefer-for-of
  //   // tslint:disable-next-line:no-increment-decrement
  //   for (let index = nextStepIndex; index <= currentIndex; index++) {
  //     this.workflow.WorkflowSteps[index].State = WorkflowState.Unknown;
  //     delete this.workflow.WorkflowSteps[index].Payload;
  //   }

  //   return nextStep;
  // }

  getNextWithState(state: WorkflowState = WorkflowState.Unknown): [WorkflowStepModel, number] {

    if (this.workflow === undefined) {
      return undefined;
    }

    const list = this.workflow.WorkflowSteps;
    let nextIndex = -1;

    const nextStep = list.find((item, index) => {
      if (item.State === state) {
        nextIndex = index;

        return true;
      } else {
        return false;
      }
    });

    return [nextStep, nextIndex];
  }

  getWorkflowState(): WorkflowState {
    const items = this.workflow.WorkflowSteps;

    if (items.findIndex(item => item.State === WorkflowState.Active) > -1) {
      return WorkflowState.Active;
    }

    if (items.findIndex(item => item.State === WorkflowState.Unknown) > -1) {
      return WorkflowState.Unknown;
    }

    return WorkflowState.Done;
  }

}
