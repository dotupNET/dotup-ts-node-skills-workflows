import { WorkflowState } from './Enumerations';
// uimport { WorkflowItemState } from './WorkflowItemState';

export class WorkflowStepModel {

  // tslint:disable-next-line: no-any
  Payload: any;

  readonly name: string;

  State: WorkflowState = WorkflowState.Unknown;

  constructor(name: string) {
    this.name = name;
  }
}
