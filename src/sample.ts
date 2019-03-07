import { WorkflowManager } from './WorkflowManager';

export class Sample {

  run(): void {
    const awesome = new WorkflowManager();
    console.log(awesome);
    console.log('Sample done');
  }
}

const sample = new Sample();
sample.run();

// class QuestionSampleUsage {
//   test() {

//     const question: IWorkflowQuestion = {
//       workflowName: 'GetPlayerAge',
//       speak: 'Wie alt bist du?',
//       reprompt: 'Wie alt bist du?',
//       askAgain: 'Wie alt bist du?',
//       display: {
//         textContent: {
//           primaryText: { type: 'PlainText', text: 'Hey' },
//           secondaryText: { type: 'PlainText', text: 'Hey' }
//         },
//         type: 'BodyTemplate3'
//       },
//       intentName: 'GetNumberIntent',
//       // tslint:disable-next-line:arrow-return-shorthand
//       onResult: (c, s) => {
//         return WorkflowStepState.GetFromNext;
//       }
//     };

//     const workflowHandler = new WorkflowQuestionHandler(question, ['LaunchRequest']);

//   }
// }