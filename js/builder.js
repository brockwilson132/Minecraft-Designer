/* Blockwright · the builder. One cursor (x, y, z) drives the top view, side slice, column list, 3D view and readout.
   A design's build steps decide what is shown: the current step in colour, earlier steps faded or hidden. */
(function(BK){
const $=id=>document.getElementById(id);
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};
const wide=()=>matchMedia('(min-width:1000px)').matches;
const PAD=20,PLAIN='#a8a090';
const DIRN={'1,0':'east','-1,0':'west','0,1':'south','0,-1':'north'};
const FURN=new Set(['bookshelf','chiseled_bookshelf','cartography_table','lectern','decorated_pot','dark_oak_door','lantern','soul_lantern','chain','lightning_rod','end_rod','copper_bulb','bell']);
const ORN_SH=new Set(['wall','fence','rod','chain','lantern','bell','pot','trap','lectern','frame']);

let D=null,S=null,st=null,done=null,byY=null,ZL=[49],E=24;
const ui=store.get('bw:ui',{tab:'plan'});
const pv={x:0,z:0},sv={h:0,y:0};
let rot=0,dusk=false,picDirty=true,scope='layer';

/* ---------- visibility ---------- */
function vis(v){if(st.frame&&!v.fr)return 0;if(st.mode!=='step')return 2;if(v.si===st.cur)return 2;if(v.si>=0&&v.si<st.cur)return st.earlier==='ghost'?1:0;return 0;}
const tint=v=>st.frame?PLAIN:S.colorOf(v);
const fillFor=(v,vv)=>vv===1?css('--ghost'):tint(v);
function save(){store.set('bw:d:'+D.id,{cx:st.cx,cy:st.cy,cz:st.cz,cols:st.cols,axis:st.axis,mode:st.mode,cur:st.cur,earlier:st.earlier,frame:st.frame,upTo:st.upTo,cut:st.cut,done:[...done]});}
let saveT;const saveSoon=()=>{clearTimeout(saveT);saveT=setTimeout(save,250);};

/* ---------- open a design ---------- */
let openTok=0;
async function open(id,keep){
  const d=BK.design(id);if(!d)return false;const tok=++openTok;
  if(!keep){D=d;$('bName').textContent=d.name;$('bMeta').textContent='Building…';closeSheets();}
  let scene;
  try{scene=BK.cached(id)||await BK.loadAsync(d);}
  catch(err){if(tok!==openTok)return false;D=d;$('bMeta').textContent='Does not build';$('stageMsg').hidden=false;
    $('stageMsg').textContent='This design does not build right now: '+err.message+(BK.Studio&&BK.Studio.available?' Ask Claude to fix it, or undo the last change.':'');
    BK.Studio&&BK.Studio.onOpen(id);return false;}
  if(tok!==openTok)return false;
  $('stageMsg').hidden=true;
  if(D&&st&&D.id===id)save();
  D=d;S=scene;E=S.extent;
  S.ALL.forEach(v=>{if(v.fr===undefined){const b=S.B[v.id];v.fr=v.y<=0||!(v.role==='furnish'||FURN.has(v.id)||b.glass||(b.sh&&ORN_SH.has(b.sh)));}});
  byY=new Map();S.ALL.forEach(v=>{if(!byY.has(v.y))byY.set(v.y,[]);byY.get(v.y).push(v);});
  const full=2*E+1;ZL=[full,...[37,27,19,13,9].filter(z=>z<full)];
  const s0=D.start||{x:0,y:0,z:0};
  const sv0=store.get('bw:d:'+id,{});
  st=Object.assign({cx:s0.x,cy:s0.y,cz:s0.z,cols:ZL.includes(27)?27:ZL[Math.min(2,ZL.length-1)],axis:'x',mode:'all',cur:0,earlier:'ghost',frame:false,upTo:false,cut:false},sv0);
  if(!ZL.includes(st.cols))st.cols=ZL[Math.min(2,ZL.length-1)];
  if(!S.steps.length)st.mode='all';
  st.cur=Math.max(0,Math.min(S.steps.length-1,st.cur));
  done=new Set((sv0.done||[]).filter(x=>S.steps.some(s=>s.id===x)));
  if(!keep){pv.x=st.cx;pv.z=st.cz;sv.h=st.axis==='x'?st.cx:st.cz;sv.y=st.cy;}
  $('bName').textContent=D.name;
  const xs=S.ALL.map(v=>v.x),zs=S.ALL.map(v=>v.z);
  $('bMeta').textContent=S.ALL.length?`${Math.max(...xs)-Math.min(...xs)+1} × ${Math.max(...zs)-Math.min(...zs)+1} · ${S.MAXY-Math.min(0,S.MINY)+1} tall · ${S.ALL.length.toLocaleString()} blocks`:'No blocks yet';
  document.title=D.name+' · Blockwright';
  renderAbout();picDirty=true;
  build3D(keep);
  setTab(ui.tab||'plan',true);
  refresh(!keep);
  if(BK.Studio&&!keep)BK.Studio.onOpen(id);else if(BK.Studio)BK.Studio.refresh();
  return true;
}
/* rebuild the open design after an edit, keeping the cursor, tab and camera */
function reload(){if(D)return open(D.id,true);}
function context(){if(!D||!S||!st)return D?{design:D}:null;const v=S.V.get(S.K(st.cx,st.cy,st.cz));
  return {design:D,x:st.cx,y:st.cy,z:st.cz,block:v?(S.B[v.id].n+(note(v)?' ('+note(v)+')':'')):'air',step:st.mode==='step'?S.steps[st.cur]:(v&&S.steps[v.si])||null,mode:st.mode,tab:ui.tab};}

/* ---------- 3D ---------- */
const view=$('view3d');
let renderer=null,scene,camera,controls,meshes=[],curBox,M,Q,Pv,Sv,ghostCol,ok3D=null;
function init3D(){if(ok3D!==null)return ok3D;
  if(!window.THREE||!THREE.OrbitControls){view.innerHTML='<p class="muted small" style="padding:14px">The 3D view could not load. Top, Side and Picture still work.</p>';return ok3D=false;}
  try{renderer=new THREE.WebGLRenderer({antialias:true});}catch(e){view.innerHTML='<p class="muted small" style="padding:14px">This device can\'t show 3D. Top, Side and Picture still work.</p>';return ok3D=false;}
  M=new THREE.Matrix4();Q=new THREE.Quaternion();Pv=new THREE.Vector3();Sv=new THREE.Vector3();ghostCol=new THREE.Color();
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));view.appendChild(renderer.domElement);
  scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(36,1,.5,2000);
  scene.add(new THREE.HemisphereLight(0xffffff,0x5a6060,.78));
  const sun=new THREE.DirectionalLight(0xfff4e6,.62);sun.position.set(40,90,30);scene.add(sun);
  const fill=new THREE.DirectionalLight(0xd8e8ff,.22);fill.position.set(-40,30,-50);scene.add(fill);
  scene.userData.groundMat=new THREE.MeshLambertMaterial({color:css('--ground')});
  const ground=new THREE.Mesh(new THREE.CircleGeometry(120,64),scene.userData.groundMat);ground.rotation.x=-Math.PI/2;ground.position.y=-1.52;scene.add(ground);
  curBox=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.08,1.08,1.08)),new THREE.LineBasicMaterial({color:css('--copper'),depthTest:false}));curBox.renderOrder=9;scene.add(curBox);
  controls=new THREE.OrbitControls(camera,renderer.domElement);controls.addEventListener('change',draw3D);
  controls.maxPolarAngle=Math.PI*.495;controls.minDistance=8;controls.maxDistance=700;
  new ResizeObserver(size3D).observe(view);
  return ok3D=true;}
