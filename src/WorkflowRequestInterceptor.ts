// tslint:disable:no-any
import { HandlerInput, RequestInterceptor } from 'ask-sdk-core';
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

    if (sessionAttributes.getWorkflow === undefined || sessionAttributes.getWorkflow() === undefined) {
      const jm = new JsonManager();
      const copy = jm.Serialize(this.workflowManager.WorkflowTemplate);
      sessionAttributes.getWorkflow = () => jm.Parse(copy);
    }

    // Workflow is in request attributes
    const requestAttributes = <IRequestAttributes>handlerInput.attributesManager.getRequestAttributes();
    requestAttributes.getworkflowContext = () => {
      return {
        manager: this.workflowManager,
        controller: new WorkflowController(sessionAttributes.getWorkflow()),
        WorkflowStepState: undefined
      };
    };

    // Workflow is in session attributes
    //  sessionAttributes.Workflow = workflow;
  }

}
