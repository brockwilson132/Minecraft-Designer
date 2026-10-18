/* Village Cottage — a storybook cottage: a rubble-stone ground storey with stone quoins, a jettied timber-framed
   upper storey, a steep spruce roof with dormers, an oriel, a stepped stone chimney with an inglenook, and a walled garden.
   Bedrock. House 15 × 13 under a 17 × 15 roof, 23 tall; garden 27 × 25. x 0, z 0 is the middle of the ground floor;
   the front door faces south. */
BK.register({
  id:'village-cottage',
  version:3,
  name:'Village Cottage',
  blurb:'A storybook cottage: rubble walls with stone quoins, a jettied timber-framed upper storey, a steep spruce roof with three dormers, a carved oriel, a stepped chimney over an inglenook, and a walled garden with a well and an arbour.',
  tags:['Medieval','Village','House','Medium'],
  edition:'Bedrock',
  extent:28,
  start:{x:0,y:1,z:10},
  figure:{x:3,z:12},
  blocks:{
    stone:{n:'Stone',c:'#7f7f7d'},
    campfire:{n:'Campfire',c:'#d9822b',sh:'slab',emit:1},
    oak_leaves:{n:'Oak Leaves',c:'#4b7a2b'},
    flowering_azalea_leaves:{n:'Flowering Azalea Leaves',c:'#7d9a4c'},
    poppy:{n:'Poppy',c:'#c8322b',sh:'rod'},
    dandelion:{n:'Dandelion',c:'#e8d23a',sh:'rod'},
    cornflower:{n:'Cornflower',c:'#5a7fd8',sh:'rod'},
    allium:{n:'Allium',c:'#b06ad0',sh:'rod'},
    spruce_fence_gate:{n:'Spruce Fence Gate',c:'#735538',sh:'fence'},
    coarse_dirt:{n:'Coarse Dirt',c:'#6b4d33'},
    carved_pumpkin:{n:'Carved Pumpkin',c:'#d0802a'}
  },
  steps:[
    ['Ground storey','floor','Floors & hearthstones'],
    ['Ground storey','ground-walls','Rubble walls, quoins & plinth'],
    ['Ground storey','ground-openings','Doors, windows & shutters'],
    ['Ground storey','chimney-base','Chimney breast & fireplace'],
    ['Ground storey','beams','Ceiling beams & jetty corbels'],
    ['Upper storey','jetty','Jetty floor & sill beam'],
    ['Upper storey','frame','Timber frame & braces'],
    ['Upper storey','panels','Calcite panels'],
    ['Upper storey','upper-windows','Upper windows & flower boxes'],
    ['Upper storey','oriel','Oriel window'],
    ['Roof','gables','Gable ends'],
    ['Roof','roof','Spruce roof'],
    ['Roof','bargeboards','Bargeboards, ridge & rafter tails'],
    ['Roof','dormers','Dormers'],
    ['Roof','chimney-stack','Chimney stack & pots'],
    ['Outside','porch','Porch'],
    ['Outside','lean-to','Woodshed lean-to'],
    ['Inside','stair','Staircase'],
    ['Inside','hearth','Inglenook'],
    ['Inside','kitchen','Kitchen & parlour'],
    ['Inside','loft','Bedchamber'],
    ['Garden','garden-wall','Garden wall & gates'],
    ['Garden','garden','Paths, beds, trees & vegetables'],
    ['Garden','well','Well'],
    ['Garden','arbour','Arbour & bench'],
    ['Garden','sundial','Sundial compass']
  ],
  tiers:[
    {a:0,b:5,name:'Ground storey',short:'Rubble walls, stone quoins, deep-set windows',p:'Walls of cobblestone rubble with mossy patches and odd blocks of stone, on a sloped cobblestone plinth, with long-and-short dressed andesite quoins at every corner and a stone brick string course under the jetty. Every window is set a block back in a stone reveal, with a spruce mullion, a dark oak lintel, an upside-down stone brick sill and a stone drip hood that runs over spruce shutters. The front door sits in stone jambs under a dark oak lintel, behind a timber porch. On the east gable a massive chimney breast of weathered stone bricks steps in once as it rises.',m:['cobblestone','mossy_cobblestone','stone','stone_bricks','stone_brick_stairs','glass_pane','stripped_spruce_log','stripped_dark_oak_log','spruce_trapdoor','spruce_door']},
    {a:5,b:11,name:'Upper storey',short:'Jettied timber frame, oriel, flower boxes',p:'The upper storey juts a block over the street front and back on dark oak joist ends, carried on a stripped dark oak sill beam. Its frame is stripped dark oak: corner and bay posts, a top plate, St Andrew\'s crosses in the middle bays front and back, and raking braces on the gable walls, all filled with calcite. Windows have dark oak sill and head rails and a mullion; the front and back ones carry spruce flower boxes on brackets. Over the west front window an oriel stands out on three brackets: a dark oak floor, corner posts, a mullioned window and a calcite apron, with the wall behind opened up as a window seat.',m:['stripped_dark_oak_log','dark_oak_stairs','dark_oak_planks','calcite','glass_pane','spruce_stairs','spruce_slab','flower_pot']},
    {a:11,b:23,name:'Roof',short:'Steep spruce roof, three dormers, stepped chimney',p:'A 45° spruce roof with dark oak bargeboards stepped underneath, a dark oak ridge capped in slabs with a finial on the west end, and dark oak rafter tails under the eaves. Two dormers face the front and one the back, each with a timber front, a mullioned window, calcite cheeks, a dark oak bargeboard and a pendant lantern. The gable ends are framed with a king post and collar, with paired windows and a louvred vent. The chimney steps in at the eaves, then rises as a brick stack with a stone band, a corbelled stone cap and two pots.',m:['spruce_stairs','spruce_planks','dark_oak_stairs','dark_oak_planks','dark_oak_slab','dark_oak_fence','calcite','bricks','stone_brick_stairs','decorated_pot']},
    {a:0,b:14,name:'Inside',short:'Inglenook, kitchen, bedchamber',p:'The ground floor is one beamed room. On the east, the fireplace sits in an inglenook under a dark oak bressumer, with stone cheeks, benches facing the fire and a kettle chain over a campfire. The kitchen is on the north-west, with a sink and counters under the window and a range on the west wall, and the parlour table sits in the middle. A spruce stair climbs the north wall to the bedchamber under the roof: a double bed, a chest, a wardrobe, a reading lectern in the oriel and a red rug, lit by a lantern hung from the collar beam.',m:['spruce_planks','stripped_dark_oak_log','campfire','spruce_stairs','spruce_slab','cauldron','furnace','barrel','crafting_table','red_bed','bookshelf','lantern']},
    {a:0,b:7,name:'Garden',short:'Walled garden, well, arbour, vegetable patch',p:'A low cobblestone wall with stone brick piers encloses the garden, with a three-gate entrance between lantern-topped piers and a back gate. A path of dirt and gravel runs to the porch between flower beds of poppies, dandelions, cornflowers and alliums. To the west, a roofed well with a winch chain; to the east, an arbour of flowering azalea over a bench. Behind the house: a watered vegetable patch with a scarecrow, two oak trees, and a woodshed lean-to stacked with logs against the west wall.',m:['cobblestone','mossy_cobblestone','cobblestone_wall','stone_bricks','spruce_fence_gate','dirt_path','gravel','coarse_dirt','farmland','water','oak_log','oak_leaves','flowering_azalea_leaves']}
  ],
  notes:[
    ['Sundial compass','Outside the gate the lane opens into a round sundial garden, 13 blocks across. Paths run to the four quarters, the north one straight up to the gate. Twelve carved hour stones sit in a gravel ring, the gold one at noon in the north. Flower beds fill the quarters: dandelions north-east, alliums south-east, cornflowers south-west, poppies north-west. A clipped box hedge rings it, with lanterns on the diagonals and a stone sundial with a copper gnomon at the centre.'],
    ['Order','Build the ground storey, the chimney breast and the ceiling beams, then lay the jetty floor and stand the upper frame on it. Fill the panels, then set the roof and cut the dormers in. The chimney stack goes up last.'],
    ['Jetty','The upper floor sticks out one block front and back. The joist ends under it are upside-down dark oak stairs on the string course, one on every other block and one under each corner.'],
    ['Dormers','Each dormer sits on the top plate. Lay the main roof first, then take out the roof stairs inside the dormer and build its front, cheeks and roof. The cursor shows which roof blocks go.'],
    ['Survival','Roughly 6 stacks of cobblestone and stone, 3 of spruce, 2½ of dark oak, 1½ of calcite and a stack of bricks. Calcite comes from amethyst geodes: white concrete or birch planks work instead.'],
    ['Windows','Ground-floor glass sits one block inside the wall face. The empty block in front is the reveal: leave it open.']
  ],
  build(w){
    const {put,clr,get,RNG}=w;
    const st=(x,y,z,id,f,up)=>put(x,y,z,id,{f,up:!!up});
    const XW=7,ZG=5,ZU=6;
    const RB=(x,y,z)=>{const r=RNG(x,y,z);return r<.17?'mossy_cobblestone':r<.32?'stone':'cobblestone';};
    const WEA=(x,y,z)=>{const r=RNG(x,y,z);return r<.14?'mossy_stone_bricks':r<.24?'cracked_stone_bricks':'stone_bricks';};
    // a facade frame: u runs along the wall, d is depth (+ outward, − inward)
    const F=(ax,w0,s)=>({n:ax==='z'?[0,s]:[s,0],p:(u,d)=>ax==='z'?[u,w0+s*d]:[w0+s*d,u]});
    const PUT=(f,u,y,d,id,ex)=>{const [x,z]=f.p(u,d);put(x,y,z,id,ex);};
    const CLR=(f,u,y,d)=>{const [x,z]=f.p(u,d);clr(x,y,z);};
    const IN=f=>[-f.n[0],-f.n[1]];
    const GS=F('z',ZG,1),GN=F('z',-ZG,-1),GW=F('x',-XW,-1),GE=F('x',XW,1);
    const US=F('z',ZU,1),UN=F('z',-ZU,-1),UW=F('x',-XW,-1),UE=F('x',XW,1);
    const FLOWERS=['poppy','dandelion','cornflower','allium'];
    const flower=(x,z)=>FLOWERS[Math.floor(RNG(x,1,z)*4)];

    /* ===== Ground storey ===== */
    w.comp='floor';
    for(let x=-XW;x<=XW;x++)for(let z=-ZG;z<=ZG;z++){
      const edge=Math.abs(x)===XW||Math.abs(z)===ZG;
      put(x,0,z,edge?'cobblestone':(x>=5&&Math.abs(z)<=1)?'stone_bricks':(x>=5&&Math.abs(z)<=3)?'smooth_stone':'spruce_planks');}

    w.comp='ground-walls';
    for(let x=-XW;x<=XW;x++)for(let z=-ZG;z<=ZG;z++){
      if(Math.abs(x)!==XW&&Math.abs(z)!==ZG)continue;
      const corner=Math.abs(x)===XW&&Math.abs(z)===ZG;
      const qa=Math.abs(x)===XW-1&&Math.abs(z)===ZG,qb=Math.abs(x)===XW&&Math.abs(z)===ZG-1;
      const quoin=y=>(qa&&y%2===0)||(qb&&y%2===1);
      for(let y=1;y<=5;y++){let id;
        if(y===1)id=RB(x,y,z);
        else if(y===5)id='stone_bricks';
        else if(corner||quoin(y))id='polished_andesite';
        else id=RB(x,y,z);
        put(x,y,z,id);}}
    // sloped plinth round the foot of the walls
    for(let u=-XW;u<=XW;u++){if(Math.abs(u)>2)PUT(GS,u,1,1,'cobblestone_stairs',{f:IN(GS)});if(u!==4)PUT(GN,u,1,1,'cobblestone_stairs',{f:IN(GN)});}
    for(let u=-ZG;u<=ZG;u++){PUT(GW,u,1,1,'cobblestone_stairs',{f:IN(GW)});if(Math.abs(u)>2)PUT(GE,u,1,1,'cobblestone_stairs',{f:IN(GE)});}

    w.comp='ground-openings';
    const door=(f,c,id)=>{for(let y=1;y<=2;y++){PUT(f,c,y,0,id);PUT(f,c-1,y,0,'stone_bricks');PUT(f,c+1,y,0,'stone_bricks');}
      for(let k=-1;k<=1;k++)PUT(f,c+k,3,0,'stripped_dark_oak_log');};
    door(GS,0,'spruce_door');door(GN,4,'spruce_door');
    // deep-set mullioned windows: glass a block inside the face, stone reveals, lintel, sill, drip hood and shutters
    const gwin=(f,c)=>{
      for(let y=2;y<=3;y++){for(let k=-1;k<=1;k++){CLR(f,c+k,y,0);PUT(f,c+k,y,-1,k===0?'stripped_spruce_log':'glass_pane');}
        PUT(f,c-2,y,-1,'stone_bricks');PUT(f,c+2,y,-1,'stone_bricks');
        PUT(f,c-2,y,1,'spruce_trapdoor',{f:IN(f)});PUT(f,c+2,y,1,'spruce_trapdoor',{f:IN(f)});}
      for(let k=-1;k<=1;k++){PUT(f,c+k,4,0,'stripped_dark_oak_log');PUT(f,c+k,4,-1,'stone_bricks');PUT(f,c+k,1,1,'stone_brick_stairs',{f:IN(f),up:true});}
      for(let k=-2;k<=2;k++)PUT(f,c+k,4,1,'stone_brick_stairs',{f:IN(f),up:true});};
    gwin(GS,-4);gwin(GS,4);gwin(GN,-5);gwin(GW,-2);

    w.comp='chimney-base';
    // rubble breast with stone brick quoins, stepping in twice: 3 deep to y4, 2 deep to y10, then the brick stack
    const chim=(x,y,z,x1,z0,z1)=>{const cx=x===x1,cz=z===z0||z===z1;return (cx&&cz)||(cx&&(z===z0+1||z===z1-1)&&y%2===0)||(cz&&x===x1-1&&y%2===1)?'polished_andesite':RB(x,y,z);};
    for(let x=8;x<=10;x++)for(let z=-2;z<=2;z++){put(x,0,z,'cobblestone');for(let y=1;y<=4;y++)put(x,y,z,y===1?'cobblestone':chim(x,y,z,10,-2,2));}
    for(let z=-2;z<=2;z++)st(10,5,z,'stone_brick_stairs',[-1,0]);
    for(let x=8;x<=9;x++)for(let z=-2;z<=2;z++)for(let y=5;y<=10;y++)put(x,y,z,y===5?'stone_bricks':y===8?'chiseled_stone_bricks':chim(x,y,z,9,-2,2));
    for(let x=8;x<=9;x++){st(x,11,-2,'stone_brick_stairs',[0,1]);st(x,11,2,'stone_brick_stairs',[0,-1]);}
    // the fireplace opens through the east wall into a brick-lined firebox in the breast
    for(let z=-1;z<=1;z++){for(let y=1;y<=2;y++){clr(7,y,z);clr(8,y,z);put(9,y,z,'bricks');}put(8,3,z,'bricks');put(7,3,z,'stripped_dark_oak_log');}
    put(8,1,-1,'bricks');put(8,1,1,'bricks');put(8,1,0,'campfire');put(8,2,0,'chain');

    w.comp='beams';
    for(const x of [-5,-2,1,4])for(let z=-4;z<=4;z++){if(z===-4&&(x===-2||x===1))continue;put(x,5,z,'stripped_dark_oak_log');}
    for(let x=-XW;x<=XW;x++)if(x%2===0||Math.abs(x)===XW){st(x,5,ZU,'dark_oak_stairs',[0,-1],true);st(x,5,-ZU,'dark_oak_stairs',[0,1],true);}

    /* ===== Upper storey ===== */
    w.comp='jetty';
    for(let x=-XW;x<=XW;x++)for(let z=-ZU;z<=ZU;z++){
      if(z===-4&&x>=-2&&x<=2)continue; // stairwell
      put(x,6,z,(Math.abs(x)===XW||Math.abs(z)===ZU)?'stripped_dark_oak_log':'spruce_planks');}

    const UF=[[US,-7,7,[-7,-2,2,7]],[UN,-7,7,[-7,-2,2,7]],[UW,-5,5,[0]],[UE,-5,5,[0]]];
    const WIN=new Map([[US,[[3,5],[-5,-3]]],[UN,[[3,5],[-5,-3]]],[UW,[[-4,-3],[3,4]]],[UE,[[-4,-3],[3,4]]]]);
    const inWin=(f,u)=>WIN.get(f).some(([a,b])=>u>=a&&u<=b);
    const brace=(f,u,y)=>{if(f===US||f===UN)return Math.abs(u)<=1&&((y===7||y===10)?Math.abs(u)===1:u===0);
      return (Math.abs(u)===2&&y===7)||(Math.abs(u)===1&&y===8);};
    w.comp='frame';
    for(const [f,a,b,posts] of UF)for(let u=a;u<=b;u++){
      for(let y=7;y<=10;y++)if(posts.includes(u)||brace(f,u,y))PUT(f,u,y,0,'stripped_dark_oak_log');
      PUT(f,u,11,0,'stripped_dark_oak_log');}

    w.comp='panels';
    for(const [f,a,b] of UF)for(let u=a;u<=b;u++){if(inWin(f,u))continue;
      for(let y=7;y<=10;y++){const [x,z]=f.p(u,0);if(!get(x,y,z))put(x,y,z,'calcite');}}

    w.comp='upper-windows';
    const uwin=(f,a,b,box,shut)=>{const m=(a+b)/2;
      for(let u=a;u<=b;u++){PUT(f,u,7,0,'calcite');PUT(f,u,10,0,u===a||u===b?'calcite':'stripped_dark_oak_log');
        for(let y=8;y<=9;y++)PUT(f,u,y,0,(b-a===2&&u===m)?'stripped_dark_oak_log':'glass_pane');
        if(box){PUT(f,u,6,1,'spruce_stairs',{f:IN(f),up:true});PUT(f,u,7,1,'spruce_slab',{up:true});PUT(f,u,8,1,'flower_pot');}}
      for(const u of shut)for(let y=8;y<=9;y++)PUT(f,u,y,1,'spruce_trapdoor',{f:IN(f)});};
    uwin(US,3,5,true,[]);uwin(US,-5,-3,false,[]);uwin(UN,3,5,true,[]);uwin(UN,-5,-3,true,[]);
    uwin(UW,-4,-3,false,[-5,-2]);uwin(UW,3,4,false,[2,5]);uwin(UE,-4,-3,false,[-5]);uwin(UE,3,4,false,[5]);

    w.comp='oriel';
    for(let x=-6;x<=-2;x++)put(x,6,7,'dark_oak_planks');
    for(const x of [-6,-4,-2])st(x,5,7,'dark_oak_stairs',[0,-1],true);
    for(let y=7;y<=10;y++){put(-6,y,7,'stripped_dark_oak_log');put(-2,y,7,'stripped_dark_oak_log');}
    for(let x=-5;x<=-3;x++){put(x,7,7,'calcite');put(x,10,7,'stripped_dark_oak_log');
      for(let y=8;y<=9;y++){put(x,y,7,x===-4?'stripped_dark_oak_log':'glass_pane');clr(x,y,6);}}

    /* ===== Roof ===== */
    w.comp='gables';
    for(const xs of [-XW,XW])for(let i=1;i<=6;i++){const y=11+i;
      for(let z=-6+i;z<=6-i;z++){const a=Math.abs(z);let id='calcite';
        if(z===0||(y===14&&a<=2)||((y===12||y===13)&&a===4))id='stripped_dark_oak_log';
        else if((y===12||y===13)&&(a===2||a===3))id='glass_pane';
        if(y===16&&a===1){put(xs,y,z,'dark_oak_trapdoor',{f:[Math.sign(xs),0]});continue;}
        put(xs,y,z,id);}}

    w.comp='roof';
    // a band of dark oak shingles three courses up
    for(let i=0;i<=6;i++){const id=i===3?'dark_oak_stairs':'spruce_stairs';for(let x=-8;x<=8;x++){st(x,11+i,7-i,id,[0,-1]);st(x,11+i,-(7-i),id,[0,1]);}}
    for(let x=-8;x<=8;x++)put(x,18,0,'spruce_planks');

    w.comp='bargeboards';
    for(let i=0;i<=6;i++)for(const xs of [-8,8])for(const s of [-1,1]){
      st(xs,11+i,s*(7-i),'dark_oak_stairs',[0,-s]);st(xs,10+i,s*(7-i),'dark_oak_stairs',[0,s],true);}
    for(let x=-8;x<=8;x++){put(x,18,0,'dark_oak_planks');put(x,19,0,'dark_oak_slab');}
    put(-8,19,0,'dark_oak_fence');put(-8,20,0,'dark_oak_fence');st(-8,17,0,'dark_oak_stairs',[-1,0],true);
    for(let x=-8;x<=8;x+=2)for(const s of [-1,1])if(!get(x,10,s*7))st(x,10,s*7,'dark_oak_stairs',[0,-s],true);

    w.comp='dormers';
    const dormer=(c,s)=>{const hd=dx=>16-Math.abs(dx),Z=zl=>s*zl;
      // take out the main roof inside the dormer
      for(let x=c-2;x<=c+2;x++)for(let zl=0;zl<=6;zl++){const y=18-zl;if(y<12||y>=hd(x-c))continue;const v=get(x,y,Z(zl));if(v&&v.c==='roof')clr(x,y,Z(zl));}
      // timber front
      for(let x=c-2;x<=c+2;x++){const dx=x-c,a=Math.abs(dx);
        for(let y=12;y<hd(dx);y++){let id;
          if(a===2)id='stripped_dark_oak_log';
          else if(y===14)id=dx===0?'stripped_dark_oak_log':'calcite';
          else if(y<=13)id=dx===0?'stripped_dark_oak_log':'glass_pane';
          else id=dx===0?'stripped_dark_oak_log':'calcite';
          put(x,y,Z(6),id);}}
      // cheeks
      for(const dx of [-2,2])for(let y=12;y<=13;y++)for(let zl=18-y;zl<=5;zl++)put(c+dx,y,Z(zl),'calcite');
      // roof, bargeboard and soffit
      for(let dx=-3;dx<=3;dx++){const y=hd(dx),x=c+dx;
        for(let zl=18-y;zl<=7;zl++){
          if(dx===0){put(x,y,Z(zl),zl===7?'dark_oak_planks':'spruce_planks');put(x,y+1,Z(zl),'dark_oak_slab');}
          else st(x,y,Z(zl),zl===7?'dark_oak_stairs':'spruce_stairs',[dx<0?1:-1,0]);}
        if(dx!==0)st(x,y-1,Z(7),'dark_oak_stairs',[dx<0?-1:1,0],true);}
      put(c,17,Z(7),'dark_oak_fence');put(c,15,Z(7),'dark_oak_fence');put(c,14,Z(7),'lantern');};
    dormer(-4,1);dormer(4,1);dormer(0,-1);

    w.comp='chimney-stack';
    for(let x=8;x<=9;x++)for(let z=-1;z<=1;z++)for(let y=11;y<=20;y++)put(x,y,z,y===11||y===17?'stone_bricks':'bricks');
    for(let x=8;x<=9;x++)for(let z=-1;z<=1;z++)put(x,21,z,'stone_bricks');
    for(let z=-1;z<=1;z++){st(10,21,z,'stone_brick_stairs',[-1,0],true);st(7,21,z,'stone_brick_stairs',[1,0],true);}
    for(let x=8;x<=9;x++){st(x,21,-2,'stone_brick_stairs',[0,1],true);st(x,21,2,'stone_brick_stairs',[0,-1],true);}
    put(8,22,-1,'decorated_pot');put(9,22,1,'decorated_pot');put(9,22,-1,'stone_brick_slab');put(8,22,1,'stone_brick_slab');

    /* ===== Porch and lean-to ===== */
    w.comp='porch';
    for(let x=-2;x<=2;x++)for(let z=6;z<=9;z++)put(x,0,z,(Math.abs(x)===2||z===9)?'stone_bricks':'polished_andesite');
    for(const xs of [-2,2]){put(xs,1,9,'stone_bricks');for(let y=2;y<=4;y++)put(xs,y,9,'stripped_dark_oak_log');
      for(let z=7;z<=8;z++)put(xs,1,z,'spruce_fence');}
    st(-1,4,9,'dark_oak_stairs',[-1,0],true);st(1,4,9,'dark_oak_stairs',[1,0],true);
    for(let x=-1;x<=1;x++)put(x,5,9,'stripped_dark_oak_log');
    put(0,6,9,'stripped_dark_oak_log');
    for(let z=7;z<=10;z++){const front=z===10;
      for(let j=0;j<=1;j++){st(-2+j,5+j,z,front?'dark_oak_stairs':'spruce_stairs',[1,0]);st(2-j,5+j,z,front?'dark_oak_stairs':'spruce_stairs',[-1,0]);}
      put(0,7,z,front?'dark_oak_planks':'spruce_planks');put(0,8,z,'dark_oak_slab');}
    st(-2,4,10,'dark_oak_stairs',[-1,0],true);st(2,4,10,'dark_oak_stairs',[1,0],true);
    st(-1,5,10,'dark_oak_stairs',[-1,0],true);st(1,5,10,'dark_oak_stairs',[1,0],true);
    put(0,4,9,'lantern');
    st(-1,1,7,'oak_stairs',[-1,0]);st(1,1,7,'oak_stairs',[1,0]);

    w.comp='lean-to';
    for(const z of [1,4])for(let y=1;y<=2;y++)put(-10,y,z,'spruce_fence');
    for(let z=0;z<=5;z++){st(-10,3,z,'spruce_stairs',[1,0]);st(-9,4,z,'spruce_stairs',[1,0]);st(-8,5,z,'spruce_stairs',[1,0]);}
    for(let z=1;z<=4;z++){for(let y=1;y<=2;y++)put(-9,y,z,'oak_log');for(let y=1;y<=3;y++)put(-8,y,z,'oak_log');}
    put(-11,1,2,'oak_log');

    /* ===== Inside ===== */
    w.comp='stair';
    for(let k=0;k<=4;k++){const x=-2+k,y=1+k;for(let yy=1;yy<y;yy++)put(x,yy,-4,'spruce_planks');st(x,y,-4,'spruce_stairs',[1,0]);}
    for(let x=-2;x<=2;x++)put(x,7,-3,'spruce_fence');put(-3,7,-4,'spruce_fence');put(-2,8,-3,'lantern');

    w.comp='hearth';
    for(let x=5;x<=6;x++)for(const z of [-3,3]){put(x,1,z,'stone_bricks');put(x,2,z,'stone_bricks');put(x,3,z,'stone_brick_slab');}
    for(let z=-3;z<=3;z++)put(4,4,z,'stripped_dark_oak_log');
    w.role='furnish';
    for(let x=5;x<=6;x++){st(x,1,-2,'spruce_stairs',[0,-1]);st(x,1,2,'spruce_stairs',[0,1]);}
    put(6,4,-3,'decorated_pot');put(6,4,3,'decorated_pot');put(4,1,3,'barrel');
    w.role=null;

    w.comp='kitchen';w.role='furnish';
    put(-6,1,-4,'barrel');put(-5,1,-4,'cauldron');put(-4,1,-4,'spruce_slab',{up:true});put(-3,1,-4,'crafting_table');
    put(-6,1,-2,'furnace');put(-6,1,-1,'barrel');put(-6,2,-1,'flower_pot');
    put(-6,1,2,'barrel');put(-6,1,3,'chest');put(-6,2,2,'decorated_pot');
    for(let x=-4;x<=-3;x++){for(let z=0;z<=1;z++)put(x,1,z,'spruce_slab',{up:true});st(x,1,-1,'oak_stairs',[0,-1]);st(x,1,2,'oak_stairs',[0,1]);}
    for(let x=-5;x<=-3;x++)put(x,1,4,'spruce_slab');for(let x=3;x<=5;x++)put(x,1,4,'spruce_slab');
    put(-5,4,0,'lantern');put(1,4,1,'lantern');put(4,3,0,'lantern');
    w.role=null;

    w.comp='loft';w.role='furnish';
    for(let x=-5;x<=-4;x++){put(x,7,-5,'red_bed');put(x,7,-4,'red_bed');}
    put(-6,7,-5,'chest');put(-3,7,-5,'barrel');put(-3,8,-5,'lantern');
    put(6,7,-5,'barrel');put(6,8,-5,'barrel');put(6,7,4,'barrel');put(5,7,4,'cauldron');
    for(let z=1;z<=4;z++)put(-6,7,z,'bookshelf');
    put(-4,7,5,'lectern');st(-4,7,4,'spruce_stairs',[0,-1]);
    for(let x=-1;x<=1;x++)for(let z=0;z<=2;z++)put(x,6,z,'red_wool');
    for(let z=-3;z<=3;z++)put(0,14,z,'stripped_dark_oak_log');
    for(let y=11;y<=13;y++)put(0,y,1,'chain');put(0,10,1,'lantern');
    w.role=null;

    /* ===== Garden ===== */
    w.comp='garden-wall';
    const GX=13,GZ0=-11,GZ1=13;
    for(let x=-GX;x<=GX;x++)for(let z=GZ0;z<=GZ1;z++){
      if(Math.abs(x)!==GX&&z!==GZ0&&z!==GZ1)continue;
      if(z===GZ1&&Math.abs(x)<=1){put(x,1,z,'spruce_fence_gate');continue;}
      if(z===GZ0&&x===4){put(x,1,z,'spruce_fence_gate');continue;}
      const corner=Math.abs(x)===GX&&(z===GZ0||z===GZ1);
      const gatePier=z===GZ1&&Math.abs(x)===2;
      const pier=corner||(z===GZ0&&(x===3||x===5))||((z===GZ0||z===GZ1)&&Math.abs(x)%6===0&&x!==0)||(Math.abs(x)===GX&&(z%6===0));
      put(x,1,z,RB(x,1,z));
      if(gatePier){put(x,1,z,'stone_bricks');put(x,2,z,'stone_bricks');put(x,3,z,'chiseled_stone_bricks');put(x,4,z,'lantern');}
      else if(pier){put(x,2,z,'stone_bricks');put(x,3,z,'stone_brick_slab');}
      else put(x,2,z,'cobblestone_wall');}

    w.comp='garden';
    for(let z=10;z<=14;z++)for(let x=-1;x<=1;x++){if(z===GZ1)continue;put(x,0,z,x===0?'dirt_path':(RNG(x,0,z)<.5?'gravel':'dirt_path'));}
    for(const s of [-1,1])for(let a=2;a<=5;a++)for(let z=11;z<=12;z++){const x=s*a;put(x,0,z,'coarse_dirt');put(x,1,z,flower(x,z));}
    for(const s of [-1,1])for(let a=3;a<=6;a++){const x=s*a;put(x,0,8,'coarse_dirt');if(RNG(x,2,8)<.75)put(x,1,8,flower(x,8));}
    for(let x=-7;x<=7;x++)if(Math.abs(x)>=2&&x%2===0)put(x,0,10,'polished_andesite');
    for(let z=-10;z<=-7;z++)put(4,0,z,'dirt_path');
    for(let x=-8;x<=-2;x++)for(let z=-10;z<=-8;z++)put(x,0,z,z===-9?'water':'farmland');
    put(-5,1,-7,'spruce_fence');put(-5,2,-7,'hay_block');put(-5,3,-7,'carved_pumpkin');put(-6,2,-7,'spruce_fence');put(-4,2,-7,'spruce_fence');
    put(-1,1,-9,'composter');
    put(6,1,-8,'spruce_fence');put(6,2,-8,'spruce_fence');put(6,3,-8,'lantern');
    const tree=(tx,tz)=>{for(let y=1;y<=4;y++)put(tx,y,tz,'oak_log');
      for(let dx=-3;dx<=3;dx++)for(let dz=-3;dz<=3;dz++)for(let y=4;y<=7;y++){
        const d=Math.hypot(dx,dz,(y-5.3)*1.3);if(d>2.9||(dx===0&&dz===0&&y<=4))continue;
        if(d>2.3&&RNG(tx+dx,y,tz+dz)<.45)continue;put(tx+dx,y,tz+dz,'oak_leaves');}};
    tree(-10,-7);tree(10,-7);

    w.comp='well';
    for(let x=-10;x<=-8;x++)for(let z=8;z<=10;z++){if(x===-9&&z===9){put(x,0,z,'water');put(x,1,z,'water');continue;}
      put(x,0,z,'cobblestone');put(x,1,z,RB(x,1,z));put(x,2,z,'stone_bricks');}
    for(const x of [-10,-8])for(let y=3;y<=4;y++)put(x,y,9,'spruce_fence');
    for(let x=-10;x<=-8;x++)put(x,5,9,'stripped_spruce_log');
    for(let x=-11;x<=-7;x++){const e=x===-11||x===-7;st(x,5,8,e?'dark_oak_stairs':'spruce_stairs',[0,1]);st(x,5,10,e?'dark_oak_stairs':'spruce_stairs',[0,-1]);put(x,6,9,'dark_oak_slab');}
    put(-9,4,9,'chain');put(-9,3,9,'chain');put(-7,1,11,'barrel');

    w.comp='arbour';
    for(let x=8;x<=11;x++)for(let z=8;z<=11;z++)put(x,0,z,RNG(x,0,z)<.3?'mossy_cobblestone':'polished_andesite');
    for(const x of [8,11])for(const z of [8,11])for(let y=1;y<=3;y++)put(x,y,z,'oak_log');
    for(let x=7;x<=12;x++){put(x,4,8,'stripped_spruce_log');put(x,4,11,'stripped_spruce_log');}
    for(let x=7;x<=12;x++)for(let z=7;z<=12;z++){
      const edge=x===7||x===12||z===7||z===12;
      if(RNG(x,5,z)<(edge?.45:.7))put(x,5,z,RNG(x,6,z)<.6?'flowering_azalea_leaves':'oak_leaves');
      if(edge&&(z===8||z===11)&&!get(x,4,z)&&RNG(x,4,z)<.5&&get(x,5,z))put(x,4,z,'flowering_azalea_leaves');}
    for(let x=8;x<=11;x+=3)for(let z=9;z<=10;z++)put(x,4,z,'stripped_spruce_log');
    w.role='furnish';
    for(let x=9;x<=10;x++)st(x,1,11,'oak_stairs',[0,1]);
    put(9,1,8,'flower_pot');put(10,1,8,'flower_pot');
    w.role=null;
      /* ===== Compass: a sundial garden outside the gate. The gate path becomes its north arm. ===== */
    w.comp='sundial';
    const CZ=21;
    const fl={NE:'dandelion',SE:'allium',SW:'cornflower',NW:'poppy'};
    for(let z=14;z<=CZ-6;z++)for(let x=-1;x<=1;x++)put(x,0,z,'dirt_path');
    w.each((x,z)=>{const dx=x,dz=z-CZ,r=Math.hypot(dx,dz);if(r>6.5)return;
      const arm=(Math.abs(dx)<1||Math.abs(dz)<1);
      if(r<=1.5){put(x,0,z,'smooth_stone');return;}
      if(r>5.6){                                              // a clipped box hedge, open where the paths leave
        put(x,0,z,arm?'dirt_path':'grass_block');if(!arm)put(x,1,z,'oak_leaves');return;}
      if(r>4.5){put(x,0,z,arm?'dirt_path':'gravel');return;}  // the hour ring
      if(arm){put(x,0,z,'dirt_path');return;}
      put(x,0,z,'grass_block');
      if((x+z)%2===0)put(x,1,z,fl[(dz<0?'N':'S')+(dx>0?'E':'W')]);});
    // twelve hour stones set into the gravel ring; the four quarters also get a little stone post
    for(let k=0;k<12;k++){const a=k*Math.PI/6-Math.PI/2,x=Math.round(5.1*Math.cos(a)),z=CZ+Math.round(5.1*Math.sin(a));
      put(x,0,z,k===0?'gold_block':'chiseled_stone_bricks');}
    // the sundial: a carved pedestal, a stone dial plate and a copper gnomon
    put(0,1,CZ,'chiseled_stone_bricks');put(0,2,CZ,'stone_brick_wall');put(0,3,CZ,'stone_brick_slab');put(0,4,CZ,'lightning_rod');
    for(const [sx,sz] of [[1,1],[1,-1],[-1,1],[-1,-1]]){const x=sx*5,z=CZ+sz*5;put(x,1,z,'cobblestone_wall');put(x,2,z,'lantern');}
    // a bench on the south arm, facing the dial
    for(const x of [-2,-1,1,2])put(x,1,CZ+4,'spruce_stairs',{f:[0,1]});
  }
});
