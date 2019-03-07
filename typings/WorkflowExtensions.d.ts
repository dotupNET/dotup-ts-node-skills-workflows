import { IWorkflowContext } from '../src/Interfaces/IWorkflowContext';
import { WorkflowModel } from '../src/WorkflowModel';

declare module 'dotup-ts-node-skills/dist/Interfaces/ISessionAttributes' {
  interface ISessionAttributes {
    getWorkflow<T>(): WorkflowModel<T>;
  }
}
declare module 'dotup-ts-node-skills/dist/Interfaces/IRequestAttributes' {
  interface IRequestAttributes {
    getworkflowContext<T>(): IWorkflowContext<T>;
  }
}
