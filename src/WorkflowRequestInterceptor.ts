// tslint:disable:no-any
import { HandlerInput, RequestInterceptor } from 'ask-sdk-core';
import { ResponseInterceptor } from 'ask-sdk-runtime';
import { JsonManager } from 'dotup-ts-json-serializer';
import { LoggerFactory } from 'dotup-ts-logger';
import { IRequestAttributes, ISessionAttributes } from 'dotup-ts-node-skills';
import { WorkflowController } from './WorkflowController';
import { WorkflowManager } from './WorkflowManager';

/**
 * 1. Deserialize the workflow or create a new.
 * 2. Write it to the session attribute
 * 3. Create Workflow manager and put it in the request attributes
 */
export class WorkflowRequestInterceptor implements RequestInterceptor {
  private readonly logger = LoggerFactory.createLogger('WorkflowRequestInterceptor');
  private readonly workflowManager: WorkflowManager<any>;

  constructor(workflowManager: WorkflowManager<any>) {
    this.logger.Info('WorkflowsRequestInterceptor activated', 'ctor');
    this.workflowManager = workflowManager;
  }

  process(handlerInput: HandlerInput) {
    const sessionAttributes = <ISessionAttributes>handlerInput.attributesManager.getSessionAttributes();

    if (sessionAttributes.workflow === undefined) { // || sessionAttributes.getWorkflow() === undefined) {
      const jm = new JsonManager();
      const copy = jm.Serialize(this.workflowManager.WorkflowTemplate);
      sessionAttributes.workflow = jm.Parse(copy);
    }

    const wc = new WorkflowController<any>(sessionAttributes.workflow);

    // Workflow is in request attributes
    const requestAttributes = <IRequestAttributes>handlerInput.attributesManager.getRequestAttributes();

    requestAttributes.getWorkflow = () => wc.getWorkflow();

    requestAttributes.getWorkflowContext = () => {
      return {
        manager: this.workflowManager,
        controller: wc,
        WorkflowStepState: undefined
      };
    };

    // Workflow is in session attributes
    //  sessionAttributes.Workflow = workflow;
  }

}

export const SkillResponseInterceptor: ResponseInterceptor<HandlerInput, Response> = {
  async process(input: HandlerInput, response?: Response): Promise<void> {
    // Handle should end session for game engine
    const r = <IRequestAttributes>input.attributesManager.getRequestAttributes();
    const s = <ISessionAttributes>input.attributesManager.getSessionAttributes();

    s.workflow = r.getWorkflow();
  }

};
