/* Astrolabe — a compass floor drawn as an astrolabe: a gold rim with a degree scale and a 24-hour ring, a dark plate
   engraved with almucantar circles, a gold ecliptic ring set off-centre, star pointers, a raised sighting rule
   and a pin, with the throne and shackle at north. 41 blocks across plus the throne. */
BK.register({
  id:'compass-astrolabe',
  version:1,
  name:'Astrolabe',
  blurb:'A compass floor drawn as an astrolabe: a gold rim and degree scale, a 24-hour ring, a deepslate plate engraved with almucantar circles, an off-centre ecliptic ring with star pointers, a raised sighting rule on a pin, and the throne and shackle at north.',
  tags:['Compass','Floor','Celestial','Large'],
  edition:'Bedrock',
  extent:24,
  start:{x:0,y:0,z:-20},
  ring:20.5,
  steps:[
    ['Plate','plate','Deepslate plate'],
    ['Plate','lines','Almucantars, meridian & horizon'],
    ['Rete','rete','Ecliptic ring & tropic'],
    ['Rete','stars','Star pointers'],
    ['Mater','hours','24-hour ring'],
    ['Mater','scale','Degree scale'],
    ['Mater','rim','Gold rim'],
    ['Mater','throne','Throne & shackle'],
    ['Rule','rule','Sighting rule & pin']
  ],
  tiers:[
    {a:0,b:0,name:'Plate',short:'Engraved almucantars',p:'The plate is polished deepslate engraved in calcite: four almucantar circles of equal altitude, each smaller and further north than the last, as they fall on a real astrolabe; a gold horizon line; and a meridian and an east–west line crossing at the pin. Over it lies the rete in gold: the off-centre ecliptic ring, divided into twelve signs by blackstone marks, and the circle of the tropic, with eight flame-shaped star pointers, each tipped with a froglight star.',m:['polished_deepslate','calcite','gold_block','chiseled_polished_blackstone','ochre_froglight']},
    {a:0,b:2,name:'Mater & rule',short:'Hours, degrees, rim, throne',p:'Round the plate, a 24-hour ring of polished blackstone bricks with a calcite mark at each hour, then a quartz degree scale with a blackstone tick every 10° and a gold one every 30°, inside a solid gold rim. At north the rim rises into a throne with a gold shackle ring, the way an astrolabe hangs. A dark oak sighting rule lies across the face on slabs with a sight vane at each end, turning on a gold pin with a lightning-rod horse.',m:['polished_blackstone_bricks','deepslate_bricks','smooth_quartz','polished_blackstone','gold_block','dark_oak_slab','dark_oak_fence','lightning_rod']}
  ],
  notes:[
    ['Reading it','North is the throne. The almucantars crowd toward the north, as on a real astrolabe set for a northern latitude. The rule points at 30° east of north; swing it to any bearing you like.'],
    ['Size','About 1,700 blocks, a little over a stack of them gold. Swap gold for yellow concrete or glazed terracotta for a cheaper build.']
  ],
  build(w){
    const {put,each,RNG}=w;
    const bear=(x,z)=>((Math.atan2(z,x)*180/Math.PI)+450)%360;
    const RP=16.5;
    each((x,z)=>{const r=Math.hypot(x,z);if(r>20.5)return;const deg=bear(x,z);let id,step;
      if(r>19.5){id='gold_block';step='rim';}
      else if(r>17.6){const q=deg%10;id=deg%30<2.2?'gold_block':q<2.2?'polished_blackstone':'smooth_quartz';step='scale';}
      else if(r>RP){id=(deg%15)<2.4?'calcite':'polished_blackstone_bricks';step='hours';}
      else{id='polished_deepslate';step='plate';
        // almucantars: off-centre circles, crowding north
        for(let i=0;i<4;i++){const cz=-1-i*1.3,rr=14.4-i*3.3;if(Math.abs(Math.hypot(x,z-cz)-rr)<.5){id=i===0?'gold_block':'calcite';step='lines';}}
        if(x===0||z===0){id='calcite';step='lines';}}
      w.comp=step;put(x,0,z,id);});
    // rete: ecliptic ring off-centre, tropic circle, twelve sign marks
    w.comp='rete';
    each((x,z)=>{const r=Math.hypot(x,z);const d=Math.hypot(x,z-4.2);
      if(Math.abs(d-10.4)<.6){const k=Math.floor(((Math.atan2(z-4.2,x)*180/Math.PI)+360)%360/30);put(x,0,z,((Math.atan2(z-4.2,x)*180/Math.PI+360)%30)<4?'chiseled_polished_blackstone':'gold_block');}
      else if(r>15.6&&r<=16.5)put(x,0,z,'gold_block');});
    // star pointers: flames from the rete inward, each ending in a star
    w.comp='stars';
    for(const [b,r0,r1] of [[20,15.6,9],[75,15.6,11],[125,15.6,8.5],[160,15.6,12],[215,15.6,9.5],[250,15.6,7.5],[300,15.6,10.5],[340,15.6,12.5]]){
      const t=b*Math.PI/180,sx=Math.sin(t),sz=-Math.cos(t);
      each((x,z)=>{const al=x*sx+z*sz,pe=x*Math.cos(t)+z*Math.sin(t);if(al>r0||al<r1)return;
        const wd=.9*(al-r1)/(r0-r1);if(Math.abs(pe-.6*Math.sin((al-r1)*.9))<=wd+.15)put(x,0,z,'gold_block');});
      put(Math.round(sx*r1),0,Math.round(sz*r1),'ochre_froglight');}
    // throne and shackle at north
    w.comp='throne';
    for(let x=-3;x<=3;x++)for(let z=-23;z<=-20;z++){const ax=Math.abs(x),dz=-20-z;if(dz>3-ax*.9||(dz===0&&ax>3))continue;put(x,0,z,(ax===0&&dz===1)?'chiseled_polished_blackstone':'gold_block');}
    for(const [x,z] of [[-1,-24],[1,-24],[0,-25],[-1,-25],[1,-25]])put(x,0,z,(x===0&&z===-25)?'gold_block':'gold_block');
    put(0,0,-24,'polished_deepslate');
    // sighting rule on slabs, sights at each end, gold pin with a horse
    w.comp='rule';
    {const t=30*Math.PI/180,sx=Math.sin(t),sz=-Math.cos(t),seen=new Set();
      for(let a=-16;a<=16;a+=.25){const x=Math.round(a*sx),z=Math.round(a*sz),k=x+','+z;if(seen.has(k)||(x===0&&z===0))continue;seen.add(k);put(x,1,z,'dark_oak_slab');}
      for(const a of [-16.5,16.5]){const x=Math.round(a*sx),z=Math.round(a*sz);put(x,1,z,'dark_oak_fence');put(x,2,z,'dark_oak_fence');}}
    put(0,1,0,'gold_block');put(0,2,0,'lightning_rod');
  }
});