function build3D(keepCam){if(!init3D())return;
  meshes.forEach(m=>{scene.remove(m.mesh);m.mesh.geometry.dispose();m.mesh.material.dispose();});meshes=[];
  const byId={};S.ALL.forEach(v=>(byId[v.id]=byId[v.id]||[]).push(v));
  const col=new THREE.Color(),plain=new THREE.Color(PLAIN);
  for(const id in byId){const b=S.B[id];let n=0;
    byId[id].forEach(v=>{n+=v.parts.length;col.set(S.colorOf(v));const j=(BK.RNG(v.x,v.y,v.z)-.5)*.07;if(!v.hue)col.offsetHSL(0,0,j);v.col3=col.clone();v.pcol3=plain.clone().offsetHSL(0,0,j*1.3);});
    const mat=b.emit?new THREE.MeshBasicMaterial({color:0xffffff}):new THREE.MeshLambertMaterial({color:0xffffff,transparent:!!b.glass,opacity:b.glass?Math.min(.85,b.glass*.7):1,depthWrite:!b.glass});
    const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),mat,n);if(b.glass)mesh.renderOrder=2;
    meshes.push({mesh,list:byId[id]});scene.add(mesh);}
  if(!keepCam)resetCam();}
function resetCam(){if(!controls)return;const h=S.MAXY,dist=Math.max(90,h*1.45+E*2.2);
  const dir=new THREE.Vector3(.62,.42,.66).normalize();controls.target.set(0,h*.46,0);camera.position.copy(controls.target).addScaledVector(dir,dist);controls.update();draw3D();}
function frameStep(s){if(!controls)return;const dir=camera.position.clone().sub(controls.target).normalize();
  const dist=Math.max(60,Math.min(400,(s.yb-s.ya)*2.2+E*2.6));controls.target.set(0,(s.ya+s.yb)/2,0);camera.position.copy(controls.target).addScaledVector(dir,dist);controls.update();draw3D();}
function size3D(){if(!renderer)return;const w=view.clientWidth,h=view.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();draw3D();}
function draw3D(){if(renderer&&ui.tab==='3d')renderer.render(scene,camera);}
function update3D(){if(!renderer||!meshes.length)return;ghostCol.set(css('--ghost')||'#c9cfcc');
  scene.background=new THREE.Color(css('--sky'));scene.userData.groundMat.color.set(css('--ground'));curBox.material.color.set(css('--copper'));
  for(const {mesh,list} of meshes){let n=0;
    for(const v of list){const vv=vis(v);if(!vv||(st.upTo&&v.y>st.cy)||(st.cut&&v.z>st.cz))continue;
      const c=vv===1?ghostCol:st.frame?v.pcol3:v.col3;
      for(const [x0,y0,z0,x1,y1,z1] of v.parts){Pv.set(v.x-.5+(x0+x1)/2,v.y-.5+(y0+y1)/2,v.z-.5+(z0+z1)/2);Sv.set(x1-x0,y1-y0,z1-z0);M.compose(Pv,Q,Sv);mesh.setMatrixAt(n,M);mesh.setColorAt(n,c);n++;}}
    mesh.count=n;mesh.instanceMatrix.needsUpdate=true;if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;}
  curBox.position.set(st.cx,st.cy,st.cz);draw3D();}
$('upTo').onclick=()=>{st.upTo=!st.upTo;syncButtons();update3D();saveSoon();};
$('cut').onclick=()=>{st.cut=!st.cut;syncButtons();update3D();saveSoon();};
$('reset').onclick=()=>resetCam();

/* ---------- Picture ---------- */
const iso=$('iso');
function drawPic(){if(ui.tab!=='pic'||!S)return;picDirty=false;
  BK.drawIso(iso,S,{rot,dusk,vis,tint,ghost:BK.hexRGB(css('--ghost')||'#cbd2cf'),figure:D.figure||null});}
$('rotL').onclick=()=>{rot=(rot+3)%4;drawPic();};$('rotR').onclick=()=>{rot=(rot+1)%4;drawPic();};
$('dusk').onclick=e=>{dusk=!dusk;e.currentTarget.setAttribute('aria-pressed',dusk);drawPic();};

