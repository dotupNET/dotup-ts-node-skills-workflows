import { IRequestContext } from 'dotup-ts-node-skills';
import { WorkflowController } from '../WorkflowController';
import { IWorkflowHandler } from './IWorkflowHandler';

export interface IWorkflowStepHandler<T> extends IWorkflowHandler<T> {
  StartStep(context: IRequestContext, wc: WorkflowController<T>): Promise<void>;
}
