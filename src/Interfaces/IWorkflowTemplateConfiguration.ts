import { WorkflowHandler } from '../WorkflowHandler';
import { IWorkflowHandler } from './IWorkflowHandler';

export interface IWorkflowTemplateConfiguration<T> {
  WorkflowName: string;
  Handler: IWorkflowHandler<T>;
}
