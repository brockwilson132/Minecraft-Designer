/* Blockwright · isometric picture renderer (2D canvas, no WebGL needed). Used for the Picture view and gallery thumbnails.
   drawIso(canvas, scene, {rot, dusk, vis(v)->0|1|2, tint(v), ghost:[r,g,b], figure:{x,z}, width, height, dpr, label}) */
(function(BK){
const hexRGB=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];
function drawIso(canvas,scene,o){
  const ix=canvas.getContext('2d'),{ALL,K,colorOf}=scene,RNG=BK.RNG,rot=o.rot||0,dusk=!!o.dusk,vis=o.vis||(()=>2),tint=o.tint||colorOf,B=scene.B;
  const R=(x,z)=>rot===0?[x,z]:rot===1?[z,-x]:rot===2?[-x,-z]:[-z,x];
  const RI=(x,z)=>rot===0?[x,z]:rot===1?[-z,x]:rot===2?[-x,-z]:[z,-x];
  function rotParts(ps){return ps.map(([x0,y0,z0,x1,y1,z1])=>{const a=R(x0-.5,z0-.5),b=R(x1-.5,z1-.5);return[Math.min(a[0],b[0])+.5,y0,Math.min(a[1],b[1])+.5,Math.max(a[0],b[0])+.5,y1,Math.max(a[1],b[1])+.5];});}
  const opaque=new Set();for(const v of ALL){const b=B[v.id];if(vis(v)&&!b.glass&&!b.sh)opaque.add(K(v.x,v.y,v.z));}
  const ghost=o.ghost||[200,206,203];
  const dpr=o.dpr||Math.min(globalThis.devicePixelRatio||1,2),W=o.width||canvas.clientWidth,H=o.height||canvas.clientHeight;if(!W||!H)return;
  canvas.width=W*dpr;canvas.height=H*dpr;ix.setTransform(dpr,0,0,dpr,0,0);
  const g=ix.createLinearGradient(0,0,0,H);
  if(dusk){g.addColorStop(0,'#121831');g.addColorStop(.55,'#383455');g.addColorStop(.86,'#b06e59');g.addColorStop(1,'#dc9d70');}
  else{g.addColorStop(0,'#a7c7da');g.addColorStop(.7,'#d9e7ec');g.addColorStop(1,'#eef2e8');}
  ix.fillStyle=g;ix.fillRect(0,0,W,H);
  if(dusk){for(let i=0;i<80;i++){ix.fillStyle=`rgba(255,255,240,${.2+RNG(i,1,1)*.55})`;ix.fillRect(RNG(i,3,9)*W,RNG(i,5,2)*H*.5,1.3,1.3);}}
  const occ=(x,y,z)=>{const p=RI(x,z);return opaque.has(K(p[0],y,p[1]));};
  const items=[];
  for(const v of ALL){const vv=vis(v);if(!vv)continue;const [rx,rz]=R(v.x,v.z);const b=B[v.id],full=!b.glass&&!b.sh;
    const top=!occ(rx,v.y+1,rz),rt=!occ(rx+1,v.y,rz),lf=!occ(rx,v.y,rz+1);
    if(full&&!top&&!rt&&!lf)continue;
    items.push({x:rx,y:v.y,z:rz,c:vv===1?ghost:hexRGB(tint(v)),p:rotParts(v.parts),full,glass:b.glass,grate:v.id==='copper_grate',emit:b.emit,top,rt,lf,j:(RNG(v.x,v.y,v.z)-.5)*.07});}
  const FIG=o.figure?[{x:o.figure.x,y:o.figure.y||0,z:o.figure.z,c:[60,78,150],p:[[.3,0,.4,.7,1,.6]]},{x:o.figure.x,y:(o.figure.y||0)+1,z:o.figure.z,c:[44,150,160],p:[[.27,0,.38,.73,.72,.62]]},{x:o.figure.x,y:(o.figure.y||0)+1,z:o.figure.z,c:[205,160,120],p:[[.3,.72,.35,.7,1,.65]]}]:[];
  FIG.forEach(f=>{const [rx,rz]=R(f.x,f.z);items.push({x:rx,y:f.y,z:rz,c:f.c,p:rotParts(f.p),full:false,j:0});});
  items.sort((a,b)=>(a.x+a.z)-(b.x+b.z)||a.y-b.y||(a.x-b.x));
  let mnx=1e9,mxx=-1e9,mny=1e9,mxy=-1e9;const LR=((scene.extent||24)+8)*1.414;
  const acc=(u,w,y)=>{const sx=u*.866,sy=w*.5-y;if(sx<mnx)mnx=sx;if(sx>mxx)mxx=sx;if(sy<mny)mny=sy;if(sy>mxy)mxy=sy;};
  for(const it of items){acc(it.x-it.z-1,it.x+it.z+1,it.y+1);acc(it.x+1-it.z,it.x+it.z+1,it.y+1);acc(it.x-it.z,it.x+it.z+2,it.y);}
  acc(-LR+1,1,0);acc(LR+1,1,0);acc(0,1+LR,0);
  const s=Math.min(W*.95/(mxx-mnx),H*.96/(mxy-mny));
  const hw=s*.866,hh=s*.5,ox=W/2-(mnx+mxx)/2*s,oy=H/2-(mny+mxy)/2*s;
  const P=(X,Y,Z)=>[ox+(X-Z)*hw,oy+(X+Z)*hh-Y*s];
  const [lx,ly]=P(.5,0,.5);
  const ell=(r,fill)=>{ix.save();ix.translate(lx,ly);ix.scale(1,hh/hw);ix.beginPath();ix.arc(0,0,r*hw*1.414,0,7);ix.restore();ix.fillStyle=fill;ix.fill();};
  ell((scene.extent||24)+8,dusk?'#2a3828':'#87a866');ell((scene.extent||24)-2,dusk?'rgba(0,0,0,.28)':'rgba(40,60,30,.18)');
  const dark=dusk?.48:1;
  const shade=(c,k,j)=>{const f=k*(1+j)*dark;return `rgb(${Math.min(255,c[0]*f)|0},${Math.min(255,c[1]*f)|0},${Math.min(255,c[2]*f)|0})`;};
  const line=s>5?'rgba(0,0,0,.07)':null;
  const poly=(a,b,c2,d,fill,alpha)=>{ix.globalAlpha=alpha;ix.beginPath();ix.moveTo(a[0],a[1]);ix.lineTo(b[0],b[1]);ix.lineTo(c2[0],c2[1]);ix.lineTo(d[0],d[1]);ix.closePath();ix.fillStyle=fill;ix.fill();
    if(line&&alpha===1){ix.strokeStyle=line;ix.lineWidth=.6;ix.stroke();}ix.globalAlpha=1;};
  const glows=[];
  for(const it of items){
    const al=it.glass?Math.min(.9,it.glass*(dusk?1.15:.75)):1;
    let c=it.c;if(it.glass&&dusk)c=it.grate?c.map(v=>Math.min(255,v*1.4)):[255,190,110];
    const k=it.emit?(dusk?2.1:1.1):(it.glass&&dusk?1.7:1);
    const all=!it.full;
    for(const [x0,y0,z0,x1,y1,z1] of it.p){
      const X0=it.x+x0,X1=it.x+x1,Z0=it.z+z0,Z1=it.z+z1,Y0=it.y+y0,Y1=it.y+y1;
      if(all||it.lf)poly(P(X0,Y0,Z1),P(X1,Y0,Z1),P(X1,Y1,Z1),P(X0,Y1,Z1),it.emit&&dusk?'#ffd27a':shade(c,.66*k,it.j),al);
      if(all||it.rt)poly(P(X1,Y0,Z0),P(X1,Y0,Z1),P(X1,Y1,Z1),P(X1,Y1,Z0),it.emit&&dusk?'#ffc35a':shade(c,.82*k,it.j),al);
      if(all||it.top)poly(P(X0,Y1,Z0),P(X1,Y1,Z0),P(X1,Y1,Z1),P(X0,Y1,Z1),it.emit&&dusk?'#ffe2a0':shade(c,k,it.j),al);
    }
    if(it.emit&&dusk)glows.push(P(it.x+.5,it.y+.35,it.z+.5));
  }
  if(dusk){ix.globalCompositeOperation='lighter';for(const [gx,gy] of glows){const r=s*3.4;const rg=ix.createRadialGradient(gx,gy,0,gx,gy,r);rg.addColorStop(0,'rgba(255,190,90,.38)');rg.addColorStop(1,'rgba(255,190,90,0)');ix.fillStyle=rg;ix.fillRect(gx-r,gy-r,r*2,r*2);}ix.globalCompositeOperation='source-over';}
  const dirs=['south-east','south-west','north-west','north-east'];
  if(o.label===false)return;ix.font='500 11px "IBM Plex Mono",ui-monospace,monospace';ix.fillStyle=dusk?'rgba(240,230,215,.78)':'rgba(20,30,32,.7)';ix.textAlign='right';
  ix.fillText('From the '+dirs[rot],W-12,H-12);
}
BK.drawIso=drawIso;BK.hexRGB=hexRGB;
})(globalThis.BK=globalThis.BK||{});
