import { WorkflowManager } from '../WorkflowManager';

export interface ISkillWorkflowsPluginConfiguration<T> {
  workflowManager: WorkflowManager<T>;
}
