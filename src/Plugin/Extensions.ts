// tslint:disable: no-submodule-imports
import { IRequestAttributes } from 'dotup-ts-node-skills/dist/Interfaces/IRequestAttributes';
import { ISessionAttributes } from 'dotup-ts-node-skills/dist/Interfaces/ISessionAttributes';
import { NodeSkill } from 'dotup-ts-node-skills/dist/NodeSkill';
import { IWorkflowContext } from '../Interfaces/IWorkflowContext';
import { WorkflowModel } from '../WorkflowModel';

declare module 'dotup-ts-node-skills/dist/Interfaces/ISessionAttributes' {
  export interface ISessionAttributes {
    // tslint:disable-next-line: no-any
    workflow: WorkflowModel<any>;
  }
}

declare module 'dotup-ts-node-skills/dist/Interfaces/IRequestAttributes' {
  export interface IRequestAttributes {
    getWorkflow<T>(): WorkflowModel<T>;
    getWorkflowContext<T>(): IWorkflowContext<T>;
  }
}

/*
RequestReader
  getWorkflow<T>(): IWorkflowContext<T> {
    const r = this.getRequestAttributes();

    return r.workflow;
  }
   */

/*
RequestContext
set WorkflowStepState(value: WorkflowStepState) {
    this.request.getWorkflow().WorkflowStepState = value;
  }

  get WorkflowStepState(): WorkflowStepState {
    return this.request.getWorkflow().WorkflowStepState;
  }

    WorkflowStepState: WorkflowStepState;

*/
// declare module 'dotup-ts-node-skills/dist/NodeSkill' {
//   export interface NodeSkill {
//     addPersistenceAdapter(adapter: PersistenceAdapter): void;
//   }
// }
