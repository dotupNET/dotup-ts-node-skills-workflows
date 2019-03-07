import { AlexaRequestTypes, IRequestContext } from 'dotup-ts-node-skills';
import { WorkflowStepState } from './Enumerations';
import { IWorkflowQuestion } from './Interfaces/IWorkflowQuestion';
import { IWorkflowRequestHandler } from './Interfaces/IWorkflowRequestHandler';
import { WorkflowController } from './WorkflowController';
import { WorkflowHandler } from './WorkflowHandler';

// tslint:disable:no-any
export class WorkflowQuestionHandler<TPayload> extends WorkflowHandler<TPayload> implements IWorkflowRequestHandler<TPayload> {
  readonly question: IWorkflowQuestion<TPayload>;

  constructor(question: IWorkflowQuestion<TPayload>, intentNames: string[]) {
    super();
    this.question = question;

    Object.keys(question.handler)
      .forEach(handler => {
        this.includedHandler.push(handler);
      });
    intentNames.forEach(item => {
      this.includedHandler.push(item.replace('AMAZON.', ''));
    });
  }

  async handleRequest(context: IRequestContext, wc: WorkflowController<TPayload>, intentOrRequestName: string): Promise<void> {

    switch (intentOrRequestName) {

      case AlexaRequestTypes.LaunchRequest:

        await this.StartStep(context, wc);
        break;

      // case this.question.intentName:
      default:
        // const slotinfo: SlotInfo[] = [];
        // const slots = context.request.getSlots();
        // const slotNames = Object.getOwnPropertyNames(slots);

        // slotNames.forEach(slotName => {
        //   slotinfo.push(context.request.getSlot(slotName));
        // });
        // console.log(context.request.getRequest());
        if (this.question.handler[intentOrRequestName] === undefined) {
          wc.getWorkflow().CurrentWorkflowStepState = WorkflowStepState.Error;
        } else {
          const slotReader = context.request.getSlotReader<any>(context);
          wc.getWorkflow().CurrentWorkflowStepState = await this.question.handler[intentOrRequestName](context, wc, slotReader);
        }

    }
  }

  async StartStep(context: IRequestContext, wc: WorkflowController<TPayload>): Promise<void> {
    const q = this.question;
    // const wc = context.request.getWorkflow<TPayload>().controller;

    if (q.ask !== undefined) {
      if (q.ask instanceof Function) {
        const text = q.ask(context, wc);
        context.Ask(text);
      } else {
        context.Ask(q.ask);
      }
    }

    if (q.reprompt !== undefined) {
      if (q.reprompt instanceof Function) {
        const text = q.reprompt(context, wc);
        context.Reprompt(text);
      } else {
        context.Reprompt(q.reprompt);
      }
    }

    // if (q.card) {
    //   b.WithCard(q.card);
    // }

    if (q.display !== undefined) {
      context.SetDisplay(q.display);
    }

    wc.getWorkflow().CurrentWorkflowStepState = WorkflowStepState.Processing;
  }

  AskAgain(context: IRequestContext): void {
    const q = this.question;
    const wc = context.request
      .getRequestAttributes()
      .getworkflowContext<TPayload>()
      .controller;

    if (q.askAgain !== undefined) {
      if (q.askAgain instanceof Function) {
        const text = q.askAgain(context, wc);
        context.Speak(text);
      } else {
        context.Speak(q.askAgain);
      }
    }

    context.shouldEndSession(false);
    wc.getWorkflow().CurrentWorkflowStepState = WorkflowStepState.Processing;
  }

}
