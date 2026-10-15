/* Blockwright · the library of designs. Cards draw their own thumbnail with the picture renderer and cache it. */
(function(BK){
const $=id=>document.getElementById(id);
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},
  raw(k){try{return localStorage.getItem(k);}catch(e){return null;}},put(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
let tag='All',q='',rendered=false;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function stats(d){const S=BK.load(d);const xs=S.ALL.map(v=>v.x),zs=S.ALL.map(v=>v.z);
  return{w:Math.max(...xs)-Math.min(...xs)+1,l:Math.max(...zs)-Math.min(...zs)+1,h:S.MAXY-Math.min(0,S.MINY)+1,n:S.ALL.length,steps:S.steps.length,stepIds:S.steps.map(s=>s.id)};}
function cardHTML(d){const p=store.get('bw:d:'+d.id,null);
  return `<a class="card" href="#${esc(d.id)}" data-id="${esc(d.id)}">
    <div class="thumb"><span class="wait">Drawing…</span></div>
    <div class="body">
      <h2>${esc(d.name)}</h2>
      <p>${esc(d.blurb||'')}</p>
      <div class="stats" data-stats><span>…</span></div>
      <div class="tags">${(d.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}${d.edition?`<span class="tag">${esc(d.edition)}</span>`:''}</div>
      <div class="prog-line" data-prog ${p&&p.done&&p.done.length?'':'hidden'}></div>
    </div></a>`;}
function fill(card,d){
  let s;try{s=stats(d);}catch(err){card.querySelector('[data-stats]').innerHTML=`<span>Could not build: ${esc(err.message)}</span>`;card.querySelector('.wait').textContent='Error';return;}
  card.querySelector('[data-stats]').innerHTML=`<span><b>${s.w}×${s.l}</b> wide</span><span><b>${s.h}</b> tall</span><span><b>${s.n.toLocaleString()}</b> blocks</span><span><b>${s.steps}</b> steps</span>`;
  const p=store.get('bw:d:'+d.id,null),dn=p&&p.done?p.done.filter(x=>s.stepIds.includes(x)).length:0;
  const pl=card.querySelector('[data-prog]');if(dn){pl.hidden=false;pl.innerHTML=`<div class="progress"><i style="width:${dn/s.steps*100}%"></i></div><span>${dn} of ${s.steps} done</span>`;}
  const key='bw:thumb:'+d.id+':'+(d.version||1),th=card.querySelector('.thumb'),cached=store.raw(key);
  if(cached){th.innerHTML=`<img alt="" src="${cached}">`;return;}
  const c=document.createElement('canvas');const W=360,H=450;
  BK.drawIso(c,BK.load(d),{width:W,height:H,dpr:1.6,label:false,figure:d.figure||null});
  let url='';try{url=c.toDataURL('image/jpeg',.86);}catch(e){}
  th.innerHTML='';if(url){const img=new Image();img.alt='';img.src=url;th.appendChild(img);store.put(key,url);}else th.appendChild(c);}
function render(){
  const all=BK.designs();const tags=['All',...new Set(all.flatMap(d=>d.tags||[]))];
  $('tagChips').innerHTML=tags.map(t=>`<button class="chip" data-tag="${esc(t)}" aria-pressed="${t===tag}">${esc(t)}</button>`).join('');
  const ql=q.trim().toLowerCase();
  const list=all.filter(d=>(tag==='All'||(d.tags||[]).includes(tag))&&(!ql||(d.name+' '+(d.blurb||'')+' '+(d.tags||[]).join(' ')).toLowerCase().includes(ql)));
  $('cards').innerHTML=list.length?list.map(cardHTML).join(''):'<p class="empty">No designs match. Clear the search to see them all.</p>';
  // draw thumbnails one at a time so the page stays responsive
  const cards=[...$('cards').querySelectorAll('.card')];let i=0;
  const next=()=>{if(i>=cards.length)return;const c=cards[i++];fill(c,BK.design(c.dataset.id));setTimeout(next,16);};setTimeout(next,30);
  rendered=true;}
$('tagChips').addEventListener('click',e=>{const b=e.target.closest('[data-tag]');if(!b)return;tag=b.dataset.tag;render();});
$('q').addEventListener('input',e=>{q=e.target.value;render();});
BK.Library={show(){render();},rendered:()=>rendered};
})(globalThis.BK=globalThis.BK||{});
