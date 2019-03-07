import { WorkflowStepState } from './Enumerations';
import { WorkflowStepModel } from './WorkflowStepModel';

export class WorkflowModel<T> {

  readonly Name: string;

  WorkflowSteps: WorkflowStepModel[];

  Payload: T;

  CurrentWorkflowItemIndex: number;

  CurrentHandlerId: number;

  CurrentWorkflowStepState: WorkflowStepState;

  constructor(name: string, payload: T) {
    this.Name = name;
    this.WorkflowSteps = [];
    this.Payload = payload;
  }

}
