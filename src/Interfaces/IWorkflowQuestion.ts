import { interfaces, ui } from 'ask-sdk-model';
import { WorkflowController } from '../WorkflowController';
import { WorkflowQuestionIntent } from '../Types';
import { SkillTextProvider, IRequestContext, DisplayBuilder } from 'dotup-ts-node-skills';
import { ICard } from 'dotup-ts-node-skills/dist/Response/Card/Card';

export interface IWorkflowQuestionHandler<TPayload> {
  [key: string]: WorkflowQuestionIntent<TPayload>;
}
export interface IWorkflowQuestion<TPayload> {
  workflowName: string;
  ask?: SkillTextProvider | ((context: IRequestContext, wc: WorkflowController<TPayload>) => SkillTextProvider);
  reprompt?: SkillTextProvider | ((context: IRequestContext, wc: WorkflowController<TPayload>) => SkillTextProvider);
  askAgain: SkillTextProvider | ((context: IRequestContext, wc: WorkflowController<TPayload>) => SkillTextProvider);
  display?: DisplayBuilder | interfaces.display.Template;
  card?: ICard | ui.Card;
  // intentName: string;

  handler: IWorkflowQuestionHandler<TPayload>;
}
