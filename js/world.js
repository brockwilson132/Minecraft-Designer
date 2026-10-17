/* Blockwright · world, geometry helpers, design registry and loaders.
   A design's build(w) function receives `w`, a fresh world with these helpers:
     put(x,y,z,id,extra)  place a block (extra: f=[dx,dz] stair facing, up=true upside-down, turn=deg, hue='#rrggbb')
     clr(x,y,z)           remove a block          get(x,y,z)  read a block
     w.comp = 'step-id'   every put() after this belongs to that build step
     w.role = 'furnish'   marks furniture so "Frame only" hides it (set back to null after)
     each(fn)             visit every column (x,z) in the design's extent
     ins(x,z,R) rim(x,z,R) depthMap(R) bay(x,z,N) pillarAng(N) bayAng(N) spotsAt(angles,r,test)
     inward(x,z) outward(x,z) S(x,y,z,id,up) SO(x,y,z,id,up) RNG(x,y,z) vn(x,z)
   Coordinates: x east, z south, y up. y 0 is the ground floor layer. */
(function(BK){

/* The engine is one self-contained function so its source can also run inside a Web Worker,
   which is how designs written in the app (as text) are built without eval on the page. */
function bwEngine(){
  const RNG=(x,y,z)=>{let h=(Math.imul(x,374761393)+Math.imul(y,1442695041)+Math.imul(z,668265263))|0;h=Math.imul(h^(h>>>13),1274126177);return((h^(h>>>16))>>>0)/4294967296;};
  function vn(x,z){const xi=Math.floor(x),zi=Math.floor(z),s=t=>t*t*(3-2*t),u=s(x-xi),v=s(z-zi);const a=RNG(xi,7,zi),b=RNG(xi+1,7,zi),c=RNG(xi,7,zi+1),d=RNG(xi+1,7,zi+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;}
  function createWorld(extent){
    const A=extent||24,V=new Map(),K=(x,y,z)=>x+','+y+','+z;
    const w={V,K,extent:A,comp:null,role:null,RNG,vn};
    const put=(x,y,z,id,ex)=>{const v={x,y,z,id};if(w.role)v.role=w.role;if(w.comp)v.c=w.comp;if(ex)Object.assign(v,ex);V.set(K(x,y,z),v);};
    const clr=(x,y,z)=>V.delete(K(x,y,z));
    const get=(x,y,z)=>V.get(K(x,y,z));
    const ins=(x,z,R)=>x*x+z*z<=R*R;
    const rim=(x,z,R)=>!ins(x,z,R)&&(ins(x+1,z,R)||ins(x-1,z,R)||ins(x,z+1,R)||ins(x,z-1,R));
    const each=fn=>{for(let x=-A;x<=A;x++)for(let z=-A;z<=A;z++)fn(x,z);};
    function depthMap(R){const D=new Map(),q=[];
      each((x,z)=>{if(ins(x,z,R)&&(!ins(x+1,z,R)||!ins(x-1,z,R)||!ins(x,z+1,R)||!ins(x,z-1,R))){D.set(x+','+z,0);q.push([x,z]);}});
      for(let i=0;i<q.length;i++){const [x,z]=q[i],d=D.get(x+','+z);for(const [a,b] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=(x+a)+','+(z+b);if(ins(x+a,z+b,R)&&!D.has(k)){D.set(k,d+1);q.push([x+a,z+b]);}}}
      return (x,z)=>{const d=D.get(x+','+z);return d===undefined?-1:d;};}
    // bay geometry: u = signed blocks from the bay center along the ring, h = half bay width, k = bay index
    // (bay k is centered at angle -π + k·2π/N; for N=8, bay 0 is west, 2 north, 4 east, 6 south)
    function bay(x,z,N){const r=Math.hypot(x,z),t=(Math.atan2(z,x)+Math.PI)/(2*Math.PI)*N+.5,k=Math.floor(t)%N,f=t-Math.floor(t),L=2*Math.PI*r/N;return{u:(f-.5)*L,h:L/2,k};}
    const inward=(x,z)=>Math.abs(x)>=Math.abs(z)?[-Math.sign(x),0]:[0,-Math.sign(z)];
    const outward=(x,z)=>{const i=inward(x,z);return[-i[0],-i[1]];};
    const S=(x,y,z,id,up)=>put(x,y,z,id,{f:inward(x,z),up:!!up}); // stair, tall side toward the center
    const SO=(x,y,z,id,up)=>put(x,y,z,id,{f:outward(x,z),up:!!up});
    function spotsAt(angles,r,test){const res=[],seen=new Set();for(const a of angles){let best=null,bd=1e9;each((x,z)=>{if(!test(x,z))return;const d=Math.hypot(x-r*Math.cos(a),z-r*Math.sin(a));if(d<bd){bd=d;best=[x,z];}});if(best&&!seen.has(best+'')){seen.add(best+'');res.push(best);}}return res;}
    const pillarAng=N=>Array.from({length:N},(_,k)=>-Math.PI+(k-.5)*2*Math.PI/N);
    const bayAng=N=>Array.from({length:N},(_,k)=>-Math.PI+k*2*Math.PI/N);
    Object.assign(w,{put,clr,get,ins,rim,each,depthMap,bay,inward,outward,S,SO,spotsAt,pillarAng,bayAng});
    return w;
  }
  return {RNG,vn,createWorld};
}
const E=bwEngine();
BK.engineSource=bwEngine.toString();
BK.RNG=E.RNG;BK.createWorld=E.createWorld;

/* ---------- Registry ----------
   Built-in designs come from designs/*.js (a build function). Designs made or edited in the app carry
   `source` (the text of the build function's body) and are built in a worker. An edited built-in keeps
   its id and remembers the original as `original`. */
const designs=[];
BK.register=function(d){if(!d||!d.id||typeof d.build!=='function')throw new Error('A design needs an id and a build(w) function');
  if(designs.some(x=>x.id===d.id))throw new Error('Two designs share the id '+d.id);designs.push(d);};
BK.designs=()=>designs.slice();
BK.design=id=>designs.find(d=>d.id===id);
BK.bodyOf=d=>{if(d.source!=null)return d.source;const s=d.build.toString();return s.slice(s.indexOf('{')+1,s.lastIndexOf('}')).replace(/^\n/,'');};
/* add or replace a design made in the app; returns the registered design */
BK.upsert=function(d){const i=designs.findIndex(x=>x.id===d.id);
  if(i>=0){const old=designs[i];d.original=old.original||(old.source==null?old:null);designs[i]=d;}else designs.push(d);
  BK.invalidate(d.id);return d;};
/* drop an app-made design; an edited built-in goes back to its original */
BK.remove=function(id){const i=designs.findIndex(x=>x.id===id);if(i<0)return;const d=designs[i];
  if(d.original)designs[i]=d.original;else designs.splice(i,1);BK.invalidate(id);};

/* ---------- Loading ---------- */
const cache=new Map();
BK.invalidate=id=>cache.delete(id);
BK.primeCache=(id,scene)=>cache.set(id,scene);
/* put a registered design object back exactly as it was (used to cancel a preview) */
BK.replace=function(d){const i=designs.findIndex(x=>x.id===d.id);if(i>=0)designs[i]=d;else designs.push(d);cache.delete(d.id);};
BK.cached=id=>cache.get(id)||null;
/* Turn placed blocks into everything the views need. */
BK.assemble=function(d,ALL,extent){
  const B=Object.assign({},BK.BLOCKS,d.blocks||{});
  const missing=[...new Set(ALL.filter(v=>!B[v.id]).map(v=>v.id))];
  if(missing.length){const e=new Error('Unknown block ids: '+missing.join(', '));e.kind='blocks';e.missing=missing;throw e;}
  const V=new Map(),K=(x,y,z)=>x+','+y+','+z;
  let MAXY=-1e9,MINY=1e9;for(const v of ALL){V.set(K(v.x,v.y,v.z),v);if(v.y>MAXY)MAXY=v.y;if(v.y<MINY)MINY=v.y;v.parts=BK.partsOf(v,B);}
  if(!ALL.length){MAXY=0;MINY=0;}
  let steps;
  if(d.steps&&d.steps.length){steps=d.steps.map((s,i)=>({g:s.group||s[0],id:s.id||s[1],name:s.name||s[2],i,list:[]}));}
  else{steps=[];for(let y=MINY,i=0;y<=MAXY;y+=12,i++)steps.push({g:'Layers',id:'band'+i,name:`Layers ${y}–${Math.min(MAXY,y+11)}`,i,list:[],band:true});}
  const SIX={};steps.forEach(s=>SIX[s.id]=s.i);
  for(const v of ALL){let si=-1;if(steps[0]&&steps[0].band)si=Math.floor((v.y-MINY)/12);else if(v.c!=null&&SIX[v.c]!=null)si=SIX[v.c];v.si=si;if(si>=0)steps[si].list.push(v);}
  const untagged=ALL.filter(v=>v.si<0).length;
  const emptySteps=steps.filter(s=>!s.list.length).map(s=>s.id);
  steps=steps.filter(s=>s.list.length);steps.forEach((s,i)=>{s.i=i;s.list.forEach(v=>v.si=i);let a=1e9,b=-1e9;for(const v of s.list){if(v.y<a)a=v.y;if(v.y>b)b=v.y;}s.ya=a;s.yb=b;});
  const colorOf=v=>v.hue||B[v.id].c;
  return {design:d,ALL,V,K,B,MAXY,MINY,extent:extent||d.extent||24,steps,untagged,emptySteps,colorOf};
};
/* Built-in designs build synchronously on the page. */
BK.load=function(d){
  if(cache.has(d.id))return cache.get(d.id);
  if(d.source!=null)throw new Error(d.name+' is built in the background; use BK.loadAsync');
  const w=BK.createWorld(d.extent||24);d.build(w);
  const out=BK.assemble(d,[...w.V.values()],w.extent);cache.set(d.id,out);return out;
};
/* Designs written in the app build in a worker: no eval on the page, and a runaway loop can be stopped. */
BK.buildSource=function(src,extent,timeoutMs){
  return new Promise((resolve,reject)=>{
    const pre=BK.engineSource+'\nconst __E=bwEngine();\nonmessage=function(){const w=__E.createWorld('+(extent|0||24)+');\n(function build(w){\n';
    const post='\n})(w);\npostMessage({ok:true,blocks:[...w.V.values()]});};\n';
    const offset=pre.split('\n').length-1;
    let url,wk,timer;
    try{url=URL.createObjectURL(new Blob([pre+src+post],{type:'text/javascript'}));wk=new Worker(url);}
    catch(e){reject(Object.assign(new Error('This browser could not start the design builder: '+e.message),{kind:'env'}));return;}
    const done=()=>{clearTimeout(timer);wk.terminate();URL.revokeObjectURL(url);};
    timer=setTimeout(()=>{done();reject(Object.assign(new Error('The build took longer than '+Math.round((timeoutMs||15000)/1000)+' s and was stopped. Look for a loop that never ends.'),{kind:'timeout'}));},timeoutMs||15000);
    wk.onmessage=e=>{done();resolve(e.data.blocks);};
    wk.onerror=e=>{e.preventDefault&&e.preventDefault();done();
      const line=e.lineno?e.lineno-offset:null;const lines=src.split('\n');
      const err=new Error((e.message||'Build failed').replace(/^Uncaught /,''));err.kind='code';
      if(line&&line>0&&line<=lines.length){err.line=line;err.snippet=lines.slice(Math.max(0,line-3),line+2).map((l,i)=>(Math.max(1,line-2)+i)+(Math.max(1,line-2)+i===line?' >':'  ')+' '+l).join('\n');}
      reject(err);};
    wk.postMessage(1);
  });
};
BK.loadAsync=async function(d){
  if(cache.has(d.id))return cache.get(d.id);
  if(d.source==null)return BK.load(d);
  const blocks=await BK.buildSource(d.source,d.extent||24);
  const out=BK.assemble(d,blocks,d.extent||24);cache.set(d.id,out);return out;
};
})(globalThis.BK=globalThis.BK||{});
