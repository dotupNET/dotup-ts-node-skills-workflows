import { IRequestContext, SlotReader } from 'dotup-ts-node-skills';
import { WorkflowStepState } from './Enumerations';
import { WorkflowController } from './WorkflowController';

// tslint:disable-next-line: max-line-length
export declare type WorkflowQuestionIntent<TPayload> = (context: IRequestContext, wc: WorkflowController<TPayload>, slotReader: SlotReader) => WorkflowStepState | Promise<WorkflowStepState>;
