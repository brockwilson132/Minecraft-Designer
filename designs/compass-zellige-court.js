/* Zellige Courtyard — a Moorish courtyard compass: a sixteen-point star of glazed tiles round a tiered fountain,
   four water rills running to the cardinal points, a chevron border and orange trees in tiled planters. 41 blocks across. */
BK.register({
  id:'compass-zellige-court',
  version:1,
  name:'Zellige Courtyard',
  blurb:'A Moorish courtyard compass: a sixteen-point zellige star in glazed tiles and white strapwork, four water rills running to the cardinal points from a tiered fountain, a chevron border and orange trees in tiled planters.',
  tags:['Compass','Floor','Courtyard','Large'],
  edition:'Bedrock',
  extent:22,
  start:{x:0,y:0,z:-18},
  ring:20.5,
  steps:[
    ['Star','star','Sixteen-point star'],
    ['Star','strap','White strapwork'],
    ['Field','lattice','Lattice field'],
    ['Water','rills','Four rills & quartz kerbs'],
    ['Water','fountain','Tiered fountain'],
    ['Border','border','Chevron border'],
    ['Border','paving','Outer paving & north spout'],
    ['Garden','planters','Planters & orange trees'],
    ['Garden','lamps','Lanterns']
  ],
  tiers:[
    {a:0,b:0,name:'Star',short:'Sixteen points in glazed tile',p:'A sixteen-point star fills the middle, each point split light and dark so it seems to fold: cyan and blue on eight points, ochre yellow and orange on the other eight, and north in red and orange. White quartz strapwork outlines the star and rings it halfway out, the way zellige panels are banded. Outside the star a diamond lattice of white tiles on smooth sandstone runs out to the border.',m:['light_blue_glazed_terracotta','blue_glazed_terracotta','white_glazed_terracotta','cyan_glazed_terracotta','yellow_glazed_terracotta','orange_glazed_terracotta','smooth_quartz','calcite','smooth_sandstone']},
    {a:0,b:4,name:'Water',short:'Four rills from a tiered fountain',p:'Four narrow rills, one block wide and kerbed in smooth quartz where they cross the paving, run from the fountain to the four cardinal points, cutting the court into quarters as in a four-part garden. The fountain is a round quartz basin with a pillar, a chiseled quartz bowl and a jet. At the north end of the north rill a gold spout with a lantern marks north.',m:['water','smooth_quartz','smooth_quartz_slab','quartz_pillar','chiseled_quartz','gold_block','lantern']},
    {a:0,b:6,name:'Border & garden',short:'Chevrons, planters, orange trees',p:'A chevron border in cyan and white glazed tile between bands of polished blackstone frames the star. Beyond it, smooth sandstone paving holds eight tiled planters on the diagonals and half-winds, each with an orange tree (an oak trunk and leaves dotted with flowering azalea), and lanterns on quartz posts at the ends of the rills.',m:['cyan_glazed_terracotta','white_glazed_terracotta','polished_blackstone','smooth_sandstone','stripped_oak_log','oak_leaves','flowering_azalea_leaves','quartz_pillar','lantern']}
  ],
  notes:[
    ['Glazed terracotta','Each tile is given a turn (shown in the cursor readout) so neighbouring tiles make a running pattern. Turn the tile to match, or ignore the turns for a simpler look.'],
    ['Water','The rills are source blocks set one deep in the floor, level with it. Place them after the kerbs so they do not spill.']
  ],
  build(w){
    const {put,each}=w;
    const R=20.5,RS0=7.2,RS1=12.9;
    const bear=(x,z)=>((Math.atan2(z,x)*180/Math.PI)+450)%360;
    // sixteen-point star radius at a bearing
    const starR=deg=>{const f=deg/22.5,t=f-Math.round(f);return RS0+(RS1-RS0)*(1-Math.abs(t)*2);};
    const inStar=(x,z)=>Math.hypot(x,z)<=starR(bear(x,z));
    const rill=(x,z)=>(x===0||z===0)&&Math.hypot(x,z)>2.5&&Math.hypot(x,z)<=17.5;
    const kerb=(x,z)=>!rill(x,z)&&Math.hypot(x,z)>14.1&&((Math.abs(x)===1&&Math.abs(z)>2)||(Math.abs(z)===1&&Math.abs(x)>2))&&Math.hypot(x,z)<=17.5;
    const turn=(x,z)=>(((x+z)%4+4)%4)*90;
    each((x,z)=>{const r=Math.hypot(x,z);if(r>R)return;const deg=bear(x,z);let id,ex,step;
      if(r<=2.5){id='smooth_quartz';step='fountain';}
      else if(r<=13.4&&inStar(x,z)){
        const edge=[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>!inStar(x+a,z+b))||Math.abs(r-4.2)<.5;
        if(edge){id='smooth_quartz';step='strap';}
        else{const k=((Math.round(deg/22.5)%16)+16)%16,t=deg/22.5-Math.round(deg/22.5),lite=t<0;step='star';
          id=k===0?(lite?'red_glazed_terracotta':'orange_glazed_terracotta'):k%2?(lite?'yellow_glazed_terracotta':'orange_glazed_terracotta'):(lite?'cyan_glazed_terracotta':'blue_glazed_terracotta');ex={turn:turn(x,z)};}}
      else if(r<=13.4){step='lattice';id=(((x+z)%4+4)%4===0||((x-z)%4+4)%4===0)?'white_glazed_terracotta':'smooth_sandstone';if(id!=='smooth_sandstone')ex={turn:turn(x,z)};}
      else if(r<=14.1){id='polished_blackstone';step='border';}
      else if(r<=15.7){const bin=Math.floor(deg/7.5);id=((bin+(r>14.9?1:0))%2)?'cyan_glazed_terracotta':'white_glazed_terracotta';ex={turn:turn(x,z)};step='border';}
      else if(r<=16.4){id='polished_blackstone';step='border';}
      else{id='smooth_sandstone';step='paving';}
      w.comp=step;put(x,0,z,id,ex);});
    // rills and kerbs cut through everything
    w.comp='rills';
    each((x,z)=>{if(rill(x,z))put(x,0,z,'water');else if(kerb(x,z))put(x,0,z,'smooth_quartz');});
    // fountain: basin, pillar, bowl, jet
    w.comp='fountain';
    each((x,z)=>{const r=Math.hypot(x,z);if(r<=1.5)put(x,0,z,'water');else if(r<=2.5)put(x,1,z,'smooth_quartz_slab');});
    put(0,0,0,'quartz_pillar');put(0,1,0,'quartz_pillar');put(0,2,0,'chiseled_quartz');
    for(const [a,b] of [[1,0],[-1,0],[0,1],[0,-1]])put(a,2,b,'smooth_quartz_slab');
    put(0,3,0,'water');
    // north spout
    w.comp='paving';
    put(0,0,-18,'gold_block');put(0,1,-18,'chiseled_quartz');put(0,2,-18,'lantern');
    // planters with orange trees on the diagonals and half-winds (8)
    w.comp='planters';
    for(let k=0;k<8;k++){const t=(22.5+k*45)*Math.PI/180,cx=Math.round(18.6*Math.sin(t)),cz=Math.round(-18.6*Math.cos(t));
      for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++){if(dx||dz)put(cx+dx,1,cz+dz,'cyan_glazed_terracotta',{turn:turn(cx+dx,cz+dz)});else put(cx,1,cz,'grass_block');put(cx+dx,0,cz+dz,'smooth_sandstone');}
      for(let y=2;y<=3;y++)put(cx,y,cz,'stripped_oak_log');
      for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++)for(let y=4;y<=5;y++){if(y===5&&dx&&dz)continue;put(cx+dx,y,cz+dz,((dx*3+dz+y)%3===0)?'flowering_azalea_leaves':'oak_leaves');}
      put(cx,6,cz,'oak_leaves');}
    // lanterns on quartz posts flanking the ends of the rills
    w.comp='lamps';
    for(const [ax,az] of [[0,-1],[1,0],[0,1],[-1,0]])for(const s of [-2,2]){const x=ax*17+(az?s:0),z=az*17+(ax?s:0);put(x,1,z,'quartz_pillar');put(x,2,z,'lantern');}
  }
});
