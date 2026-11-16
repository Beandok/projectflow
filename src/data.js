export const STATUSES = ['To Do','In Progress','Blocked','Completed'];
export const PRIORITIES = ['Low','Medium','High','Urgent'];
export const PROJECT_STATUSES = ['On Track','At Risk','Off Track','On Hold'];
export const isoDate = offset => { const d = new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()+offset); return d.toISOString().slice(0,10); };
const person=(id,name,role,email,notes='')=>({id,name,role,email,notes});
const task=(id,projectId,title,status,priority,dueOffset,assignee='',milestoneId='',description='')=>({id,projectId,title,status,priority,dueDate:isoDate(dueOffset),assignee,milestoneId,description,createdAt:new Date().toISOString()});
const milestone=(id,projectId,title,offset,description='')=>({id,projectId,title,dueDate:isoDate(offset),description});
export function makeDemoData(){
const projects=[
{id:'festival',name:'Community Music Festival',code:'CMF',description:'Illustrative event-planning workspace covering promotions, vendors, volunteers, and event-day operations.',status:'On Track',startDate:isoDate(-22),dueDate:isoDate(45),owner:'Alex Rivera',color:'#6959df',archived:false,illustrative:true},
{id:'health',name:'Healthcare Software Implementation',code:'HSI',description:'Fictional implementation of a care coordination platform for an imaginary healthcare organization.',status:'At Risk',startDate:isoDate(-48),dueDate:isoDate(70),owner:'Morgan Lee',color:'#169e8e',archived:false,illustrative:true}
];
const milestones=[milestone('fm1','festival','Marketing launch',9,'Campaign approved and published'),milestone('fm2','festival','Vendor and volunteer readiness',29),milestone('fm3','festival','Festival day',45),milestone('hm1','health','Requirements sign-off',-5),milestone('hm2','health','User acceptance testing',30),milestone('hm3','health','Production go-live',64)];
const stakeholders=[person('fs1','Alex Rivera','Event coordinator','alex@example.org','Primary festival lead'),person('fs2','Taylor Chen','Vendor liaison','taylor@example.org'),person('fs3','Jordan Patel','Volunteer coordinator','jordan@example.org'),person('hs1','Morgan Lee','Implementation lead','morgan@example.org'),person('hs2','Sam Brooks','Clinical operations sponsor','sam@example.org'),person('hs3','Casey Reed','IT systems analyst','casey@example.org')].map((s,i)=>({...s,projectId:i<3?'festival':'health'}));
const tasks=[
task('ft1','festival','Finalize event brand and promotional assets','Completed','High',-4,'Alex Rivera','fm1'),
task('ft2','festival','Schedule social media campaign','In Progress','Medium',5,'Alex Rivera','fm1'),
task('ft3','festival','Confirm food and merchandise vendors','In Progress','High',17,'Taylor Chen','fm2'),
task('ft4','festival','Prepare volunteer shift assignments','To Do','Medium',24,'Jordan Patel','fm2'),
task('ft5','festival','Review crowd management plan','Blocked','Urgent',12,'Alex Rivera','fm3','Waiting on site-capacity confirmation.'),
task('ft6','festival','Confirm stage and audio setup','To Do','High',33,'Taylor Chen','fm3'),
task('ft7','festival','Publish event logistics checklist','To Do','Medium',38,'Jordan Patel','fm3'),
task('ft8','festival','Request city permitting clarification','Completed','High',-7,'Alex Rivera','fm2'),
task('ht1','health','Facilitate stakeholder discovery workshops','Completed','High',-22,'Morgan Lee','hm1'),
task('ht2','health','Approve functional requirements','Blocked','Urgent',-3,'Sam Brooks','hm1','Awaiting clinical leadership approval.'),
task('ht3','health','Configure user access roles','In Progress','High',14,'Casey Reed','hm2'),
task('ht4','health','Map historical patient data fields','In Progress','High',8,'Casey Reed','hm2'),
task('ht5','health','Create user acceptance test scripts','To Do','Medium',20,'Morgan Lee','hm2'),
task('ht6','health','Schedule end-user training sessions','To Do','Medium',37,'Sam Brooks','hm3'),
task('ht7','health','Run go-live readiness assessment','To Do','Urgent',54,'Morgan Lee','hm3'),
task('ht8','health','Prepare operations handoff playbook','To Do','Medium',60,'Morgan Lee','hm3')];
const risks=[
{id:'r1',projectId:'festival',type:'Risk',title:'Severe weather could disrupt outdoor programming',severity:'High',status:'Monitoring',owner:'Alex Rivera',notes:'Identify indoor contingency and decision point 72 hours before the event.'},
{id:'r2',projectId:'festival',type:'Issue',title:'Security staffing plan awaiting approval',severity:'High',status:'Open',owner:'Alex Rivera',notes:'Escalate for staffing confirmation before event-readiness review.'},
{id:'r3',projectId:'health',type:'Issue',title:'Clinical requirements approval delayed',severity:'Critical',status:'Open',owner:'Sam Brooks',notes:'Reconfirm approvers and escalate impact on testing start date.'},
{id:'r4',projectId:'health',type:'Risk',title:'Data mapping errors during migration',severity:'Medium',status:'Monitoring',owner:'Casey Reed',notes:'Run sample migrations and reconciliation checks ahead of UAT.'}];
return {version:1,projects,tasks,milestones,stakeholders,risks};
}
