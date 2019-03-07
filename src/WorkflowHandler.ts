import { IWorkflowHandler } from './Interfaces/IWorkflowHandler';
import { WorkflowController } from './WorkflowController';

export abstract class WorkflowHandler<T> implements IWorkflowHandler<T> {
  WorkflowName: string;

  readonly includedHandler: string[] = [];

  readonly excludedHandler: string[] = [];

  constructor(workflowName?: string) {
    this.WorkflowName = workflowName;
  }

  // abstract StartStep(context: RequestContext, wc: WorkflowController<T>): Promise<void>;

  canHandle(intentOrRequestName: string, wc: WorkflowController<T>): boolean {
    if (this.WorkflowName === undefined) {
      return false;
    }

    const name = wc.getCurrentStepName();
    if (this.WorkflowName !== name) {
      return false;
    }

    if (this.excludedHandler.indexOf(intentOrRequestName) > -1) {
      return false;
    }

    return this.includedHandler.indexOf(intentOrRequestName) > -1;
  }

}
