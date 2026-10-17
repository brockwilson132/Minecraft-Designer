/* Blockwright · the library of designs. Cards draw their own thumbnail with the picture renderer and cache it.
   Where Claude is available (the Claude-hosted app), a "New design" card starts a design from a description. */
(function(BK){
const $=id=>document.getElementById(id);
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},
  raw(k){try{return localStorage.getItem(k);}catch(e){return null;}},put(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
let tag='All',q='',drawQueue=0;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const visible=()=>!$('library').hidden;

function stats(S){const xs=S.ALL.map(v=>v.x),zs=S.ALL.map(v=>v.z);if(!S.ALL.length)return{w:0,l:0,h:0,n:0,steps:0,stepIds:[]};
  return{w:Math.max(...xs)-Math.min(...xs)+1,l:Math.max(...zs)-Math.min(...zs)+1,h:S.MAXY-Math.min(0,S.MINY)+1,n:S.ALL.length,steps:S.steps.length,stepIds:S.steps.map(s=>s.id)};}
function badge(d){return d.custom?(d.base||d.original?'<span class="tag mine">Edited</span>':'<span class="tag mine">Yours</span>'):'';}
function cardHTML(d){
  return `<a class="card" href="#${esc(d.id)}" data-id="${esc(d.id)}">
    <div class="thumb"><span class="wait">Drawing…</span></div>
    <div class="body">
      <h2>${esc(d.name)}</h2>
      <p>${esc(d.blurb||'')}</p>
      <div class="stats" data-stats><span>…</span></div>
      <div class="tags">${badge(d)}${(d.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}${d.edition?`<span class="tag">${esc(d.edition)}</span>`:''}</div>
      <div class="prog-line" data-prog hidden></div>
    </div></a>`;}
async function fill(card,d,run){
  let S;try{S=await BK.loadAsync(d);}catch(err){if(run!==drawQueue)return;card.querySelector('[data-stats]').innerHTML=`<span>Does not build yet</span>`;card.querySelector('.wait').textContent='—';return;}
  if(run!==drawQueue||!card.isConnected)return;
  const s=stats(S);
  card.querySelector('[data-stats]').innerHTML=s.n?`<span><b>${s.w}×${s.l}</b> wide</span><span><b>${s.h}</b> tall</span><span><b>${s.n.toLocaleString()}</b> blocks</span><span><b>${s.steps}</b> steps</span>`:'<span>No blocks yet</span>';
  const p=store.get('bw:d:'+d.id,null),dn=p&&p.done?p.done.filter(x=>s.stepIds.includes(x)).length:0;
  const pl=card.querySelector('[data-prog]');if(dn){pl.hidden=false;pl.innerHTML=`<div class="progress"><i style="width:${dn/s.steps*100}%"></i></div><span>${dn} of ${s.steps} done</span>`;}
  const key='bw:thumb:'+d.id+':'+(d.custom?'r'+(d.rev||0):(d.version||1)),th=card.querySelector('.thumb'),cached=store.raw(key);
  if(cached){th.innerHTML=`<img alt="" src="${cached}">`;return;}
  const c=document.createElement('canvas');
  BK.drawIso(c,S,{width:360,height:450,dpr:1.6,label:false,figure:d.figure||null});
  let url='';try{url=c.toDataURL('image/jpeg',.86);}catch(e){}
  th.innerHTML='';if(url){const img=new Image();img.alt='';img.src=url;th.appendChild(img);store.put(key,url);}else th.appendChild(c);}
function render(){if(!visible())return;
  const all=BK.designs();const tags=['All',...new Set(all.flatMap(d=>d.tags||[]))];if(!tags.includes(tag))tag='All';
  $('tagChips').innerHTML=tags.map(t=>`<button class="chip" data-tag="${esc(t)}" aria-pressed="${t===tag}">${esc(t)}</button>`).join('');
  const ql=q.trim().toLowerCase();
  const list=all.filter(d=>(tag==='All'||(d.tags||[]).includes(tag))&&(!ql||(d.name+' '+(d.blurb||'')+' '+(d.tags||[]).join(' ')).toLowerCase().includes(ql)));
  const add=BK.Studio&&BK.Studio.available?`<button class="card newtile" id="newTile" type="button"><span class="plus">+</span><b>New design</b><span class="muted small">Describe a building and Claude drafts it, split into build steps.</span></button>`:'';
  $('cards').innerHTML=list.map(cardHTML).join('')+add||'<p class="empty">No designs match. Clear the search to see them all.</p>';
  if(!list.length&&!add)$('cards').innerHTML='<p class="empty">No designs match. Clear the search to see them all.</p>';
  const run=++drawQueue,cards=[...$('cards').querySelectorAll('.card[data-id]')];let i=0;
  const next=async()=>{if(i>=cards.length||run!==drawQueue)return;const c=cards[i++];await fill(c,BK.design(c.dataset.id),run);setTimeout(next,16);};setTimeout(next,30);}
$('tagChips').addEventListener('click',e=>{const b=e.target.closest('[data-tag]');if(!b)return;tag=b.dataset.tag;render();});
$('q').addEventListener('input',e=>{q=e.target.value;render();});

/* ---------- new design ---------- */
const STARTER=`const {put,each,ins}=w;
w.comp='base';
each((x,z)=>{ if(ins(x,z,4.5)) put(x,0,z,'stone_bricks'); });`;
$('cards').addEventListener('click',e=>{if(e.target.closest('#newTile')){$('newDlg').hidden=false;$('newMsg').textContent='';$('newName').focus();}});
$('newCancel').onclick=()=>{$('newDlg').hidden=true;};
$('newDlg').addEventListener('click',e=>{if(e.target===$('newDlg'))$('newDlg').hidden=true;});
$('newForm').addEventListener('submit',async e=>{e.preventDefault();const name=$('newName').value.trim(),desc=$('newDesc').value.trim();if(!name||!desc)return;
  $('newGo').disabled=true;$('newMsg').textContent='Creating…';
  const d={id:BK.Store.slug(name),name,blurb:desc.slice(0,200),tags:['New'],edition:'Bedrock',extent:24,start:{x:0,y:0,z:0},ring:null,
    steps:[['Base','base','Base']],tiers:[],notes:[],source:STARTER,custom:true,rev:0,build(){}};
  try{await BK.Store.save(d,null);}catch(err){$('newMsg').textContent=err.message;$('newGo').disabled=false;return;}
  $('newDlg').hidden=true;$('newGo').disabled=false;$('newName').value='';$('newDesc').value='';
  BK.pendingPrompt={id:d.id,shown:'New design: '+desc,text:`This is a brand-new design. Build it from scratch with write_source (and meta: a short blurb, tags, extent, start, and build steps in the order a player would build). Description from the user:\n\n${desc}`};
  location.hash=d.id;});

BK.Library={show(){render();},refresh(){render();}};
})(globalThis.BK=globalThis.BK||{});
