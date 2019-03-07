import { WorkflowManager } from '../src/WorkflowManager';

describe('WorkflowManager', () => {

  it('should create an instance', () => {
    const value = new WorkflowManager();
    expect(value)
      .toBeTruthy();
  });

});
