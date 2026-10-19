/* Gothic Clocktower — a tall square clock tower with a stepped deepslate spire, joined to a Gothic manor wing,
   on a terraced knoll with a small graveyard and bare spruce trees. x 0, z 0 is the middle of the manor's
   ridge line; the tower stands to the east and the entrance faces south. */
BK.register({
  id:'gothic-clocktower',
  version:1,
  name:'Gothic Clocktower',
  blurb:'A Gothic clock tower with four clock faces, a louvred belfry, machicolations and a stepped deepslate spire, joined to a slate-roofed manor with tracery windows, iron cresting and a deep portal, on a snowy terraced knoll with a graveyard and bare spruces.',
  tags:['Gothic','Clock tower','Manor','Landmark','Large'],
  edition:'Bedrock',
  extent:38,
  start:{x:-7,y:1,z:14},
  figure:{x:-3,z:16},
  steps:[
    ['Knoll','knoll','Terraced knoll'],
    ['Knoll','surface','Ground, paths & snow'],
    ['Knoll','steps','Front steps'],
    ['Manor','manor-plinth','Manor plinth & floor'],
    ['Manor','manor-walls','Manor walls & courses'],
    ['Manor','manor-buttresses','Buttresses & corner piers'],
    ['Manor','manor-windows','Tracery windows'],
    ['Manor','pavilion','Entrance pavilion & portal'],
    ['Manor','chimneys','Chimney stacks'],
    ['Manor roof','gables','Gable ends'],
    ['Manor roof','manor-roof','Slate roofs'],
    ['Manor roof','dormers','Dormers'],
    ['Manor roof','cresting','Ridge & iron cresting'],
    ['Tower','tower-plinth','Tower plinth & floor'],
    ['Tower','piers','Corner piers & pinnacles'],
    ['Tower','tower-walls','Tower walls & courses'],
    ['Tower','lancets','Long lancets & doors'],
    ['Tower','balcony','Balconies on brackets'],
    ['Tower','clocks','Clock faces'],
    ['Tower','belfry','Belfry openings & louvres'],
    ['Tower','machicolations','Machicolations & parapet'],
    ['Spire','spire','Stepped spire'],
    ['Spire','lucarnes','Lucarnes'],
    ['Spire','finial','Finial'],
    ['Inside','manor-inside','Floors, stair & partitions'],
    ['Inside','furniture','Furniture & lights'],
    ['Inside','clockwork','Clockwork, ladder & bell'],
    ['Grounds','graveyard','Graveyard'],
    ['Grounds','trees','Bare spruces & lamp posts']
  ],
  tiers:[
    {a:-4,b:0,name:'Knoll',short:'Terraces, snow, a stair cut into the slope',p:'The whole build sits on a knoll that steps down in four irregular terraces, each a band of a different earth: podzol and coarse dirt under patchy snow on top, then rooted dirt, packed mud, stone and cobbled deepslate as you go down. A gravel path leads from the portal to a flight of cobbled deepslate steps cut down through the terraces between low walls, flanked by lantern posts. Dead bushes poke through the snow.',m:['podzol','coarse_dirt','dirt','snow_block','snow','rooted_dirt','packed_mud','stone','cobbled_deepslate','gravel','cobbled_deepslate_stairs','cobbled_deepslate_wall','lantern']},
    {a:0,b:33,name:'Manor',short:'Tracery windows, deep portal, steep slate roof',p:'A two-storey Gothic manor, 26 blocks long, on a cobbled deepslate plinth with a sloped foot. Weathered stone brick walls carry an andesite string course and a deepslate cornice on corbels, with buttresses between the bays and tuff corner piers rising into pinnacles. Every window is a pointed lancet with a deepslate wall mullion, a frame standing one block proud, a slab sill and a stepped hood with a carved keystone. The entrance pavilion projects from the south front: a portal three orders deep with oak doors, a five-light window above and a gable with a round window, between two pinnacled piers. The roof is a steep deepslate tile roof, two blocks up for every one across, with gabled dormers, a ridge of iron cresting with spiked posts, and three chimney stacks.',m:['cobbled_deepslate','stone_bricks','mossy_stone_bricks','cracked_stone_bricks','polished_andesite','deepslate_bricks','deepslate_brick_stairs','tuff_bricks','polished_deepslate_wall','gray_stained_glass_pane','deepslate_tiles','deepslate_tile_stairs','iron_bars','dark_oak_door']},
    {a:0,b:53,name:'Tower',short:'Corner piers, long lancets, balconies',p:'An 11-block square tower held by tuff corner piers that step back at y 23, each setback carrying a small pinnacle. A long lancet with dark oak mullions and transoms runs up three faces; the south face also has a door into the graveyard. A balcony on deepslate brackets with an iron rail runs round three faces under the clocks.',m:['tuff_bricks','chiseled_tuff_bricks','tuff_brick_stairs','tuff_brick_wall','stone_bricks','polished_deepslate','stripped_dark_oak_log','gray_stained_glass_pane','dark_oak_planks','iron_bars']},
    {a:26,b:55,name:'Clocks & belfry',short:'Four clock faces at ten past ten',p:'Each face carries a clock 11 blocks across, planned block by block: a blackstone dial with gold hands at ten past ten, a chapter ring standing proud in polished deepslate with calcite hour marks and gold on the quarters, and a stepped hood over the top. Above, a tall belfry lancet on each face is closed with dark oak louvres either side of a mullion. A row of machicolations — brackets with open slots between — carries a crenellated parapet.',m:['polished_blackstone','gold_block','polished_deepslate','calcite','deepslate_brick_stairs','chiseled_stone_bricks','deepslate_bricks','dark_oak_slab','polished_deepslate_wall','deepslate_brick_wall']},
    {a:54,b:91,name:'Spire',short:'Stepped deepslate spire, lucarnes, pinnacles',p:'A deepslate tile spire rises 31 blocks from the roof walk in steps, with polished deepslate arrises at the corners. A gabled lucarne with a glazed window sits on each face at its foot, and the four corner piers end in tall tuff pinnacles. Bands of deepslate brick ring it every five layers, crockets stand off the corners, and each face has a slit window part-way up. A carved finial with a gold knop and a copper spike tops it at y 91.',m:['deepslate_tiles','deepslate_tile_stairs','polished_deepslate','deepslate_bricks','gray_stained_glass_pane','tuff_brick_wall','chiseled_deepslate','lightning_rod']},
    {a:0,b:53,name:'Inside',short:'Hall, dining room, library, clock room, bell',p:'The portal opens into a hall with a dark oak stair up the north wall to a railed landing. West of it is a dining room with a long table, candles and a hearth; east is a library lined with bookshelves, with a lectern and a reading table. Upstairs are bedrooms. A door leads into the tower, where a ladder climbs through four floors: a ground room, a middle room, the clock room with a big spruce and copper gear on the axles that drive all four hands and a hanging pendulum, and the bell chamber with a bell on a dark oak beam.',m:['dark_oak_planks','dark_oak_stairs','dark_oak_fence','bookshelf','lectern','dark_oak_slab','candle','campfire','spruce_planks','oxidized_copper','stripped_dark_oak_log','chain','gold_block','bell','ladder','lantern']},
    {a:0,b:3,name:'Graveyard',short:'Headstones in an iron fence',p:'Below the tower, an iron-fenced graveyard with lantern posts at the corners and the gate. Eight headstones of mossy and carved stone stand over coarse dirt mounds, a few with dead bushes. Three bare spruces, branches sticking out like bones, stand round the knoll.',m:['iron_bars','cobbled_deepslate_wall','lantern','mossy_stone_bricks','stone_brick_wall','mossy_stone_brick_wall','chiseled_stone_bricks','coarse_dirt','spruce_log','spruce_fence','dead_bush']}
  ],
  notes:[
    ['The clocks','Each clock is drawn as seen from outside, so the hands read ten past ten on every face: the minute hand points up and right, the hour hand up and left. Lay the dial in the wall first, then the proud chapter ring, then the hood. The west clock is partly behind the manor roof.'],
    ['Order','Build the knoll first, then the manor, then the tower (its west wall stands against the manor\'s east gable). Build the spire layer by layer from the top view: it steps in every six or seven layers.'],
    ['Size','About 13,000 blocks. Roughly 18 stacks of stone bricks, 25 of deepslate tiles and tile stairs, 12 of deepslate bricks, 8 of tuff bricks and 10 of cobbled deepslate, with dirt and podzol for the knoll.']
  ],
  build(w){
    const {put,clr,get,each,RNG,vn}=w;
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const stone=(x,y,z)=>{const r=RNG(x,y,z);return r<.12?'mossy_stone_bricks':r<.22?'cracked_stone_bricks':'stone_bricks';};
    const sg=v=>v<0?-1:v>0?1:0;

    /* ===================== Knoll ===================== */
    const inR=(k,x,z)=>{const a=30+1.8*k,b=18+1.4*k;return ((x+1)/a)**2+((z-3)/b)**2+.22*(vn(x/6+k*3,z/6)-.5)<=1;};
    const manorFoot=(x,z)=>x>=-22&&x<=6&&z>=-10&&z<=11;
    const towerFoot=(x,z)=>x>=3&&x<=19&&z>=-8&&z<=8;
    const ground=(x,z)=>{const n=vn(x/3.3+7,z/3.3+1);return n<.33?'podzol':n<.58?'coarse_dirt':n<.76?'rooted_dirt':'snow_block';};
    w.comp='knoll';
    for(let k=1;k<=4;k++)each((x,z)=>{if(!inR(k,x,z))return;
      const exposed=!inR(k-1,x,z);
      const edge=[[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2]].some(([a,b])=>!inR(k,x+a,z+b));
      if(!exposed&&!edge)return;
      const r=RNG(x,-k,z);
      const side=k===1?(r<.5?'dirt':'rooted_dirt'):k===2?(r<.55?'packed_mud':'rooted_dirt'):k===3?(r<.6?'stone':'cobblestone'):(r<.6?'cobbled_deepslate':'stone');
      put(x,-k,z,exposed?ground(x,z):side);
      if(exposed&&vn(x/2.7,z/2.7+k)>.74&&!get(x,-k+1,z))put(x,-k+1,z,'snow');});
    // the top layer
    w.comp='surface';
    const path=(x,z)=>(x>=-9&&x<=-5&&z>=11)||(x>=10&&x<=12&&z>=6&&z<=9)||(x===11&&z>=9&&z<=15);
    each((x,z)=>{if(!inR(0,x,z))return;
      if(path(x,z)){put(x,0,z,((x+z)&1)&&RNG(x,0,z)<.4?'cobbled_deepslate':'gravel');return;}
      put(x,0,z,ground(x,z));
      if(manorFoot(x,z)||towerFoot(x,z))return;
      if(vn(x/2.6+3,z/2.6)>.74)put(x,1,z,'snow');
      else if(RNG(x,1,z)<.025&&ground(x,z)!=='snow_block')put(x,1,z,'dead_bush');});
    // steps cut down through the terraces south of the portal
    w.comp='steps';
    let zE=0;for(let z=0;z<40;z++)if(inR(0,-7,z))zE=z;
    for(let k=1;k<=4;k++){const z=zE+k;
      for(let x=-10;x<=-4;x++){for(let y=-k+1;y<=1;y++)clr(x,y,z);for(let y=-5;y<-k;y++)put(x,y,z,'cobbled_deepslate');
        if(x===-10||x===-4){put(x,-k,z,'cobbled_deepslate');put(x,-k+1,z,'cobbled_deepslate_wall');}
        else put(x,-k,z,'cobbled_deepslate_stairs',{f:[0,-1]});}}
    for(const x of [-11,-3]){put(x,0,zE,'cobbled_deepslate');put(x,1,zE,'cobbled_deepslate_wall');put(x,2,zE,'cobbled_deepslate_wall');put(x,3,zE,'lantern');}

    /* ===================== Manor ===================== */
    const MX0=-20,MX1=5,MZ=7;
    const onMW=(x,z)=>(Math.abs(z)===MZ&&x>=MX0&&x<=MX1)||((x===MX0||x===MX1)&&Math.abs(z)<=MZ);
    w.comp='manor-plinth';
    box(MX0,MX1,0,0,-MZ,MZ,'cobbled_deepslate');
    each((x,z)=>{if(x<MX0-1||x>MX1||Math.abs(z)>MZ+1)return;
      const out=(x===MX0-1&&Math.abs(z)<=MZ+1)||(Math.abs(z)===MZ+1&&x>=MX0-1&&x<=MX1);
      if(out&&!(Math.abs(x+7)<=3&&z>0)){put(x,0,z,'cobbled_deepslate');put(x,1,z,'polished_deepslate_stairs',{f:x===MX0-1&&Math.abs(z)<=MZ?[1,0]:[0,-sg(z)]});}});
    w.comp='manor-walls';
    each((x,z)=>{if(!onMW(x,z))return;
      for(let y=1;y<=15;y++){let id;
        if(y<=2)id='cobbled_deepslate';else if(y===3)id='polished_deepslate';else if(y===8)id='polished_andesite';else if(y===15)id='polished_deepslate';else id=stone(x,y,z);
        put(x,y,z,id);}});
    // corbelled cornice and string-course ledge on the long walls
    for(let x=MX0;x<=MX1;x++)for(const s of [-1,1]){st(x,14,s*(MZ+1),'deepslate_brick_stairs',0,-s,true);put(x,8,s*(MZ+1),'stone_brick_slab');}
    for(let z=-MZ;z<=MZ;z++){st(MX0-1,14,z,'deepslate_brick_stairs',1,0,true);put(MX0-1,8,z,'stone_brick_slab');}

    w.comp='manor-buttresses';
    const BUT=[-15,-1,1];   // south (pavilion stands between -10 and -4)
    const BUTN=[-15,-10,-4,1];
    const buttress=(x,s)=>{for(let y=1;y<=13;y++){put(x,y,s*(MZ+1),y%6===0?'chiseled_stone_bricks':stone(x,y,s*(MZ+1)));if(y<=6)put(x,y,s*(MZ+2),stone(x,y,s*(MZ+2)));}
      st(x,7,s*(MZ+2),'stone_brick_stairs',0,-s);st(x,14,s*(MZ+1),'stone_brick_stairs',0,-s);};
    BUT.filter(x=>x!==-1).forEach(x=>buttress(x,1));buttress(1,1);
    BUTN.forEach(x=>buttress(x,-1));
    // tuff corner piers rising into pinnacles
    for(const [cx,cz] of [[MX0-1,-MZ-1],[MX0-1,MZ+1]]){for(let y=1;y<=17;y++){put(cx,y,cz,y%8===0?'chiseled_tuff_bricks':'tuff_bricks');}
      put(cx,18,cz,'chiseled_tuff_bricks');for(let y=19;y<=22;y++)put(cx,y,cz,'tuff_brick_wall');put(cx,23,cz,'lightning_rod');}

    w.comp='manor-windows';
    // a pointed lancet in a wall facing `s` (z walls: n=[0,s]; x walls: n=[s,0]); c = centre along the wall
    const lancet=(axis,s,c,y0,y1)=>{
      const P=(u,y,o,id,ex)=>{if(axis==='z')put(c+u,y,s*(MZ+o),id,ex);else put(s<0?MX0-o:MX1+o,y,c+u,id,ex);};
      const tw=axis==='z'?[0,-s]:[-s,0];
      for(let y=y0;y<=y1;y++)for(let u=-1;u<=1;u++)P(u,y,0,u===0?'polished_deepslate_wall':'gray_stained_glass_pane');
      P(0,y1+1,0,'gray_stained_glass_pane');
      for(let y=y0-1;y<=y1;y++){P(-2,y,1,'deepslate_bricks');P(2,y,1,'deepslate_bricks');}
      P(-1,y1+1,1,'deepslate_bricks');P(1,y1+1,1,'deepslate_bricks');P(0,y1+2,1,'deepslate_bricks');
      for(let u=-1;u<=1;u++)P(u,y0-1,1,'stone_brick_slab');
      P(-2,y1+1,1,'deepslate_brick_stairs',{f:tw,up:false});P(2,y1+1,1,'deepslate_brick_stairs',{f:tw,up:false});
      P(-1,y1+2,1,'deepslate_brick_stairs',{f:tw});P(1,y1+2,1,'deepslate_brick_stairs',{f:tw});P(0,y1+3,1,'chiseled_stone_bricks');};
    for(const c of [-18,-12,-2,3]){lancet('z',1,c,4,6);lancet('z',1,c,10,12);}
    for(const c of [-18,-12,-7,-2,3]){lancet('z',-1,c,4,6);lancet('z',-1,c,10,12);}
    lancet('x',-1,-1,4,6);lancet('x',-1,-1,9,13);

    /* entrance pavilion with a portal three orders deep */
    w.comp='pavilion';
    const PZ=10;
    for(let x=-10;x<=-4;x++)for(let z=MZ+1;z<=PZ;z++){put(x,0,z,'polished_deepslate');
      if(x===-10||x===-4||z===PZ)for(let y=1;y<=15;y++)put(x,y,z,y<=2?'cobbled_deepslate':y===3?'polished_deepslate':y===8?'polished_andesite':y===15?'polished_deepslate':stone(x,y,z));}
    for(let x=-9;x<=-5;x++)for(let y=1;y<=6;y++)clr(x,y,MZ);           // open the main wall into the hall
    // outer order
    for(let x=-9;x<=-5;x++)for(let y=1;y<=7;y++){const a=Math.abs(x+7);if(y<=5||(y===6&&a<=1)||(y===7&&a===0))clr(x,y,PZ);}
    for(let y=1;y<=6;y++){put(-10,y,PZ+1,'deepslate_bricks');put(-4,y,PZ+1,'deepslate_bricks');}
    put(-9,7,PZ+1,'deepslate_bricks');put(-5,7,PZ+1,'deepslate_bricks');put(-8,8,PZ+1,'deepslate_bricks');put(-6,8,PZ+1,'deepslate_bricks');put(-7,9,PZ+1,'chiseled_stone_bricks');
    put(-9,6,PZ,'deepslate_bricks');put(-5,6,PZ,'deepslate_bricks');put(-8,7,PZ,'deepslate_bricks');put(-6,7,PZ,'deepslate_bricks');put(-7,8,PZ,'chiseled_stone_bricks');
    st(-8,8,PZ+1,'deepslate_brick_stairs',1,0);st(-6,8,PZ+1,'deepslate_brick_stairs',-1,0);
    st(-9,8,PZ+1,'deepslate_brick_stairs',0,-1);st(-5,8,PZ+1,'deepslate_brick_stairs',0,-1);
    // middle order
    for(let y=1;y<=5;y++){put(-9,y,PZ-1,'polished_deepslate');put(-5,y,PZ-1,'polished_deepslate');}
    put(-8,6,PZ-1,'polished_deepslate');put(-6,6,PZ-1,'polished_deepslate');put(-7,7,PZ-1,'polished_deepslate');
    for(let x=-9;x<=-5;x++)for(let y=6;y<=7;y++)if(!get(x,y,PZ-1))put(x,y,PZ-1,'deepslate_bricks');
    // doors in the inner order, tympanum with an iron grille
    for(const x of [-8,-7,-6]){put(x,1,MZ+1,'dark_oak_door');put(x,2,MZ+1,'dark_oak_door');}
    put(-8,3,MZ+1,'dark_oak_planks');put(-6,3,MZ+1,'dark_oak_planks');put(-7,3,MZ+1,'iron_bars');put(-7,4,MZ+1,'dark_oak_planks');
    for(let x=-9;x<=-5;x++)for(let y=1;y<=5;y++)if(Math.abs(x+7)===2)put(x,y,MZ+1,'deepslate_bricks');
    for(let x=-8;x<=-6;x++)for(let y=5;y<=6;y++)if(!get(x,y,MZ+1))put(x,y,MZ+1,'deepslate_bricks');
    for(let x=-8;x<=-6;x++)put(x,4,MZ+1,get(x,4,MZ+1)?.id||'deepslate_bricks');
    put(-8,4,MZ+1,'deepslate_bricks');put(-6,4,MZ+1,'deepslate_bricks');
    // five-light window over the portal
    for(let x=-9;x<=-5;x++)for(let y=10;y<=14;y++){const a=Math.abs(x+7);if(y===14&&a===2)continue;
      put(x,y,PZ,(a===1&&y<=12)||y===12?'polished_deepslate_wall':'gray_stained_glass_pane');}
    for(let y=10;y<=13;y++){put(-10,y,PZ+1,'deepslate_bricks');put(-4,y,PZ+1,'deepslate_bricks');}
    for(let x=-9;x<=-5;x++)put(x,9,PZ+1,'stone_brick_slab');
    st(-9,14,PZ+1,'deepslate_brick_stairs',1,0);st(-5,14,PZ+1,'deepslate_brick_stairs',-1,0);
    put(-8,15,PZ+1,'deepslate_brick_stairs',{f:[1,0]});put(-6,15,PZ+1,'deepslate_brick_stairs',{f:[-1,0]});put(-7,15,PZ+1,'chiseled_stone_bricks');
    // pinnacled piers at the pavilion's front corners
    for(const px of [-11,-3]){for(let y=1;y<=16;y++)put(px,y,PZ+1,y%8===0?'chiseled_tuff_bricks':'tuff_bricks');
      for(let y=1;y<=6;y++)put(px,y,PZ+2,'tuff_bricks');st(px,7,PZ+2,'tuff_brick_stairs',0,-1);
      put(px,17,PZ+1,'chiseled_tuff_bricks');for(let y=18;y<=21;y++)put(px,y,PZ+1,'tuff_brick_wall');put(px,22,PZ+1,'lightning_rod');}
    // lanterns either side of the portal
    for(const x of [-10,-4]){put(x,6,PZ+2,'dark_oak_fence');put(x,5,PZ+2,'lantern');}

    w.comp='chimneys';
    const stack=(x0,x1,z0,z1,y0,top)=>{for(let x=x0;x<=x1;x++)for(let z=z0;z<=z1;z++){for(let y=y0;y<=top;y++)put(x,y,z,RNG(x,y,z)<.15?'cracked_deepslate_bricks':(y%7===0?'polished_deepslate':'deepslate_bricks'));put(x,top+1,z,'polished_deepslate');}
      put(x0,top+2,z0,'deepslate_brick_wall');put(x1,top+2,z1,'deepslate_brick_wall');};
    // west gable stack with a stepped breast
    for(let x=-23;x<=-21;x++)for(let z=1;z<=4;z++)for(let y=1;y<=12;y++)put(x,y,z,RNG(x,y,z)<.15?'cracked_deepslate_bricks':'deepslate_bricks');
    for(let z=1;z<=4;z++)st(-23,13,z,'deepslate_brick_stairs',1,0);
    stack(-22,-21,2,3,13,36);
    // north wall stack and a ridge stack
    for(let x=-2;x<=0;x++)for(let y=1;y<=13;y++)put(x,y,-MZ-2,'deepslate_bricks');for(let x=-2;x<=0;x++)st(x,14,-MZ-2,'deepslate_brick_stairs',0,1);
    stack(-2,-1,-MZ-1,-MZ-1,14,34);
    stack(-14,-13,-1,-1,26,35);

    /* ===================== Manor roofs ===================== */
    w.comp='gables';
    const topRow=z=>{const i=8-Math.abs(z);return 13+2*i;};
    for(const x of [MX0,MX1])for(let z=-MZ;z<=MZ;z++)for(let y=16;y<=topRow(z);y++)put(x,y,z,stone(x,y,z));
    // west gable window and a carved roundel
    for(let z=-2;z<=0;z++)for(let y=17;y<=21;y++)put(MX0,y,z,z===-1?'polished_deepslate_wall':'gray_stained_glass_pane');put(MX0,22,-1,'gray_stained_glass_pane');
    for(let y=16;y<=22;y++){put(MX0-1,y,-3,'deepslate_bricks');put(MX0-1,y,1,'deepslate_bricks');}put(MX0-1,23,-2,'deepslate_bricks');put(MX0-1,23,0,'deepslate_bricks');put(MX0-1,24,-1,'chiseled_stone_bricks');

    w.comp='manor-roof';
    const roofCell=(x,y,z,s,stair)=>{if(stair)st(x,y,z,'deepslate_tile_stairs',0,-s);else put(x,y,z,'deepslate_tiles');};
    for(let x=MX0-1;x<=MX1;x++){for(let i=0;i<=7;i++)for(const s of [-1,1]){const z=s*(8-i);
        if(i===0)roofCell(x,16,z,s,true);else{roofCell(x,14+2*i,z,s,false);roofCell(x,15+2*i,z,s,true);}}
      put(x,30,0,'deepslate_tiles');}
    // fascia under the eaves at the west gable
    for(let i=0;i<=7;i++)for(const s of [-1,1])st(MX0-1,14+2*i,s*(8-i),'deepslate_brick_stairs',0,s,true);
    // pavilion roof: ridge running south into the main roof
    const mainZ=y=>8-Math.floor((y-14)/2);
    for(let z=PZ+1;z>=0;z--)for(let j=0;j<=4;j++){
      const cells=j===4?[[-7,22,'b'],[-7,23,'slab']]:j===0?[[-11,16,'s',1],[-3,16,'s',-1]]:[[-11+j,14+2*j,'b'],[-11+j,15+2*j,'s',1],[-3-j,14+2*j,'b'],[-3-j,15+2*j,'s',-1]];
      for(const [x,y,k,f] of cells){if(z<mainZ(y))continue;
        if(k==='b')put(x,y,z,'deepslate_tiles');else if(k==='slab')put(x,y,z,'deepslate_tile_slab');else st(x,y,z,'deepslate_tile_stairs',f,0);}}
    // pavilion gable wall with a round window
    for(let x=-10;x<=-4;x++){const j=Math.min(x+11,-3-x);for(let y=16;y<=13+2*j;y++)put(x,y,PZ,stone(x,y,PZ));}
    for(let x=-8;x<=-6;x++)for(let y=18;y<=20;y++){const c=Math.abs(x+7)+Math.abs(y-19);put(x,y,PZ,c===2?'chiseled_stone_bricks':'gray_stained_glass_pane');}
    put(-7,24,PZ+1,'polished_deepslate_wall');put(-7,25,PZ+1,'lightning_rod');

    w.comp='dormers';
    const dormer=(c,s)=>{
      for(let x=c-1;x<=c+1;x++)for(let y=16;y<=21;y++)for(let a=5;a<=8;a++)clr(x,y,s*a);
      for(let y=16;y<=19;y++){put(c-1,y,s*7,'deepslate_bricks');put(c+1,y,s*7,'deepslate_bricks');}
      put(c,16,s*7,'polished_deepslate');put(c,17,s*7,'gray_stained_glass_pane');put(c,18,s*7,'gray_stained_glass_pane');put(c,19,s*7,'chiseled_stone_bricks');put(c,20,s*7,'deepslate_bricks');
      for(let a=5;a<=6;a++)for(let y=16;y<=19;y++){put(c-1,y,s*a,'deepslate_bricks');put(c+1,y,s*a,'deepslate_bricks');}
      for(let a=4;a<=8;a++){const z=s*a;
        st(c-2,20,z,'deepslate_tile_stairs',1,0);st(c+2,20,z,'deepslate_tile_stairs',-1,0);
        put(c-1,20,z,'deepslate_tiles');put(c+1,20,z,'deepslate_tiles');
        st(c-1,21,z,'deepslate_tile_stairs',1,0);st(c+1,21,z,'deepslate_tile_stairs',-1,0);put(c,21,z,'deepslate_tiles');put(c,22,z,'deepslate_tile_slab');}
      put(c,20,s*7,'deepslate_bricks');put(c,23,s*8,'lightning_rod');};
    [-16,1].forEach(c=>dormer(c,1));[-16,-7,1].forEach(c=>dormer(c,-1));

    w.comp='cresting';
    for(let x=MX0-1;x<=MX1;x++){put(x,31,0,x%4===0?'polished_deepslate_wall':'iron_bars');if(x%4===0)put(x,32,0,'lightning_rod');}
    put(MX0-1,31,0,'polished_deepslate_wall');put(MX0-1,32,0,'polished_deepslate_wall');put(MX0-1,33,0,'lightning_rod');

    /* ===================== Tower ===================== */
    const TX=11,TZ=0,H=5;
    const FACES=[{n:[0,1],t:[1,0],k:'S'},{n:[0,-1],t:[-1,0],k:'N'},{n:[1,0],t:[0,-1],k:'E'},{n:[-1,0],t:[0,1],k:'W'}];
    const P=(f,u,y,d,id,ex)=>put(TX+f.n[0]*d+f.t[0]*u,y,TZ+f.n[1]*d+f.t[1]*u,id,ex);
    const C=(f,u,y,d)=>clr(TX+f.n[0]*d+f.t[0]*u,y,TZ+f.n[1]*d+f.t[1]*u);
    const toWall=f=>[-f.n[0],-f.n[1]];
    const inPier=(dx,dz,y)=>{const a=Math.abs(dx),b=Math.abs(dz);if(y<=22)return a>=5&&a<=7&&b>=5&&b<=7;return a>=5&&a<=6&&b>=5&&b<=6;};

    w.comp='tower-plinth';
    for(let dx=-6;dx<=6;dx++)for(let dz=-6;dz<=6;dz++){const x=TX+dx,z=TZ+dz,m=Math.max(Math.abs(dx),Math.abs(dz));
      if(m<=5)put(x,0,z,m===5?'cobbled_deepslate':((dx+dz)&1?'polished_deepslate':'deepslate_tiles'));
      else if(!inPier(dx,dz,1)&&x>MX1){put(x,0,z,'cobbled_deepslate');put(x,1,z,'cobbled_deepslate_stairs',{f:Math.abs(dx)===6?[-sg(dx),0]:[0,-sg(dz)]});}}

    w.comp='piers';
    for(const sx of [-1,1])for(const sz of [-1,1]){
      for(let a=5;a<=7;a++)for(let b=5;b<=7;b++)for(let y=1;y<=53;y++){if(!inPier(sx*a,sz*b,y))continue;const x=TX+sx*a,z=TZ+sz*b;
        if(x<=MX1&&y<=31)continue;
        put(x,y,z,y<=2?'cobbled_deepslate':(y%8===0?'chiseled_tuff_bricks':'tuff_bricks'));}
      // setback at y 23: caps, with a pinnacle on the outer corner
      for(let a=5;a<=7;a++)for(let b=5;b<=7;b++){if(a<7&&b<7)continue;const x=TX+sx*a,z=TZ+sz*b;if(x<=MX1)continue;
        if(a===7&&b===7){for(let y=23;y<=26;y++)put(x,y,z,'tuff_brick_wall');put(x,27,z,'lightning_rod');}
        else put(x,23,z,'tuff_brick_stairs',{f:a===7?[-sx,0]:[0,-sz]});}
      // crowning pinnacle
      const px=TX+sx*6,pz=TZ+sz*6;put(px,54,pz,'chiseled_tuff_bricks');for(let y=55;y<=60;y++)put(px,y,pz,'tuff_brick_wall');put(px,61,pz,'lightning_rod');
      for(const [a,b] of [[5,6],[6,5],[5,5]])put(TX+sx*a,54,TZ+sz*b,'tuff_brick_slab');}

    w.comp='tower-walls';
    for(let dx=-H;dx<=H;dx++)for(let dz=-H;dz<=H;dz++){if(Math.max(Math.abs(dx),Math.abs(dz))!==H)continue;if(inPier(dx,dz,30))continue;
      for(let y=1;y<=53;y++){if(inPier(dx,dz,y))continue;let id;
        if(y<=3)id='cobbled_deepslate';else if(y===4||y===12||y===24||y===40||y===53)id='polished_deepslate';else if(y>=41)id=RNG(TX+dx,y,TZ+dz)<.15?'cracked_deepslate_bricks':'deepslate_bricks';else id=stone(TX+dx,y,TZ+dz);
        put(TX+dx,y,TZ+dz,id);}}
    // drip courses one block proud at 12 and 40
    for(const f of FACES)for(let u=-4;u<=4;u++){if(f.k==='W'&&true){}P(f,u,12,6,'deepslate_brick_stairs',{f:toWall(f),up:true});P(f,u,40,6,'deepslate_brick_stairs',{f:toWall(f),up:true});}

    w.comp='lancets';
    for(const f of FACES){if(f.k==='W')continue;
      for(let y=5;y<=19;y++)for(let u=-1;u<=1;u++)P(f,u,y,5,u===0||y===9||y===14?'stripped_dark_oak_log':'gray_stained_glass_pane');
      P(f,0,20,5,'gray_stained_glass_pane');
      for(let y=4;y<=20;y++){P(f,-2,y,6,'deepslate_bricks');P(f,2,y,6,'deepslate_bricks');}
      P(f,-1,21,6,'deepslate_bricks');P(f,1,21,6,'deepslate_bricks');P(f,0,22,6,'chiseled_stone_bricks');
      for(let u=-1;u<=1;u++)P(f,u,4,6,'stone_brick_slab');
      P(f,-2,21,7,'deepslate_brick_stairs',{f:toWall(f)});P(f,2,21,7,'deepslate_brick_stairs',{f:toWall(f)});}
    // south door into the graveyard; west door into the manor
    {const f=FACES[0];P(f,0,1,5,'dark_oak_door');P(f,0,2,5,'dark_oak_door');P(f,0,3,5,'chiseled_stone_bricks');
      for(let y=1;y<=3;y++){P(f,-1,y,6,'deepslate_bricks');P(f,1,y,6,'deepslate_bricks');}P(f,0,4,6,'chiseled_stone_bricks');P(f,0,1,6,'polished_deepslate_stairs',{f:[0,-1]});C(f,0,2,6);C(f,0,3,6);
      const fw=FACES[3];P(fw,0,1,5,'dark_oak_door');P(fw,0,2,5,'dark_oak_door');clr(MX1,1,0);clr(MX1,2,0);}

    w.comp='balcony';
    for(const f of FACES){if(f.k==='W')continue;
      for(let u=-4;u<=4;u++){P(f,u,24,6,'deepslate_brick_stairs',{f:toWall(f),up:true});if(u%2===0)P(f,u,24,7,'dark_oak_stairs',{f:toWall(f),up:true});
        P(f,u,25,6,'polished_deepslate');P(f,u,25,7,'dark_oak_planks');P(f,u,26,7,'iron_bars');}
      P(f,-4,26,6,'iron_bars');P(f,4,26,6,'iron_bars');
      P(f,0,26,5,'dark_oak_door');P(f,0,27,5,'dark_oak_door');P(f,0,28,5,'chiseled_stone_bricks');
      P(f,-3,27,7,'dark_oak_fence');P(f,-3,28,7,'lantern');P(f,3,27,7,'dark_oak_fence');P(f,3,28,7,'lantern');}

    w.comp='clocks';
    const CY=34;
    const HANDS=[[60,3.4],[300,2.4]];   // minute hand at 2 (ten past), hour hand at 10
    const MARKS=new Map();for(let k=0;k<12;k++){const a=k*Math.PI/6;MARKS.set(Math.round(4.15*Math.sin(a))+','+Math.round(4.15*Math.cos(a)),k);}
    const onHand=(u,v)=>HANDS.some(([deg,L])=>{const a=deg*Math.PI/180,hx=Math.sin(a),hy=Math.cos(a),al=u*hx+v*hy,pe=Math.abs(-u*hy+v*hx);return al>=0&&al<=L&&pe<.5;});
    for(const f of FACES){const roofSide=f.k==='W';
      for(let u=-5;u<=5;u++)for(let y=CY-6;y<=CY+6;y++){const v=y-CY,g=Math.hypot(u,v);
        if(g<=3.6){P(f,u,y,5,(u===0&&v===0)?'gold_block':onHand(u,v)?'gold_block':'polished_blackstone');continue;}
        if(g<=4.6){P(f,u,y,5,'polished_deepslate');
          if(roofSide&&y<=31)continue;
          const mk=MARKS.get(u+','+v);
          P(f,u,y,6,mk===undefined?'polished_deepslate':(mk%3===0?'gold_block':'calcite'));continue;}
        if(Math.abs(u)>=5)continue;
        if(roofSide&&y<=31)continue;
        if(g<=5.6&&v>=0)P(f,u,y,6,'deepslate_brick_stairs',{f:toWall(f),up:true});
        else if(g<=5.6)P(f,u,y,6,'chiseled_stone_bricks');
        else if(Math.abs(u)>=3&&Math.abs(v)>=3)P(f,u,y,5,'chiseled_stone_bricks');}
      if(!roofSide)P(f,0,CY+6,6,'chiseled_stone_bricks');}

    w.comp='belfry';
    for(const f of FACES){
      for(let u=-2;u<=2;u++)for(let y=42;y<=51;y++){const a=Math.abs(u);if((y===50&&a===2)||(y===51&&a>=1))continue;
        if(u===0&&y<=49)P(f,u,y,5,'polished_deepslate_wall');else if(y%2===0)P(f,u,y,5,'dark_oak_slab',{up:true});else C(f,u,y,5);}
      for(let y=41;y<=49;y++){P(f,-3,y,6,'deepslate_bricks');P(f,3,y,6,'deepslate_bricks');}
      P(f,-2,50,6,'deepslate_bricks');P(f,2,50,6,'deepslate_bricks');P(f,-1,51,6,'deepslate_bricks');P(f,1,51,6,'deepslate_bricks');
      for(let u=-2;u<=2;u++)P(f,u,41,6,'stone_brick_slab');}

    w.comp='machicolations';
    for(const f of FACES)for(let u=-4;u<=4;u++){if(u%2===0)P(f,u,52,6,'deepslate_brick_stairs',{f:toWall(f),up:true});
      P(f,u,53,6,'polished_deepslate');P(f,u,54,6,u%2===0?'deepslate_bricks':'deepslate_brick_wall');if(u%2===0)P(f,u,55,6,'deepslate_brick_slab');}
    for(let dx=-H;dx<=H;dx++)for(let dz=-H;dz<=H;dz++)if(!inPier(dx,dz,54))put(TX+dx,54,TZ+dz,'polished_deepslate');

    /* ===================== Spire ===================== */
    w.comp='spire';
    const SB=55,ST=86;
    const half=y=>4.45*Math.pow(Math.max(0,1-(y-SB)/(ST-SB+1)),1.05);
    for(let y=SB;y<=ST;y++){const h=Math.round(half(y)),hn=Math.round(half(y+1));
      if(h<1){put(TX,y,TZ,'deepslate_tiles');continue;}
      for(let dx=-h;dx<=h;dx++)for(let dz=-h;dz<=h;dz++){if(Math.max(Math.abs(dx),Math.abs(dz))!==h)continue;
        const corner=Math.abs(dx)===h&&Math.abs(dz)===h;
        if(hn<h){const f=Math.abs(dx)>Math.abs(dz)||(corner&&y%2)?[-sg(dx),0]:[0,-sg(dz)];put(TX+dx,y,TZ+dz,corner?'polished_deepslate_stairs':'deepslate_tile_stairs',{f});}
        else put(TX+dx,y,TZ+dz,corner?'polished_deepslate':((y-SB)%5===3?'deepslate_bricks':'deepslate_tiles'));}
      // crockets: small knobs off each corner arris
      if(h>=1&&y>=63&&(y-SB)%4===0)for(const sx of [-1,1])for(const sz of [-1,1]){put(TX+sx*(h+1),y,TZ+sz*h,'polished_deepslate_wall');put(TX+sx*h,y,TZ+sz*(h+1),'polished_deepslate_wall');}}
    // slit windows with carved heads part-way up each face
    for(const f of FACES){const y0=67,h=Math.round(half(y0));for(let y=y0;y<=y0+1;y++)P(f,0,y,h,'gray_stained_glass_pane');P(f,0,y0+2,h,'chiseled_deepslate');P(f,0,y0-1,h,'polished_deepslate');}

    w.comp='lucarnes';
    for(const f of FACES){
      for(let u=-2;u<=2;u++)for(let y=55;y<=61;y++)for(let d=3;d<=5;d++){if(Math.abs(u)<=1&&y<=59)C(f,u,y,d);}
      for(let d=3;d<=5;d++)for(let y=55;y<=58;y++){P(f,-1,y,d,'deepslate_bricks');P(f,1,y,d,'deepslate_bricks');}
      P(f,0,55,5,'polished_deepslate');P(f,0,56,5,'gray_stained_glass_pane');P(f,0,57,5,'gray_stained_glass_pane');P(f,0,58,5,'chiseled_deepslate');P(f,0,59,5,'deepslate_bricks');
      const tl=[f.t[0],f.t[1]],tr=[-f.t[0],-f.t[1]];
      for(let d=3;d<=6;d++){P(f,-2,59,d,'deepslate_tile_stairs',{f:tl});P(f,2,59,d,'deepslate_tile_stairs',{f:tr});
        P(f,-1,59,d,'deepslate_tiles');P(f,1,59,d,'deepslate_tiles');
        P(f,-1,60,d,'deepslate_tile_stairs',{f:tl});P(f,1,60,d,'deepslate_tile_stairs',{f:tr});P(f,0,60,d,'deepslate_tiles');P(f,0,61,d,'deepslate_tile_slab');}
      P(f,0,59,6,'deepslate_tiles');P(f,0,62,6,'lightning_rod');P(f,0,61,6,'polished_deepslate_wall');}

    w.comp='finial';
    put(TX,ST+1,TZ,'chiseled_deepslate');put(TX,ST+2,TZ,'polished_deepslate_wall');put(TX,ST+3,TZ,'polished_deepslate_wall');
    put(TX,ST+4,TZ,'gold_block');put(TX,ST+5,TZ,'lightning_rod');

    /* ===================== Inside ===================== */
    w.comp='manor-inside';
    // floors: a checkered hall, oak upstairs
    for(let x=MX0+1;x<=MX1-1;x++)for(let z=-MZ+1;z<=MZ-1;z++){put(x,0,z,(x+z)&1?'polished_deepslate':'deepslate_tiles');
      if(!(x>=-10&&x<=-4&&z>=-6&&z<=-5))put(x,8,z,'dark_oak_planks');}
    // partitions between dining room, hall and library, both floors, with doorways
    for(const px of [-12,-2])for(let z=-MZ+1;z<=MZ-1;z++)for(let y=1;y<=15;y++){if(y===8)continue;if(Math.abs(z)<=1&&((y>=1&&y<=3)||(y>=9&&y<=11)))continue;put(px,y,z,'stone_bricks');}
    // stair up the north wall of the hall, two wide
    for(let k=1;k<=7;k++){const x=-11+k;for(const z of [-6,-5]){st(x,k,z,'dark_oak_stairs',1,0);for(let y=1;y<k;y++)put(x,y,z,'dark_oak_planks');}}
    for(let x=-10;x<=-4;x++)put(x,9,-4,'dark_oak_fence');

    w.comp='furniture';w.role='furnish';
    // dining room
    for(let x=-18;x<=-14;x++){put(x,1,0,'dark_oak_slab',{up:true});st(x,1,-1,'spruce_stairs',0,-1);st(x,1,1,'spruce_stairs',0,1);}
    for(const x of [-18,-16,-14])put(x,2,0,'candle');
    for(let z=1;z<=3;z++){put(-19,1,z,z===2?'campfire':'deepslate_bricks');put(-19,4,z,'deepslate_brick_slab');}put(-19,2,1,'deepslate_bricks');put(-19,2,3,'deepslate_bricks');put(-19,3,1,'deepslate_bricks');put(-19,3,3,'deepslate_bricks');put(-19,3,2,'deepslate_bricks');
    put(-16,7,0,'chain');put(-16,6,0,'lantern');
    // hall
    put(-7,7,2,'chain');put(-7,6,2,'chain');put(-7,5,2,'lantern');
    put(-11,1,5,'barrel');put(-3,1,5,'lectern');
    // library
    for(let x=-1;x<=4;x++)for(let y=1;y<=6;y++){if(y>=3&&(x===-2||Math.abs(x+2)<=1||Math.abs(x-3)<=1))continue;put(x,y,-6,y===6?'dark_oak_planks':'bookshelf');}
    for(let z=-5;z<=6;z++)for(let y=1;y<=6;y++){if(Math.abs(z)<=1&&y<=3)continue;if(z>=-3&&z<=1&&y>=3&&y<=6)continue;put(4,y,z,y===6?'dark_oak_planks':'bookshelf');}
    put(1,1,2,'dark_oak_slab',{up:true});put(2,1,2,'dark_oak_slab',{up:true});st(1,1,3,'spruce_stairs',0,1);st(2,1,3,'spruce_stairs',0,1);put(1,2,2,'candle');
    put(0,1,-2,'lectern');put(1,7,0,'chain');put(1,6,0,'lantern');
    // upstairs: bedrooms either end
    put(-18,9,-5,'red_bed');put(-18,9,-4,'red_bed');put(-17,9,-5,'chest');put(-14,9,-5,'bookshelf');put(-14,10,-5,'bookshelf');
    put(2,9,-5,'purple_bed');put(2,9,-4,'purple_bed');put(3,9,-5,'chest');put(0,9,5,'barrel');
    for(const [x,z] of [[-16,0],[-7,1],[1,0]]){put(x,15,z,'chain');put(x,14,z,'lantern');}
    // tower ground and middle rooms
    put(TX,11,TZ,'chain');put(TX,10,TZ,'lantern');put(TX,24,TZ,'chain');put(TX,23,TZ,'lantern');
    put(TX+3,1,TZ+3,'barrel');put(TX+3,1,TZ-3,'barrel');put(TX+3,13,TZ+3,'chest');
    w.role=null;

    w.comp='clockwork';
    for(const y of [12,25,40])for(let dx=-4;dx<=4;dx++)for(let dz=-4;dz<=4;dz++)if(!(dx===-4&&dz===-4))put(TX+dx,y,TZ+dz,'dark_oak_planks');
    for(let y=1;y<=53;y++)put(TX-4,y,TZ-4,'ladder',{f:[0,-1]});clr(TX-4,54,TZ-4);
    // axles to all four clocks, a big gear and a small one, and a pendulum
    for(let d=-4;d<=4;d++){put(TX+d,CY,TZ,'stripped_dark_oak_log');put(TX,CY,TZ+d,'stripped_dark_oak_log');}
    for(let dz=-4;dz<=4;dz++)for(let y=CY-4;y<=CY+4;y++){const v=y-CY,g=Math.hypot(dz,v);const x=TX-2;
      if(Math.abs(g-3)<.55)put(x,y,TZ+dz,'spruce_planks');
      else if(g<3&&(dz===0||v===0))put(x,y,TZ+dz,'stripped_spruce_log');}
    for(let k=0;k<12;k++){const a=k*Math.PI/6,dz=Math.round(3.9*Math.sin(a)),v=Math.round(3.9*Math.cos(a));put(TX-2,CY+v,TZ+dz,'dark_oak_planks');}
    put(TX-2,CY,TZ,'oxidized_copper');put(TX,CY,TZ,'oxidized_copper');
    for(let du=-2;du<=2;du++)for(let dv=-2;dv<=2;dv++){const g=Math.hypot(du,dv);if(Math.abs(g-1.6)<.5)put(TX+2+du,CY-3+dv,TZ+2,'oxidized_cut_copper');}
    put(TX+2,CY-3,TZ+2,'copper_grate');
    for(let y=29;y<=39;y++)put(TX+2,y,TZ-2,'chain');put(TX+2,28,TZ-2,'gold_block');
    put(TX+3,39,TZ+3,'chain');put(TX+3,38,TZ+3,'lantern');
    // bell on a beam in the belfry
    for(let d=-4;d<=4;d++)put(TX+d,49,TZ,'stripped_dark_oak_log');
    put(TX,48,TZ,'chain');put(TX,47,TZ,'chain');w.role='furnish';put(TX,46,TZ,'bell');w.role=null;

    /* ===================== Grounds ===================== */
    w.comp='graveyard';
    const GX0=7,GX1=17,GZ0=8,GZ1=15;
    for(let x=GX0;x<=GX1;x++)for(let z=GZ0;z<=GZ1;z++){if(x!==GX0&&x!==GX1&&z!==GZ0&&z!==GZ1)continue;if(z===GZ0&&x>=10&&x<=12)continue;put(x,1,z,'iron_bars');}
    for(const [x,z] of [[GX0,GZ0],[GX1,GZ0],[GX0,GZ1],[GX1,GZ1],[9,GZ0],[13,GZ0]]){put(x,1,z,'cobbled_deepslate_wall');put(x,2,z,'cobbled_deepslate_wall');put(x,3,z,'lantern');}
    let gi=0;
    for(const z of [10,13])for(const x of [8.5,14.5].flatMap(c=>[c-0.5,c+1.5])){const gx=Math.round(x);if(gx===11)continue;const t=gi++%3;
      put(gx,0,z+1,'coarse_dirt');put(gx,0,z+2,'coarse_dirt');
      if(t===0){put(gx,1,z,'mossy_stone_bricks');put(gx,2,z,'stone_brick_slab');}
      else if(t===1){put(gx,1,z,'stone_brick_wall');put(gx,2,z,'mossy_stone_brick_wall');}
      else{put(gx,1,z,'chiseled_stone_bricks');put(gx,2,z,'cobbled_deepslate_wall');}
      if(RNG(gx,2,z)<.5)put(gx,1,z+1,'dead_bush');}

    w.comp='trees';
    const tree=(tx,tz,H,seed)=>{put(tx,0,tz,'coarse_dirt');for(let y=1;y<=H;y++)put(tx,y,tz,'spruce_log');
      const D=[[1,0],[0,1],[-1,0],[0,-1]];
      for(let i=0;i*2+4<H;i++){const y=4+i*2+(seed&1),[dx,dz]=D[(i+seed)%4],len=1+((i+seed)%3===0?2:1);
        for(let j=1;j<=len;j++)put(tx+dx*j,y,tz+dz*j,j===len?'spruce_fence':'spruce_log');put(tx+dx*len,y+1,tz+dz*len,'spruce_fence');}
      put(tx,H+1,tz,'spruce_fence');put(tx,H+2,tz,'spruce_fence');
      for(const [dx,dz] of D)put(tx+dx,1,tz+dz,'spruce_fence');};
    tree(-26,6,15,1);tree(22,-7,17,2);tree(-15,15,12,3);
    for(const [x,z] of [[-11,12],[-3,12]]){put(x,1,z,'cobbled_deepslate_wall');put(x,2,z,'cobbled_deepslate_wall');put(x,3,z,'lantern');}
  }
});
