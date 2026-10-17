/* Starter House — an L-shaped timber homestead built from early-survival materials: a cobblestone plinth,
   proud oak posts, plank walls framed in stripped logs, a cross gable with a balcony, a stone chimney on the west gable
   and a porch wrapped into the corner of the L. Around it: a fenced farm, a well, a workshop lean-to and an animal pen.
   x 0, z 0 is just inside the join of the two wings; the front door faces south. */
BK.register({
  id:'starter-house',
  version:2,
  name:'Starter House',
  blurb:'An L-shaped survival homestead: proud oak posts on a cobblestone plinth, a cross gable with a balcony, a stone chimney, a wrap-round porch, a full interior, and a farm, well, workshop and pen around it.',
  tags:['Survival','Base','House','Medium'],
  edition:'Bedrock',
  extent:20,
  start:{x:-3,y:1,z:4},
  figure:{x:-2,z:9},
  blocks:{
    smoker:{n:'Smoker',c:'#5b4a3a'},
    campfire:{n:'Campfire',c:'#d0702a',sh:'slab',emit:1},
    carrots:{n:'Farmland (carrots)',c:'#3f8f2c'},
    oak_fence_gate:{n:'Oak Fence Gate',c:'#b8955a',sh:'fence'},
    carved_pumpkin:{n:'Carved Pumpkin',c:'#d9822b'},
    grindstone:{n:'Grindstone',c:'#8a8a8a',sh:'slab'},
    oak_leaves:{n:'Oak Leaves',c:'#4c7d2c'},
    birch_planks:{n:'Birch Planks',c:'#d4c48e'},
    flowers:{n:'Flowers (poppy & dandelion)',c:'#d8463a',sh:'rod'}
  },
  steps:[
    ['Ground','site','Foundations, floors & decks'],
    ['Walls','plinth','Cobblestone plinth'],
    ['Walls','frame','Sill course, top beam & frame'],
    ['Walls','walls','Plank panels'],
    ['Walls','openings','Doors, windows & gable lights'],
    ['Walls','posts','Proud posts & knee braces'],
    ['Walls','shutters','Shutters, sills, flower pots & hoods'],
    ['Walls','chimney','Stone chimney & hearth'],
    ['Upper','attic','Tie beams, attic floor & ladder'],
    ['Upper','gables','Timber gables'],
    ['Roof','roof','Spruce roof'],
    ['Roof','ridge','Ridge, bargeboards & finials'],
    ['Porch','porch','Porch posts & railings'],
    ['Porch','porch-roof','Porch roof'],
    ['Porch','balcony','Balcony'],
    ['Inside','hearth','Hearth, kitchen & dining'],
    ['Inside','storage','Storage wall & smelting corner'],
    ['Inside','nook','Enchanting nook & attic study'],
    ['Inside','bedroom','Bedroom'],
    ['Grounds','paths','Paths & lantern posts'],
    ['Grounds','well','Well'],
    ['Grounds','farm','Farm'],
    ['Grounds','workshop','Workshop lean-to'],
    ['Grounds','pen','Animal pen'],
    ['Grounds','garden','Trees, hedges & flowers']
  ],
  tiers:[
    {a:0,b:2,name:'Plinth & grounds',short:'Cobblestone plinth, decks, paths',p:'The house stands on a two-course cobblestone plinth with stone-brick quoins at every corner and a sloped footing of cobblestone stairs round the open sides. The oak posts stand one block proud of the walls and start on the plinth too, so every post reads from the ground up. Spruce decks run under the porch, the balcony and the workshop. Dirt paths edged with gravel join the front door, the garden door, the back door, the well, the farm gate and the pen, lit by lantern posts on cobblestone feet.',m:['cobblestone','mossy_cobblestone','stone_bricks','cobblestone_stairs','spruce_planks','dirt_path','gravel','cobblestone_wall','oak_fence','lantern']},
    {a:3,b:8,name:'Timber walls',short:'Proud posts, framed panels, shuttered windows',p:'A stripped spruce sill course at y 3 and a top beam at y 7 run right round the house. Between them are pale birch plank panels, framed in dark spruce logs at every corner and behind every post. Each window has a stripped spruce header, and on the outside spruce shutters, an oak sill with a potted flower and a spruce hood. The posts carry the eaves on spruce knee braces. A stone chimney with stepped shoulders climbs the west gable from a hearth inside.',m:['stripped_spruce_log','birch_planks','spruce_log','oak_log','glass_pane','spruce_trapdoor','oak_slab','flower_pot','spruce_stairs','oak_door','spruce_door']},
    {a:4,b:7,name:'Porch & balcony',short:'Wrap-round porch, balcony on the cross gable',p:'A porch fills the corner of the L and wraps round the south-west corner, under a stepped spruce lean-to on oak posts with knee braces and a fence railing. Benches sit under the windows and lanterns hang from the porch roof. The cross wing has its own covered deck under a balcony: two posts carry a spruce beam, and the balcony floor sits on brackets off the wall, with a door from the attic study and a railing along its front.',m:['spruce_planks','oak_log','spruce_stairs','oak_fence','stripped_spruce_log','oak_stairs','lantern']},
    {a:8,b:14,name:'Roof',short:'Cross gables, oak bargeboards',p:'Two spruce stair roofs at the same pitch meet in valleys over the join. Every gable end overhangs with an oak bargeboard, lighter than the spruce, with an oak fascia under it, and a spruce ridge cap runs along both ridges. The gables are timbered: a stripped spruce tie beam, a spruce log king post and birch infill with small windows. Three dormers break the long roof of the west wing, two over the porch and one at the back. Oak fence finials mark the north and south gables, and the chimney rises through the west one.',m:['spruce_stairs','spruce_planks','spruce_slab','oak_stairs','oak_planks','spruce_log','birch_planks','stripped_spruce_log','oak_fence']},
    {a:0,b:11,name:'Inside',short:'Hall, kitchen, storage, smelting, nook, bedroom, attic',p:'The west wing is one open hall under the roof, with tie beams and hanging lanterns. A fireplace on the west wall has a stone hearth and mantel, a kitchen of smoker, sink and barrel runs along the north wall, and a table with four chairs stands on a red rug. Fifteen barrels make a storage wall, with double chests under the south windows. The cross wing holds a smelting corner under a stone hood, an enchanting table ringed by bookshelves, a crafting table, and a bedroom with two beds behind a partition. A ladder climbs to an attic study with a railing over the hall and a door onto the balcony.',m:['oak_planks','spruce_planks','red_wool','barrel','chest','furnace','blast_furnace','smoker','enchanting_table','bookshelf','crafting_table','red_bed','ladder','lantern']},
    {a:0,b:6,name:'Farmstead',short:'Farm, well, workshop, pen',p:'North of the house, a fenced plot of wheat and carrots is watered by two channels either side of a path, with a scarecrow, a gate and lanterns on the corner posts. A cobblestone well with a little spruce roof stands south-west. The workshop is a lean-to on the east wall with an anvil, a grindstone, a log pile and a tool rack. South-east, an animal pen has a slab-roofed shelter, hay and a water trough. Oak trees, leaf hedges and flower beds finish the site.',m:['farmland','carrots','water','oak_fence','oak_fence_gate','cobblestone','anvil','grindstone','hay_block','oak_log','oak_leaves','flowers']}
  ],
  notes:[
    ['Survival cost','Roughly 13 stacks of spruce (roof, logs, decks), 6 stacks of oak (posts, fences, bargeboards, leaves), a stack and a half of birch planks, 4 stacks of cobblestone and 45 glass panes. The only iron is the anvil, the blast furnace and the lanterns; leave those for later if you need to.'],
    ['Order','Plinth, frame and panels first, then the roof, so you have shelter. Posts, shutters and the porch come after; the grounds last.'],
    ['Roof valleys','The two roofs are the same height, so where they cross each layer simply meets the other. Lay each layer of both roofs before starting the next one up.'],
    ['Posts','Posts stand in the cell just outside the wall, not in it. The knee braces are upside-down spruce stairs either side of the post top.'],
    ['Enchanting','The bookshelves stand exactly one block of air from the enchanting table, as the game needs.']
  ],
  build(w){
    const {put,clr,get,RNG}=w;
    const D4=[[1,0],[-1,0],[0,1],[0,-1]],D8=[...D4,[1,1],[1,-1],[-1,1],[-1,-1]];
    const st=(x,y,z,id,f,up)=>put(x,y,z,id,{f,up:!!up});
    const deco=(x,y,z,id,ex)=>{if(!get(x,y,z))put(x,y,z,id,ex);};
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};

    /* ---------- Plan: wing A runs east–west, wing B north–south; they share the column x 2 ---------- */
    const inA=(x,z)=>x>=-8&&x<=2&&z>=-4&&z<=2, inB=(x,z)=>x>=2&&x<=8&&z>=-4&&z<=6;
    const IN=(x,z)=>inA(x,z)||inB(x,z);
    const isWall=(x,z)=>IN(x,z)&&D8.some(([a,b])=>!IN(x+a,z+b));
    const normals=(x,z)=>D4.filter(([a,b])=>!IN(x+a,z+b));
    const WALLS=[],INTERIOR=[];
    for(let x=-8;x<=8;x++)for(let z=-4;z<=6;z++){if(!IN(x,z))continue;(isWall(x,z)?WALLS:INTERIOR).push([x,z]);}
    const isCorner=(x,z)=>isWall(x,z)&&normals(x,z).length!==1;

    /* Roof heightfield: two gable roofs of pitch 1, ridges at y 12 (A along z −1, B along x 5) */
    const hA=(x,z)=>(x>=-9&&x<=5&&z>=-5&&z<=3)?12-Math.abs(z+1):-99;
    const hB=(x,z)=>(x>=1&&x<=9&&z>=-5&&z<=8)?12-Math.abs(x-5):-99;
    // dormers: small gables of pitch 1 off wing A, [centre x, side]
    const DORM=[[-6,1],[-2,1],[-2,-1]];
    const hD=(x,z)=>{let h=-99;for(const [c,s] of DORM){const zz=s>0?z:-2-z;if(zz>=-1&&zz<=3&&Math.abs(x-c)<=2)h=Math.max(h,11-Math.abs(x-c));}return h;};
    const H=(x,z)=>Math.max(hA(x,z),hB(x,z),hD(x,z));

    /* Porch round the corner of the L: d = blocks out from the wall (1–3 deck, 4 eave) */
    const porchD=(x,z)=>{const s=(z>=3&&z<=6&&x>=-12&&x<=1)?z-2:0,wd=(x<=-9&&x>=-12&&z>=1&&z<=6)?-8-x:0;return Math.max(s,wd);};

    /* Paths (needed early so the footing skips them) */
    const PATH=new Set();const addP=(x,z)=>PATH.add(x+','+z);
    for(let z=6;z<=12;z++)addP(-3,z);
    for(let z=9;z<=11;z++)addP(5,z);
    for(let x=-10;x<=15;x++)addP(x,12);
    for(let x=-4;x<=4;x++)addP(x,-6);addP(4,-5);
    const PAVED=new Set();

    /* ===== Site: floors and decks ===== */
    w.comp='site';
    for(const [x,z] of WALLS)put(x,0,z,'cobblestone');
    for(const [x,z] of INTERIOR){const edge=D4.some(([a,b])=>isWall(x+a,z+b));put(x,0,z,edge?'spruce_planks':'oak_planks');}
    for(let x=-12;x<=1;x++)for(let z=1;z<=6;z++){const d=porchD(x,z);if(d>=1&&d<=3){put(x,0,z,'spruce_planks');PAVED.add(x+','+z);}}
    for(let x=2;x<=8;x++)for(let z=7;z<=8;z++){put(x,0,z,'spruce_planks');PAVED.add(x+','+z);}
    for(let x=9;x<=11;x++)for(let z=-3;z<=2;z++){put(x,0,z,RNG(x,0,z)<.3?'gravel':'cobblestone');PAVED.add(x+','+z);}

    /* ===== Walls y1–7: plinth, sill course, framed plank panels, top beam ===== */
    const HOUSE_POSTS=[[-9,-5],[-4,-5],[0,-5],[9,-5],[-9,3],[-4,3],[-2,3],[1,3],[1,7],[9,7]];
    const behindPost=new Set();
    for(const [px,pz] of HOUSE_POSTS)for(const [a,b] of D4)if(isWall(px+a,pz+b))behindPost.add((px+a)+','+(pz+b));
    for(const [x,z] of WALLS){
      const c=isCorner(x,z);
      w.comp='plinth';
      for(let y=1;y<=2;y++)put(x,y,z,c?'stone_bricks':(RNG(x,y,z)<.2?'mossy_cobblestone':'cobblestone'));
      w.comp='frame';
      put(x,3,z,'stripped_spruce_log');put(x,7,z,'stripped_spruce_log');
      if(c||behindPost.has(x+','+z))for(let y=4;y<=6;y++)put(x,y,z,'spruce_log');
      else{w.comp='walls';for(let y=4;y<=6;y++)put(x,y,z,'birch_planks');}
    }
    // partition between the cross-wing hall and the bedroom
    w.comp='walls';
    for(let x=3;x<=7;x++)for(let y=1;y<=7;y++)put(x,y,2,y===7?'stripped_spruce_log':'oak_planks');

    /* ===== Gables and wall plates above the top beam ===== */
    for(const [x,z] of WALLS){const top=H(x,z)-1;
      for(let y=8;y<=top;y++){
        if(top===8){w.comp='frame';put(x,y,z,'stripped_spruce_log');continue;}
        w.comp='gables';
        const king=(x===-8&&z===-1)||(x===5&&(z===-4||z===6))||DORM.some(([c,s])=>x===c&&z===(s>0?2:-4));
        put(x,y,z,y===8?'stripped_spruce_log':king?'spruce_log':y===top?'spruce_planks':'birch_planks');}}

    /* ===== Openings ===== */
    w.comp='openings';
    const door=(x,z,id,run)=>{put(x,1,z,id);put(x,2,z,id);
      for(const s of [-1,1])for(let y=1;y<=3;y++)put(x+run[0]*s,y,z+run[1]*s,'stripped_spruce_log');put(x,3,z,'stripped_spruce_log');};
    door(-3,2,'oak_door',[1,0]);put(-3,4,2,'glass_pane');
    door(5,6,'spruce_door',[1,0]);
    door(4,-4,'spruce_door',[1,0]);
    put(7,1,2,'oak_door');put(7,2,2,'oak_door');
    // windows: [x, z, outward normal]
    const WIN=[[-6,-4,[0,-1]],[-2,-4,[0,-1]],[2,-4,[0,-1]],[7,-4,[0,-1]],
      [-8,-3,[-1,0]],[-8,1,[-1,0]],
      [-6,2,[0,1]],[0,2,[0,1]],
      [2,4,[-1,0]],
      [3,6,[0,1]],[7,6,[0,1]],
      [8,-1,[1,0]],[8,4,[1,0]]];
    for(const [x,z,n] of WIN){
      put(x,4,z,'glass_pane');put(x,5,z,'glass_pane');put(x,6,z,'stripped_spruce_log');
    }
    for(const [c,s] of DORM){const z=s>0?2:-4;put(c,9,z,'glass_pane');put(c,10,z,'glass_pane');}
    // gable lights and the balcony door
    for(const z of [-2,0])for(let y=9;y<=10;y++)put(-8,y,z,'glass_pane');
    for(let y=9;y<=10;y++)put(5,y,-4,'glass_pane');put(4,9,-4,'glass_pane');put(6,9,-4,'glass_pane');
    put(5,9,6,'spruce_door');put(5,10,6,'spruce_door');for(const x of [4,6])for(let y=9;y<=10;y++)put(x,y,6,'glass_pane');

    /* ===== Roof: one layer of spruce stairs over the heightfield ===== */
    const ROOF=[];
    for(let x=-9;x<=9;x++)for(let z=-5;z<=8;z++){const h=H(x,z);if(h>0)ROOF.push([x,z,h]);}
    const isEdge=(x,z,h)=>h>8&&D4.some(([a,b])=>H(x+a,z+b)<0);
    for(const [x,z,h] of ROOF){
      let best=null,bh=h;for(const [a,b] of D4){const nh=H(x+a,z+b);if(nh>bh){bh=nh;best=[a,b];}}
      const edge=isEdge(x,z,h);
      if(!best){w.comp='ridge';put(x,h,z,edge?'oak_planks':'spruce_planks');put(x,h+1,z,'spruce_slab');continue;}
      w.comp=edge?'ridge':'roof';st(x,h,z,edge?'oak_stairs':'spruce_stairs',best);
    }
    // oak fascia under the bargeboards
    w.comp='ridge';
    for(const [x,z,h] of ROOF){if(!isEdge(x,z,h))continue;const o=D4.find(([a,b])=>H(x+a,z+b)<0);deco(x,h-1,z,'oak_stairs',{f:o,up:true});}
    for(const [x,z] of [[5,-5],[5,8]]){put(x,14,z,'oak_fence');put(x,15,z,'oak_fence');}

    /* ===== Porch roof, porch and balcony ===== */
    w.comp='porch-roof';
    for(let x=-12;x<=1;x++)for(let z=1;z<=6;z++){const d=porchD(x,z);if(d<1||d>3)continue;
      const s=(z>=3)?z-2:0,wd=(x<=-9)?-8-x:0;st(x,8-d,z,'spruce_stairs',s>=wd?[0,-1]:[1,0]);}
    w.comp='porch';
    const PPOSTS=[[-11,5],[-7,5],[-4,5],[-2,5],[0,5],[-11,1]];
    for(const [x,z] of PPOSTS){for(let y=1;y<=4;y++)put(x,y,z,'oak_log');}
    for(let x=-12;x<=1;x++)for(let z=1;z<=6;z++){if(porchD(x,z)!==3)continue;if(PPOSTS.some(([a,b])=>a===x&&b===z))continue;
      if((x===-3&&z===5)||(x===-11&&z===3))continue;put(x,1,z,'oak_fence');}
    for(const [x,z] of PPOSTS)for(const [a,b] of D4)if(porchD(x+a,z+b)===3)deco(x+a,4,z+b,'spruce_stairs',{f:[-a,-b],up:true});
    w.comp='balcony';
    for(const x of [2,8]){put(x,1,8,'cobblestone');put(x,2,8,'cobblestone');for(let y=3;y<=8;y++)put(x,y,8,'oak_log');}
    for(let x=3;x<=7;x++){put(x,7,8,'stripped_spruce_log');put(x,8,7,'spruce_planks');put(x,8,8,'spruce_planks');put(x,9,8,'oak_fence');}
    for(const x of [3,5,7])st(x,7,7,'spruce_stairs',[0,-1],true);
    st(3,6,8,'spruce_stairs',[-1,0],true);st(7,6,8,'spruce_stairs',[1,0],true);

    /* ===== House posts: standing proud, carrying the eaves on knee braces ===== */
    w.comp='posts';
    for(const [x,z] of HOUSE_POSTS){const top=H(x,z)-1;
      for(let y=1;y<=top;y++)put(x,y,z,y<=2?'cobblestone':'oak_log');}
    for(const [x,z] of HOUSE_POSTS){const top=H(x,z)-1;
      for(const [a,b] of D4){const nx=x+a,nz=z+b;if(IN(nx,nz))continue;if(!D4.some(([c,d])=>isWall(nx+c,nz+d)))continue;
        deco(nx,top,nz,'spruce_stairs',{f:[-a,-b],up:true});}}

    /* ===== Shutters, sills with pots, hoods; sloped footing ===== */
    w.comp='shutters';
    for(const [x,z,n] of WIN){const run=[Math.abs(n[1]),Math.abs(n[0])],ox=x+n[0],oz=z+n[1];
      for(const s of [-1,1]){const sx=ox+run[0]*s,sz=oz+run[1]*s;
        if(!get(sx,4,sz)&&!get(sx,5,sz)){put(sx,4,sz,'spruce_trapdoor',{f:[-n[0],-n[1]]});put(sx,5,sz,'spruce_trapdoor',{f:[-n[0],-n[1]]});}}
      deco(ox,3,oz,'oak_slab',{up:true});deco(ox,4,oz,'flower_pot');deco(ox,6,oz,'spruce_stairs',{f:[-n[0],-n[1]],up:true});}
    st(4,4,-5,'spruce_stairs',[0,1],true);
    w.comp='plinth';
    for(const [x,z] of WALLS)for(const n of normals(x,z)){const ox=x+n[0],oz=z+n[1];
      if(IN(ox,oz)||PAVED.has(ox+','+oz)||PATH.has(ox+','+oz))continue;deco(ox,1,oz,'cobblestone_stairs',{f:[-n[0],-n[1]]});}

    /* ===== Chimney on the west gable ===== */
    w.comp='chimney';
    for(let y=1;y<=6;y++)for(const x of [-10,-9])for(let z=-2;z<=0;z++){const q=(x===-10&&z!==-1);put(x,y,z,q?'stone_bricks':'cobblestone');}
    for(const x of [-10,-9]){st(x,7,-2,'cobblestone_stairs',[0,1]);st(x,7,0,'cobblestone_stairs',[0,-1]);}
    for(let y=7;y<=15;y++)for(const x of [-10,-9])put(x,y,-1,y===10||y===14?'stone_bricks':'cobblestone');
    for(const x of [-10,-9]){put(x,16,-1,'cobblestone_wall');}
    for(let y=2;y<=6;y++)clr(-9,y,-1);put(-9,1,-1,'campfire');clr(-8,1,-1);clr(-8,2,-1);
    for(let z=-2;z<=0;z++){put(-7,0,z,'stone_bricks');put(-7,3,z,'stone_brick_slab',{up:true});}
    put(-8,0,-1,'stone_bricks');

    /* ===== Attic: tie beams over the hall, attic floor in the cross wing ===== */
    w.comp='attic';
    for(const x of [-6,-3,0])for(let z=-3;z<=1;z++)put(x,8,z,'stripped_spruce_log');
    for(let z=-3;z<=1;z++)put(3,7,z,'stripped_spruce_log');
    for(let x=3;x<=7;x++)for(let z=-3;z<=5;z++)if(!(x===7&&z===5))put(x,8,z,'spruce_planks');
    for(let z=-3;z<=1;z++)put(3,9,z,'oak_fence');
    for(let y=1;y<=8;y++)put(7,y,5,'ladder',{f:[1,0]});

    /* ===== Interior ===== */
    w.role='furnish';
    w.comp='hearth';
    put(-7,4,-2,'flower_pot');put(-7,4,0,'lantern');
    put(-7,1,-3,'smoker');put(-6,1,-3,'cauldron');put(-5,1,-3,'barrel');
    for(let x=-7;x<=-5;x++)put(x,3,-3,'spruce_slab',{up:true});put(-6,4,-3,'flower_pot');
    for(let x=-5;x<=-2;x++)for(let z=-2;z<=0;z++)put(x,0,z,'red_wool');
    for(const x of [-4,-3]){put(x,1,-1,'spruce_fence');put(x,2,-1,'oak_pressure_plate');
      st(x,1,-2,'oak_stairs',[0,-1]);st(x,1,0,'oak_stairs',[0,1]);}
    st(-5,1,-1,'oak_stairs',[-1,0]);st(-2,1,-1,'oak_stairs',[1,0]);
    for(const x of [-6,-3,0])put(x,7,-1,'lantern');
    w.comp='storage';
    for(let x=-3;x<=1;x++)for(let y=1;y<=3;y++)put(x,y,-3,'barrel');
    for(const x of [-7,-6,0,1])put(x,1,1,'chest');
    put(5,1,-3,'furnace');put(6,1,-3,'furnace');put(7,1,-3,'blast_furnace');put(7,1,-2,'chest');
    for(let x=5;x<=7;x++){put(x,3,-3,'stone_brick_stairs',{f:[0,-1],up:true});for(let y=4;y<=7;y++)put(x,y,-3,'stone_bricks');}
    w.comp='nook';
    for(let x=2;x<=6;x++)for(let y=1;y<=2;y++)put(x,y,1,'bookshelf');
    put(4,1,-1,'enchanting_table');put(7,1,-1,'crafting_table');put(5,7,-1,'lantern');
    put(5,9,-2,'lectern');put(6,9,-3,'bookshelf');put(6,10,-3,'bookshelf');put(4,9,-3,'chest');put(6,9,4,'barrel');put(5,11,0,'lantern');
    put(5,11,7,'lantern');
    w.comp='bedroom';
    for(const x of [3,4]){put(x,1,4,'red_bed');put(x,1,5,'red_bed');}
    put(3,1,3,'chest');put(3,2,3,'flower_pot');put(6,1,3,'barrel');put(5,7,4,'lantern');
    w.role=null;

    /* ===== Grounds ===== */
    w.comp='paths';
    for(const k of PATH){const [x,z]=k.split(',').map(Number);if(!get(x,0,z))put(x,0,z,RNG(x,0,z)<.22?'gravel':'dirt_path');}
    for(const [x,z] of [[-6,13],[-1,13],[3,13],[8,13],[12,13],[-2,9]]){put(x,0,z,'cobblestone');put(x,1,z,'cobblestone_wall');put(x,2,z,'oak_fence');put(x,3,z,'lantern');}
    w.role='furnish';
    for(const x of [-6,-7])st(x,1,3,'oak_stairs',[0,-1]);put(-8,1,3,'barrel');put(-8,2,3,'flower_pot');
    put(-3,5,4,'lantern');put(-8,5,4,'lantern');put(-10,5,3,'lantern');
    put(5,6,8,'lantern');put(3,1,7,'barrel');put(7,1,7,'barrel');put(7,2,7,'flower_pot');
    w.role=null;

    w.comp='well';
    const WX=-8,WZ=10;
    for(let x=WX-1;x<=WX+1;x++)for(let z=WZ-1;z<=WZ+1;z++){
      if(x===WX&&z===WZ){put(x,0,z,'water');put(x,-1,z,'water');continue;}
      const c=x!==WX&&z!==WZ;put(x,0,z,'cobblestone');put(x,1,z,c?'stone_bricks':'cobblestone');}
    for(const x of [WX-1,WX+1]){put(x,2,WZ,'oak_fence');put(x,3,WZ,'oak_fence');}
    for(let x=WX-1;x<=WX+1;x++){put(x,4,WZ,'stripped_oak_log');st(x,4,WZ-1,'spruce_stairs',[0,1]);st(x,4,WZ+1,'spruce_stairs',[0,-1]);put(x,5,WZ,'spruce_slab');}
    put(WX,3,WZ,'chain');put(WX,2,WZ,'chain');
    for(let x=WX-2;x<=WX+2;x++)for(let z=WZ-2;z<=WZ+2;z++)if((Math.abs(x-WX)===2||Math.abs(z-WZ)===2)&&!get(x,0,z))put(x,0,z,'gravel');

    w.comp='farm';
    const FX0=-11,FX1=3,FZ0=-17,FZ1=-7;
    for(let x=FX0+1;x<FX1;x++)for(let z=FZ0+1;z<FZ1;z++){
      if(x===-4){put(x,0,z,'dirt_path');continue;}
      put(x,0,z,z===-12?'water':(x<-4?'farmland':'carrots'));}
    for(let x=FX0;x<=FX1;x++)for(let z=FZ0;z<=FZ1;z++){if(x!==FX0&&x!==FX1&&z!==FZ0&&z!==FZ1)continue;
      put(x,0,z,'grass_block');put(x,1,z,(x===-4&&z===FZ1)?'oak_fence_gate':'oak_fence');}
    for(const x of [FX0,FX1])for(const z of [FZ0,FZ1])put(x,2,z,'lantern');
    put(-7,1,-14,'oak_fence');put(-7,2,-14,'hay_block');put(-7,3,-14,'carved_pumpkin');put(-8,2,-14,'oak_fence');put(-6,2,-14,'oak_fence');
    put(-6,1,-6,'composter');put(-2,1,-6,'hay_block');put(-5,0,-6,'grass_block');put(-6,0,-6,'grass_block');put(-2,0,-6,'grass_block');

    w.comp='workshop';
    for(const [x,z] of [[11,-3],[11,2]]){for(let y=1;y<=4;y++)put(x,y,z,'oak_log');}
    st(11,4,-2,'spruce_stairs',[0,-1],true);st(11,4,1,'spruce_stairs',[0,1],true);
    for(let z=-4;z<=3;z++){st(9,7,z,'spruce_stairs',[-1,0]);st(10,6,z,'spruce_stairs',[-1,0]);st(11,5,z,'spruce_stairs',[-1,0]);st(12,4,z,'spruce_stairs',[-1,0]);}
    w.role='furnish';
    put(10,1,-2,'anvil');put(10,1,0,'grindstone');put(9,1,2,'chest');put(10,1,2,'oak_log');
    for(let x=9;x<=10;x++)for(let y=1;y<=2;y++)put(x,y,-3,'oak_log');
    for(let y=2;y<=3;y++)put(9,y,1,'spruce_trapdoor',{f:[-1,0]});
    put(10,5,-1,'lantern');put(11,1,0,'cauldron');
    w.role=null;

    w.comp='pen';
    const PX0=12,PX1=18,PZ0=4,PZ1=11;
    for(let x=PX0;x<=PX1;x++)for(let z=PZ0;z<=PZ1;z++){const rimC=x===PX0||x===PX1||z===PZ0||z===PZ1;put(x,0,z,'grass_block');
      if(rimC)put(x,1,z,(x===15&&z===PZ1)?'oak_fence_gate':'oak_fence');}
    for(const [x,z] of [[PX0,PZ0],[PX1,PZ0],[PX0,6],[PX1,6]])for(let y=1;y<=3;y++)put(x,y,z,'oak_log');
    for(let x=PX0;x<=PX1;x++)for(let z=PZ0;z<=6;z++)put(x,4,z,'spruce_slab');
    clr(PX0,1,5);clr(PX1,1,5);put(PX0,1,5,'oak_fence');put(PX1,1,5,'oak_fence');
    for(let x=14;x<=16;x++)put(x,1,5,'hay_block');put(15,2,5,'hay_block');
    put(15,0,9,'water');put(16,0,9,'water');for(const [x,z] of [[14,9],[17,9],[15,8],[16,8],[15,10],[16,10]])put(x,1,z,'spruce_trapdoor',{f:x===14?[1,0]:x===17?[-1,0]:z===8?[0,1]:[0,-1]});
    put(14,2,11,'lantern');put(16,2,11,'lantern');
    put(14,1,11,'oak_fence');put(16,1,11,'oak_fence');

    w.comp='garden';
    const tree=(tx,tz,h)=>{for(let y=1;y<=h;y++)put(tx,y,tz,'oak_log');
      for(let x=-2;x<=2;x++)for(let y=h-2;y<=h+2;y++)for(let z=-2;z<=2;z++){const r=Math.hypot(x,(y-h)*1.2,z);if(r<=2.5&&!(x===0&&z===0&&y<=h)&&RNG(tx+x,y,tz+z)<(r<1.8?1:.55))put(tx+x,y,tz+z,'oak_leaves');}};
    tree(8,-12,5);tree(-15,8,5);tree(17,-5,6);tree(-15,-6,4);
    for(let x=-11;x<=-5;x++){put(x,0,7,'grass_block');put(x,1,7,x%2?'flowers':'oak_leaves');}
    for(let z=3;z<=6;z++){put(10,0,z,'grass_block');put(10,1,z,z%2?'oak_leaves':'flowers');}
    for(let x=-12;x<=-11;x++)for(const z of [-3,-2])put(x,1,z,'oak_leaves');
    for(const [x,z] of [[0,10],[2,10],[-5,10]]){put(x,0,z,'grass_block');put(x,1,z,'flowers');}
  }
});
