import { IRequestContext } from 'dotup-ts-node-skills';
import { WorkflowController } from '../WorkflowController';
import { IWorkflowHandler } from './IWorkflowHandler';

export interface IWorkflowRequestHandler<T> extends IWorkflowHandler<T> {
  handleRequest(context: IRequestContext, workflow: WorkflowController<T>, intentOrRequestName: string): Promise<void>;
}
