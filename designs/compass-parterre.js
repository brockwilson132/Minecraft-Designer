/* Hedge Parterre — a garden compass built in 3D: an eight-point star of clipped box hedges with each point planted
   in its own flower, gravel walks, a tiered fountain, topiary cones, a high outer hedge with four gates and an
   obelisk at north. 41 blocks across. */
BK.register({
  id:'compass-parterre',
  version:1,
  name:'Hedge Parterre',
  blurb:'A garden compass in 3D: an eight-point star of clipped box hedges, each point planted in its own flower, gravel walks, a tiered fountain, topiary cones, a tall outer hedge with four gated openings and an obelisk at north.',
  tags:['Compass','Garden','Landscape','Large'],
  edition:'Bedrock',
  extent:22,
  start:{x:0,y:1,z:-20},
  ring:20.5,
  figure:{x:2,z:19},
  steps:[
    ['Ground','ground','Lawn & gravel walks'],
    ['Star','beds','Flower beds'],
    ['Star','hedges','Box hedges'],
    ['Centre','fountain','Fountain basin & tiers'],
    ['Edge','outer','Outer hedge'],
    ['Edge','gates','Gate piers & lanterns'],
    ['Edge','topiary','Topiary cones'],
    ['Edge','obelisk','North obelisk']
  ],
  tiers:[
    {a:0,b:1,name:'Star beds',short:'Eight points, eight flowers',p:'An eight-point star laid out in low box hedge. The four cardinal points run 16 blocks out from the fountain; the four diagonal points start further out and reach 15, and each is planted in one flower so the compass reads in colour: poppies north, dandelions east, alliums south, cornflowers west, and pink tulips in the four short points. Lawn fills the spaces between the points, and a gravel walk rings the fountain.',m:['oak_leaves','grass_block','poppy','dandelion','allium','cornflower','pink_tulip','gravel']},
    {a:0,b:4,name:'Fountain & edge',short:'Tiered fountain, gated hedge',p:'A round stone basin with a two-tier fountain stands at the centre. Gravel walks run out between the points to a circular walk, and a tall outer hedge, two blocks high, encloses the garden with an opening at each cardinal point between stone piers carrying lanterns. Dark spruce topiary cones stand on the circular walk at the diagonals, and a stone obelisk with a copper tip marks north.',m:['polished_andesite','stone_brick_slab','stone_brick_wall','chiseled_stone_bricks','water','oak_leaves','stone_bricks','lantern','spruce_leaves','lightning_rod']}
  ],
  notes:[
    ['Hedges','Leaves placed by hand do not decay, so the hedges stay put. Shears are not needed.'],
    ['Flowers','Swap in any flowers you have. The point is that each direction has its own colour.']
  ],
  build(w){
    const {put,each}=w;
    const bear=(x,z)=>((Math.atan2(z,x)*180/Math.PI)+450)%360;
    // eight points: [bearing, tip radius, half-width at the hub, flower]
    const PTS=[[0,16,6.2,'poppy'],[90,16,6.2,'dandelion'],[180,16,6.2,'allium'],[270,16,6.2,'cornflower'],
      [45,15.5,3.1,'pink_tulip',5.5,10],[135,15.5,3.1,'pink_tulip',5.5,10],[225,15.5,3.1,'pink_tulip',5.5,10],[315,15.5,3.1,'pink_tulip',5.5,10]];
    const which=(x,z)=>{for(const [b,tip,W,fl,a0=3.8,am=3.8] of PTS){const t=b*Math.PI/180,al=x*Math.sin(t)-z*Math.cos(t),pe=x*Math.cos(t)+z*Math.sin(t);
      if(al<a0||al>tip)continue;const wd=al<am?W*(al-a0)/(am-a0):W*(tip-al)/(tip-am);if(Math.abs(pe)<=wd+.3)return fl;}return null;};
    each((x,z)=>{const r=Math.hypot(x,z);if(r>20.5)return;
      w.comp='ground';
      if(r<=3.6){put(x,0,z,'polished_andesite');return;}
      if(r<=4.8){put(x,0,z,'gravel');return;}
      if(r>16.6&&r<=18.4){put(x,0,z,'gravel');return;}
      if(r>18.4){put(x,0,z,'grass_block');
        const gate=Math.min(...[0,90,180,270].map(b=>{let d=Math.abs(bear(x,z)-b);return Math.min(d,360-d);}))*Math.PI/180*r<1.6;
        w.comp='outer';if(!gate){put(x,1,z,'oak_leaves');put(x,2,z,'oak_leaves');}else{w.comp='ground';put(x,0,z,'gravel');}return;}
      const fl=which(x,z);
      if(fl){const edge=[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>which(x+a,z+b)!==fl);
        put(x,0,z,'grass_block');
        if(edge){w.comp='hedges';put(x,1,z,'oak_leaves');}else{w.comp='beds';put(x,1,z,fl);}return;}
      // walks between the points
      const onWalk=[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].some(b=>{const t=b*Math.PI/180;return Math.abs(x*Math.cos(t)+z*Math.sin(t))<.7&&(x*Math.sin(t)-z*Math.cos(t))>0;});
      put(x,0,z,onWalk?'gravel':'grass_block');});
    // fountain
    w.comp='fountain';
    each((x,z)=>{const r=Math.hypot(x,z);if(r<=2.6)put(x,0,z,'water');else if(r<=3.6)put(x,1,z,'stone_brick_slab');});
    put(0,0,0,'polished_andesite');put(0,1,0,'stone_brick_wall');put(0,2,0,'polished_andesite');
    for(const [a,b] of [[1,0],[-1,0],[0,1],[0,-1]])put(a,2,b,'stone_brick_slab');
    put(0,3,0,'stone_brick_wall');put(0,4,0,'chiseled_stone_bricks');put(0,5,0,'water');
    // gate piers with lanterns either side of each opening
    w.comp='gates';
    for(const [ax,az] of [[0,-1],[1,0],[0,1],[-1,0]])for(const s of [-2,2]){const x=Math.round(ax*19.4+(az?s:0)),z=Math.round(az*19.4+(ax?s:0));
      for(let y=1;y<=2;y++)put(x,y,z,'stone_bricks');put(x,3,z,'chiseled_stone_bricks');put(x,4,z,'lantern');}
    // topiary cones on the circular walk at the diagonals
    w.comp='topiary';
    for(const b of [45,135,225,315]){const t=b*Math.PI/180,x=Math.round(17.5*Math.sin(t)),z=Math.round(-17.5*Math.cos(t));
      put(x,0,z,'grass_block');for(let y=1;y<=2;y++)for(const [a,c] of [[0,0],[1,0],[-1,0],[0,1],[0,-1]])put(x+a,y,z+c,'spruce_leaves');
      put(x,3,z,'spruce_leaves');put(x,4,z,'spruce_leaves');}
    // obelisk at north, on the circular walk
    w.comp='obelisk';
    {const z=-17;for(let x=-1;x<=1;x++)for(let dz=-1;dz<=1;dz++)put(x,1,z+dz,'stone_bricks');
      put(0,2,z,'chiseled_stone_bricks');for(let y=3;y<=6;y++)put(0,y,z,'polished_andesite');put(0,7,z,'stone_brick_wall');put(0,8,z,'lightning_rod');}
  }
});
