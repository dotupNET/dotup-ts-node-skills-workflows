// tslint:disable: newline-per-chained-call
// tslint:disable-next-line: no-implicit-dependencies
import { expect } from 'chai';
import { IRequestContext } from 'dotup-ts-node-skills';
import { IWorkflowRequestHandler } from '../src/Interfaces/IWorkflowRequestHandler';
import { WorkflowController } from '../src/WorkflowController';
import { WorkflowManager } from '../src/WorkflowManager';

class WorkflowRequestHandlerMock implements IWorkflowRequestHandler<string> {
  WorkflowName: string;
  includedHandler: string[] = [];
  excludedHandler: string[] = [];
  canHandle(intentOrRequestName: string, wc: WorkflowController<string>): boolean {
    throw new Error('Method not implemented.');
  }
  async handleRequest(context: IRequestContext, workflow: WorkflowController<string>, intentOrRequestName: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
describe('WorkflowManager', () => {

  it('should create an instance', () => {
    const h1 = new WorkflowRequestHandlerMock();
    const value = new WorkflowManager(h1, h1);
    expect(value).instanceOf(WorkflowManager);
  });

});
