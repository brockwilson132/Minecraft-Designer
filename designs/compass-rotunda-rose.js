/* Rotunda Compass Rose — the floor of the Cartographer's Rotunda on its own: a round 15-block map sunk in a
   sea band and a lit copper halo, at the heart of a 24-point compass rose. 37 blocks across. x 0, z 0 is the centre. */
BK.register({
  id:'compass-rotunda-rose',
  version:1,
  name:'Rotunda Compass Rose',
  blurb:'The floor of the Cartographer\'s Rotunda on its own: a sunken round map in a sea band and lit copper halo, inside a bevelled 24-point compass rose, a degree ring and a sunburst.',
  tags:['Compass','Floor','Map room','Large'],
  edition:'Bedrock',
  extent:20,
  start:{x:0,y:0,z:-15},
  ring:18.5,
  steps:[
    ['Map','map-bed','Glowstone bed & map'],
    ['Map','halo','Sea band & copper halo'],
    ['Rose','cardinals','North, east, south & west points'],
    ['Rose','corners','Corner points'],
    ['Rose','half-winds','Half-wind points'],
    ['Rose','field','Sandstone field & rosettes'],
    ['Rose','fleur','Gold fleur-de-lis'],
    ['Rings','degrees','Degree ring & band'],
    ['Rings','sunburst','Sunburst']
  ],
  tiers:[
    {a:-1,b:0,name:'Map',short:'Sunken map, sea band, lit halo',p:'Your round map, 15 blocks across (177 maps in regular item frames), is sunk one block on glowstone at y −1, so it sits in a shallow basin. A band of dark prismarine forms its lip, like sea round land, and a ring of oxidized copper grate over ochre froglights glows around it.',m:['map','glowstone','dark_prismarine','copper_grate','ochre_froglight']},
    {a:0,b:0,name:'Compass rose',short:'24 bevelled points, north in red',p:'A great 24-point compass rose springs from the halo onto a smooth sandstone field, laid like an old parchment chart. Each point is bevelled, light on one side and dark on the other, so it reads as raised. North is red, as on old sea charts: a redstone block side and a red nether brick side, crowned with a gold fleur-de-lis. East, south and west are smooth stone and polished blackstone, the ink of the chart. The four corner points are brown terracotta and dark oak, and the eight half-winds are spruce and dark oak. Orange glazed terracotta rosettes sit on the half-wind lines.',m:['redstone_block','red_nether_bricks','gold_block','smooth_stone','polished_blackstone_bricks','brown_terracotta','dark_oak_planks','spruce_planks','smooth_sandstone','orange_glazed_terracotta']},
    {a:0,b:0,name:'Rings',short:'Degree ring, oak band, sunburst',p:'A 32-tick degree ring of dark oak and brown terracotta crosses the points near the edge. A solid dark oak band frames the rose, and beyond it a sunburst of alternating spruce and dark oak wedges, 32 of them, runs out to the rim.',m:['dark_oak_planks','brown_terracotta','spruce_planks']}
  ],
  notes:[
    ['Where it comes from','This is the floor drawn for the Cartographer\'s Rotunda, block for block. Use it under any round room 37 blocks across, or on its own as a plaza.'],
    ['Glazed terracotta','Each rosette is four orange tiles, each turned a quarter from the last. In Bedrock the pattern faces the way you are looking, so turn 90° between tiles. The cursor readout gives each tile\'s turn.'],
    ['The map','Sunk one block: glowstone at y −1 with the item frames on top of it at y 0. The froglights under the copper grate are also at y −1.']
  ],
  build(w){
    const {put,ins,each,pillarAng,vn}=w;
    const mapColor=(x,z)=>{const e=.62*vn(x/4.2+3,z/4.2+5)+.38*vn(x/1.9+11,z/1.9+2);
      return e<.33?'#3f5bc0':e<.42?'#4f70d4':e<.46?'#e6d9a0':e<.66?'#7fb238':e<.79?'#3f8a2a':'#8f8f8f';};
    const R1=18.5,MAPR=7.5,ROSE0=9.5;
    // points: [bearing from north (deg), tip radius, half-width at base, light block, dark block, step]
    const POINTS=[];
    POINTS.push([0,15.3,3.0,'redstone_block','red_nether_bricks','cardinals']);
    for(let i=1;i<4;i++)POINTS.push([i*90,15.3,3.0,'smooth_stone','polished_blackstone_bricks','cardinals']);
    for(let i=0;i<4;i++)POINTS.push([45+i*90,13.6,2.3,'brown_terracotta','dark_oak_planks','corners']);
    for(let i=0;i<8;i++)POINTS.push([22.5+i*45,11.6,1.3,'spruce_planks','dark_oak_planks','half-winds']);
    const ROS=new Map();
    pillarAng(8).forEach(a=>{const cx=12.9*Math.cos(a)-.5,cz=12.9*Math.sin(a)-.5;const x0=Math.round(cx),z0=Math.round(cz);
      [[0,0,0],[1,0,90],[1,1,180],[0,1,270]].forEach(([dx,dz,t])=>ROS.set((x0+dx)+','+(z0+dz),t));});
    each((x,z)=>{
      if(!ins(x,z,R1))return;
      const r=Math.hypot(x,z),deg=((Math.atan2(z,x)*180/Math.PI)+450)%360;
      let f;w.comp='field';
      if(ins(x,z,MAPR)){w.comp='map-bed';f='map';put(x,-1,z,'glowstone');}
      else if(r<=8.5){w.comp='halo';f='dark_prismarine';}
      else if(r<=9.5){w.comp='halo';f='copper_grate';put(x,-1,z,'ochre_froglight');}
      else{
        for(const [b0,tip,w0,lt,dk,step] of POINTS){
          let d=deg-b0;d=((d+540)%360)-180;const t=d*Math.PI/180,along=r*Math.cos(t),perp=r*Math.sin(t);
          if(along<ROSE0||along>tip+.3)continue;
          const wd=w0*(tip-along)/(tip-ROSE0);
          if(Math.abs(perp)<=wd+.2){f=perp>=0?lt:dk;w.comp=step;break;}
        }
        if(!f){
          if(ROS.has(x+','+z))f='orange_glazed_terracotta';
          else if(r>13.9&&r<=14.9){w.comp='degrees';const k=Math.floor(((deg+5.625)%360)/11.25);f=k%2?'dark_oak_planks':'brown_terracotta';}
          else if(r>14.9&&r<=15.9){w.comp='degrees';f='dark_oak_planks';}
          else if(r>15.9){w.comp='sunburst';f=(Math.floor(deg/11.25)%2)?'spruce_planks':'dark_oak_planks';}
          else f='smooth_sandstone';}
      }
      if(f==='orange_glazed_terracotta')put(x,0,z,f,{turn:ROS.get(x+','+z)});else put(x,0,z,f,f==='map'?{hue:mapColor(x,z)}:undefined);
    });
    w.comp='fleur';
    [[0,-15],[-1,-14],[0,-14],[1,-14],[0,-13],[-2,-13],[2,-13]].forEach(([x,z])=>put(x,0,z,'gold_block'));
  }
});
