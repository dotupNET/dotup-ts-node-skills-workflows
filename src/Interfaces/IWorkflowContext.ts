import { WorkflowStepState } from '../Enumerations';
import { WorkflowController } from '../WorkflowController';
import { WorkflowManager } from '../WorkflowManager';

export interface IWorkflowContext<T> {
  readonly manager: WorkflowManager<T>;

  readonly controller: WorkflowController<T>;

  WorkflowStepState: WorkflowStepState;

}
