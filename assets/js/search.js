var typedoc = typedoc || {};
            typedoc.search = typedoc.search || {};
            typedoc.search.data = {"kinds":{"2":"Module","4":"Enumeration","16":"Enumeration member","32":"Variable","128":"Class","256":"Interface","512":"Constructor","1024":"Property","2048":"Method","65536":"Type literal","262144":"Accessor","4194304":"Type alias"},"rows":[{"id":0,"kind":4,"name":"WorkflowState","url":"enums/workflowstate.html","classes":"tsd-kind-enum"},{"id":1,"kind":16,"name":"Unknown","url":"enums/workflowstate.html#unknown","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowState"},{"id":2,"kind":16,"name":"Active","url":"enums/workflowstate.html#active","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowState"},{"id":3,"kind":16,"name":"Done","url":"enums/workflowstate.html#done","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowState"},{"id":4,"kind":4,"name":"WorkflowStepState","url":"enums/workflowstepstate.html","classes":"tsd-kind-enum"},{"id":5,"kind":16,"name":"Processing","url":"enums/workflowstepstate.html#processing","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowStepState"},{"id":6,"kind":16,"name":"Processed","url":"enums/workflowstepstate.html#processed","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowStepState"},{"id":7,"kind":16,"name":"GetFromPrevious","url":"enums/workflowstepstate.html#getfromprevious","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowStepState"},{"id":8,"kind":16,"name":"GetFromCurrent","url":"enums/workflowstepstate.html#getfromcurrent","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowStepState"},{"id":9,"kind":16,"name":"GetFromNext","url":"enums/workflowstepstate.html#getfromnext","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowStepState"},{"id":10,"kind":16,"name":"Error","url":"enums/workflowstepstate.html#error","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"WorkflowStepState"},{"id":11,"kind":128,"name":"WorkflowStepModel","url":"classes/workflowstepmodel.html","classes":"tsd-kind-class"},{"id":12,"kind":1024,"name":"Payload","url":"classes/workflowstepmodel.html#payload","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowStepModel"},{"id":13,"kind":1024,"name":"name","url":"classes/workflowstepmodel.html#name","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowStepModel"},{"id":14,"kind":1024,"name":"State","url":"classes/workflowstepmodel.html#state","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowStepModel"},{"id":15,"kind":512,"name":"constructor","url":"classes/workflowstepmodel.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"WorkflowStepModel"},{"id":16,"kind":128,"name":"WorkflowModel","url":"classes/workflowmodel.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":17,"kind":1024,"name":"Name","url":"classes/workflowmodel.html#name","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowModel"},{"id":18,"kind":1024,"name":"WorkflowSteps","url":"classes/workflowmodel.html#workflowsteps","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowModel"},{"id":19,"kind":1024,"name":"Payload","url":"classes/workflowmodel.html#payload","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowModel"},{"id":20,"kind":1024,"name":"CurrentWorkflowItemIndex","url":"classes/workflowmodel.html#currentworkflowitemindex","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowModel"},{"id":21,"kind":1024,"name":"CurrentHandlerId","url":"classes/workflowmodel.html#currenthandlerid","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowModel"},{"id":22,"kind":1024,"name":"CurrentWorkflowStepState","url":"classes/workflowmodel.html#currentworkflowstepstate","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowModel"},{"id":23,"kind":512,"name":"constructor","url":"classes/workflowmodel.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"WorkflowModel"},{"id":24,"kind":128,"name":"WorkflowController","url":"classes/workflowcontroller.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":25,"kind":1024,"name":"workflow","url":"classes/workflowcontroller.html#workflow","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"WorkflowController"},{"id":26,"kind":512,"name":"constructor","url":"classes/workflowcontroller.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"WorkflowController"},{"id":27,"kind":2048,"name":"getWorkflow","url":"classes/workflowcontroller.html#getworkflow","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":28,"kind":262144,"name":"payload","url":"classes/workflowcontroller.html#payload","classes":"tsd-kind-accessor tsd-parent-kind-class","parent":"WorkflowController"},{"id":29,"kind":2048,"name":"getCurrentStepName","url":"classes/workflowcontroller.html#getcurrentstepname","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":30,"kind":2048,"name":"addStep","url":"classes/workflowcontroller.html#addstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":31,"kind":2048,"name":"add","url":"classes/workflowcontroller.html#add","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":32,"kind":2048,"name":"getCurrentStep","url":"classes/workflowcontroller.html#getcurrentstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":33,"kind":2048,"name":"getCurrentPayload","url":"classes/workflowcontroller.html#getcurrentpayload","classes":"tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter","parent":"WorkflowController"},{"id":34,"kind":2048,"name":"setCurrentPayload","url":"classes/workflowcontroller.html#setcurrentpayload","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":35,"kind":2048,"name":"getNextStepWithState","url":"classes/workflowcontroller.html#getnextstepwithstate","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":36,"kind":2048,"name":"peekNextStep","url":"classes/workflowcontroller.html#peeknextstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":37,"kind":2048,"name":"getNextStep","url":"classes/workflowcontroller.html#getnextstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":38,"kind":2048,"name":"peekPreviousStep","url":"classes/workflowcontroller.html#peekpreviousstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":39,"kind":2048,"name":"getPreviousStep","url":"classes/workflowcontroller.html#getpreviousstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":40,"kind":2048,"name":"skipToStep","url":"classes/workflowcontroller.html#skiptostep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":41,"kind":2048,"name":"getNextWithState","url":"classes/workflowcontroller.html#getnextwithstate","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":42,"kind":2048,"name":"getWorkflowState","url":"classes/workflowcontroller.html#getworkflowstate","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowController"},{"id":43,"kind":256,"name":"IWorkflowHandler","url":"interfaces/iworkflowhandler.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":44,"kind":1024,"name":"WorkflowName","url":"interfaces/iworkflowhandler.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowHandler"},{"id":45,"kind":1024,"name":"includedHandler","url":"interfaces/iworkflowhandler.html#includedhandler","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowHandler"},{"id":46,"kind":1024,"name":"excludedHandler","url":"interfaces/iworkflowhandler.html#excludedhandler","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowHandler"},{"id":47,"kind":2048,"name":"canHandle","url":"interfaces/iworkflowhandler.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"IWorkflowHandler"},{"id":48,"kind":256,"name":"IWorkflowRequestHandler","url":"interfaces/iworkflowrequesthandler.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":49,"kind":2048,"name":"handleRequest","url":"interfaces/iworkflowrequesthandler.html#handlerequest","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"IWorkflowRequestHandler"},{"id":50,"kind":1024,"name":"WorkflowName","url":"interfaces/iworkflowrequesthandler.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowRequestHandler"},{"id":51,"kind":1024,"name":"includedHandler","url":"interfaces/iworkflowrequesthandler.html#includedhandler","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowRequestHandler"},{"id":52,"kind":1024,"name":"excludedHandler","url":"interfaces/iworkflowrequesthandler.html#excludedhandler","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowRequestHandler"},{"id":53,"kind":2048,"name":"canHandle","url":"interfaces/iworkflowrequesthandler.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowRequestHandler"},{"id":54,"kind":256,"name":"IWorkflowStepHandler","url":"interfaces/iworkflowstephandler.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":55,"kind":2048,"name":"StartStep","url":"interfaces/iworkflowstephandler.html#startstep","classes":"tsd-kind-method tsd-parent-kind-interface","parent":"IWorkflowStepHandler"},{"id":56,"kind":1024,"name":"WorkflowName","url":"interfaces/iworkflowstephandler.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowStepHandler"},{"id":57,"kind":1024,"name":"includedHandler","url":"interfaces/iworkflowstephandler.html#includedhandler","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowStepHandler"},{"id":58,"kind":1024,"name":"excludedHandler","url":"interfaces/iworkflowstephandler.html#excludedhandler","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowStepHandler"},{"id":59,"kind":2048,"name":"canHandle","url":"interfaces/iworkflowstephandler.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-interface tsd-is-inherited","parent":"IWorkflowStepHandler"},{"id":60,"kind":128,"name":"WorkflowHandler","url":"classes/workflowhandler.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":61,"kind":1024,"name":"WorkflowName","url":"classes/workflowhandler.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowHandler"},{"id":62,"kind":1024,"name":"includedHandler","url":"classes/workflowhandler.html#includedhandler","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowHandler"},{"id":63,"kind":1024,"name":"excludedHandler","url":"classes/workflowhandler.html#excludedhandler","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowHandler"},{"id":64,"kind":512,"name":"constructor","url":"classes/workflowhandler.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"WorkflowHandler"},{"id":65,"kind":2048,"name":"canHandle","url":"classes/workflowhandler.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowHandler"},{"id":66,"kind":256,"name":"IWorkflowTemplateConfiguration","url":"interfaces/iworkflowtemplateconfiguration.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":67,"kind":1024,"name":"WorkflowName","url":"interfaces/iworkflowtemplateconfiguration.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowTemplateConfiguration"},{"id":68,"kind":1024,"name":"Handler","url":"interfaces/iworkflowtemplateconfiguration.html#handler","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowTemplateConfiguration"},{"id":69,"kind":256,"name":"IDictionary","url":"interfaces/idictionary.html","classes":"tsd-kind-interface tsd-has-type-parameter tsd-is-not-exported"},{"id":70,"kind":128,"name":"WorkflowManager","url":"classes/workflowmanager.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":71,"kind":1024,"name":"Name","url":"classes/workflowmanager.html#name","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowManager"},{"id":72,"kind":1024,"name":"WorkflowTemplate","url":"classes/workflowmanager.html#workflowtemplate","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowManager"},{"id":73,"kind":1024,"name":"handlers","url":"classes/workflowmanager.html#handlers","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"WorkflowManager"},{"id":74,"kind":1024,"name":"FallbackHandler","url":"classes/workflowmanager.html#fallbackhandler","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowManager"},{"id":75,"kind":1024,"name":"CompletedHandler","url":"classes/workflowmanager.html#completedhandler","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"WorkflowManager"},{"id":76,"kind":512,"name":"constructor","url":"classes/workflowmanager.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"WorkflowManager"},{"id":77,"kind":2048,"name":"AddHandler","url":"classes/workflowmanager.html#addhandler","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowManager"},{"id":78,"kind":2048,"name":"addHandlerInternal","url":"classes/workflowmanager.html#addhandlerinternal","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"WorkflowManager"},{"id":79,"kind":2048,"name":"CreateWorkflow","url":"classes/workflowmanager.html#createworkflow","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowManager"},{"id":80,"kind":2048,"name":"GetCurrentStepHandler","url":"classes/workflowmanager.html#getcurrentstephandler","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowManager"},{"id":81,"kind":2048,"name":"GetHandler","url":"classes/workflowmanager.html#gethandler","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowManager"},{"id":82,"kind":2048,"name":"HasHandler","url":"classes/workflowmanager.html#hashandler","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowManager"},{"id":83,"kind":2048,"name":"start","url":"classes/workflowmanager.html#start","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowManager"},{"id":84,"kind":256,"name":"IWorkflowContext","url":"interfaces/iworkflowcontext.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":85,"kind":1024,"name":"manager","url":"interfaces/iworkflowcontext.html#manager","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowContext"},{"id":86,"kind":1024,"name":"controller","url":"interfaces/iworkflowcontext.html#controller","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowContext"},{"id":87,"kind":1024,"name":"WorkflowStepState","url":"interfaces/iworkflowcontext.html#workflowstepstate","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowContext"},{"id":88,"kind":4194304,"name":"WorkflowQuestionIntent","url":"globals.html#workflowquestionintent","classes":"tsd-kind-type-alias tsd-has-type-parameter"},{"id":89,"kind":65536,"name":"__type","url":"globals.html#workflowquestionintent.__type","classes":"tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported","parent":"WorkflowQuestionIntent"},{"id":90,"kind":256,"name":"IWorkflowQuestionHandler","url":"interfaces/iworkflowquestionhandler.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":91,"kind":256,"name":"IWorkflowQuestion","url":"interfaces/iworkflowquestion.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":92,"kind":1024,"name":"workflowName","url":"interfaces/iworkflowquestion.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":93,"kind":1024,"name":"ask","url":"interfaces/iworkflowquestion.html#ask","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":94,"kind":1024,"name":"reprompt","url":"interfaces/iworkflowquestion.html#reprompt","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":95,"kind":1024,"name":"askAgain","url":"interfaces/iworkflowquestion.html#askagain","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":96,"kind":1024,"name":"display","url":"interfaces/iworkflowquestion.html#display","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":97,"kind":1024,"name":"card","url":"interfaces/iworkflowquestion.html#card","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":98,"kind":1024,"name":"handler","url":"interfaces/iworkflowquestion.html#handler","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IWorkflowQuestion"},{"id":99,"kind":2,"name":"\"dotup-ts-node-skills/dist/Interfaces/ISessionAttributes\"","url":"modules/_dotup_ts_node_skills_dist_interfaces_isessionattributes_.html","classes":"tsd-kind-module tsd-is-not-exported"},{"id":100,"kind":256,"name":"ISessionAttributes","url":"interfaces/_dotup_ts_node_skills_dist_interfaces_isessionattributes_.isessionattributes.html","classes":"tsd-kind-interface tsd-parent-kind-module","parent":"\"dotup-ts-node-skills/dist/Interfaces/ISessionAttributes\""},{"id":101,"kind":2048,"name":"getWorkflow","url":"interfaces/_dotup_ts_node_skills_dist_interfaces_isessionattributes_.isessionattributes.html#getworkflow","classes":"tsd-kind-method tsd-parent-kind-interface tsd-has-type-parameter","parent":"\"dotup-ts-node-skills/dist/Interfaces/ISessionAttributes\".ISessionAttributes"},{"id":102,"kind":2,"name":"\"dotup-ts-node-skills/dist/Interfaces/IRequestAttributes\"","url":"modules/_dotup_ts_node_skills_dist_interfaces_irequestattributes_.html","classes":"tsd-kind-module tsd-is-not-exported"},{"id":103,"kind":256,"name":"IRequestAttributes","url":"interfaces/_dotup_ts_node_skills_dist_interfaces_irequestattributes_.irequestattributes.html","classes":"tsd-kind-interface tsd-parent-kind-module","parent":"\"dotup-ts-node-skills/dist/Interfaces/IRequestAttributes\""},{"id":104,"kind":2048,"name":"getworkflowContext","url":"interfaces/_dotup_ts_node_skills_dist_interfaces_irequestattributes_.irequestattributes.html#getworkflowcontext","classes":"tsd-kind-method tsd-parent-kind-interface tsd-has-type-parameter","parent":"\"dotup-ts-node-skills/dist/Interfaces/IRequestAttributes\".IRequestAttributes"},{"id":105,"kind":256,"name":"ISkillWorkflowsPluginConfiguration","url":"interfaces/iskillworkflowspluginconfiguration.html","classes":"tsd-kind-interface tsd-has-type-parameter"},{"id":106,"kind":1024,"name":"workflowManager","url":"interfaces/iskillworkflowspluginconfiguration.html#workflowmanager","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ISkillWorkflowsPluginConfiguration"},{"id":107,"kind":128,"name":"WorkflowRequestInterceptor","url":"classes/workflowrequestinterceptor.html","classes":"tsd-kind-class"},{"id":108,"kind":1024,"name":"logger","url":"classes/workflowrequestinterceptor.html#logger","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"WorkflowRequestInterceptor"},{"id":109,"kind":1024,"name":"workflowManager","url":"classes/workflowrequestinterceptor.html#workflowmanager","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"WorkflowRequestInterceptor"},{"id":110,"kind":512,"name":"constructor","url":"classes/workflowrequestinterceptor.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"WorkflowRequestInterceptor"},{"id":111,"kind":2048,"name":"process","url":"classes/workflowrequestinterceptor.html#process","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowRequestInterceptor"},{"id":112,"kind":128,"name":"SkillWorkflowsPlugin","url":"classes/skillworkflowsplugin.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":113,"kind":1024,"name":"config","url":"classes/skillworkflowsplugin.html#config","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-private","parent":"SkillWorkflowsPlugin"},{"id":114,"kind":512,"name":"constructor","url":"classes/skillworkflowsplugin.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"SkillWorkflowsPlugin"},{"id":115,"kind":2048,"name":"initialize","url":"classes/skillworkflowsplugin.html#initialize","classes":"tsd-kind-method tsd-parent-kind-class","parent":"SkillWorkflowsPlugin"},{"id":116,"kind":128,"name":"Sample","url":"classes/sample.html","classes":"tsd-kind-class"},{"id":117,"kind":2048,"name":"run","url":"classes/sample.html#run","classes":"tsd-kind-method tsd-parent-kind-class","parent":"Sample"},{"id":118,"kind":32,"name":"sample","url":"globals.html#sample","classes":"tsd-kind-variable tsd-is-not-exported"},{"id":119,"kind":128,"name":"WorkflowQuestionHandler","url":"classes/workflowquestionhandler.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":120,"kind":1024,"name":"question","url":"classes/workflowquestionhandler.html#question","classes":"tsd-kind-property tsd-parent-kind-class","parent":"WorkflowQuestionHandler"},{"id":121,"kind":512,"name":"constructor","url":"classes/workflowquestionhandler.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"WorkflowQuestionHandler"},{"id":122,"kind":2048,"name":"handleRequest","url":"classes/workflowquestionhandler.html#handlerequest","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowQuestionHandler"},{"id":123,"kind":2048,"name":"StartStep","url":"classes/workflowquestionhandler.html#startstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowQuestionHandler"},{"id":124,"kind":2048,"name":"AskAgain","url":"classes/workflowquestionhandler.html#askagain","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowQuestionHandler"},{"id":125,"kind":1024,"name":"WorkflowName","url":"classes/workflowquestionhandler.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowQuestionHandler"},{"id":126,"kind":1024,"name":"includedHandler","url":"classes/workflowquestionhandler.html#includedhandler","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowQuestionHandler"},{"id":127,"kind":1024,"name":"excludedHandler","url":"classes/workflowquestionhandler.html#excludedhandler","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowQuestionHandler"},{"id":128,"kind":2048,"name":"canHandle","url":"classes/workflowquestionhandler.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowQuestionHandler"},{"id":129,"kind":128,"name":"WorkflowRequestAdapter","url":"classes/workflowrequestadapter.html","classes":"tsd-kind-class"},{"id":130,"kind":512,"name":"constructor","url":"classes/workflowrequestadapter.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"WorkflowRequestAdapter"},{"id":131,"kind":2048,"name":"isWorkflowRequestHandler","url":"classes/workflowrequestadapter.html#isworkflowrequesthandler","classes":"tsd-kind-method tsd-parent-kind-class tsd-has-type-parameter","parent":"WorkflowRequestAdapter"},{"id":132,"kind":2048,"name":"canHandle","url":"classes/workflowrequestadapter.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite","parent":"WorkflowRequestAdapter"},{"id":133,"kind":2048,"name":"handleRequest","url":"classes/workflowrequestadapter.html#handlerequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite","parent":"WorkflowRequestAdapter"},{"id":134,"kind":2048,"name":"executeHandler","url":"classes/workflowrequestadapter.html#executehandler","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"WorkflowRequestAdapter"},{"id":135,"kind":1024,"name":"requestOrIntentNames","url":"classes/workflowrequestadapter.html#requestorintentnames","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"WorkflowRequestAdapter"},{"id":136,"kind":1024,"name":"Name","url":"classes/workflowrequestadapter.html#name","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowRequestAdapter"},{"id":137,"kind":2048,"name":"canHandleName","url":"classes/workflowrequestadapter.html#canhandlename","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"WorkflowRequestAdapter"},{"id":138,"kind":2048,"name":"handle","url":"classes/workflowrequestadapter.html#handle","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowRequestAdapter"},{"id":139,"kind":4194304,"name":"IndexedMethods","url":"globals.html#indexedmethods","classes":"tsd-kind-type-alias tsd-is-not-exported"},{"id":140,"kind":65536,"name":"__type","url":"globals.html#indexedmethods.__type","classes":"tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported","parent":"IndexedMethods"},{"id":141,"kind":128,"name":"WorkflowStepHandler","url":"classes/workflowstephandler.html","classes":"tsd-kind-class tsd-has-type-parameter"},{"id":142,"kind":512,"name":"constructor","url":"classes/workflowstephandler.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"WorkflowStepHandler"},{"id":143,"kind":2048,"name":"StartStep","url":"classes/workflowstephandler.html#startstep","classes":"tsd-kind-method tsd-parent-kind-class","parent":"WorkflowStepHandler"},{"id":144,"kind":1024,"name":"WorkflowName","url":"classes/workflowstephandler.html#workflowname","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowStepHandler"},{"id":145,"kind":1024,"name":"includedHandler","url":"classes/workflowstephandler.html#includedhandler","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowStepHandler"},{"id":146,"kind":1024,"name":"excludedHandler","url":"classes/workflowstephandler.html#excludedhandler","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowStepHandler"},{"id":147,"kind":2048,"name":"canHandle","url":"classes/workflowstephandler.html#canhandle","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"WorkflowStepHandler"}]};