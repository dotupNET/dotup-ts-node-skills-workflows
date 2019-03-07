import { WorkflowHandler } from '../WorkflowHandler';

export interface IWorkflowTemplateConfiguration<T> {
  WorkflowName: string;
  Handler: WorkflowHandler<T>;
}
