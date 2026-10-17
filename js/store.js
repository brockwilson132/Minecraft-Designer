/* Blockwright · designs saved in the app. Only works where the page runs inside Claude (the artifact),
   which provides a shared document store (`db`) and Claude itself (`sample`). Elsewhere (GitHub Pages,
   a local file) every method resolves to "unavailable" and the app shows only the built-in designs.
   Layout:  designs/<id>             one document per design made or edited in the app
            designs/<id>/versions/<t> earlier states, for undo (the newest 25 are kept) */
(function(BK){
const listeners=new Set();
let db=null,sample=null,started=false,ready;
const emit=()=>listeners.forEach(f=>{try{f();}catch(e){console.error(e);}});
const toDesign=b=>({
  id:b.id,name:b.name||'Untitled design',blurb:b.blurb||'',tags:b.tags||[],edition:b.edition||'Bedrock',
  extent:b.extent||24,start:b.start||{x:0,y:1,z:0},ring:b.ring||null,figure:b.figure||null,
  steps:(b.steps||[]).map(s=>[s.group,s.id,s.name]),
  tiers:b.tiers||[],notes:(b.notes||[]).map(n=>[n.t,n.p]),
  source:b.source||'',base:b.base||null,rev:b.rev||0,updatedAt:b.updatedAt||'',custom:true,
  build(){throw new Error('built in a worker');}
});
const toDoc=d=>({
  id:d.id,name:d.name,blurb:d.blurb||'',tags:d.tags||[],edition:d.edition||'Bedrock',extent:d.extent||24,
  start:d.start||{x:0,y:1,z:0},ring:d.ring||null,figure:d.figure||null,
  steps:(d.steps||[]).map(s=>({group:s.group||s[0],id:s.id||s[1],name:s.name||s[2]})),
  tiers:(d.tiers||[]).map(t=>({a:t.a,b:t.b,name:t.name,p:t.p})),notes:(d.notes||[]).map(n=>({t:n[0]??n.t,p:n[1]??n.p})),
  source:d.source??BK.bodyOf(d),base:d.base||(d.custom?null:d.id)||null,
  rev:(d.rev||0)+1,updatedAt:new Date().toISOString()
});
async function start(){
  if(started)return ready;started=true;
  ready=(async()=>{
    if(!globalThis.claude||typeof claude.use!=='function')return false;
    const [d,s]=await Promise.all([claude.use('db').catch(()=>null),claude.use('sample').catch(()=>null)]);
    db=d;sample=s;
    if(db){await new Promise(res=>{let first=true;
      db.collection('designs').onSnapshot(snap=>{
        for(const ch of snap.docChanges()){const b=ch.doc.data();
          if(ch.type==='removed')BK.remove(ch.doc.id);else if(b&&b.source!=null)BK.upsert(toDesign(b));}
        emit();if(first){first=false;res();}
      },()=>{if(first){first=false;res();}});
      setTimeout(()=>{if(first){first=false;res();}},6000);});}
    emit();return !!db;
  })();
  return ready;
}
BK.Store={
  start,
  onChange(f){listeners.add(f);return()=>listeners.delete(f);},
  get canSave(){return !!db;},
  get sample(){return sample;},
  toDoc,toDesign,
  slug(name){return (String(name).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)||'design')+'-'+Math.random().toString(36).slice(2,6);},
  /* save a design; `prev` (the doc before this change) is kept as an undo point */
  async save(d,prev){if(!db)throw new Error('Saving needs the Claude-hosted version of the app.');
    const doc=toDoc(d);
    if(prev){const vs=db.collection('designs/'+d.id+'/versions');await vs.doc(String(Date.now())).set(prev);
      const all=await vs.get().catch(()=>null);
      if(all&&all.size>25){const ids=all.docs.map(x=>x.id).sort();for(const id of ids.slice(0,all.size-25))await vs.doc(id).delete().catch(()=>{});}}
    await db.doc('designs/'+d.id).set(doc);
    const reg=BK.upsert(toDesign(doc));emit();return reg;},
  async versions(id){if(!db)return [];const s=await db.collection('designs/'+id+'/versions').get();return s.docs.map(x=>x.id).sort();},
  /* step back to the newest undo point; resolves the restored design, or null when there is none */
  async undo(id){if(!db)return null;const ids=await this.versions(id);if(!ids.length)return null;
    const last=ids[ids.length-1],ref=db.doc('designs/'+id+'/versions/'+last),snap=await ref.get();if(!snap.exists)return null;
    const b=Object.assign({},snap.data());await db.doc('designs/'+id).set(b);await ref.delete();
    const reg=BK.upsert(toDesign(b));emit();return reg;},
  /* delete an app-made design, or turn an edited built-in back into the original */
  async discard(id){if(!db)return;await db.doc('designs/'+id).delete();
    const ids=await this.versions(id).catch(()=>[]);for(const v of ids)await db.doc('designs/'+id+'/versions/'+v).delete().catch(()=>{});
    BK.remove(id);emit();},
  /* the design as a file for designs/<id>.js in the repository */
  fileText(d){const q=JSON.stringify,ind=s=>s.split('\n').map(l=>l?'    '+l:l).join('\n');
    const steps=(d.steps||[]).map(s=>'    '+q([s.group||s[0],s.id||s[1],s.name||s[2]])).join(',\n');
    return `/* ${d.name}${d.blurb?' — '+d.blurb:''} */\nBK.register({\n  id:${q(d.id)},\n  version:${(d.rev||0)+1},\n  name:${q(d.name)},\n  blurb:${q(d.blurb||'')},\n  tags:${q(d.tags||[])},\n  edition:${q(d.edition||'Bedrock')},\n  extent:${d.extent||24},\n  start:${q(d.start||{x:0,y:1,z:0})},\n${d.ring?`  ring:${d.ring},\n`:''}${d.figure?`  figure:${q(d.figure)},\n`:''}  steps:[\n${steps}\n  ],\n  tiers:${q(d.tiers||[])},\n  notes:${q((d.notes||[]).map(n=>[n[0]??n.t,n[1]??n.p]))},\n  build(w){\n${ind(BK.bodyOf(d))}\n  }\n});\n`;}
};
})(globalThis.BK=globalThis.BK||{});
