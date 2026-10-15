/* Blockwright · world, geometry helpers and the design registry.
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
const RNG=(x,y,z)=>{let h=(Math.imul(x,374761393)+Math.imul(y,1442695041)+Math.imul(z,668265263))|0;h=Math.imul(h^(h>>>13),1274126177);return((h^(h>>>16))>>>0)/4294967296;};
function vn(x,z){const xi=Math.floor(x),zi=Math.floor(z),s=t=>t*t*(3-2*t),u=s(x-xi),v=s(z-zi);const a=RNG(xi,7,zi),b=RNG(xi+1,7,zi),c=RNG(xi,7,zi+1),d=RNG(xi+1,7,zi+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;}
BK.RNG=RNG;

BK.createWorld=function(extent){
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
};

/* ---------- Registry ---------- */
const designs=[];
BK.register=function(d){if(!d||!d.id||typeof d.build!=='function')throw new Error('A design needs an id and a build(w) function');
  if(designs.some(x=>x.id===d.id))throw new Error('Two designs share the id '+d.id);designs.push(d);};
BK.designs=()=>designs.slice();
BK.design=id=>designs.find(d=>d.id===id);

/* Build a design once and cache the result: {ALL,V,K,B,MAXY,MINY,extent,steps,colorOf} */
const cache=new Map();
BK.load=function(d){
  if(cache.has(d.id))return cache.get(d.id);
  const w=BK.createWorld(d.extent||24);d.build(w);
  const B=Object.assign({},BK.BLOCKS,d.blocks||{});
  const ALL=[...w.V.values()];
  const missing=[...new Set(ALL.filter(v=>!B[v.id]).map(v=>v.id))];
  if(missing.length)throw new Error(d.name+' uses blocks that are not in the registry: '+missing.join(', '));
  let MAXY=-1e9,MINY=1e9;for(const v of ALL){if(v.y>MAXY)MAXY=v.y;if(v.y<MINY)MINY=v.y;v.parts=BK.partsOf(v,B);}
  // build steps: the design's own list, or bands of layers when it has none
  let steps;
  if(d.steps&&d.steps.length){steps=d.steps.map((s,i)=>({g:s.group||s[0],id:s.id||s[1],name:s.name||s[2],i,list:[]}));}
  else{steps=[];const band=12;for(let y=MINY,i=0;y<=MAXY;y+=band,i++)steps.push({g:'Layers',id:'band'+i,name:`Layers ${y}–${Math.min(MAXY,y+band-1)}`,i,list:[],band:[y,y+band-1]});}
  const SIX={};steps.forEach(s=>SIX[s.id]=s.i);
  for(const v of ALL){let si=-1;
    if(steps[0]&&steps[0].band)si=Math.floor((v.y-MINY)/12);else if(v.c!=null&&SIX[v.c]!=null)si=SIX[v.c];
    v.si=si;if(si>=0)steps[si].list.push(v);}
  const untagged=ALL.filter(v=>v.si<0).length;
  steps=steps.filter(s=>s.list.length);steps.forEach((s,i)=>{s.i=i;s.list.forEach(v=>v.si=i);
    let a=1e9,b=-1e9;for(const v of s.list){if(v.y<a)a=v.y;if(v.y>b)b=v.y;}s.ya=a;s.yb=b;});
  const colorOf=v=>v.hue||B[v.id].c;
  const out={design:d,ALL,V:w.V,K:w.K,B,MAXY,MINY,extent:w.extent,steps,untagged,colorOf};
  cache.set(d.id,out);return out;
};
})(globalThis.BK=globalThis.BK||{});
