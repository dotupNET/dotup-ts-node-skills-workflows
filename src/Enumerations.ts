export enum WorkflowState {
  Unknown = 'Unknown',
  Active = 'Active',
  Done = 'Done'
}

export enum WorkflowStepState {
  Processing,
  Processed,
  GetFromPrevious,
  GetFromCurrent,
  GetFromNext,
  Error
}
