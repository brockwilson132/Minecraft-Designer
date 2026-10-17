/* Blockwright · Design with Claude. A chat panel in the builder. Claude reads the open design's source and
   meta, edits only that design through page tools (exact find-and-replace edits, or a full rewrite for a new
   design), the page rebuilds it in a worker after every edit and reports back, and the result is saved
   with an undo point. Runs only where the page is hosted inside Claude (`sample` + `db`). */
(function(BK){
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let sample=null,busy=false,ctl=null,turns=[],deep=false,bound=false,pendingEl=null;
const chats=new Map(); // per design: [{role,content}]

/* ---------- what Claude is told ---------- */
const API=`DESIGN FORMAT
A design is the BODY of a JavaScript function build(w). It runs once and places blocks; nothing else.
Coordinates: x = east, z = south, y = up. y 0 is the ground-floor layer; x 0, z 0 is the middle. The views cover x and z from -extent to +extent (meta.extent, max 40). Keep the build inside that.
Helpers on w (destructure them at the top, e.g. const {put,clr,get,each,ins,rim,S}=w;):
  put(x,y,z,id,extra)  place a block. extra: {f:[dx,dz]} = the side a stair's TALL half faces ([1,0] east, [-1,0] west, [0,1] south, [0,-1] north); {up:true} = upside-down stair or top-half slab; {turn:deg} glazed terracotta turn; {hue:'#rrggbb'} colour override (map art only).
  clr(x,y,z) remove   get(x,y,z) read   each((x,z)=>…) every column in the extent
  ins(x,z,R) inside circle R   rim(x,z,R) just outside circle R, touching it   depthMap(R) -> (x,z)=> blocks in from the circle edge (0 at edge, -1 outside)
  bay(x,z,N) -> {u,h,k}: split a ring into N bays; u = signed blocks from the bay centre along the ring, h = half bay width, k = bay index (bay 0 west, N/4 north…)
  pillarAng(N), bayAng(N): angles of bay edges / bay centres. spotsAt(angles,r,test) -> nearest [x,z] cell to each angle at radius r that passes test(x,z)
  S(x,y,z,id,up) stair with tall side toward the centre; SO(...) toward the outside. inward(x,z), outward(x,z) -> [dx,dz]
  RNG(x,y,z) -> 0..1 deterministic random; vn(x,z) smooth noise
  w.comp = 'step-id'  EVERY put() after this belongs to that build step. Every block must belong to a step listed in meta.steps.
  w.role = 'furnish'  marks furniture so the app's "Frame only" filter hides it; set back to null after.
Build steps (meta.steps) are the order a player builds in: [{group, id, name}], e.g. buttresses all the way round before the walls between them, structure before windows, shell before ornament. Keep steps to parts a player would build in one go.
Plain JavaScript only: no imports, no network, no DOM. It must finish in a few seconds.`;
const RULES=`You are the design assistant inside Blockwright, an app for building Minecraft Bedrock structures block by block. You change ONE design: its build-function source and its meta. The user sees the result in top, side, 3D and picture views as soon as you edit.

How to work:
- Make the change with apply_edits: exact find/replace pairs on the source (each find must appear exactly once; include enough surrounding text). Send ALL edits for a request in ONE apply_edits call where you can. Use write_source only for a brand-new design or a rewrite of most of it.
- Every edit is rebuilt immediately and the tool tells you the result: block count, blocks per step, problems. If it reports an error or problem, fix it with another call. Use view_layer / view_section to check shape when it matters (they show the state after your edits).
- Keep the user's existing style and materials unless asked. Prefer intentional, real Minecraft Bedrock blocks from the BLOCKS list only. Respect build steps: put new parts in a fitting existing step or add a new step to meta.steps in build order.
- "Here", "this", "these" mean the cursor position and the current step given in CONTEXT.
- When the user only asks a question, answer it without editing.
- Finish with 1–3 short sentences saying what changed (and where: y levels, step). No code in your reply.`;
function blockList(){const B=BK.BLOCKS;return Object.keys(B).sort().map(id=>id+(B[id].sh?' ('+B[id].sh+')':'')+(B[id].glass?' (see-through)':'')).join(', ');}

/* ---------- the working copy ---------- */
let draft=null,lastGood=null,changed=false,lastErr=null,scene=null;
function metaOf(d){return{name:d.name,blurb:d.blurb||'',tags:d.tags||[],extent:d.extent||24,start:d.start||{x:0,y:1,z:0},ring:d.ring||null,
  steps:(d.steps||[]).map(s=>({group:s.group||s[0],id:s.id||s[1],name:s.name||s[2]})),tiers:(d.tiers||[]).map(t=>({a:t.a,b:t.b,name:t.name,p:t.p}))};}
function asDesign(m,source,base){return Object.assign({},base,m,{steps:m.steps.map(s=>[s.group,s.id,s.name]),source,custom:true,
  build(){throw new Error('worker');},original:undefined});}
function cleanMeta(m,patch){const out=Object.assign({},m);if(!patch||typeof patch!=='object')return out;
  if(patch.name)out.name=String(patch.name).slice(0,80);if(patch.blurb!=null)out.blurb=String(patch.blurb).slice(0,400);
  if(Array.isArray(patch.tags))out.tags=patch.tags.map(String).slice(0,8);
  if(patch.extent)out.extent=Math.max(6,Math.min(40,Math.round(+patch.extent)||24));
  if(patch.start&&typeof patch.start==='object')out.start={x:+patch.start.x|0,y:+patch.start.y|0,z:+patch.start.z|0};
  if(patch.ring!==undefined)out.ring=patch.ring?+patch.ring:null;
  if(Array.isArray(patch.steps))out.steps=patch.steps.map(s=>Array.isArray(s)?{group:String(s[0]),id:String(s[1]),name:String(s[2])}:{group:String(s.group||'Build'),id:String(s.id),name:String(s.name||s.id)}).filter(s=>s.id);
  if(Array.isArray(patch.tiers))out.tiers=patch.tiers.map(t=>({a:+t.a|0,b:+t.b|0,name:String(t.name||''),p:String(t.p||'')}));
  return out;}
async function rebuild(){
  const d=asDesign(draft.meta,draft.source,draft.base);
  try{const blocks=await BK.buildSource(draft.source,d.extent||24,15000);scene=BK.assemble(d,blocks,d.extent||24);lastErr=null;}
  catch(e){scene=null;lastErr=e;return {ok:false,error:e.message,line:e.line||null,near:e.snippet||null,missing:e.missing||null};}
  lastGood={meta:JSON.parse(JSON.stringify(draft.meta)),source:draft.source};
  preview();
  const S=scene,xs=S.ALL.map(v=>v.x),zs=S.ALL.map(v=>v.z);
  const per={};S.steps.forEach(s=>per[s.id]=s.list.length);
  const untagged=S.ALL.filter(v=>v.si<0);const out={ok:true,blocks:S.ALL.length,
    y:[S.MINY,S.MAXY],x:S.ALL.length?[Math.min(...xs),Math.max(...xs)]:[0,0],z:S.ALL.length?[Math.min(...zs),Math.max(...zs)]:[0,0],perStep:per};
  const E=d.extent||24,outside=S.ALL.filter(v=>Math.abs(v.x)>E||Math.abs(v.z)>E).length;
  const problems=[];
  if(untagged.length)problems.push(untagged.length+' blocks belong to no listed step (w.comp missing or not in meta.steps), e.g. '+untagged.slice(0,3).map(v=>`${v.id} at ${v.x},${v.y},${v.z} comp=${v.c||'none'}`).join('; '));
  if(S.emptySteps&&S.emptySteps.length&&!(S.steps[0]&&S.steps[0].band))problems.push('steps with no blocks: '+S.emptySteps.join(', '));
  if(outside)problems.push(outside+' blocks are outside the extent ±'+E+' (raise meta.extent or move them)');
  if(problems.length)out.problems=problems;
  return out;}
function preview(){const d=asDesign(draft.meta,draft.source,draft.base);d.id=draft.id;d.rev=(draft.rev||0);
  BK.upsert(d);if(scene)BK.primeCache&&BK.primeCache(d.id,Object.assign(scene,{design:d}));BK.Builder.reload(true);}

/* ---------- text views of the working copy, so Claude can check its own work ---------- */
function legendFor(vs){const n={};vs.forEach(v=>n[v.id]=(n[v.id]||0)+1);const ids=Object.keys(n).sort((a,b)=>n[b]-n[a]);
  const SYM='#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%&*+=?';const m={};ids.forEach((id,i)=>m[id]=SYM[i]||'~');return m;}
function viewLayer(y){if(!scene)return 'The design does not build right now: '+(lastErr?lastErr.message:'');
  const L=scene.ALL.filter(v=>v.y===y);if(!L.length)return `Layer y=${y} is empty. Blocks span y ${scene.MINY}..${scene.MAXY}.`;
  const xs=L.map(v=>v.x),zs=L.map(v=>v.z),x0=Math.min(...xs)-1,x1=Math.max(...xs)+1,z0=Math.min(...zs)-1,z1=Math.max(...zs)+1,m=legendFor(L);
  let s=`Layer y=${y}. Columns x=${x0}..${x1} (west→east), rows z=${z0}..${z1} (north→south). '.' = air.\n`;
  for(let z=z0;z<=z1;z++){let r='';for(let x=x0;x<=x1;x++){const v=scene.V.get(scene.K(x,y,z));r+=v&&v.y===y?m[v.id]:'.';}s+=String(z).padStart(4)+' '+r+'\n';}
  return s+'Legend: '+Object.entries(m).map(([id,c])=>c+'='+id).join(', ');}
function viewSection(axis,at,y0,y1){if(!scene)return 'The design does not build right now: '+(lastErr?lastErr.message:'');
  const E=scene.extent;y0=Math.max(scene.MINY,y0??scene.MINY);y1=Math.min(scene.MAXY,y1??scene.MAXY);if(y1-y0>90)y1=y0+90;
  const pick=(h,y)=>axis==='z'?scene.V.get(scene.K(at,y,h)):scene.V.get(scene.K(h,y,at));
  const vs=[];for(let h=-E;h<=E;h++)for(let y=y0;y<=y1;y++){const v=pick(h,y);if(v)vs.push(v);}
  if(!vs.length)return 'Nothing in that slice.';const m=legendFor(vs);
  let s=axis==='z'?`Slice at x=${at}, looking east. Columns z=${-E}..${E} (north→south), rows y=${y1}..${y0} (top→bottom).\n`:`Slice at z=${at}, looking north. Columns x=${-E}..${E} (west→east), rows y=${y1}..${y0} (top→bottom).\n`;
  for(let y=y1;y>=y0;y--){let r='';for(let h=-E;h<=E;h++){const v=pick(h,y);r+=v?m[v.id]:'.';}s+=String(y).padStart(4)+' '+r+'\n';}
  return s+'Legend: '+Object.entries(m).map(([id,c])=>c+'='+id).join(', ');}

/* ---------- tools ---------- */
const TOOLS=[
 {name:'apply_edits',description:'Edit the design: exact find/replace pairs on the source, applied together (all or none), optionally with meta changes. The design is rebuilt and the result returned: block count, blocks per step, problems or the error with its line.',
  inputSchema:{type:'object',properties:{edits:{type:'array',items:{type:'object',properties:{find:{type:'string',description:'Exact text that appears exactly once in the current source'},replace:{type:'string'}},required:['find','replace']}},
    meta:{type:'object',description:'Optional changes: name, blurb, tags, extent, start {x,y,z}, ring, steps [{group,id,name}] (the full list, in build order), tiers [{a,b,name,p}]'}},required:['edits']},
  async execute(inp){const edits=Array.isArray(inp.edits)?inp.edits:[];let src=draft.source;
    for(const [i,e] of edits.entries()){const f=String(e.find??''),r=String(e.replace??'');if(!f)throw new Error(`edit ${i+1}: empty find`);
      const at=src.indexOf(f);if(at<0)throw new Error(`edit ${i+1}: find text not in the source (no edits applied). Copy it exactly from the current source.`);
      if(src.indexOf(f,at+1)>=0)throw new Error(`edit ${i+1}: find text appears more than once (no edits applied). Include more surrounding text.`);
      src=src.slice(0,at)+r+src.slice(at+f.length);}
    draft.source=src;draft.meta=cleanMeta(draft.meta,inp.meta);changed=true;note(`Edited ${edits.length} place${edits.length===1?'':'s'}${inp.meta?' and the details':''}…`);
    const res=await rebuild();note(res.ok?`Rebuilt · ${res.blocks.toLocaleString()} blocks${res.problems?' · '+res.problems.length+' to fix':''}`:`Didn't build: ${res.error}`,res.ok&&!res.problems?'ok':'warn');return res;}},
 {name:'write_source',description:'Replace the whole source (for a new design or a near-total rewrite), optionally with meta. Rebuilds and returns the same report as apply_edits.',
  inputSchema:{type:'object',properties:{source:{type:'string',description:'The complete body of build(w)'},meta:{type:'object'}},required:['source']},
  async execute(inp){const s=String(inp.source||'');if(s.length<10)throw new Error('source is empty');
    draft.source=s;draft.meta=cleanMeta(draft.meta,inp.meta);changed=true;note('Wrote the design…');
    const res=await rebuild();note(res.ok?`Built · ${res.blocks.toLocaleString()} blocks${res.problems?' · '+res.problems.length+' to fix':''}`:`Didn't build: ${res.error}`,res.ok&&!res.problems?'ok':'warn');return res;}},
 {name:'view_layer',description:'Top-down text map of one layer of the design as it is now (after your edits): one character per block, with a legend.',
  inputSchema:{type:'object',properties:{y:{type:'integer'}},required:['y']},
  execute(inp){note('Checking layer '+(+inp.y|0)+'…');return viewLayer(+inp.y|0);}},
 {name:'view_section',description:'Vertical text slice of the design as it is now. axis "x" = slice at z=at seen from the south (columns are x); axis "z" = slice at x=at (columns are z). Rows run from y1 down to y0 (at most 90 rows).',
  inputSchema:{type:'object',properties:{axis:{type:'string',enum:['x','z']},at:{type:'integer'},y0:{type:'integer'},y1:{type:'integer'}},required:['axis','at']},
  execute(inp){note('Checking a slice…');return viewSection(inp.axis==='z'?'z':'x',+inp.at|0,inp.y0!=null?+inp.y0|0:undefined,inp.y1!=null?+inp.y1|0:undefined);}}
];

/* ---------- UI ---------- */
const log=()=>$('chatLog');
function bubble(role,text,cls){const el=document.createElement('div');el.className='msg '+role+(cls?' '+cls:'');el.textContent=text;log().appendChild(el);log().scrollTop=log().scrollHeight;return el;}
function note(text,kind){const el=document.createElement('div');el.className='msg tool'+(kind?' '+kind:'');el.textContent=text;if(pendingEl&&pendingEl.isConnected&&pendingEl.classList.contains('pending'))log().insertBefore(el,pendingEl);else log().appendChild(el);log().scrollTop=log().scrollHeight;}
function renderChat(){const L=log();L.innerHTML='';
  if(!turns.length){L.innerHTML=`<div class="chat-empty"><p>Ask for a change and Claude edits this design. Every edit is rebuilt and saved, and you can undo it.</p><div class="chips" id="sugg"></div></div>`;
    const ctx=BK.Builder.context();const step=ctx&&ctx.step?ctx.step.name.toLowerCase():'this part';
    const s=[`Make the ${step} more detailed`,'Add a balcony on this layer','Suggest three improvements','Explain how this step is built'];
    $('sugg').innerHTML=s.map(t=>`<button class="chip" data-s="${esc(t)}">${esc(t)}</button>`).join('');return;}
  for(const t of turns)bubble(t.role==='user'?'me':'claude',t.shown||t.content);}
function contextLine(){const c=BK.Builder.context();if(!c)return'';const v=c.block;
  return `Cursor ${c.x}, ${c.y}, ${c.z}${v?' · '+v:''}${c.step?' · step: '+c.step.name:''}`;}
function status(){const c=BK.Builder.context();if(!c)return;const d=c.design;
  $('stState').textContent=d.custom?(d.base||d.original?'Your edited copy':'Your design'):'Built-in design';
  $('stCtx').textContent=contextLine();$('stUndo').disabled=busy||!(d.custom);$('stRevert').hidden=!(d.custom);
  $('stRevert').textContent=d.original||d.base?'Revert to original':'Delete design';
  $('chatSend').hidden=busy;$('chatStop').hidden=!busy;$('chatIn').disabled=false;}
async function send(text,shown){text=String(text||'').trim();if(!text||busy)return;
  const c=BK.Builder.context();if(!c)return;const d=c.design;
  busy=true;$('chatIn').value='';status();
  turns.push(shown?{role:'user',content:text,shown}:{role:'user',content:text});chats.set(d.id,turns);renderChat();
  const thinking=bubble('claude','Thinking…','pending');pendingEl=thinking;
  draft={id:d.id,base:Object.assign({},d,{original:undefined}),meta:metaOf(d),source:BK.bodyOf(d),rev:d.rev||0};
  const before=BK.Store.toDoc(d);before.rev=d.rev||0;
  const origReg=d;
  changed=false;lastErr=null;lastGood={meta:metaOf(d),source:draft.source};scene=BK.cached(d.id);
  const ctx=`CONTEXT\nDesign id: ${d.id}. ${contextLine()}. Current view: ${c.tab}. ${c.mode==='step'?'The user is working on step "'+(c.step?c.step.name:'')+'" ('+(c.step?c.step.id:'')+')':'The user is looking at the whole build'}.\n\nMETA\n${JSON.stringify(draft.meta)}\n\nSOURCE (body of build(w))\n\`\`\`js\n${draft.source}\n\`\`\``;
  const input=[{role:'user',content:RULES+'\n\n'+API+'\n\nBLOCKS (use these ids exactly)\n'+blockList()},
    ...turns.slice(-13,-1).map(t=>({role:t.role,content:t.content})),{role:'user',content:ctx+'\n\nREQUEST\n'+text}];
  ctl=new AbortController();let reply='',failed=null;
  try{const r=await sample(input,{tools:TOOLS,signal:ctl.signal,modelTier:deep?'complex':'default',
      onText:({text})=>{thinking.textContent=text;thinking.classList.remove('pending');log().appendChild(thinking);log().scrollTop=log().scrollHeight;}});
    reply=r.text;if(r.truncated)reply+='\n(Cut short.)';}
  catch(e){failed=e;reply=e&&e.text||'';}
  // keep the change only if the final state builds
  let saved=false;
  if(changed){
    if(!scene||lastErr){draft.meta=lastGood.meta;draft.source=lastGood.source;}
    const keep=(draft.source!==BK.bodyOf(d)||JSON.stringify(draft.meta)!==JSON.stringify(metaOf(d)));
    if(keep){try{const nd=asDesign(draft.meta,draft.source,draft.base);nd.id=d.id;nd.rev=d.rev||0;nd.base=d.base||(d.custom?null:d.id);
        await BK.Store.save(nd,before);saved=true;}catch(e){note('Could not save: '+(e.message||e.code),'warn');}}
    if(lastErr)note('The last edit did not build, so the last working version was kept.','warn');
  }
  if(changed&&!saved)BK.replace(origReg);
  if(failed&&failed.code!=='cancelled'){const msg={not_granted:'Claude is not allowed for this page. Allow it from the page’s permissions to use this panel.',rate_limited:'Too many requests just now. Try again in a minute.',refused:'Claude declined that request.',prompt_too_large:'This design is too large to send in one go. Ask about one part at a time.',sampling_disabled:'Claude is not available for this account.',tools_unavailable:'This Claude app version cannot edit designs yet. Update the Claude app and try again.',session_expired:'Sign in to Claude again, then retry.'}[failed.code]||'Something went wrong talking to Claude. Try again.';
    if(!reply)thinking.remove();note(msg,'warn');}
  if(failed&&failed.code==='cancelled'&&!reply)thinking.remove();
  if(reply){thinking.textContent=reply;thinking.classList.remove('pending');turns.push({role:'assistant',content:reply});}
  else if(!failed)thinking.remove();
  if(saved)note('Saved. Undo goes back one change.','ok');
  busy=false;ctl=null;BK.Builder.reload(false);status();}

async function undo(){const c=BK.Builder.context();if(!c||busy)return;busy=true;status();
  try{const r=await BK.Store.undo(c.design.id);note(r?'Went back one change.':'Nothing to undo.',r?'ok':'');}catch(e){note('Undo failed: '+e.message,'warn');}
  busy=false;BK.Builder.reload(false);status();}
let armed=0;
async function revert(){const c=BK.Builder.context();if(!c||busy)return;const d=c.design;
  if(Date.now()-armed>4000){armed=Date.now();note(d.original||d.base?'Tap “Revert to original” again to drop every change to this design.':'Tap “Delete design” again to delete it for good.','warn');return;}
  armed=0;busy=true;status();try{await BK.Store.discard(d.id);}catch(e){note(e.message,'warn');}busy=false;
  if(BK.design(d.id)){BK.Builder.reload(false);note('Back to the original.','ok');status();}else location.hash='';}
async function exportFile(){const c=BK.Builder.context();if(!c)return;const txt=BK.Store.fileText(c.design);
  const dl=globalThis.claude&&claude.use?await claude.use('downloads').catch(()=>null):null;
  if(dl){try{await dl.save({filename:c.design.id+'.js',data:txt});note('Saved '+c.design.id+'.js. Put it in the designs folder and add its script line to index.html.','ok');return;}catch(e){}}
  try{await navigator.clipboard.writeText(txt);note('Copied the design file to your clipboard.','ok');}catch(e){note('Could not save or copy the file here.','warn');}}

function bind(){if(bound)return;bound=true;
  $('chatForm').addEventListener('submit',e=>{e.preventDefault();send($('chatIn').value);});
  $('chatIn').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();send($('chatIn').value);}});
  $('chatStop').onclick=()=>ctl&&ctl.abort();
  $('chatLog').addEventListener('click',e=>{const b=e.target.closest('[data-s]');if(b)send(b.dataset.s);});
  $('stUndo').onclick=undo;$('stRevert').onclick=revert;$('stExport').onclick=exportFile;
  $('stDeep').onchange=e=>{deep=e.target.checked;};}
BK.Studio={
  async init(){sample=BK.Store.sample;const on=!!(sample&&BK.Store.canSave);
    document.querySelectorAll('[data-needs-claude]').forEach(el=>el.hidden=!on);if(on){bind();const c=BK.Builder.context();if(c&&c.design){turns=chats.get(c.design.id)||[];chats.set(c.design.id,turns);renderChat();status();}}return on;},
  get available(){return !!(sample&&BK.Store.canSave);},
  onOpen(id){turns=chats.get(id)||[];if(!chats.has(id))chats.set(id,turns);if(this.available){renderChat();status();}},
  refresh(){if(this.available)status();},
  start(id,prompt,shown){this.onOpen(id);if(prompt)setTimeout(()=>send(prompt,shown),50);},
  busy:()=>busy
};
})(globalThis.BK=globalThis.BK||{});
