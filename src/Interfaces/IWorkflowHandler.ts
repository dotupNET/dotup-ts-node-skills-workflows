import { WorkflowController } from '../WorkflowController';

export interface IWorkflowHandler<T> {

  WorkflowName: string;

  readonly includedHandler: string[];

  readonly excludedHandler: string[];

  canHandle(intentOrRequestName: string, wc: WorkflowController<T>): boolean;

}
