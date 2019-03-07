import { CustomSkillBuilder } from 'ask-sdk-core';
import { LoggerFactory } from 'dotup-ts-logger';
import { IPlugin } from 'dotup-ts-node-skills';
import { WorkflowRequestInterceptor } from '../WorkflowRequestInterceptor';
import { ISkillWorkflowsPluginConfiguration } from './ISkillWorkflowsPluginConfiguration';

export class SkillWorkflowsPlugin<T> implements IPlugin {
  private readonly config: ISkillWorkflowsPluginConfiguration<T>;

  constructor(config: ISkillWorkflowsPluginConfiguration<T>) {
    this.config = config;
  }

  initialize(skillBuilder: CustomSkillBuilder): void {
    const logger = LoggerFactory.createLogger('SkillWorkflowsPlugin');
    logger.Info('workflow plugin initialized', 'initialize');

    const requestInterceptor = new WorkflowRequestInterceptor(this.config.workflowManager);
    skillBuilder.addRequestInterceptors(requestInterceptor);
  }

}
