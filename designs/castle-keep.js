/* Castle Keep — a square stone keep with four round corner towers, a gatehouse, machicolated battlements
   and a deepslate pyramid roof over the great hall. x 0, z 0 is the middle of the hall; the gate faces south. */
BK.register({
  id:'castle-keep',
  version:1,
  name:'Castle Keep',
  blurb:'A square stone keep: four round corner towers with conical roofs, a gatehouse with a portcullis, battlements on corbels, and a great hall with a throne.',
  tags:['Medieval','Castle','Landmark','Large'],
  edition:'Bedrock',
  extent:15,
  start:{x:0,y:1,z:12},
  figure:{x:3,z:15},
  steps:[
    ['Ground','floor','Floor, carpet & path'],
    ['Ground','batter','Sloped footing'],
    ['Keep','walls','Keep walls'],
    ['Keep','openings','Slits & windows'],
    ['Keep','floors','Floors, roof deck & ladder'],
    ['Keep','battlements','Corbels & battlements'],
    ['Towers','towers','Corner towers'],
    ['Towers','tower-tops','Tower battlements'],
    ['Towers','tower-roofs','Tower roofs & flags'],
    ['Gate','gatehouse','Gatehouse'],
    ['Gate','gate','Gate, portcullis & banners'],
    ['Roof','roof','Hall roof'],
    ['Inside','hall','Great hall'],
    ['Inside','upper','Upper rooms']
  ],
  tiers:[
    {a:0,b:6,name:'Great hall',p:'A red carpet runs from the gate to a throne on the north wall, between two long tables. Lanterns hang from the beams.'},
    {a:7,b:18,name:'Upper floors',p:'Two storeys of chambers with arrow slits and paired windows. A ladder in the north-east corner climbs to the roof.'},
    {a:18,b:27,name:'Battlements',p:'The parapet stands one block proud on inverted stairs, with merlons on every other block. A deepslate pyramid roof covers the hall.'},
    {a:1,b:36,name:'Towers',p:'Four round towers rise above the keep with their own battlements, conical deepslate roofs and red flags.'}
  ],
  notes:[['Size','About 9,000 blocks, most of them stone bricks. Mossy and cracked bricks are mixed in at random: swap them for plain stone bricks if you like.']],
  build(w){
    const {put,clr,get,ins,each,S,RNG}=w;
    const H=18,W=9,TR=3.6,TH=24;
    const stone=(x,y,z)=>{const r=RNG(x,y,z);return r<.14?'mossy_stone_bricks':r<.24?'cracked_stone_bricks':'stone_bricks';};
    const towers=[[W,W],[-W,W],[W,-W],[-W,-W]];
    const onKeep=(x,z)=>Math.max(Math.abs(x),Math.abs(z))===W;
    const toward=(x,z,cx,cz)=>{const dx=cx-x,dz=cz-z;return Math.abs(dx)>=Math.abs(dz)?[Math.sign(dx),0]:[0,Math.sign(dz)];};
    const inTower=(x,z,r)=>towers.some(([cx,cz])=>ins(x-cx,z-cz,r));

    w.comp='floor';
    each((x,z)=>{const m=Math.max(Math.abs(x),Math.abs(z));
      if(m<=W)put(x,0,z,m===W?'cobblestone':(x===0&&z>-7?'red_wool':'polished_andesite'));
      else if(m<=W+1||inTower(x,z,TR+1))put(x,0,z,'cobblestone');});
    for(let z=W+4;z<=15;z++)for(let x=-1;x<=1;x++)put(x,0,z,'gravel');

    w.comp='batter';
    each((x,z)=>{const m=Math.max(Math.abs(x),Math.abs(z));
      if(m===W+1&&!inTower(x,z,TR)&&!(Math.abs(x)<=3&&z>W)){put(x,1,z,'cobblestone');S(x,2,z,'cobblestone_stairs');}
      for(const [cx,cz] of towers){const dx=x-cx,dz=z-cz;if(ins(dx,dz,TR+1)&&!ins(dx,dz,TR)&&m>=W){put(x,1,z,'cobblestone');put(x,2,z,'cobblestone_stairs',{f:toward(x,z,cx,cz)});}}});

    w.comp='walls';
    each((x,z)=>{if(!onKeep(x,z))return;for(let y=1;y<=H;y++)put(x,y,z,y===1?'cobblestone':(y===7||y===13)?'polished_andesite':stone(x,y,z));});

    w.comp='openings';
    each((x,z)=>{if(!onKeep(x,z)||inTower(x,z,TR+.5))return;const t=Math.abs(x)===W?z:x;
      if(Math.abs(t)%4===2&&!(z===W&&Math.abs(x)<=3)){clr(x,3,z);clr(x,4,z);clr(x,15,z);clr(x,16,z);}
      if(Math.abs(t)%4===0&&Math.abs(t)>0){for(let y=9;y<=11;y++)put(x,y,z,'glass_pane');put(x,12,z,'chiseled_stone_bricks');}});

    w.comp='floors';
    for(const y of [7,13])each((x,z)=>{const m=Math.max(Math.abs(x),Math.abs(z));if(m<W&&!(x===W-1&&z===-W+1))put(x,y,z,'spruce_planks');});
    each((x,z)=>{const m=Math.max(Math.abs(x),Math.abs(z));if(m<W&&!(x===W-1&&z===-W+1))put(x,H+1,z,'stone_bricks');});
    for(let y=1;y<=H+1;y++){clr(W-1,y,-W+1);put(W-1,y,-W+1,'ladder',{f:[1,0]});}
    put(W-1,H+1,-W+1,'spruce_trapdoor',{f:[1,0]});

    w.comp='battlements';
    each((x,z)=>{const m=Math.max(Math.abs(x),Math.abs(z));if(inTower(x,z,TR))return;
      if(m===W+1){S(x,H,z,'stone_brick_stairs',true);put(x,H+1,z,'stone_bricks');put(x,H+2,z,stone(x,H+2,z));if((x+z)%2===0)put(x,H+3,z,stone(x,H+3,z));}
      if(m===W)put(x,H+1,z,'stone_bricks');});

    w.comp='towers';
    for(const [cx,cz] of towers)each((x,z)=>{const dx=x-cx,dz=z-cz;if(!ins(dx,dz,TR)||ins(dx,dz,TR-1))return;
      for(let y=1;y<=TH;y++)put(x,y,z,y===1?'cobblestone':stone(x,y,z));});
    for(const [cx,cz] of towers){const sx=Math.sign(cx),sz=Math.sign(cz);
      for(const y of [5,11,17,22]){put(cx+sx*3,y,cz,'glass_pane');put(cx,y+1,cz+sz*3,'glass_pane');}
      for(const y of [7,13,19])each((x,z)=>{if(ins(x-cx,z-cz,TR-1))put(x,y,z,'spruce_planks');});}

    w.comp='tower-tops';
    for(const [cx,cz] of towers)each((x,z)=>{const dx=x-cx,dz=z-cz;
      if(ins(dx,dz,TR+1)&&!ins(dx,dz,TR)){put(x,TH,z,'stone_brick_stairs',{f:toward(x,z,cx,cz),up:true});put(x,TH+1,z,'stone_bricks');if((x+z)&1)put(x,TH+2,z,stone(x,TH+2,z));}
      if(ins(dx,dz,TR))put(x,TH+1,z,'stone_bricks');});

    w.comp='tower-roofs';
    for(const [cx,cz] of towers){for(let i=0;i<=8;i++){const r=TR+.4-i*.48;if(r<.6){put(cx,TH+2+i,cz,'deepslate_tiles');continue;}
        each((x,z)=>{const dx=x-cx,dz=z-cz;if(ins(dx,dz,r)&&!ins(dx,dz,r-1))put(x,TH+2+i,z,'deepslate_tile_stairs',{f:toward(x,z,cx,cz)});});}
      const top=TH+11;put(cx,top,cz,'oak_fence');put(cx,top+1,cz,'oak_fence');put(cx,top+2,cz,'oak_fence');
      put(cx+Math.sign(cx),top+2,cz,'red_wool');put(cx+Math.sign(cx),top+1,cz,'red_wool');put(cx+2*Math.sign(cx),top+2,cz,'red_wool');}

    w.comp='gatehouse';
    const GH=14;
    for(let x=-3;x<=3;x++)for(let z=W;z<=W+3;z++)for(let y=1;y<=GH;y++){
      const shell=Math.abs(x)===3||z===W+3||y===GH||y===7;if(shell||z===W)put(x,y,z,y===1?'cobblestone':stone(x,y,z));}
    for(let x=-3;x<=3;x++){S(x,GH,W+4,'stone_brick_stairs',true);put(x,GH+1,W+4,'stone_bricks');if(x%2===0)put(x,GH+2,W+4,stone(x,GH+2,W+4));}
    for(let z=W+1;z<=W+3;z++)for(const x of [-4,4]){put(x,GH,z,'stone_brick_stairs',{f:[-Math.sign(x),0],up:true});put(x,GH+1,z,'stone_bricks');if(z%2===0)put(x,GH+2,z,stone(x,GH+2,z));}
    for(let x=-3;x<=3;x++)for(let z=W+1;z<=W+3;z++)put(x,GH+1,z,'stone_bricks');
    for(let z=W;z<=W+3;z++){for(let x=-1;x<=1;x++)for(let y=1;y<=3;y++)clr(x,y,z);clr(0,4,z);}
    for(const x of [-2,2])for(let y=9;y<=11;y++)put(x,y,W+3,'glass_pane');

    w.comp='gate';
    put(0,4,W+3,'iron_bars');for(const x of [-1,1])put(x,3,W+3,'iron_bars');put(0,3,W+3,'iron_bars');
    for(const x of [-1,0,1]){put(x,1,W+2,'dark_oak_door');put(x,2,W+2,'dark_oak_door');}put(0,3,W+2,'dark_oak_planks');
    // arch trim round the gate
    for(let y=1;y<=4;y++)for(const x of [-2,2])put(x,y,W+3,'chiseled_stone_bricks');for(const x of [-1,1])put(x,4,W+3,'polished_andesite');put(0,5,W+3,'chiseled_stone_bricks');
    for(const x of [-2,2])for(let y=9;y<=12;y++)put(x,y,W+4,'red_wool');
    for(const x of [-2,2])put(x,1,W+4,'lantern');

    w.comp='roof';
    for(let i=0;i<=7;i++){const m=7-i;
      each((x,z)=>{if(Math.max(Math.abs(x),Math.abs(z))!==m)return;if(m===0){put(0,H+2+i,0,'deepslate_tiles');return;}S(x,H+2+i,z,'deepslate_tile_stairs');});}
    put(0,H+10,0,'lightning_rod');

    w.comp='hall';w.role='furnish';
    put(0,1,-7,'polished_blackstone_stairs',{f:[0,-1]});put(0,2,-8,'gold_block');put(-1,1,-7,'polished_blackstone_stairs',{f:[1,0]});put(1,1,-7,'polished_blackstone_stairs',{f:[-1,0]});
    for(let y=2;y<=5;y++){put(-2,y,-8,'red_wool');put(2,y,-8,'red_wool');}
    // long tables (top slabs) with benches whose backs face away from the table
    for(const tx of [-4,4])for(let z=-4;z<=4;z++){put(tx,1,z,'spruce_slab',{up:true});put(tx-1,1,z,'oak_stairs',{f:[-1,0]});put(tx+1,1,z,'oak_stairs',{f:[1,0]});}
    for(const [x,z] of [[-4,-6],[4,-6],[-4,6],[4,6],[0,0]]){put(x,6,z,'chain');put(x,5,z,'lantern');}
    for(let x=-7;x<=-5;x++)put(x,1,7,'barrel');put(7,1,7,'chest');put(6,1,7,'chest');
    w.comp='upper';
    for(const x of [-6,-3,0,3]){put(x,8,-7,'red_bed');put(x,8,-6,'red_bed');put(x+1,8,-7,'chest');}
    for(let z=-2;z<=4;z+=2)put(-7,8,z,'bookshelf'),put(-7,9,z,'bookshelf');
    put(0,8,3,'crafting_table');put(1,8,3,'furnace');put(-1,8,3,'anvil');
    for(const [x,z] of [[-4,0],[4,0]]){put(x,12,z,'chain');put(x,11,z,'lantern');}
    for(let x=-6;x<=6;x+=3){put(x,14,-7,'barrel');put(x,14,7,'chest');}
    put(0,18,0,'chain');put(0,17,0,'lantern');
    w.role=null;
  }
});
