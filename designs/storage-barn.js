/* Storage Barn — a red gambrel bank barn fitted out as a storage hall, with a brick silo, a lean-to shed,
   a tack room and a paddock. Main barn 25 × 17. x 0, z 0 is the middle of the hall floor; the big doors face east. */
BK.register({
  id:'storage-barn',
  version:2,
  name:'Storage Barn',
  blurb:'A red gambrel barn on a stone footing: X-braced sliding doors, a hay hood with a hoist, a louvred cupola, a domed brick silo, a lean-to shed, a tack room and a paddock. Inside, a labelled storage hall with lofts.',
  tags:['Survival','Storage','Barn','Farm','Large'],
  edition:'Bedrock',
  extent:22,
  start:{x:13,y:1,z:0},
  figure:{x:17,z:3},
  blocks:{
    item_frame:{n:'Item Frame (label)',c:'#b9854f',sh:'trap'},
    spruce_fence_gate:{n:'Spruce Fence Gate',c:'#735538',sh:'fence'},
    oak_leaves:{n:'Oak Leaves',c:'#4f7d2f'},
    grindstone:{n:'Grindstone',c:'#8d8d8d'},
    smoker:{n:'Smoker',c:'#5a4a3c'},
    stonecutter:{n:'Stonecutter',c:'#7b7b7b',sh:'slab'}
  },
  steps:[
    ['Footing','ground','Foundation & floors'],
    ['Footing','plinth','Stone plinth & base walls'],
    ['Footing','course','String course'],
    ['Walls','walls','Red walls'],
    ['Walls','trim','Corner boards & top plate'],
    ['Walls','windows','Windows, sills & drip caps'],
    ['Walls','doors','Sliding doors, track & door hood'],
    ['Walls','ramp','Loading ramp & west steps'],
    ['Frame','frame','Posts, tie beams & braces'],
    ['Frame','lofts','Lofts, gallery & ladders'],
    ['Roof','gables','Gable ends, hay door & oculus'],
    ['Roof','roof','Gambrel roof'],
    ['Roof','eaves','Fascia, brackets & bargeboards'],
    ['Roof','dormers','Dormers'],['Roof','hood','Hay hood & hoist'],
    ['Roof','cupola','Cupola & weathervane'],
    ['Outbuildings','leanto','North lean-to shed'],
    ['Outbuildings','tack','Tack room'],
    ['Outbuildings','silo','Silo'],
    ['Outbuildings','silo-cap','Silo gallery, dome & ladder'],
    ['Inside','storage','Barrel walls & labels'],
    ['Inside','chests','Chest aisles'],
    ['Inside','workshop','Workshop'],
    ['Inside','lights','Lanterns, loft hay & stores'],
    ['Yard','paddock','Paddock, gate & trough'],
    ['Yard','yard','Path, lamps, cart, hay & trees']
  ],
  tiers:[
    {a:0,b:3,name:'Footing',short:'Stone plinth and a drip course',p:'The barn stands on a cobblestone pad with its floor raised one block. Two courses of stone bricks, flecked with mossy and cracked bricks, form the base walls. A batter of stone brick stairs runs round the foot, and a polished andesite string course at y 3 carries a second line of stairs as a drip, so the base reads in three layers.',m:['cobblestone','stone_bricks','mossy_stone_bricks','cracked_stone_bricks','stone_brick_stairs','polished_andesite','spruce_planks']},
    {a:4,b:10,name:'Red walls',short:'Red boards, white trim, framed windows',p:'Red terracotta walls between white corner boards two blocks wide, under a white top plate. Each window is a recessed pair of panes on a spruce mullion, inside a white frame that stands one block proud, with a slab sill on two brackets and a sloping drip cap. On the east gable, two X-braced sliding doors, red with white borders, hang open on an iron track under a shingled door hood carried on spruce brackets. A stone ramp leads up to the threshold.',m:['red_terracotta','smooth_quartz','smooth_quartz_stairs','smooth_quartz_slab','glass_pane','stripped_spruce_log','iron_bars','deepslate_tile_stairs','spruce_stairs']},
    {a:1,b:10,name:'Storage hall',short:'Labelled barrels, chest aisles, workshop',p:'A double-height hall. Barrels three high (102 of them) line both long walls, each column labelled with an item frame. Four islands of back-to-back double chests stand either side of a dark oak centre aisle, with frames on their fronts. Spruce posts with knee braces carry tie beams; lanterns hang from the beams and from the ridge on long chains. A workshop fills the east end: crafting table, smithing table, grindstone and anvil under a tool wall on the north side, furnaces, smoker and a cauldron on the south.',m:['barrel','chest','item_frame','stripped_spruce_log','spruce_stairs','dark_oak_planks','lantern','chain','crafting_table','smithing_table','anvil','furnace']},
    {a:11,b:16,name:'Lofts',short:'Two hay lofts and a gallery',p:'Plank lofts over both ends of the hall, joined by a gallery along the north wall and railed in spruce fence. The east loft opens through the hay door onto the hoist; the west loft looks out through a round window. Hay is stacked against the walls, with chests for seed and a ladder up from each end.',m:['spruce_planks','spruce_fence','hay_block','ladder','chest']},
    {a:11,b:32,name:'Roof & cupola',short:'Gambrel roof, flared eaves, louvred cupola',p:'A deepslate shingle gambrel: steep lower slopes, shallow upper ones, and eaves that kick out flatter at the foot over a white fascia and spruce brackets. White bargeboards follow the profile on both gables, and four gabled dormers with white-framed windows break the long slopes. On the east gable a hay hood shelters a spruce hoist beam with a pulley, a chain and a bale on the hook. A white cupola with spruce louvres, a bell inside and a shingled pyramid cap sits on the ridge, topped with a weathervane.',m:['deepslate_tile_stairs','deepslate_tiles','deepslate_tile_slab','smooth_quartz','smooth_quartz_stairs','spruce_trapdoor','stripped_spruce_log','chain','bell','lightning_rod','iron_bars']},
    {a:0,b:35,name:'Silo',short:'Brick silo with a copper dome',p:'A round brick silo on a stone plinth, banded in stone bricks every six courses, with iron-barred slits. A railed spruce gallery on corbels rings the top under a ribbed oxidized copper dome and a copper vent. A ladder climbs the east side, and a door at the foot faces a matching door in the barn.',m:['bricks','stone_bricks','iron_bars','spruce_slab','spruce_stairs','oxidized_cut_copper','oxidized_cut_copper_stairs','copper_grate','ladder']},
    {a:0,b:9,name:'Outbuildings & yard',short:'Lean-to, tack room, paddock, lamps, cart',p:'An open lean-to along the north wall shelters split logs and stores on spruce posts with knee braces. A small red tack room on the south side opens straight into a fenced paddock with a double gate, a water trough and a hay rick. A dirt road with gravel shoulders runs east from the ramp between lamp posts, past a loaded hand cart. Two oak trees and shrubs soften the corners.',m:['spruce_fence','spruce_fence_gate','stripped_spruce_log','water','hay_block','dirt_path','gravel','cobblestone_wall','lantern','oak_log','oak_leaves']}
  ],
  notes:[
    ['Order','Lay the pad, plinth and string course all round before raising the red walls, so the courses line up. Build the lofts before the roof: they are your scaffold.'],
    ['Gambrel','Each slope, from the eave up: two flared stairs, then a steep run (two full blocks and a stair, then block-and-stair twice), then a shallow run of alternating stairs and top slabs to the ridge. Follow one column in the Side view and copy it along.'],
    ['Labels','The item frames are drawn as coloured plates: put the item that the barrel or chest holds in each frame.'],
    ['Survival','About 6,100 blocks: roughly 10 stacks of red terracotta, 17 of deepslate tiles (stairs, blocks and slabs), 12 of smooth quartz, 4½ of bricks and 18 of stone and cobblestone. 114 barrels and 54 chests. Swap smooth quartz for birch planks or white concrete if you have no quartz.']
  ],
  build(w){
    const {put,clr,get,ins,each,S,RNG}=w;
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const stone=(x,y,z)=>{const r=RNG(x,y,z);return r<.14?'mossy_stone_bricks':r<.24?'cracked_stone_bricks':'stone_bricks';};
    const X=12,Z=8;
    const sg=v=>v<0?-1:1;
    const onWall=(x,z)=>(Math.abs(x)===X&&Math.abs(z)<=Z)||(Math.abs(z)===Z&&Math.abs(x)<=X);
    const ring1=(x,z)=>Math.max(Math.abs(x)-X,Math.abs(z)-Z)===1;            // one block out from the walls
    const inF=(x,z)=>Math.abs(x)-X>=Math.abs(z)-Z?[-sg(x),0]:[0,-sg(z)];         // facing back toward the barn
    // faces: [x,z] of a point `a` along the face, `o` blocks out from the wall plane, and the outward normal
    const F={S:{p:(a,o)=>[a,Z+o],n:[0,1]},N:{p:(a,o)=>[a,-Z-o],n:[0,-1]},E:{p:(a,o)=>[X+o,a],n:[1,0]},W:{p:(a,o)=>[-X-o,a],n:[-1,0]}};
    const fp=(f,a,y,o,id,ex)=>{const [x,z]=F[f].p(a,o);put(x,y,z,id,ex);};
    const toWall=f=>[-F[f].n[0],-F[f].n[1]];

    /* ===== Footing ===== */
    w.comp='ground';
    box(-X-1,X+1,0,0,-Z-1,Z+1,'cobblestone');
    box(-X+1,X-1,1,1,-Z+1,Z-1,'spruce_planks');
    box(-X+1,X-1,1,1,-1,1,'dark_oak_planks');                 // centre aisle

    w.comp='plinth';
    each((x,z)=>{if(onWall(x,z))for(let y=1;y<=2;y++)put(x,y,z,stone(x,y,z));
      if(ring1(x,z)){put(x,0,z,'stone_bricks');put(x,1,z,'stone_brick_stairs',{f:inF(x,z)});}});

    w.comp='course';
    each((x,z)=>{if(onWall(x,z))put(x,3,z,'polished_andesite');if(ring1(x,z))put(x,3,z,'stone_brick_stairs',{f:inF(x,z)});});

    /* ===== Walls ===== */
    w.comp='walls';
    each((x,z)=>{if(onWall(x,z))for(let y=4;y<=9;y++)put(x,y,z,'red_terracotta');});

    w.comp='trim';
    each((x,z)=>{if(!onWall(x,z))return;put(x,10,z,'smooth_quartz');
      const ax=Math.abs(x),az=Math.abs(z);
      if((ax>=X-1&&az===Z)||(ax===X&&az>=Z-1))for(let y=4;y<=9;y++)put(x,y,z,'smooth_quartz');});

    w.comp='windows';
    // recessed glass on a spruce mullion, a white frame one block proud, slab sill on brackets, drip cap
    const win=(f,c)=>{const tw=toWall(f);
      for(let a=c-2;a<=c+2;a++)for(let y=4;y<=8;y++){const d=Math.abs(a-c);
        if(d<=1&&y>=5&&y<=7)fp(f,a,y,0,d===0?'stripped_spruce_log':'glass_pane');
        if(d===2||y===4||y===8)fp(f,a,y,1,'smooth_quartz');}
      for(let a=c-2;a<=c+2;a++){fp(f,a,4,2,'smooth_quartz_slab');fp(f,a,8,2,'smooth_quartz_stairs',{f:tw});}
      for(const a of [c-2,c+2])fp(f,a,3,2,'smooth_quartz_stairs',{f:tw,up:true});};
    win('S',-7);win('S',0);win('W',-5);win('W',5);

    w.comp='doors';
    // east opening, 7 wide and 7 tall, framed in white
    for(let z=-3;z<=3;z++)for(let y=2;y<=8;y++)clr(X,y,z);
    for(let y=2;y<=9;y++){put(X,y,-4,'smooth_quartz');put(X,y,4,'smooth_quartz');}
    for(let z=-3;z<=3;z++)put(X,9,z,'smooth_quartz');
    // two X-braced leaves slid open along the wall
    for(const s of [-1,1])for(let u=0;u<=4;u++)for(let v=0;v<=6;v++){const z=s*(4+u),y=2+v;
      const edge=u===0||u===4||v===0||v===6,diag=Math.abs(u/4-v/6)<.13||Math.abs(u/4+v/6-1)<.13;
      put(X+1,y,z,edge||diag?'smooth_quartz':'red_terracotta');}
    for(let z=-8;z<=8;z++)put(X+1,9,z,'iron_bars');                       // the track
    for(let z=-8;z<=8;z++){put(X+1,10,z,'deepslate_tiles');st(X+1,11,z,'deepslate_tile_stairs',-1,0);st(X+2,10,z,'deepslate_tile_stairs',-1,0);}
    for(const z of [-8,-4,0,4,8])st(X+2,9,z,'spruce_stairs',-1,0,true);
    // personnel doors: west gable, barn-to-silo, barn-to-tack-room
    put(-X,2,0,'spruce_door');put(-X,3,0,'spruce_door');
    for(let y=2;y<=4;y++){put(-X,y,-1,'smooth_quartz');put(-X,y,1,'smooth_quartz');}put(-X,4,0,'smooth_quartz');
    for(let z=-2;z<=2;z++)st(-X-1,5,z,'deepslate_tile_stairs',1,0);
    for(const z of [-2,2])st(-X-1,4,z,'spruce_stairs',1,0,true);
    put(8,2,-Z,'spruce_door');put(8,3,-Z,'spruce_door');put(8,4,-Z,'smooth_quartz');
    put(9,2,Z,'spruce_door');put(9,3,Z,'spruce_door');put(9,4,Z,'smooth_quartz');

    w.comp='ramp';
    for(let z=-8;z<=8;z++)put(X+1,1,z,'polished_andesite');                // threshold sill under the track
    for(let z=-3;z<=3;z++){st(X+2,1,z,'stone_brick_stairs',-1,0);put(X+3,1,z,'stone_brick_slab');put(X+2,0,z,'stone_bricks');put(X+3,0,z,'stone_bricks');}
    for(const z of [-4,4]){put(X+2,1,z,'cobblestone_wall');put(X+3,1,z,'cobblestone_wall');put(X+2,0,z,'stone_bricks');put(X+3,0,z,'stone_bricks');}
    for(let z=-1;z<=1;z++)st(-X-1,1,z,'stone_brick_stairs',1,0);
    st(8,1,-Z-1,'stone_brick_stairs',0,1);

    /* ===== Frame ===== */
    w.comp='frame';
    for(const x of [-6,0,6]){
      for(const z of [-5,5]){for(let y=2;y<=9;y++)put(x,y,z,'stripped_spruce_log');
        st(x,9,z-sg(z),'spruce_stairs',0,sg(z),true);st(x-1,9,z,'spruce_stairs',1,0,true);st(x+1,9,z,'spruce_stairs',-1,0,true);}
      for(let z=-Z+1;z<=Z-1;z++)put(x,10,z,'stripped_spruce_log');}

    w.comp='lofts';
    const lofts=[[-X+1,-3],[6,X-1]];
    const holes=new Set(['-11,3','7,-5']);
    for(const [x0,x1] of lofts)for(let x=x0;x<=x1;x++)for(let z=-Z+1;z<=Z-1;z++)if(!holes.has(x+','+z))put(x,11,z,'spruce_planks');
    for(let x=-2;x<=5;x++)for(let z=-7;z<=-6;z++)put(x,11,z,'spruce_planks');           // north gallery
    for(let z=-5;z<=7;z++){put(-3,12,z,'spruce_fence');put(6,12,z,'spruce_fence');}
    for(let x=-2;x<=5;x++)put(x,12,-5,'spruce_fence');
    for(let z=-5;z<=7;z++){st(-2,10,z,'spruce_stairs',-1,0,true);st(5,10,z,'spruce_stairs',1,0,true);}   // edge joists
    for(let y=2;y<=11;y++)put(-11,y,3,'ladder',{f:[-1,0]});
    for(let y=2;y<=11;y++)put(7,y,-5,'ladder',{f:[-1,0]});

    /* ===== Roof ===== */
    // gambrel profile by distance from the ridge: f = full blocks, s = stair, t = top slab
    const PROF={10:{s:10},9:{s:11},8:{f:[11,12],s:13},7:{f:[14],s:15},6:{f:[16],s:17},5:{s:18},4:{t:18},3:{s:19},2:{t:19},1:{s:20},0:{t:20}};
    const lowY=a=>{const p=PROF[a];return Math.min(...(p.f||[]),p.s??99,p.t??99);};
    const profile=(x,full,stair,slab)=>{for(let a=0;a<=10;a++){const p=PROF[a];
      for(const s of a===0?[1]:[-1,1]){const z=s*a;
        if(p.f)p.f.forEach(y=>put(x,y,z,full));
        if(p.s)st(x,p.s,z,stair,0,-s);
        if(p.t)put(x,p.t,z,slab,{up:true});}}};

    w.comp='gables';
    for(const x of [-X,X])for(let z=-7;z<=7;z++)for(let y=11;y<lowY(Math.abs(z));y++)put(x,y,z,'red_terracotta');
    for(const x of [-X,X])for(const z of [-6,6])for(let y=11;y<lowY(6);y++)put(x,y,z,'smooth_quartz');
    for(const x of [-X,X])for(let z=-7;z<=7;z++)put(x,11,z,z===0?'smooth_quartz':get(x,11,z)?.id==='smooth_quartz'?'smooth_quartz':'red_terracotta');
    // east hay door, 3 wide and 4 tall, framed in white, leaves folded back
    for(let z=-1;z<=1;z++)for(let y=12;y<=15;y++)clr(X,y,z);
    for(let y=11;y<=16;y++){put(X,y,-2,'smooth_quartz');put(X,y,2,'smooth_quartz');}
    for(let z=-1;z<=1;z++)put(X,16,z,'smooth_quartz');
    for(const z of [-4,-3,3,4])for(let y=12;y<=15;y++)put(X+1,y,z,'spruce_trapdoor',{f:[-1,0]});
    // west oculus: a round window with a cross of spruce bars
    for(let z=-3;z<=3;z++)for(let y=12;y<=18;y++){const d=Math.hypot(z,y-15);
      if(d<=1.45)put(-X,y,z,(z===0||y===15)?'stripped_spruce_log':'glass_pane');
      else if(d<=2.5)put(-X,y,z,'smooth_quartz');}
    st(-X-1,12,-1,'smooth_quartz_stairs',1,0,true);st(-X-1,12,1,'smooth_quartz_stairs',1,0,true);put(-X-1,12,0,'smooth_quartz_slab');

    w.comp='roof';
    for(let x=-X-1;x<=X+1;x++)profile(x,'deepslate_tiles','deepslate_tile_stairs','deepslate_tile_slab');
    for(let x=-X-1;x<=X+1;x++)put(x,21,0,'deepslate_tile_slab');

    w.comp='eaves';
    for(let x=-X-1;x<=X+1;x++)for(const s of [-1,1]){put(x,9,s*10,'smooth_quartz_slab',{up:true});
      if(Math.abs(x)%3===0)st(x,10,s*9,'spruce_stairs',0,-s,true);}
    for(const x of [-X-2,X+2]){profile(x,'smooth_quartz','smooth_quartz_stairs','smooth_quartz_slab');put(x,21,0,'smooth_quartz_slab');put(x,22,0,'lightning_rod');
      for(const s of [-1,1])st(x,9,s*10,'smooth_quartz_stairs',0,-s,true);}
    for(const x of [-X-1,X+1])for(const z of [-6,6,0]){if(x>0&&z===0)continue;st(x,lowY(Math.abs(z))-1,z,'spruce_stairs',-sg(x),0,true);}

    w.comp='dormers';
    // four gabled dormers on the steep lower slopes, each with a framed window
    const DP=[[15,3],[16,2],[17,1]];
    for(const c of [-7,6])for(const s of [-1,1]){const Z8=s*Z;
      for(let x=c-2;x<=c+2;x++)for(let a=5;a<=8;a++)for(let y=11;y<=17;y++)clr(x,y,s*a);
      for(let x=c-2;x<=c+2;x++)for(let y=11;y<=14;y++){const d=Math.abs(x-c);
        const id=(d===2||y===11||y===14)?'smooth_quartz':(d===0?'stripped_spruce_log':'glass_pane');put(x,y,Z8,id);}
      for(const x of [c-2,c+2])for(let a=5;a<=7;a++)for(let y=11;y<=14;y++)put(x,y,s*a,a===7?'red_terracotta':'red_terracotta');
      for(let y=15;y<=17;y++)for(let x=c-2;x<=c+2;x++)if(Math.abs(x-c)<=17-y)put(x,y,Z8,y===17?'smooth_quartz':'red_terracotta');
      for(let a=4;a<=9;a++){const z=s*a,q=a===9;
        for(const [y,d] of DP){st(c-d,y,z,q?'smooth_quartz_stairs':'deepslate_tile_stairs',1,0);st(c+d,y,z,q?'smooth_quartz_stairs':'deepslate_tile_stairs',-1,0);}
        put(c,18,z,q?'smooth_quartz_slab':'deepslate_tile_slab',{up:true});}
      for(let x=c-1;x<=c+1;x++)put(x,10,s*9,'smooth_quartz_slab',{up:true});}

    w.comp='hood';
    const HP={3:{s:17},2:{s:18},1:{s:19},0:{t:19}};
    for(let x=X+1;x<=X+5;x++){const q=x===X+5;
      for(let a=0;a<=3;a++){const p=HP[a];for(const s of a===0?[1]:[-1,1]){const z=s*a;
        if(p.s)st(x,p.s,z,q?'smooth_quartz_stairs':'deepslate_tile_stairs',0,-s);
        if(p.t)put(x,p.t,z,q?'smooth_quartz_slab':'deepslate_tile_slab',{up:true});}}}
    for(let x=X;x<=X+5;x++)put(x,17,0,'stripped_spruce_log');                     // hoist beam
    for(const s of [-1,1])st(X+1,16,s*3,'spruce_stairs',-1,0,true);
    put(X+5,16,0,'grindstone');                                                   // pulley
    for(let y=12;y<=15;y++)put(X+5,y,0,'chain');
    put(X+5,11,0,'hay_block');

    w.comp='cupola';
    for(let y=21;y<=24;y++)for(let x=-1;x<=1;x++)for(let z=-1;z<=1;z++)clr(x,y,z);
    each((x,z)=>{const m=Math.max(Math.abs(x),Math.abs(z));if(m>3)return;
      if(m<=2)put(x,20,z,m===2?'smooth_quartz':'spruce_planks');
      if(m===2)for(let y=21;y<=24;y++){if(Math.abs(x)===2&&Math.abs(z)===2)put(x,y,z,'smooth_quartz');
        else put(x,y,z,'spruce_trapdoor',{f:Math.abs(x)===2?[sg(x),0]:[0,sg(z)]});}
      if(m<=2)put(x,25,z,'smooth_quartz');
      if(m===3)S(x,25,z,'smooth_quartz_stairs',true);
      if(m===3)S(x,26,z,'deepslate_tile_stairs');
      if(m===2){S(x,27,z,'deepslate_tile_stairs');}
      if(m<=2&&m>=1)put(x,26,z,'deepslate_tiles');
      if(m===1)S(x,28,z,'deepslate_tile_stairs');
      if(m===0){put(0,26,0,'deepslate_tiles');put(0,27,0,'deepslate_tiles');put(0,28,0,'deepslate_tiles');put(0,29,0,'deepslate_tiles');}});
    for(let x=-1;x<=1;x++)for(let z=-1;z<=1;z++)put(x,27,z,'deepslate_tiles');
    w.role='furnish';put(0,24,0,'bell');w.role=null;
    // weathervane: a copper arrow on a rod
    for(let y=30;y<=33;y++)put(0,y,0,'lightning_rod');
    put(-1,32,0,'oxidized_cut_copper_slab',{up:true});put(-2,32,0,'oxidized_cut_copper_stairs',{f:[1,0],up:true});put(1,32,0,'oxidized_cut_copper_stairs',{f:[-1,0]});

    /* ===== North lean-to ===== */
    w.comp='leanto';
    const LX0=-11,LX1=3,LZ=-13;
    const leanY={'-9':9,'-10':8,'-11':7,'-12':6,'-13':5,'-14':4};
    for(let x=LX0;x<=LX1;x++)for(let z=-12;z<=-10;z++)put(x,0,z,RNG(x,0,z)<.3?'cobblestone':'gravel');
    for(let x=LX0-1;x<=LX1+1;x++)for(let z=-9;z>=-14;z--){const y=leanY[z],edge=x===LX0-1||x===LX1+1;
      st(x,y,z,edge?'smooth_quartz_stairs':'deepslate_tile_stairs',0,1);
      if(z===-14&&!edge)put(x,3,z,'smooth_quartz_slab',{up:true});}
    for(const x of [LX0,-6,-1,LX1]){put(x,0,LZ,'cobblestone');for(let y=1;y<=3;y++)put(x,y,LZ,'stripped_spruce_log');
      if(x>LX0)st(x-1,3,LZ,'spruce_stairs',1,0,true);if(x<LX1)st(x+1,3,LZ,'spruce_stairs',-1,0,true);}
    for(let x=LX0;x<=LX1;x++)put(x,4,LZ,'stripped_spruce_log');
    for(const x of [LX0,LX1])for(let z=-12;z<=-10;z++)for(let y=1;y<leanY[z];y++)put(x,y,z,(z===-11&&y<=leanY[z]-2)?'stripped_spruce_log':'spruce_planks');
    for(const x of [LX0,LX1])put(x,4,-11,'glass_pane');
    w.role='furnish';
    for(let x=-10;x<=-7;x++)for(let z=-11;z<=-10;z++)for(let y=1;y<=3;y++)put(x,y,z,(x+y+z)%2?'oak_log':'stripped_oak_log');
    put(-5,1,-10,'barrel');put(-4,1,-10,'barrel');put(-5,2,-10,'barrel');put(-3,1,-11,'composter');
    put(1,1,-10,'grindstone');put(2,1,-10,'chest');put(2,1,-11,'hay_block');put(1,1,-11,'hay_block');put(2,2,-11,'hay_block');
    put(-4,3,LZ,'lantern');put(-9,3,LZ,'lantern');
    w.role=null;

    /* ===== Tack room ===== */
    w.comp='tack';
    const TX0=6,TX1=11,TZ1=12;
    const tackY={9:8,10:8,11:7,12:6,13:5};
    for(let x=TX0;x<=TX1;x++)for(let z=9;z<=TZ1;z++){put(x,0,z,(x===TX0||x===TX1||z===TZ1)?'cobblestone':'spruce_planks');for(let y=1;y<=4;y++)clr(x,y,z);}
    for(let x=TX0;x<=TX1;x++)for(let z=9;z<=TZ1;z++){const wall=x===TX0||x===TX1||z===TZ1;if(!wall)continue;
      const corner=(x===TX0||x===TX1)&&z===TZ1;
      for(let y=1;y<tackY[z];y++)put(x,y,z,y===1?stone(x,y,z):corner?'smooth_quartz':'red_terracotta');}
    for(let x=TX0-1;x<=TX1+1;x++){const edge=x===TX0-1||x===TX1+1;
      put(x,8,9,edge?'smooth_quartz':'deepslate_tiles');
      for(let z=10;z<=13;z++)st(x,tackY[z],z,edge?'smooth_quartz_stairs':'deepslate_tile_stairs',0,-1);
      if(!edge)put(x,4,14,'smooth_quartz_slab',{up:true});}
    for(let x=TX0-1;x<=TX1+1;x++)clr(x,4,14),put(x,4,13,get(x,4,13)?.id||'smooth_quartz_slab',{up:true});
    put(TX0,1,11,'spruce_door');put(TX0,2,11,'spruce_door');put(TX0,3,11,'smooth_quartz');
    for(let x=8;x<=9;x++)for(let y=2;y<=3;y++)put(x,y,TZ1,'glass_pane');
    for(let x=8;x<=9;x++)put(x,1,TZ1+1,'smooth_quartz_slab');
    put(7,2,TZ1+1,'spruce_trapdoor',{f:[0,-1]});put(7,3,TZ1+1,'spruce_trapdoor',{f:[0,-1]});
    put(10,2,TZ1+1,'spruce_trapdoor',{f:[0,-1]});put(10,3,TZ1+1,'spruce_trapdoor',{f:[0,-1]});
    st(9,1,9,'spruce_stairs',0,-1);
    w.role='furnish';
    put(10,1,9,'chest');put(10,1,10,'barrel');put(10,2,10,'barrel');put(7,1,9,'barrel');put(10,1,11,'cauldron');
    put(8,3,11,'item_frame',{f:[0,1],hue:'#7a4a22'});put(10,3,11,'item_frame',{f:[0,1],hue:'#5a3a1a'});
    put(8,6,10,'chain');put(8,5,10,'lantern');
    w.role=null;

    /* ===== Silo ===== */
    w.comp='silo';
    const CX=8,CZ=-13,R=3.6;
    const sd=(x,z)=>Math.hypot(x-CX,z-CZ);
    const sTo=(x,z)=>{const dx=CX-x,dz=CZ-z;return Math.abs(dx)>=Math.abs(dz)?[sg(dx),0]:[0,sg(dz)];};
    each((x,z)=>{const d=sd(x,z);
      if(d<=R+1){put(x,0,z,d<=R-1?'smooth_stone':'stone_bricks');}
      if(d>R&&d<=R+1)put(x,1,z,'stone_brick_stairs',{f:sTo(x,z)});
      if(d<=R&&d>R-1)for(let y=1;y<=27;y++){let id=y<=3?stone(x,y,z):(y%6===2?'stone_bricks':'bricks');
        if(y===27)id='stone_bricks';put(x,y,z,id);}});
    for(const y of [6,7,12,13,18,19,24])for(const [x,z] of [[CX,CZ+3],[CX-3,CZ],[CX,CZ-3]])put(x,y,z,'iron_bars');
    put(CX,1,CZ+3,'spruce_door');put(CX,2,CZ+3,'spruce_door');put(CX,3,CZ+3,'stone_bricks');
    for(let x=CX-1;x<=CX+1;x++)put(x,5,-9,'deepslate_tile_slab');
    st(CX,4,-9,'spruce_stairs',0,-1,true);

    w.comp='silo-cap';
    const ladder=(x,z)=>x===CX+4&&z===CZ;
    each((x,z)=>{const d=sd(x,z);if(d<=R||d>R+1.25||ladder(x,z))return;
      put(x,27,z,'spruce_slab',{up:true});put(x,26,z,'spruce_stairs',{f:sTo(x,z),up:true});
      if(d>R+.35)put(x,28,z,'iron_bars');});
    const domeR=y=>4.2*Math.sqrt(Math.max(0,1-((y-27.5)/5.2)**2));
    for(let y=28;y<=32;y++){const r=domeR(y),r2=domeR(y+1);
      each((x,z)=>{const d=sd(x,z);if(d>r||d<=r-1.3)return;
        if(d>r2)put(x,y,z,'oxidized_cut_copper_stairs',{f:sTo(x,z)});else put(x,y,z,'oxidized_cut_copper');});}
    put(CX,32,CZ,'oxidized_cut_copper');put(CX,33,CZ,'copper_grate');put(CX,34,CZ,'oxidized_cut_copper_slab');put(CX,35,CZ,'lightning_rod');
    for(let y=1;y<=28;y++)put(CX+4,y,CZ,'ladder',{f:[-1,0]});
    put(CX+4,0,CZ,'stone_bricks');

    /* ===== Inside ===== */
    w.comp='storage';w.role='furnish';
    const LBL=['#c9a24a','#7fb238','#8f8f8f','#d8b26a','#6f4e2c','#b5292c','#4a6fc0','#e3e3e3'];
    for(let x=-X+1;x<=5;x++)for(const s of [-1,1]){
      for(let y=2;y<=4;y++)put(x,y,s*7,'barrel');
      put(x,4,s*6,'item_frame',{f:[0,s],hue:LBL[(x+20+(s>0?3:0))%LBL.length]});}

    w.comp='chests';
    const groups=[[-10,-7],[-5,-2],[1,4]];
    for(const [x0,x1] of groups)for(const s of [-1,1])for(let x=x0;x<=x1;x++){
      put(x,2,s*3,'chest');put(x,2,s*4,'chest');
      if((x-x0)%2===0){put(x,2,s*2,'item_frame',{f:[0,s],hue:LBL[(x+12)%LBL.length]});put(x,2,s*5,'item_frame',{f:[0,-s],hue:LBL[(x+15)%LBL.length]});}}
    for(const x of [-6,0])for(const s of [-1,1])w.V.delete(w.K(x,2,s*5));

    w.comp='workshop';
    put(8,2,-7,'crafting_table');put(9,2,-7,'smithing_table');put(10,2,-7,'grindstone');put(11,2,-7,'anvil');
    for(let x=8;x<=11;x++){put(x,4,-7,'item_frame',{f:[0,-1],hue:LBL[x%LBL.length]});put(x,5,-7,'item_frame',{f:[0,-1],hue:LBL[(x+3)%LBL.length]});}
    for(let x=9;x<=11;x++)put(x,2,-6,'spruce_slab',{up:true});
    put(8,2,7,'furnace');put(10,2,7,'blast_furnace');put(11,2,7,'smoker');put(11,2,6,'cauldron');put(8,2,6,'stonecutter');
    put(10,3,7,'barrel');put(11,3,7,'chest');

    w.comp='lights';
    for(const x of [1,4]){for(let y=10;y<=19;y++)put(x,y,0,'chain');put(x,9,0,'lantern');}
    for(const x of [-9,-5,9]){put(x,10,0,'chain');put(x,9,0,'lantern');}
    for(const x of [-6,0,6])for(const s of [-1,1]){put(x,6,s*4,'spruce_fence');put(x,5,s*4,'lantern');}
    for(let x=-11;x<=-4;x++)for(const s of [-1,1]){put(x,12,s*7,'hay_block');if(x<=-7)put(x,13,s*7,'hay_block');if(x<=-9)put(x,12,s*6,'hay_block');}
    for(let x=8;x<=11;x++)for(const s of [-1,1]){put(x,12,s*6,'hay_block');put(x,12,s*7,'hay_block');put(x,13,s*7,'hay_block');}
    put(-10,12,0,'chest');put(-10,12,-1,'chest');put(-11,12,-3,'barrel');
    put(-8,12,2,'lantern');put(9,12,-4,'lantern');
    w.role=null;

    /* ===== Yard ===== */
    w.comp='paddock';
    const PX0=-13,PX1=5,PZ0=10,PZ1=20;
    for(let x=PX0+1;x<=PX1-1;x++)for(let z=PZ0;z<=PZ1-1;z++)put(x,0,z,RNG(x,1,z)<(z>17&&x<-3?.6:.18)?'dirt_path':'grass_block');
    for(let x=PX0;x<=PX1;x++)for(let z=PZ0;z<=PZ1;z++){if(x!==PX0&&x!==PX1&&z!==PZ1)continue;
      put(x,0,z,'grass_block');
      const corner=(x===PX0||x===PX1)&&z===PZ1;
      if(corner){put(x,1,z,'stripped_spruce_log');put(x,2,z,'stripped_spruce_log');put(x,3,z,'lantern');}
      else if(z===PZ1&&(x===-5||x===-4))put(x,1,z,'spruce_fence_gate');
      else if(x===PX1&&z===11)put(x,1,z,'spruce_fence_gate');
      else put(x,1,z,(z===PZ1?x:z)%4===0?'stripped_spruce_log':'spruce_fence');}
    // water trough
    for(let x=-10;x<=-7;x++){put(x,0,18,'spruce_planks');put(x,1,18,'water');put(x,1,17,'spruce_trapdoor',{f:[0,1]});put(x,1,19,'spruce_trapdoor',{f:[0,-1]});}
    put(-11,1,18,'stripped_spruce_log');put(-6,1,18,'stripped_spruce_log');
    // hay rick
    for(let x=0;x<=2;x++)for(let z=16;z<=18;z++){put(x,1,z,'hay_block');if(x<=1&&z<=17)put(x,2,z,'hay_block');}
    put(0,3,16,'hay_block');

    w.comp='yard';
    for(let x=X+4;x<=22;x++)for(let z=-2;z<=2;z++)put(x,0,z,Math.abs(z)===2?'gravel':'dirt_path');
    for(let z=-8;z<=8;z++){if(Math.abs(z)>4)put(X+2,0,z,'gravel');}
    for(const x of [17,21])for(const s of [-1,1]){put(x,0,s*3,'stone_bricks');put(x,1,s*3,'cobblestone_wall');put(x,2,s*3,'spruce_fence');put(x,3,s*3,'spruce_fence');put(x,4,s*3,'lantern');}
    // hand cart, loaded
    put(18,1,5,'dark_oak_trapdoor',{f:[0,-1]});put(18,1,7,'dark_oak_trapdoor',{f:[0,1]});put(18,1,6,'stripped_spruce_log');
    for(let x=17;x<=19;x++)for(let z=5;z<=7;z++)put(x,2,z,'spruce_slab');
    put(17,3,6,'barrel');put(18,3,6,'hay_block');put(19,3,5,'hay_block');put(19,3,7,'chest');
    put(16,1,5,'spruce_fence');put(16,1,7,'spruce_fence');put(15,1,5,'spruce_fence');put(15,1,7,'spruce_fence');
    // crates by the door
    put(X+3,1,-6,'barrel');put(X+3,1,-7,'barrel');put(X+3,2,-7,'barrel');put(X+3,1,7,'hay_block');put(X+4,1,7,'hay_block');
    // west hay rick under a slab roof on posts
    for(let x=-17;x<=-15;x++)for(let z=3;z<=6;z++){put(x,1,z,'hay_block');if(z>=4&&z<=5)put(x,2,z,'hay_block');}
    for(const [x,z] of [[-18,2],[-14,2],[-18,7],[-14,7]])for(let y=1;y<=3;y++)put(x,y,z,'spruce_fence');
    for(let x=-18;x<=-14;x++)for(let z=2;z<=7;z++)put(x,4,z,'spruce_slab');
    // trees and shrubs
    const tree=(tx,tz,h)=>{for(let y=1;y<=h;y++)put(tx,y,tz,'oak_log');
      for(let x=tx-3;x<=tx+3;x++)for(let z=tz-3;z<=tz+3;z++)for(let y=h-2;y<=h+2;y++){
        const e=((x-tx)**2+(z-tz)**2)/7.3+((y-h-.3)/2.2)**2;if(e<=1&&RNG(x,y,z)>.12&&!(x===tx&&z===tz&&y<=h))put(x,y,z,'oak_leaves');}};
    tree(-18,-11,6);tree(17,14,5);
    for(const [x,z] of [[-14,-9],[-14,9],[14,-10],[14,10],[-15,-15]]){put(x,1,z,'oak_leaves');if(RNG(x,1,z)>.4)put(x,2,z,'oak_leaves');put(x+1,1,z,'oak_leaves');}
  }
});
