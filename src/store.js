import {makeDemoData,STATUSES} from './data.js';
export const STORAGE_KEY='projectflow:v1';
export const deepCopy=obj=>JSON.parse(JSON.stringify(obj));
export function validateData(db){
  if(!db||typeof db!=='object'||!['projects','tasks','milestones','stakeholders','risks'].every(k=>Array.isArray(db[k])))throw new Error('Invalid ProjectFlow data file.');
  const ids=new Set(db.projects.map(p=>p.id));
  if(db.projects.some(p=>!p.id||!p.name)||db.tasks.some(t=>!t.id||!ids.has(t.projectId)||!STATUSES.includes(t.status)))throw new Error('Data includes invalid projects or tasks.');
  for(const key of ['milestones','stakeholders','risks']) if(db[key].some(x=>!x.id||!ids.has(x.projectId)))throw new Error(`Invalid ${key} data.`);
  return db;
}
export function createStore(storage=globalThis.localStorage){
 let db;
 try { const raw=storage.getItem(STORAGE_KEY); db=raw?validateData(JSON.parse(raw)):makeDemoData(); } catch(e) {console.warn('Could not load saved data:',e);db=makeDemoData();}
 let saveError='';
 function save(){try{storage.setItem(STORAGE_KEY,JSON.stringify(db));saveError='';return true;}catch(e){saveError='Saving failed. Storage may be full or disabled; export a backup.';return false;}}
 if(!storage.getItem(STORAGE_KEY))save();
 return {
  get:()=>deepCopy(db),
  error:()=>saveError,
  update(mutator){const next=deepCopy(db);mutator(next);validateData(next);db=next;save();return deepCopy(db);},
  import(next){validateData(next);db=deepCopy(next);save();return deepCopy(db);},
  reset(){db=makeDemoData();save();return deepCopy(db);}
 };
}
export const uid=(prefix='id')=>`${prefix}-${globalThis.crypto?.randomUUID?.()||Math.random().toString(36).slice(2)}`;
export const projectProgress=(tasks,projectId)=>{const rows=tasks.filter(t=>t.projectId===projectId);return rows.length?Math.round(rows.filter(t=>t.status==='Completed').length/rows.length*100):0;};
export const overdue=task=>task.status!=='Completed'&&!!task.dueDate&&task.dueDate<new Date().toISOString().slice(0,10);
export const upcoming=task=>task.status!=='Completed'&&!!task.dueDate&&task.dueDate>=new Date().toISOString().slice(0,10)&&task.dueDate<=new Date(Date.now()+7*86400000).toISOString().slice(0,10);