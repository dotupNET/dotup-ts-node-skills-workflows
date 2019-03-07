import { IRequestContext } from 'dotup-ts-node-skills';
import { IWorkflowStepHandler } from './Interfaces/IWorkflowStepHandler';
import { WorkflowController } from './WorkflowController';
import { WorkflowHandler } from './WorkflowHandler';

export abstract class WorkflowStepHandler<T> extends WorkflowHandler<T> implements IWorkflowStepHandler<T> {
  constructor(workflowName: string) {
    super(workflowName);
  }

  abstract StartStep(context: IRequestContext, wc: WorkflowController<T>): Promise<void>;

}