/* ---------- Grid views ---------- */
const pc=$('plan'),px=pc.getContext('2d'),sc=$('sec'),sx=sc.getContext('2d'),mm=$('mini'),mx=mm.getContext('2d');
function prep(c,ctx){const dpr=Math.min(devicePixelRatio||1,2),w=c.clientWidth,h=c.clientHeight;if(!w||!h)return null;c.width=Math.round(w*dpr);c.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);return{w,h};}
function shape(ctx,v,x0,y0,cs,fill,side){
  const b=S.B[v.id],g=cs>7?.5:0;ctx.fillStyle=fill;
  if(b.glass){ctx.globalAlpha=.55;ctx.fillRect(x0+g,y0+g,cs-2*g,cs-2*g);ctx.globalAlpha=1;if(cs>8){ctx.strokeStyle='#7fb7c6';ctx.lineWidth=1;ctx.strokeRect(x0+2,y0+2,cs-4,cs-4);}return;}
  if(b.sh==='lantern'){if(side)ctx.fillRect(x0+cs*.25,y0+cs*.3,cs*.5,cs*.6);else{ctx.beginPath();ctx.arc(x0+cs/2,y0+cs/2,cs*.3,0,7);ctx.fill();}return;}
  if(b.sh==='wall'||b.sh==='fence'||b.sh==='rod'||b.sh==='chain'){const s=b.sh==='wall'?.5:b.sh==='fence'?.36:.22,i2=(1-s)/2*cs;if(side)ctx.fillRect(x0+i2,y0,cs*s,cs);else ctx.fillRect(x0+i2,y0+i2,cs*s,cs*s);return;}
  if(side&&b.sh==='slab'){ctx.fillRect(x0+g,v.up?y0+g:y0+cs/2,cs-2*g,cs/2-g);return;}
  if(side&&b.sh==='stair'){ctx.fillRect(x0+g,v.up?y0+g:y0+cs/2,cs-2*g,cs/2-g);
    const f=v.f||[0,0],al=st.axis==='x'?f[0]:f[1],top=v.up?y0+cs/2:y0+g;
    if(al>0)ctx.fillRect(x0+cs/2,top,cs/2-g,cs/2);else if(al<0)ctx.fillRect(x0+g,top,cs/2,cs/2);else{ctx.globalAlpha=.55;ctx.fillRect(x0+g,top,cs-2*g,cs/2);ctx.globalAlpha=1;}return;}
  ctx.fillRect(x0+g,y0+g,cs-2*g,cs-2*g);
  if(!side&&b.sh==='stair'&&v.f){const [fx,fz]=v.f;ctx.fillStyle='rgba(0,0,0,.32)';
    if(fx>0)ctx.fillRect(x0+cs/2,y0+g,cs/2-g,cs-2*g);else if(fx<0)ctx.fillRect(x0+g,y0+g,cs/2,cs-2*g);else if(fz>0)ctx.fillRect(x0+g,y0+cs/2,cs-2*g,cs/2-g);else if(fz<0)ctx.fillRect(x0+g,y0+g,cs-2*g,cs/2);}
  if(!side&&b.sh==='slab'){ctx.fillStyle=v.up?'rgba(255,255,255,.28)':'rgba(0,0,0,.18)';ctx.fillRect(x0+g,y0+g,cs-2*g,cs-2*g);}
  if(cs>=18&&v.turn!=null){ctx.fillStyle='rgba(0,0,0,.55)';ctx.font=`600 ${Math.round(cs*.36)}px ${css('--mono')}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(v.turn,x0+cs/2,y0+cs/2);}
}
function grid(ctx,ox,oy,cs,nx,ny){ctx.strokeStyle=css('--grid');ctx.lineWidth=1;ctx.beginPath();
  for(let i=0;i<=nx;i++){ctx.moveTo(ox+i*cs,oy);ctx.lineTo(ox+i*cs,oy+ny*cs);}for(let j=0;j<=ny;j++){ctx.moveTo(ox,oy+j*cs);ctx.lineTo(ox+nx*cs,oy+j*cs);}ctx.stroke();}
function labels(ctx,from,count,cs,horiz,cur,flip,w,h){
  const every=cs>=24?1:cs>=12?5:10,fs=Math.max(9,Math.min(11,cs*.6));ctx.fillStyle=css('--plan');
  if(horiz)ctx.fillRect(0,0,w,PAD-1);else ctx.fillRect(0,0,PAD-1,h);ctx.textBaseline='middle';
  for(let i=0;i<count;i++){const val=flip?from-i:from+i,isCur=val===cur;if(!isCur&&val%every)continue;
    ctx.fillStyle=isCur?css('--copper'):css('--muted');ctx.font=`${isCur?'600 ':''}${fs}px ${css('--mono')}`;
    if(horiz){ctx.textAlign='center';ctx.fillText(val,PAD+i*cs+cs/2,PAD/2+1);}else{ctx.textAlign='right';ctx.fillText(val,PAD-3,PAD+i*cs+cs/2);}}}
function cursorBox(ctx,x,y,cs){ctx.lineWidth=2.5;ctx.strokeStyle=css('--fg');ctx.strokeRect(x+1.25,y+1.25,cs-2.5,cs-2.5);ctx.lineWidth=1.4;ctx.strokeStyle=css('--copper');ctx.strokeRect(x-1.5,y-1.5,cs+3,cs+3);}
const clampC=(c,n)=>{const full=2*E+1;if(n>=full)return 0;const h=Math.floor(n/2);return Math.max(-E+h,Math.min(E-(n-1-h),c));};
function pGeom(){const w=pc.clientWidth,h=pc.clientHeight,cs=(w-PAD)/st.cols;return{w,h,cs,nx:st.cols,nz:Math.max(1,Math.floor((h-PAD)/cs))};}
function sGeom(){const w=sc.clientWidth,h=sc.clientHeight,cs=(w-PAD)/st.cols;return{w,h,cs,nh:st.cols,ny:Math.max(1,Math.floor((h-PAD)/cs))};}
function clampViews(){const g=pGeom();pv.x=clampC(pv.x,g.nx);pv.z=clampC(pv.z,g.nz);const s=sGeom();sv.h=clampC(sv.h,s.nh);
  const lo=Math.min(S.MINY,0)-1,hi=S.MAXY+1,h2=Math.floor(s.ny/2);
  if(s.ny>=hi-lo+1)sv.y=Math.floor((lo+hi)/2);else sv.y=Math.max(lo+h2,Math.min(hi-(s.ny-1-h2),sv.y));}
function drawPlan(){const sz=prep(pc,px);if(!sz)return;const {w,h}=sz,g=pGeom(),cs=g.cs,x0=pv.x-Math.floor(g.nx/2),z0=pv.z-Math.floor(g.nz/2);
  const X=x=>PAD+(x-x0)*cs,Z=z=>PAD+(z-z0)*cs;
  px.fillStyle=css('--plan');px.fillRect(0,0,w,h);
  px.fillStyle=css('--accent');px.globalAlpha=.08;if(st.axis==='x')px.fillRect(PAD,Z(st.cz),g.nx*cs,cs);else px.fillRect(X(st.cx),PAD,cs,g.nz*cs);px.globalAlpha=1;
  const at=(x,y,z)=>S.V.get(S.K(x,y,z));
  for(let x=x0;x<x0+g.nx;x++)for(let z=z0;z<z0+g.nz;z++){const v=at(x,st.cy,z);if(v&&vis(v))continue;const u=at(x,st.cy-1,z);if(!u)continue;const uv=vis(u);if(!uv)continue;
    px.globalAlpha=.16;px.fillStyle=fillFor(u,uv);px.fillRect(X(x),Z(z),cs,cs);px.globalAlpha=1;}
  grid(px,PAD,PAD,cs,g.nx,g.nz);
  for(let x=x0;x<x0+g.nx;x++)for(let z=z0;z<z0+g.nz;z++){const v=at(x,st.cy,z);if(!v)continue;const vv=vis(v);if(vv)shape(px,v,X(x),Z(z),cs,fillFor(v,vv),false);}
  if(D.ring){px.strokeStyle=css('--copper');px.setLineDash([4,4]);px.lineWidth=1;px.globalAlpha=.7;px.beginPath();px.arc(X(0)+cs/2,Z(0)+cs/2,D.ring*cs,0,7);px.stroke();px.setLineDash([]);px.globalAlpha=1;}
  cursorBox(px,X(st.cx),Z(st.cz),cs);
  labels(px,x0,g.nx,cs,true,st.cx,false,w,h);labels(px,z0,g.nz,cs,false,st.cz,false,w,h);
  px.fillStyle=css('--plan');px.fillRect(0,0,PAD-1,PAD-1);px.fillStyle=css('--accent');px.font=`600 10px ${css('--body')}`;px.textAlign='center';px.textBaseline='middle';px.fillText('N',PAD/2,PAD/2);}
const sideAt=(hc,y)=>S.V.get(st.axis==='x'?S.K(hc,y,st.cz):S.K(st.cx,y,hc));
function drawSide(){const sz=prep(sc,sx);if(!sz)return;const {w,h}=sz,g=sGeom(),cs=g.cs,h0=sv.h-Math.floor(g.nh/2),yTop=sv.y+(g.ny-1-Math.floor(g.ny/2));
  const X=i=>PAD+(i-h0)*cs,Y=y=>PAD+(yTop-y)*cs,ch=st.axis==='x'?st.cx:st.cz;
  sx.fillStyle=css('--plan');sx.fillRect(0,0,w,h);
  sx.fillStyle=css('--accent');sx.globalAlpha=.08;sx.fillRect(X(ch),PAD,cs,g.ny*cs);sx.fillRect(PAD,Y(st.cy),g.nh*cs,cs);sx.globalAlpha=1;
  const gy=Math.min(S.MINY,0)-1;if(gy>=yTop-g.ny+1&&gy<=yTop){sx.fillStyle=css('--ground');sx.globalAlpha=.55;sx.fillRect(PAD,Y(gy),g.nh*cs,h);sx.globalAlpha=1;}
  grid(sx,PAD,PAD,cs,g.nh,g.ny);
  for(let i=h0;i<h0+g.nh;i++)for(let y=yTop;y>yTop-g.ny;y--){const v=sideAt(i,y);if(!v)continue;const vv=vis(v);if(vv)shape(sx,v,X(i),Y(y),cs,fillFor(v,vv),true);}
  cursorBox(sx,X(ch),Y(st.cy),cs);
  labels(sx,h0,g.nh,cs,true,ch,false,w,h);labels(sx,yTop,g.ny,cs,false,st.cy,true,w,h);
  sx.fillStyle=css('--plan');sx.fillRect(0,0,PAD-1,PAD-1);
  const ends=st.axis==='x'?['W','E']:['N','S'];sx.fillStyle=css('--accent');sx.font=`600 10px ${css('--body')}`;sx.textBaseline='middle';sx.textAlign='center';sx.fillText(ends[0],PAD/2,PAD/2);
  sx.textAlign='right';sx.fillText(ends[1],w-3,PAD/2);
  drawMini(yTop,g.ny);}
let mG=null;
function drawMini(yTop,ny){const sz=prep(mm,mx);if(!sz)return;const {w,h}=sz,lo=Math.min(S.MINY,0)-1,hi=S.MAXY+1,NY=hi-lo+1,top=PAD,H=h-PAD-4,cy=H/NY,cx=(w-4)/(2*E+1);mG={top,cy,hi};
  mx.fillStyle=css('--plan');mx.fillRect(0,0,w,h);
  for(let i=-E;i<=E;i++)for(let y=lo;y<=hi;y++){const v=sideAt(i,y);if(!v)continue;const vv=vis(v);if(!vv)continue;mx.fillStyle=fillFor(v,vv);mx.fillRect(2+(i+E)*cx,top+(hi-y)*cy,Math.max(cx,1),Math.max(cy,1));}
  mx.fillStyle=css('--copper');mx.fillRect(0,top+(hi-st.cy)*cy,w,Math.max(1.5,cy));
  const y0=top+(hi-yTop)*cy;mx.fillStyle=css('--accent');mx.globalAlpha=.16;mx.fillRect(1,y0,w-2,ny*cy);mx.globalAlpha=1;mx.strokeStyle=css('--accent');mx.lineWidth=1.5;mx.strokeRect(1,y0,w-2,ny*cy);
  mx.fillStyle=css('--muted');mx.font=`9px ${css('--mono')}`;mx.textAlign='center';mx.textBaseline='middle';mx.fillText(S.MAXY,w/2,PAD/2);}

/* pointer: tap moves the cursor, drag pans, pinch or ctrl+wheel zooms */
function attach(c,{tap,pan,start,cs}){const pts=new Map();let s=null;
  c.addEventListener('pointerdown',e=>{c.setPointerCapture(e.pointerId);pts.set(e.pointerId,[e.clientX,e.clientY]);
    if(pts.size===1)s={x:e.clientX,y:e.clientY,moved:false,base:start()};
    if(pts.size===2){const [a,b]=[...pts.values()];s={pinch:Math.hypot(a[0]-b[0],a[1]-b[1]),cols:st.cols,moved:true};}});
  c.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId)||!s)return;pts.set(e.pointerId,[e.clientX,e.clientY]);
    if(s.pinch){if(pts.size<2)return;const [a,b]=[...pts.values()];const want=s.cols/(Math.hypot(a[0]-b[0],a[1]-b[1])/s.pinch);
      let best=ZL[0];for(const z of ZL)if(Math.abs(z-want)<Math.abs(best-want))best=z;if(best!==st.cols)setZoom(best);return;}
    const dx=e.clientX-s.x,dy=e.clientY-s.y;if(!s.moved&&Math.hypot(dx,dy)>7)s.moved=true;if(s.moved){const k=cs();pan(Math.round(dx/k),Math.round(dy/k),s.base);}});
  const end=e=>{const was=s;pts.delete(e.pointerId);if(e.type==='pointerup'&&was&&!was.moved&&!was.pinch&&pts.size===0)tap(e);if(!pts.size)s=null;};
  c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end);
  c.addEventListener('wheel',e=>{e.preventDefault();if(e.ctrlKey){stepZoom(e.deltaY<0?1:-1);return;}
    const k=Math.max(1,Math.round(st.cols/12)),d=Math.sign(e.deltaY)*k,dx=Math.sign(e.deltaX)*k;
    if(c===sc){sv.y-=d;sv.h+=dx;clampViews();drawSide();}else{if(e.shiftKey)pv.x+=d;else{pv.z+=d;pv.x+=dx;}clampViews();drawPlan();}},{passive:false});}
attach(pc,{cs:()=>pGeom().cs,start:()=>({x:pv.x,z:pv.z}),pan:(dx,dy,b)=>{pv.x=b.x-dx;pv.z=b.z-dy;clampViews();drawPlan();},
  tap:e=>{const r=pc.getBoundingClientRect(),g=pGeom();if(e.clientX-r.left<PAD||e.clientY-r.top<PAD)return;
    setCursor(Math.floor((e.clientX-r.left-PAD)/g.cs)+pv.x-Math.floor(g.nx/2),st.cy,Math.floor((e.clientY-r.top-PAD)/g.cs)+pv.z-Math.floor(g.nz/2),false);}});
attach(sc,{cs:()=>sGeom().cs,start:()=>({h:sv.h,y:sv.y}),pan:(dx,dy,b)=>{sv.h=b.h-dx;sv.y=b.y+dy;clampViews();drawSide();},
  tap:e=>{const r=sc.getBoundingClientRect(),g=sGeom();if(e.clientX-r.left<PAD||e.clientY-r.top<PAD)return;
    const i=Math.floor((e.clientX-r.left-PAD)/g.cs)+sv.h-Math.floor(g.nh/2),y=sv.y+(g.ny-1-Math.floor(g.ny/2))-Math.floor((e.clientY-r.top-PAD)/g.cs);
    if(st.axis==='x')setCursor(i,y,st.cz,false);else setCursor(st.cx,y,i,false);}});
{let md=false;const at=e=>{if(!mG)return;const r=mm.getBoundingClientRect();sv.y=Math.round(mG.hi-(e.clientY-r.top-mG.top)/mG.cy);clampViews();drawSide();};
  mm.addEventListener('pointerdown',e=>{md=true;mm.setPointerCapture(e.pointerId);at(e);});mm.addEventListener('pointermove',e=>{if(md)at(e);});
  mm.addEventListener('pointerup',()=>md=false);mm.addEventListener('pointercancel',()=>md=false);}
function setZoom(c){st.cols=c;pv.x=st.cx;pv.z=st.cz;sv.h=st.axis==='x'?st.cx:st.cz;sv.y=st.cy;clampViews();syncButtons();draw2D();saveSoon();}
function stepZoom(d){const i=ZL.indexOf(st.cols);setZoom(ZL[Math.max(0,Math.min(ZL.length-1,(i<0?0:i)+d))]);}
$('zIn').onclick=()=>stepZoom(1);$('zOut').onclick=()=>stepZoom(-1);
document.querySelectorAll('[data-axis]').forEach(b=>b.onclick=()=>{st.axis=b.dataset.axis;sv.h=st.axis==='x'?st.cx:st.cz;clampViews();syncButtons();draw2D();saveSoon();});

/* ---------- cursor ---------- */
function note(v){const b=S.B[v.id];
  if(b.sh==='stair'&&v.f)return 'tall side '+(DIRN[v.f.join(',')]||'')+(v.up?', upside down':'');
  if(b.sh==='slab')return v.up?'top half':'bottom half';
  if(v.turn!=null)return 'turned '+v.turn+'° from its neighbour';return '';}
function readout(){const v=S.V.get(S.K(st.cx,st.cy,st.cz)),vv=v?vis(v):0,step=v&&S.steps[v.si];let h;
  if(v&&vv){const nt=note(v);h=`<span class="sw" style="background:${S.colorOf(v)}"></span><b>${S.B[v.id].n}</b><span class="note">${[nt,vv===1?'earlier step':'',st.mode!=='step'&&step?step.name:''].filter(Boolean).join(' · ')}</span>`;}
  else if(v)h=`<span class="sw" style="background:transparent"></span><b class="muted">Nothing to place here</b><span class="note">${S.B[v.id].n} comes later${step?' in '+step.name:''}</span>`;
  else h=`<span class="sw" style="background:transparent"></span><b class="muted">Air</b>`;
  $('readout').innerHTML=h;$('inX').value=st.cx;$('inY').value=st.cy;$('inZ').value=st.cz;}
function follow(){const g=pGeom(),m=st.cols>=19?2:1,hx=Math.floor(g.nx/2),hz=Math.floor(g.nz/2);
  if(st.cx<pv.x-hx+m||st.cx>pv.x-hx+g.nx-1-m)pv.x=st.cx;if(st.cz<pv.z-hz+m||st.cz>pv.z-hz+g.nz-1-m)pv.z=st.cz;
  const s=sGeom(),hh=Math.floor(s.nh/2),ch=st.axis==='x'?st.cx:st.cz;if(ch<sv.h-hh+m||ch>sv.h-hh+s.nh-1-m)sv.h=ch;
  const hy=Math.floor(s.ny/2),top=sv.y+(s.ny-1-hy),bot=sv.y-hy;if(st.cy>top-m||st.cy<bot+m)sv.y=st.cy;clampViews();}
function setCursor(x,y,z,fol){const lo=Math.min(S.MINY,0);st.cx=Math.max(-E,Math.min(E,x|0));st.cz=Math.max(-E,Math.min(E,z|0));st.cy=Math.max(lo,Math.min(S.MAXY,y|0));
  if(fol!==false)follow();else clampViews();
  draw2D();readout();drawColumn();layerChip();if(scope==='layer')renderBlocks();
  if(st.upTo||st.cut)update3D();else if(curBox){curBox.position.set(st.cx,st.cy,st.cz);draw3D();}
  saveSoon();}
function nudge(d,s){if(d==='x')setCursor(st.cx+s,st.cy,st.cz);else if(d==='z')setCursor(st.cx,st.cy,st.cz+s);else setCursor(st.cx,st.cy+s,st.cz);}
document.querySelectorAll('.stp button').forEach(b=>{let t1,t2;const go=()=>nudge(b.dataset.d,+b.dataset.s),stop=()=>{clearTimeout(t1);clearInterval(t2);};
  b.addEventListener('pointerdown',e=>{e.preventDefault();go();t1=setTimeout(()=>{t2=setInterval(go,70);},380);});
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,stop));b.addEventListener('click',e=>{if(e.detail===0)go();});});
[['inX','x'],['inY','y'],['inZ','z']].forEach(([id,d])=>{const el=$(id);el.addEventListener('focus',()=>el.select());
  el.addEventListener('change',()=>{const n=parseInt(el.value,10);if(isNaN(n)){readout();return;}setCursor(d==='x'?n:st.cx,d==='y'?n:st.cy,d==='z'?n:st.cz);});});
document.addEventListener('keydown',e=>{if(!D||$('builder').hidden||e.target.closest('input,textarea,select')||e.metaKey||e.ctrlKey||e.altKey)return;
  const k=e.key;let h=true;
  if(k==='Escape')closeSheets();else if(k==='ArrowLeft')nudge('x',-1);else if(k==='ArrowRight')nudge('x',1);
  else if(k==='ArrowUp'&&!e.shiftKey)nudge('z',-1);else if(k==='ArrowDown'&&!e.shiftKey)nudge('z',1);
  else if(k==='PageUp'||(k==='ArrowUp'&&e.shiftKey))nudge('y',1);else if(k==='PageDown'||(k==='ArrowDown'&&e.shiftKey))nudge('y',-1);
  else if(k===',')goToStep(st.cur-1);else if(k==='.')goToStep(st.cur+1);else h=false;if(h)e.preventDefault();});

/* ---------- layer chip: blocks to place on this layer, jump to the next layer that has some ---------- */
const placeable=v=>vis(v)===2;
function layerCount(y){const L=byY.get(y);if(!L)return 0;let n=0;for(const v of L)if(placeable(v))n++;return n;}
function nextLayer(dir){const lo=Math.min(S.MINY,0);for(let y=st.cy+dir;y>=lo&&y<=S.MAXY;y+=dir)if(layerCount(y))return y;return null;}
function layerChip(){const n=layerCount(st.cy);$('layerTxt').innerHTML=`Layer <b>${st.cy}</b> · ${n?n.toLocaleString()+' to place':'nothing to place'}`;
  $('lDn').disabled=nextLayer(-1)==null;$('lUp').disabled=nextLayer(1)==null;}
$('lUp').onclick=()=>{const y=nextLayer(1);if(y!=null)setCursor(st.cx,y,st.cz);};
$('lDn').onclick=()=>{const y=nextLayer(-1);if(y!=null)setCursor(st.cx,y,st.cz);};

/* ---------- column ---------- */
const runsEl=$('runs');
const runKey=v=>v.id+'|'+(v.f?v.f.join(','):'')+'|'+(v.up?1:0)+'|'+(v.turn??'')+'|'+vis(v);
let colKey='';
function drawColumn(force){const key=st.cx+','+st.cz;if(!force&&key===colKey){markRun();return;}colKey=key;
  const lo=Math.min(S.MINY,0),list=[];for(let y=lo;y<=S.MAXY;y++){const v=S.V.get(S.K(st.cx,y,st.cz));if(v&&vis(v))list.push(v);}
  const runs=[];for(const v of list){const r=runs[runs.length-1];if(r&&r.k===runKey(v)&&r.b===v.y-1){r.b=v.y;r.n++;}else runs.push({k:runKey(v),v,a:v.y,b:v.y,n:1});}
  const yr=(a,b)=>a===b?'y '+a:'y '+a+'–'+b;let html='',prev=null;
  for(const r of runs){
    if(prev!=null&&r.a>prev+1)html+=`<button class="run gap" data-a="${prev+1}" data-b="${r.a-1}"><span class="y">${yr(prev+1,r.a-1)}</span><span></span><span class="nm">air</span><span class="n">${r.a-prev-1}</span></button>`;
    const nt=note(r.v),gh=vis(r.v)===1;
    html+=`<button class="run${gh?' ghost':''}" data-a="${r.a}" data-b="${r.b}"><span class="y">${yr(r.a,r.b)}</span><span class="sw" style="background:${S.colorOf(r.v)}"></span><span class="nm">${S.B[r.v.id].n}${nt?` <i>· ${nt}</i>`:''}${gh?' <i>· earlier</i>':''}</span><span class="n">×${r.n}</span></button>`;prev=r.b;}
  runsEl.innerHTML=html||`<p class="muted small" style="margin:6px 2px">Nothing in this column${st.mode==='step'?' for this step':''}.</p>`;
  const own=list.filter(placeable).length;
  $('cTitle').textContent=`Column ${st.cx}, ${st.cz}`;$('cSub').textContent=own?`${own} to place, bottom to top`:'';
  markRun();}
function markRun(){let on=null;runsEl.querySelectorAll('.run[data-a]').forEach(el=>{const h=st.cy>=+el.dataset.a&&st.cy<=+el.dataset.b;el.classList.toggle('on',h);if(h)on=el;});
  if(on){const r=on.offsetTop-runsEl.offsetTop,t=runsEl.scrollTop;if(r<t||r>t+runsEl.clientHeight-on.offsetHeight)runsEl.scrollTop=r-runsEl.clientHeight/2;}}
runsEl.addEventListener('click',e=>{const b=e.target.closest('.run[data-a]');if(!b)return;setCursor(st.cx,+b.dataset.a,st.cz);});

/* ---------- blocks to gather ---------- */
function renderBlocks(){const list=scope==='layer'?(byY.get(st.cy)||[]):(st.mode==='step'?S.steps[st.cur].list:S.ALL);
  const c={};let n=0;for(const v of list)if(placeable(v)){c[v.id]=(c[v.id]||0)+1;n++;}
  const rows=Object.entries(c).sort((a,b)=>b[1]-a[1]);
  $('mats').innerHTML=rows.length?rows.map(([id,k])=>`<div class="mat"><span class="sw" style="background:${S.B[id].c}"></span><span>${S.B[id].n}</span><span class="n">${k.toLocaleString()}${k>=64?` <span class="st">${Math.floor(k/64)}×64${k%64?'+'+k%64:''}</span>`:''}</span></div>`).join('')
    :`<p class="muted small" style="margin:6px 2px">Nothing to place ${scope==='layer'?'on layer '+st.cy:'here'}.</p>`;
  $('blkTotal').textContent=n.toLocaleString();
  $('scopeStep').textContent=st.mode==='step'?'This step':'Whole build';
  document.querySelectorAll('[data-scope]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.scope===scope));}
document.querySelectorAll('[data-scope]').forEach(b=>b.onclick=()=>{scope=b.dataset.scope;renderBlocks();});

/* ---------- steps ---------- */
function renderSteps(){let html='',g='';
  S.steps.forEach(s=>{if(s.g!==g){g=s.g;html+=`<h3>${g}</h3>`;}const dn=done.has(s.id);
    html+=`<div class="srow${st.mode==='step'&&s.i===st.cur?' on':''}"><button class="tick" data-tick="${s.i}" aria-pressed="${dn}" aria-label="Mark ${s.name} done">${dn?'✓':s.i+1}</button><button class="go" data-go="${s.i}"><span>${s.name}</span><span class="yr">${s.ya===s.yb?'y '+s.ya:'y '+s.ya+'–'+s.yb}</span></button></div>`;});
  $('stepList').innerHTML=html||'<p class="muted small">No build steps yet.</p>';
  $('prog').textContent=`${done.size}/${S.steps.length} done`;$('progBar').style.width=(S.steps.length?done.size/S.steps.length*100:0)+'%';
  document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===st.mode));
  document.querySelectorAll('[data-earlier]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.earlier===st.earlier));
  $('earlierRow').hidden=st.mode!=='step';
  const s=S.steps[st.cur];
  if(st.mode==='step'){$('sGrp').textContent=`Step ${s.i+1} of ${S.steps.length} · ${s.g}`;$('sName').textContent=s.name;}
  else{$('sGrp').textContent=`Whole build · ${S.steps.length} steps`;$('sName').textContent='Choose a step';}
  $('sPrev').disabled=st.mode==='step'&&st.cur<=0;$('sNext').disabled=st.mode==='step'&&st.cur>=S.steps.length-1;
  $('sDone').disabled=st.mode!=='step';$('sDone').setAttribute('aria-pressed',!!(st.mode==='step'&&s&&done.has(s.id)));
  if(!S.steps.length){$('sPrev').disabled=$('sNext').disabled=true;$('sName').textContent='No steps yet';}}
function goToStep(i){if(!S||!S.steps.length)return;st.cur=Math.max(0,Math.min(S.steps.length-1,i));st.mode='step';
  const s=S.steps[st.cur],pool=s.list.filter(placeable);
  if(pool.length){let ya=1e9;for(const v of pool)if(v.y<ya)ya=v.y;let best=null,bd=1e9;
    for(const v of pool){if(v.y!==ya)continue;const d=(v.x-st.cx)**2+(v.z-st.cz)**2;if(d<bd){bd=d;best=v;}}st.cx=best.x;st.cz=best.z;st.cy=best.y;}
  frameStep(s);refresh(true);}
function toggleDone(i){const id=S.steps[i].id;if(done.has(id))done.delete(id);else done.add(id);renderSteps();save();}
$('stepList').addEventListener('click',e=>{const t=e.target.closest('[data-tick]');if(t){toggleDone(+t.dataset.tick);return;}
  const g=e.target.closest('[data-go]');if(g){goToStep(+g.dataset.go);closeSheets();}});
$('sPrev').onclick=()=>goToStep(st.mode==='step'?st.cur-1:st.cur);$('sNext').onclick=()=>goToStep(st.mode==='step'?st.cur+1:st.cur);
$('sDone').onclick=()=>{if(st.mode==='step')toggleDone(st.cur);};
$('stepName').onclick=()=>{if(!wide())openSheet('pSteps');else $('stepList').querySelector('.srow.on')?.scrollIntoView({block:'nearest'});};
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{if(b.dataset.mode==='step')goToStep(st.cur);else{st.mode='all';resetCam();refresh(false);}});
document.querySelectorAll('[data-earlier]').forEach(b=>b.onclick=()=>{st.earlier=b.dataset.earlier;refresh(false);});

/* ---------- sheets (mobile) and the About drawer ---------- */
function openSheet(id){closeSheets(true);const p=$(id);p.classList.add('open');$('scrim').hidden=false;
  document.querySelectorAll('.dock button').forEach(b=>b.setAttribute('aria-expanded',b.dataset.open===id));
  if(id==='pSteps')requestAnimationFrame(()=>$('stepList').querySelector('.srow.on')?.scrollIntoView({block:'center'}));}
function closeSheets(keep){document.querySelectorAll('.panel.open').forEach(p=>p.classList.remove('open'));if(!keep)$('scrim').hidden=true;
  document.querySelectorAll('.dock button').forEach(b=>b.setAttribute('aria-expanded','false'));}
document.querySelectorAll('.dock button').forEach(b=>b.onclick=()=>{if($(b.dataset.open).classList.contains('open'))closeSheets();else openSheet(b.dataset.open);});
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeSheets());
$('scrim').onclick=()=>closeSheets();
$('aboutBtn').onclick=()=>openSheet('pAbout');
$('frameOnly').onchange=e=>{st.frame=e.target.checked;refresh(false);};
{let armed=0;$('resetProg').onclick=()=>{if(Date.now()-armed>4000){armed=Date.now();$('resetMsg').textContent='Tap again to clear every tick for this design.';return;}
  done.clear();armed=0;save();renderSteps();$('resetMsg').textContent='Progress cleared.';};}
function renderAbout(){$('aName').textContent=D.name;
  const t=(D.tiers||[]).map(x=>`<div><span class="yr">y ${x.a}${x.b>x.a?'–'+x.b:''}</span><h3>${x.name}</h3><p>${x.p}</p></div>`).join('');
  const n=(D.notes||[]).map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('');
  const c={};S.ALL.forEach(v=>c[v.id]=(c[v.id]||0)+1);
  const tot=Object.entries(c).sort((a,b)=>b[1]-a[1]).map(([id,k])=>`<div class="ci"><span class="sw" style="background:${S.B[id].c}"></span><span class="nm">${S.B[id].n}</span><span class="n">${k.toLocaleString()}</span></div>`).join('');
  $('aboutBody').innerHTML=`<p>${D.blurb||''}</p>${t}${n}<div><h3>Every block</h3><div class="counts">${tot}</div></div>`;
  $('frameOnly').checked=!!(st&&st.frame);$('resetMsg').textContent='';}

/* ---------- tabs and redraw ---------- */
function setTab(t,quiet){ui.tab=t;store.set('bw:ui',ui);$('stage').dataset.tab=t;syncButtons();
  requestAnimationFrame(()=>{follow();draw2D();if(t==='3d'){size3D();update3D();}if(t==='pic')drawPic();});}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>setTab(b.dataset.tab));
function syncButtons(){const t=ui.tab,w=wide();
  document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.tab===t||(w&&b.dataset.tab==='plan'&&t==='side')));
  document.querySelector('[data-tab="plan"]').textContent=w?'Top + side':'Top';
  document.querySelectorAll('[data-axis]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.axis===st.axis));
  $('upTo').setAttribute('aria-pressed',st.upTo);$('cut').setAttribute('aria-pressed',st.cut);
  $('zIn').disabled=st.cols<=ZL[ZL.length-1];$('zOut').disabled=st.cols>=ZL[0];
  const grid=t==='plan'||t==='side';$('layerChip').hidden=!grid;$('sideDir').hidden=!(t==='side'||(w&&t==='plan'));
  $('zIn').parentElement.style.visibility=grid?'visible':'hidden';
  $('tools3d').hidden=t!=='3d';$('toolsPic').hidden=t!=='pic';}
function draw2D(){const t=ui.tab,w=wide();if(t==='plan'||(w&&t==='side'))drawPlan();if(t==='side'||(w&&t==='plan'))drawSide();}
function refresh(fol){if(fol)follow();else clampViews();renderSteps();readout();drawColumn(true);layerChip();renderBlocks();draw2D();update3D();picDirty=true;if(ui.tab==='pic')drawPic();$('frameOnly').checked=st.frame;save();}
new ResizeObserver(()=>{if(!S||$('builder').hidden)return;clampViews();syncButtons();draw2D();if(ui.tab==='pic')drawPic();}).observe($('stage'));
const reTheme=()=>{if(S&&!$('builder').hidden){draw2D();update3D();if(ui.tab==='pic')drawPic();}};
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',reTheme);
new MutationObserver(reTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

$('studioBtn').onclick=()=>{if($('pStudio').classList.contains('open'))closeSheets();else{openSheet('pStudio');BK.Studio&&BK.Studio.refresh();}};
BK.Builder={open,reload,context,openStudio:()=>openSheet('pStudio'),close:()=>{closeSheets();}};
})(globalThis.BK=globalThis.BK||{});
