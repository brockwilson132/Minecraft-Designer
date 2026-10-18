/* Village Tavern — "The Gilded Lantern", a rambling coaching inn.
   A stone taproom storey with arched windows and a deep arched entrance, two jettied timber-framed storeys on carved
   corbels, three front cross-gables with bargeboards and pendants, an oriel on brackets, wall dormers behind, two
   brick stacks, a coach house with a carriage arch and hayloft, and a walled beer garden with a pergola and a well.
   x 0, z 0 is near the middle of the inn; the street front faces south. */
BK.register({
  id:'village-tavern',
  version:3,
  name:'Village Tavern',
  blurb:'A coaching inn: stone taproom with a vaulted-arch entrance, two jettied timber storeys under three bargeboarded gables, an oriel, brick stacks, a coach house with hayloft, and a walled beer garden with pergola and well.',
  tags:['Medieval','Village','Tavern','Large'],
  edition:'Bedrock',
  extent:22,
  start:{x:-3,y:1,z:5},
  figure:{x:-1,z:8},
  blocks:{polished_granite:{n:'Polished Granite',c:'#9a6b56'},
    campfire:{n:'Campfire',c:'#e0862f',sh:'slab',emit:1},
    smoker:{n:'Smoker',c:'#5b4a3a'},
    oak_leaves:{n:'Oak Leaves',c:'#4c7a2e'},
    hanging_sign:{n:'Spruce Hanging Sign',c:'#8a6236',sh:'trap'},
    flower_box:{n:'Moss Carpet on Trapdoor (flower box)',c:'#6c8f3a',sh:'slab'},
    mossy_cobblestone_wall:{n:'Mossy Cobblestone Wall',c:'#6e7a5b',sh:'wall'}
  },
  steps:[
    ['Ground','yard','Street, paving & coach yard'],
    ['Ground','compass','Crossroads compass & fingerpost'],
    ['Ground','cellar','Barrel cellar'],
    ['Ground','floor','Floors & hearthstone'],
    ['Taproom storey','stone-walls','Stone walls, plinth & quoins'],
    ['Taproom storey','portal','Arched entrance & voussoirs'],
    ['Taproom storey','arched-windows','Arched windows'],
    ['Taproom storey','chimneys','Chimney stacks'],
    ['Timber storeys','jetty1','First jetty & corbels'],
    ['Timber storeys','frame2','First-floor frame & braces'],
    ['Timber storeys','oriel','Oriel window'],
    ['Timber storeys','jetty2','Second jetty & corbels'],
    ['Timber storeys','frame3','Close-studded top storey'],
    ['Roof','gables','Gables & wall dormers'],
    ['Roof','roof','Slate roof'],
    ['Roof','bargeboards','Bargeboards, pendants & finials'],
    ['Coach house','wing-walls','Coach house walls'],
    ['Coach house','carriage-arch','Carriage arch & doors'],
    ['Coach house','wing-frame','Hayloft frame, loft door & hoist'],
    ['Coach house','wing-roof','Coach house roof'],
    ['Inside','beams','Beams, partitions & stairs'],
    ['Inside','taproom','Bar, inglenook & tables'],
    ['Inside','rooms','Kitchen & guest rooms'],
    ['Inside','stable','Stalls & hayloft'],
    ['Garden','garden','Beer garden, pergola & well'],
    ['Details','lights','Sign, lanterns & flower boxes']
  ],
  tiers:[
    {a:-4,b:0,name:'Cellar & floors',short:'Barrel vault under the bar',p:'Under the taproom, a stone cellar holds racks of barrels three high between spruce posts, lit by lanterns hung from the floor joists, and reached by a ladder through a hatch behind the bar. At street level a cobbled road runs past the inn; stone-brick paving leads to the door, and the coach yard in front of the stables is cobbled with gravel ruts.',m:['cobblestone','stone_bricks','barrel','spruce_planks','ladder','gravel','polished_andesite']},
    {a:1,b:5,name:'Taproom storey',short:'Stone, arches, inglenook',p:'A ground storey of weathered stone brick on a cobbled plinth with a sloped stair course, polished andesite quoins on every corner. The entrance is a deep three-order arch: a projecting stone portal with chiseled and andesite voussoirs and a keystone, a reveal, then a dark oak door between glazed sidelights under a yellow fanlight. Each arched window has stone shoulders, a voussoir head, a hood and a recessed mullioned light with a window seat inside. Inside: a long spruce bar with a back bar of barrels and bottles, stools, an inglenook with settles either side of the fire, tables, and oak beams overhead.',m:['stone_bricks','mossy_stone_bricks','cracked_stone_bricks','cobblestone','polished_andesite','chiseled_stone_bricks','stone_brick_stairs','dark_oak_door','yellow_stained_glass_pane','glass_pane','stripped_dark_oak_log']},
    {a:6,b:10,name:'First floor',short:'Jettied frame, herringbone, oriel',p:'The first floor oversails the street on a dark oak bressumer carried by carved corbels. Its frame stands on the bressumer with posts every three blocks and a head plate; the panels are white calcite with diagonal oak braces in every blind bay, and paired lights flank each gable post with moss flower boxes beneath. Under the east gable an oriel window projects on stepped brackets with a central mullion. A wrought-iron bracket carries the hanging sign over the street.',m:['stripped_dark_oak_log','dark_oak_planks','dark_oak_stairs','bricks','white_terracotta','calcite','glass_pane','iron_bars','chain']},
    {a:11,b:15,name:'Second floor',short:'Close studding, paired lights',p:'A second jetty pushes the top storey out again. Its walls are close-studded — a dark oak post every other block — with paired lights either side of each gable post, so the posts double as mullions.',m:['stripped_dark_oak_log','calcite','glass_pane','dark_oak_stairs','dark_oak_trapdoor']},
    {a:16,b:23,name:'Gables & roof',short:'Three cross-gables, slate, bargeboards',p:'Three cross-gables face the street, each with a tie beam, king post, a three-light window and calcite panels, under a deepslate-tile roof with carved dark oak bargeboards, a hanging pendant and a finial at the apex. Wall dormers break the back eave. A west stack in stone and brick climbs the gable end with two stepped shoulders and a corbelled cap with pots; a second stack serves the kitchen.',m:['deepslate_tile_stairs','deepslate_tiles','deepslate_tile_slab','dark_oak_stairs','dark_oak_fence','lightning_rod','bricks','brick_wall','stone_brick_stairs']},
    {a:0,b:16,name:'Coach house',short:'Carriage arch, stalls, hayloft',p:'East of the inn, a stone coach house with a five-wide carriage arch in a projecting voussoir frame, its spruce doors swung open. Above it a timber hayloft with a loft door and a hoist beam with a bale on its chain. Inside: three horse stalls with hay and troughs, a loft floor stacked with bales, and a ladder. A trough and hitching rail stand in the cobbled yard.',m:['stone_bricks','polished_andesite','chiseled_stone_bricks','spruce_trapdoor','stripped_dark_oak_log','calcite','hay_block','spruce_fence','deepslate_tile_stairs']},
    {a:0,b:6,name:'Beer garden',short:'Pergola, tables, well',p:'Behind the inn a low mossy wall closes a lawn with gravel paths. A dark oak pergola, its slats grown over with leaves and hung with lanterns, shelters three long tables with benches. Barrel tables stand on the lawn, and a stone well with a shingled hood sits by the kitchen door, with a young oak in the corner.',m:['grass_block','gravel','cobblestone_wall','stripped_dark_oak_log','dark_oak_slab','oak_leaves','spruce_slab','spruce_stairs','barrel','cobblestone','water']}
  ],
  notes:[
    ['Compass','In the street before the inn: an eight-point star made of two interlaced squares, where the squares cross outlined in polished blackstone, 15 blocks across, inside a ring of 16 alternating carved and plain stone bricks. The north tip, pointing at the inn door, is red nether brick. A fingerpost stands at the centre with arms to the four roads and a lantern on top.'],
    ['Order','Raise the stone storey and both chimney bases first. Then lay each jetty floor before its frame: the front posts of each timber storey stand on the overhang of the floor below.'],
    ['Roof','The three front gables and the main roof meet in valleys. Build the main roof first, then each cross-gable roof over it; follow the top view layer by layer and the valleys fall into place.'],
    ['Braces','Each brace is two dark oak planks set on the diagonal inside a 2 × 2 panel, with calcite in the other two cells. Bays with a window get plain calcite instead.'],
    ['Survival','Roughly 9 stacks of stone and stone bricks, 6 stacks of dark oak, 5 stacks of deepslate tiles, 2 stacks of bricks and a stack of calcite. Calcite can be swapped for white concrete or bone blocks.']
  ],
  build(w){
    const {V,K,put,clr,get,each,RNG}=w;
    const st=(x,y,z,id,f,up)=>put(x,y,z,id,{f,up:!!up});
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const stone=(x,y,z)=>{const r=RNG(x,y,z);return r<.12?'mossy_stone_bricks':r<.2?'cracked_stone_bricks':'stone_bricks';};
    const LOG='stripped_dark_oak_log';

    /* ---- dimensions ---- */
    const X0=-12,X1=6,ZB=-5,ZF0=3,ZF1=4,ZF2=5;   // inn walls: back z-5; fronts z3 (stone), z4 (first floor), z5 (top floor)
    const J1=6,J2=11,YE=16;                     // jetty floors and eave
    const GC=[-9,-3,3];                         // cross-gable centres on the street front
    const DC=[-8,-2];                           // wall dormers on the back
    const WX0=6,WX1=17,WZ0=-6,WZ1=2;            // coach house rectangle (west side is the inn's east wall)
    const onRect=(x,z,x0,x1,z0,z1)=>(x===x0||x===x1)&&z>=z0&&z<=z1||(z===z0||z===z1)&&x>=x0&&x<=x1;

    /* a wall seen from outside: a = position along it, d = blocks outward from the wall face */
    function wallAPI(axis,wp,dir){
      const pos=(a,d)=>axis==='x'?[a,wp+d*dir]:[wp+d*dir,a];
      return {
        p:(a,y,d,id,ex)=>{const [x,z]=pos(a,d);put(x,y,z,id,ex);},
        c:(a,y,d)=>{const [x,z]=pos(a,d);clr(x,y,z);},
        g:(a,y,d)=>{const [x,z]=pos(a,d);return get(x,y,z);},
        fa:s=>axis==='x'?[s,0]:[0,s],
        fn:s=>axis==='x'?[0,s*dir]:[s*dir,0]};
    }
    const FRONT0=wallAPI('x',ZF0,1),FRONT1=wallAPI('x',ZF1,1),FRONT2=wallAPI('x',ZF2,1),BACK=wallAPI('x',ZB,-1);
    const WEST=wallAPI('z',X0,-1),EAST=wallAPI('z',X1,1);

    /* ===================== Street, paving and coach yard ===================== */
    w.comp='yard';
    for(let x=-16;x<=18;x++)for(let z=7;z<=10;z++){const r=RNG(x,0,z);put(x,0,z,r<.18?'gravel':r<.3?'mossy_cobblestone':r<.42?'polished_andesite':'cobblestone');}
    for(let x=X0-1;x<=X1;x++)for(let z=ZF0+1;z<=6;z++)put(x,0,z,(x+z)%5===0?'polished_andesite':'stone_bricks');
    for(let x=WX0+1;x<=WX1+1;x++)for(let z=WZ1+1;z<=6;z++)put(x,0,z,(x===11||x===13)?'gravel':'cobblestone');
    // lamp posts along the street
    for(const x of [-14,-6,2,10,17]){put(x,1,7,'cobblestone_wall');put(x,2,7,'dark_oak_fence');put(x,3,7,'dark_oak_fence');put(x,4,7,'lantern');}

    /* ===================== Barrel cellar under the taproom ===================== */
    w.comp='cellar';
    const CX0=-11,CX1=0,CZ0=-5,CZ1=2;
    for(let x=CX0;x<=CX1;x++)for(let z=CZ0;z<=CZ1;z++){put(x,-4,z,'cobblestone');
      if(onRect(x,z,CX0,CX1,CZ0,CZ1))for(let y=-3;y<=-1;y++)put(x,y,z,y===-1?'stone_bricks':stone(x,y,z));}
    for(const x of [-8,-5,-2])for(let y=-3;y<=-1;y++)put(x,y,-1,'stripped_spruce_log');

    /* ===================== Floors ===================== */
    w.comp='floor';
    for(let x=X0;x<=X1;x++)for(let z=ZB;z<=ZF0;z++){
      const edge=onRect(x,z,X0,X1,ZB,ZF0);
      put(x,0,z,edge?'cobblestone':(x<=-7?((x+z)%2?'dark_oak_planks':'spruce_planks'):'spruce_planks'));}
    for(let x=X0+1;x<=X0+3;x++)for(let z=-3;z<=1;z++)put(x,0,z,'bricks');   // hearthstone before the inglenook
    for(let x=WX0+1;x<=WX1-1;x++)for(let z=WZ0+1;z<=WZ1-1;z++)put(x,0,z,z<=-3?'spruce_planks':'cobblestone');
    for(let x=WX0;x<=WX1;x++)for(let z=WZ0;z<=WZ1;z++)if(onRect(x,z,WX0,WX1,WZ0,WZ1)&&!get(x,0,z))put(x,0,z,'cobblestone');

    /* ===================== Stone taproom storey ===================== */
    w.comp='stone-walls';
    for(let x=X0;x<=X1;x++)for(let z=ZB;z<=ZF0;z++){if(!onRect(x,z,X0,X1,ZB,ZF0))continue;
      const corner=(x===X0||x===X1)&&(z===ZB||z===ZF0);
      for(let y=1;y<=5;y++)put(x,y,z,y===1?(RNG(x,1,z)<.3?'mossy_cobblestone':'cobblestone'):corner?(y%2?'polished_andesite':'chiseled_stone_bricks'):stone(x,y,z));}
    // sloped plinth course round the outside, one block out
    for(let x=X0-1;x<=X1+1;x++)for(let z=ZB-1;z<=ZF0+1;z++){if(!onRect(x,z,X0-1,X1+1,ZB-1,ZF0+1))continue;
      if(x===X1+1&&z<=WZ1)continue;                       // the coach house butts against the east wall
      if(x===X0-1&&z>=-3&&z<=1)continue;                  // chimney base
      const f=x===X0-1?[1,0]:x===X1+1?[-1,0]:z===ZB-1?[0,1]:[0,-1];
      st(x,1,z,'stone_brick_stairs',f);}

    /* ---- deep arched entrance under the middle gable ---- */
    w.comp='portal';
    {const c=GC[1],F=FRONT0;
      for(let a=c-3;a<=c+3;a++)for(let y=0;y<=5;y++){const dx=a-c,r=Math.hypot(dx,y-3);
        const open=Math.abs(dx)<=1&&y>=1&&y<=4;
        if(y===0){F.p(a,0,1,'polished_andesite');continue;}
        if(open){F.c(a,y,0);F.c(a,y,1);continue;}
        let id;
        if(Math.abs(dx)===3)id=y===5?'chiseled_stone_bricks':y===1?'polished_andesite':'stone_bricks';     // outer pilasters
        else if(y>=3&&r<=2.95)id=(dx===0&&y===5)?'chiseled_stone_bricks':(Math.round(Math.atan2(y-3,dx)*4)%2?'polished_andesite':'chiseled_stone_bricks'); // voussoirs
        else if(Math.abs(dx)===2&&y<=2)id='polished_andesite';                                            // jambs
        else id='stone_bricks';
        F.p(a,y,1,id);}
      // arch shoulders on both orders
      for(const d of [0,1]){F.p(c-1,4,d,'stone_brick_stairs',{f:F.fa(-1),up:true});F.p(c+1,4,d,'stone_brick_stairs',{f:F.fa(1),up:true});}
      // recessed door with sidelights and fanlight
      F.p(c,1,-1,'dark_oak_door');F.p(c,2,-1,'dark_oak_door');F.p(c,3,-1,'yellow_stained_glass_pane');F.p(c,4,-1,LOG);
      for(const s of [-1,1]){F.p(c+s,1,-1,'dark_oak_planks');F.p(c+s,2,-1,'glass_pane');F.p(c+s,3,-1,'yellow_stained_glass_pane');F.p(c+s,4,-1,'stone_bricks');}
      // capital cornice on the portal
      for(let a=c-3;a<=c+3;a++)F.p(a,5,2,'stone_brick_stairs',{f:F.fn(-1),up:true});
      F.p(c-3,1,2,'stone_brick_stairs',{f:F.fn(-1)});F.p(c+3,1,2,'stone_brick_stairs',{f:F.fn(-1)});
    }

    /* ---- arched windows: shoulders, voussoir head, hood, recessed mullioned light, window seat ---- */
    w.comp='arched-windows';
    function archWindow(W,c){
      for(let a=c-1;a<=c+1;a++)for(let y=2;y<=4;y++)W.c(a,y,0);
      W.p(c-1,4,0,'stone_brick_stairs',{f:W.fa(-1),up:true});W.p(c+1,4,0,'stone_brick_stairs',{f:W.fa(1),up:true});
      for(let a=c-1;a<=c+1;a++){for(let y=2;y<=4;y++)W.p(a,y,-1,a===c&&y<=3?LOG:'glass_pane');
        W.p(a,5,0,a===c?'chiseled_stone_bricks':'polished_andesite');
        W.p(a,1,-1,'dark_oak_slab',{up:true});}
      W.p(c,3,-1,LOG);
      for(const s of [-1,1])W.p(c+s,5,1,'stone_brick_stairs',{f:W.fn(-1),up:true});
      for(const s of [-2,2])W.p(c+s,4,1,'stone_brick_stairs',{f:W.fn(-1),up:true});
    }
    archWindow(FRONT0,GC[0]);archWindow(FRONT0,GC[2]);archWindow(BACK,-9);
    // back door to the garden and small lights
    BACK.c(0,1,0);BACK.c(0,2,0);BACK.p(0,1,0,'spruce_door');BACK.p(0,2,0,'spruce_door');BACK.p(0,3,0,'chiseled_stone_bricks');
    BACK.p(-1,3,1,'stone_brick_stairs',{f:BACK.fa(1),up:true});BACK.p(1,3,1,'stone_brick_stairs',{f:BACK.fa(-1),up:true});
    for(const [W,a] of [[BACK,5],[WEST,-4],[WEST,2],[BACK,-4]]){W.c(a,2,0);W.c(a,3,0);W.p(a,2,-1,'glass_pane');W.p(a,3,-1,'glass_pane');W.p(a,4,0,'chiseled_stone_bricks');W.p(a,1,-1,'dark_oak_slab',{up:true});}

    /* ===================== Jetties and timber storeys ===================== */
    const postsX=x=>(x-X0)%3===0;
    // first jetty: floor of the first storey, oversailing the street by one on a bressumer
    w.comp='jetty1';
    for(let x=X0;x<=X1;x++)for(let z=ZB;z<=ZF1;z++)put(x,J1,z,(z===ZF1||z===ZB||x===X0||x===X1)?LOG:'dark_oak_planks');
    for(let x=X0;x<=X1;x++){if(!postsX(x)||(x>=GC[1]-3&&x<=GC[1]+3)||x===GC[2])continue;
      st(x,5,ZF1,'dark_oak_stairs',[0,-1],true);if(x!==GC[0])put(x,4,ZF1,'dark_oak_trapdoor',{f:[0,-1]});}
    for(const x of [X0,X1])st(x,5,ZB-1,'dark_oak_stairs',[0,1],true);

    /* timber storey: panels y0..y0+2 (the jetty bressumer below is the sill), head plate at y0+3.
       mode 'brace': each 2×2 bay without a window gets a diagonal brace of solid dark oak (no see-through stairs);
       mode 'plaster': plain calcite; mode 'herring': brick and terracotta herringbone. */
    function timber(W,a0,a1,y0,step,mode,win,off){
      const L=a1-a0,o=off||0;
      for(let a=a0;a<=a1;a++){const u=a-a0;
        for(let y=y0;y<=y0+3;y++){
          if(y===y0+3||u===0||u===L||(u-o)%step===0){W.p(a,y,0,LOG);continue;}   // posts and head plate (the jetty beam below is the sill)
          if(win(a,y)){W.p(a,y,0,'glass_pane');continue;}
          let id='calcite';
          if(mode==='herring')id=((a+y)&1)?'bricks':'white_terracotta';
          else if(mode==='brace'&&step===3){const k=(u-o)%step,b0=a-k+1;
            const bayWin=win(b0,y0+1)||win(b0+1,y0+1)||win(b0,y0+2)||win(b0+1,y0+2);
            if(!bayWin&&((k===1&&y===y0+2)||(k===2&&y===y0+1)||(k===2&&y===y0&&false)))id='dark_oak_planks';}
          W.p(a,y,0,id);}}
    }
    w.comp='frame2';
    const nearGable=a=>GC.some(c=>Math.abs(a-c)===1);
    timber(FRONT1,X0,X1,7,3,'brace',(a,y)=>nearGable(a)&&!(a>=2&&a<=4));
    timber(BACK,X0,X1,7,3,'brace',(a,y)=>[-10,-8,-4,-2,4].includes(a));
    timber(WEST,ZB,ZF1,7,3,'brace',(a,y)=>a===2||a===3);
    timber(EAST,ZB,ZF1,7,3,'herring',()=>false);

    /* ---- oriel window on stepped brackets under the east gable ---- */
    w.comp='oriel';
    {const c=GC[2];
      for(let x=c-2;x<=c+2;x++){st(x,J1,ZF2,'dark_oak_stairs',[0,-1],true);}
      for(let x=c-1;x<=c+1;x++)st(x,5,ZF1,'dark_oak_stairs',[0,-1],true);
      st(c,5,ZF2,'dark_oak_stairs',[0,-1],true);
      for(let y=7;y<=10;y++){put(c-2,y,ZF2,LOG);put(c+2,y,ZF2,LOG);}
      for(let x=c-1;x<=c+1;x++){put(x,7,ZF2,'dark_oak_planks');put(x,10,ZF2,LOG);
        for(let y=8;y<=9;y++){put(x,y,ZF2,x===c?LOG:'glass_pane');clr(x,y,ZF1);}}
      put(c,7,ZF2+1,'dark_oak_trapdoor',{f:[0,-1]});}

    // second jetty
    w.comp='jetty2';
    for(let x=X0;x<=X1;x++)for(let z=ZB;z<=ZF2;z++)put(x,J2,z,(z===ZF2||z===ZB||x===X0||x===X1)?LOG:'dark_oak_planks');
    for(let x=X0;x<=X1;x++){if(!postsX(x)||(x>=GC[2]-2&&x<=GC[2]+2))continue;st(x,10,ZF2,'dark_oak_stairs',[0,-1],true);put(x,9,ZF2,'dark_oak_trapdoor',{f:[0,-1]});}

    w.comp='frame3';
    timber(FRONT2,X0,X1,12,2,'plaster',(a,y)=>GC.some(c=>Math.abs(a-c)===1),1);
    timber(BACK,X0,X1,12,2,'plaster',(a,y)=>[-10,-8,-4,-2,4].includes(a),1);
    timber(WEST,ZB,ZF2,12,2,'plaster',(a,y)=>Math.abs(a)===1,1);
    timber(EAST,ZB,ZF2,12,2,'plaster',(a,y)=>Math.abs(a)===1,1);
    // attic floor over the top storey
    for(let x=X0+1;x<=X1-1;x++)for(let z=ZB+1;z<=ZF2-1;z++)put(x,YE,z,'spruce_planks');

    /* ===================== Roof: one height field for the main roof, gables and dormers ===================== */
    const prisms=[];
    prisms.push({x0:X0-1,x1:X1+1,z0:ZB-1,z1:ZF2+1,h:(x,z)=>YE+Math.min(z-(ZB-1),(ZF2+1)-z),
      up:(x,z)=>{const a=z-(ZB-1),b=(ZF2+1)-z;return a<b?[0,1]:a>b?[0,-1]:null;},main:true});
    for(const c of GC)prisms.push({k:2,x0:c-3,x1:c+3,z0:1,z1:ZF2+1,h:(x,z)=>YE+2*Math.min(x-(c-3),(c+3)-x),
      up:(x,z)=>{const a=x-(c-3),b=(c+3)-x;return a<b?[1,0]:a>b?[-1,0]:null;}});
    for(const c of DC)prisms.push({x0:c-2,x1:c+2,z0:ZB-1,z1:-1,h:(x,z)=>YE+3+Math.min(x-(c-2),(c+2)-x),
      up:(x,z)=>{const a=x-(c-2),b=(c+2)-x;return a<b?[1,0]:a>b?[-1,0]:null;}});
    const HM=new Map();
    for(let x=X0-1;x<=X1+1;x++)for(let z=ZB-1;z<=ZF2+1;z++){let best=null;
      for(const p of prisms){if(x<p.x0||x>p.x1||z<p.z0||z>p.z1)continue;const h=p.h(x,z);if(!best||h>best.h||(h===best.h&&p.main))best={h,p};}
      if(best)HM.set(x+','+z,best);}
    const Hm=(x,z)=>YE+Math.min(z-(ZB-1),(ZF2+1)-z);
    const H=(x,z)=>{const b=HM.get(x+','+z);return b?b.h:-1;};

    /* ---- gable ends, cross-gable faces and wall dormers (wall fill up to the roof) ---- */
    w.comp='gables';
    for(let x=X0;x<=X1;x++)for(let z=ZB;z<=ZF2;z++){if(!onRect(x,z,X0,X1,ZB,ZF2))continue;
      const top=H(x,z)-1;
      const along=(z===ZB||z===ZF2)?x:z;
      const centres=z===ZF2?GC:z===ZB?DC:[0];
      const c=centres.reduce((m,v)=>Math.abs(along-v)<Math.abs(along-m)?v:m,centres[0]),u=along-c;
      const au=Math.abs(u);
      for(let y=YE;y<=top;y++){let id='calcite';
        if(y===YE||y===YE+3)id=LOG;                               // tie beam and collar
        else if(u===0&&!(z===ZB&&y<=YE+2))id=LOG;                 // king post
        else if(au<=1&&y<=YE+2)id='glass_pane';                   // paired gable lights either side of the king post
        else if(au===2&&y<=YE+2)id=LOG;                           // window posts
        else if(au===3&&y===YE+2)id='dark_oak_planks';            // raking braces
        else if(au===1&&y===YE+4)id='dark_oak_planks';
        else if(au===2&&y===YE+5)id='dark_oak_planks';
        put(x,y,z,id);}}
    // fill under the gable and dormer roofs where they rise above the main roof
    for(let x=X0+1;x<=X1-1;x++)for(let z=ZB+1;z<=ZF2-1;z++){const h=H(x,z),m=Hm(x,z);for(let y=Math.max(m,YE+1);y<h;y++)if(!get(x,y,z))put(x,y,z,'dark_oak_planks');}

    /* ---- slate roof ---- */
    w.comp='roof';
    function roofField(map,stairId,fullId,capId){
      for(const [k,{h,p}] of map){const [x,z]=k.split(',').map(Number);const f=p.up(x,z);
        if(f){const id=RNG(x,h,z)<.1?'deepslate_brick_stairs':stairId;put(x,h,z,id,{f});}
        else{put(x,h,z,fullId);if(capId)put(x,h+1,z,capId);}
        if(p.k===2)put(x,h-1,z,fullId);}     // steep 2:1 pitch: a full tile under every stair
    }
    roofField(HM,'deepslate_tile_stairs','deepslate_tiles','deepslate_tile_slab');

    /* ---- bargeboards under every overhang, pendants under each apex, finials on top ---- */
    w.comp='bargeboards';
    for(const [k,{h,p}] of HM){const [x,z]=k.split(',').map(Number);
      const out=x<X0||x>X1||z<ZB||z>ZF2;if(!out)continue;
      const f=x<X0?[1,0]:x>X1?[-1,0]:z<ZB?[0,1]:[0,-1],y=h-(p.k===2?2:1);
      if(!get(x,y,z))st(x,y,z,'dark_oak_stairs',f,true);}
    for(const c of GC){const h=H(c,ZF2+1);clr(c,h+1,ZF2+1);put(c,h+1,ZF2+1,'dark_oak_fence');put(c,h+2,ZF2+1,'lightning_rod');
      put(c,h-3,ZF2+1,'dark_oak_fence');put(c,h-4,ZF2+1,'dark_oak_fence');put(c,h-5,ZF2+1,'lantern');}
    for(const c of DC){const h=H(c,ZB-1);clr(c,h+1,ZB-1);put(c,h+1,ZB-1,'dark_oak_fence');put(c,h+2,ZB-1,'lightning_rod');put(c,h-2,ZB-1,'dark_oak_fence');}
    for(const x of [X0-1,X1+1]){const h=H(x,0);put(x,h+1,0,'dark_oak_fence');put(x,h+2,0,'lightning_rod');put(x,h-2,0,'dark_oak_fence');put(x,h-3,0,'dark_oak_fence');}

    /* ===================== Chimney stacks ===================== */
    w.comp='chimneys';
    // west stack on the gable end: stone base, brick shaft, two stepped shoulders, corbelled cap and pots
    {const stage=(x0,x1,z0,z1,y0,y1,mat)=>{for(let x=x0;x<=x1;x++)for(let z=z0;z<=z1;z++)for(let y=y0;y<=y1;y++){
        const quoin=(x===x0||x===x1)&&(z===z0||z===z1);put(x,y,z,mat==='stone'?stone(x,y,z):(quoin&&y%2?'stone_bricks':'bricks'));}};
      stage(-15,-13,-3,1,1,6,'stone');
      for(let z=-3;z<=1;z++)st(-15,7,z,'stone_brick_stairs',[1,0]);for(const z of [-3,1])st(-14,7,z,'stone_brick_stairs',[0,z<0?1:-1]);
      st(-13,7,-3,'stone_brick_stairs',[0,1]);st(-13,7,1,'stone_brick_stairs',[0,-1]);
      stage(-14,-13,-2,0,7,15,'brick');
      st(-14,16,-2,'stone_brick_stairs',[0,1]);st(-13,16,-2,'stone_brick_stairs',[0,1]);
      stage(-14,-13,-1,0,16,26,'brick');
      for(let x=-15;x<=-12;x++)for(let z=-2;z<=1;z++){if(x>=-14&&x<=-13&&z>=-1&&z<=0)continue;st(x,25,z,'stone_brick_stairs',x===-15?[1,0]:x===-12?[-1,0]:z===-2?[0,1]:[0,-1],true);}
      for(let x=-14;x<=-13;x++)for(let z=-1;z<=0;z++)put(x,25,z,'polished_andesite');
      put(-14,27,-1,'brick_wall');put(-13,27,0,'brick_wall');put(-14,27,0,'bricks');put(-13,27,-1,'bricks');
      // firebox through the west wall
      for(let z=-2;z<=0;z++){for(let y=1;y<=3;y++)clr(X0,y,z);for(let y=1;y<=2;y++)clr(-13,y,z);put(-13,0,z,'bricks');}
      put(-13,1,-1,'campfire');put(-13,3,-1,'bricks');
      for(let z=-2;z<=0;z++)put(X0,4,z,LOG);
    }
    // kitchen stack, through every floor and out of the back slope
    for(let x=2;x<=3;x++)for(let z=-4;z<=-3;z++){for(let y=1;y<=24;y++)put(x,y,z,(y>=20&&y%3===0)?'stone_bricks':'bricks');}
    for(let x=1;x<=4;x++)for(let z=-5;z<=-2;z++){if(x>=2&&x<=3&&z>=-4&&z<=-3)continue;if(H(x,z)>=23)continue;st(x,23,z,'stone_brick_stairs',x===1?[1,0]:x===4?[-1,0]:z===-5?[0,1]:[0,-1],true);}
    put(2,25,-4,'brick_wall');put(3,25,-3,'brick_wall');
    put(2,1,-3,'smoker');put(3,1,-3,'furnace');

    /* ===================== Coach house ===================== */
    w.comp='wing-walls';
    for(let x=WX0;x<=WX1;x++)for(let z=WZ0;z<=WZ1;z++){if(!onRect(x,z,WX0,WX1,WZ0,WZ1))continue;if(x===WX0&&z>=ZB)continue;
      const corner=(x===WX1||x===WX0)&&(z===WZ0||z===WZ1);
      for(let y=1;y<=6;y++)put(x,y,z,y===1?'cobblestone':corner?(y%2?'polished_andesite':'chiseled_stone_bricks'):(y===6?'polished_andesite':stone(x,y,z)));}
    for(let z=WZ0-1;z<=WZ1+1;z++)st(WX1+1,1,z,'stone_brick_stairs',[-1,0]);
    for(let x=WX0;x<=WX1;x++)st(x,1,WZ0-1,'stone_brick_stairs',[0,1]);
    // stable windows with iron bars and stone heads
    for(const z of [-4,-1]){for(let y=3;y<=4;y++)put(WX1,y,z,'iron_bars');put(WX1,5,z,'chiseled_stone_bricks');st(WX1+1,2,z,'stone_brick_stairs',[-1,0],true);}
    for(const x of [9,15]){for(let y=3;y<=4;y++)put(x,y,WZ0,'iron_bars');put(x,5,WZ0,'chiseled_stone_bricks');}

    w.comp='carriage-arch';
    {const c=12,F=wallAPI('x',WZ1,1);
      for(let a=c-4;a<=c+4;a++)for(let y=1;y<=8;y++){const dx=a-c,r=Math.hypot(dx,y-4);
        const open=(Math.abs(dx)<=2&&y<=4)||(y>4&&r<=2.6);
        if(open){F.c(a,y,0);continue;}
        if(y>=4&&r<=3.75){F.p(a,y,1,(dx===0&&y>=7)?'chiseled_stone_bricks':(Math.round(Math.atan2(y-4,dx)*5)%2?'polished_andesite':'stone_bricks'));F.p(a,y,0,'stone_bricks');}
        else if(Math.abs(dx)===3&&y<4)F.p(a,y,1,y===1?'polished_andesite':'stone_bricks');}
      F.p(c-3,4,1,'chiseled_stone_bricks');F.p(c+3,4,1,'chiseled_stone_bricks');
      // spruce doors swung open against the reveal
      for(const s of [-1,1])for(let y=1;y<=4;y++){F.p(c+s*3,y,2,'spruce_trapdoor',{f:[s,0]});F.p(c+s*4,y,1,'spruce_trapdoor',{f:[s,0]});}
      // small stable door
      F.c(8,1,0);F.c(8,2,0);F.p(8,1,0,'spruce_door');F.p(8,2,0,'spruce_door');F.p(8,3,0,'chiseled_stone_bricks');
      F.p(16,3,0,'iron_bars');F.p(16,4,0,'iron_bars');F.p(16,5,0,'chiseled_stone_bricks');}

    // coach house roof: its own ridge, running north–south over the carriage arch
    const WH=new Map();
    const wp={up:(x,z)=>{const a=x-WX0,b=(WX1+1)-x;return a<b?[1,0]:a>b?[-1,0]:null;}};
    for(let x=WX0+1;x<=WX1+1;x++)for(let z=WZ0-1;z<=WZ1+1;z++)WH.set(x+','+z,{h:10+Math.min(x-WX0,(WX1+1)-x),p:wp});
    const WHh=(x,z)=>{const b=WH.get(x+','+z);return b?b.h:-1;};

    w.comp='wing-frame';
    {const S2=wallAPI('x',WZ1,1),N2=wallAPI('x',WZ0,-1),E2=wallAPI('z',WX1,1);
      timber(E2,WZ0,WZ1,7,3,'brace',(a,y)=>a===-1||a===0);
      timber(S2,WX0+1,WX1,7,3,'herring',(a,y)=>a===8||a===16);
      timber(N2,WX0+1,WX1,7,3,'herring',(a,y)=>a===9||a===15);
      // gable infill above the head plate
      for(const z of [WZ0,WZ1])for(let x=WX0+1;x<=WX1-1;x++){const top=WHh(x,z)-1,u=x-12;
        for(let y=11;y<=top;y++){let id='calcite';if(u===0||y===11)id=LOG;else if(Math.abs(u)===3&&y<=13)id=LOG;put(x,y,z,id);}}
      // loft door, round light and hoist beam on the street gable
      for(let x=11;x<=13;x++)for(let y=8;y<=10;y++)clr(x,y,WZ1);
      put(10,8,WZ1,LOG);put(14,8,WZ1,LOG);put(12,11,WZ1,LOG);
      for(const x of [11,13])put(x,10,WZ1+1,'spruce_trapdoor',{f:[0,-1]});
      put(12,14,WZ1,'glass_pane');put(11,14,WZ1,'dark_oak_stairs',{f:[1,0]});put(13,14,WZ1,'dark_oak_stairs',{f:[-1,0]});put(12,15,WZ1,'dark_oak_planks');
      for(let z=WZ1;z<=WZ1+2;z++)put(12,13,z,LOG);
      put(12,12,WZ1+2,'chain');put(12,11,WZ1+2,'chain');put(12,10,WZ1+2,'hay_block');
      // hayloft floor
      for(let x=WX0+1;x<=WX1-1;x++)for(let z=WZ0+1;z<=WZ1-1;z++)if(!(x===WX1-1&&z===WZ1-1))put(x,7,z,'spruce_planks');
      for(let y=1;y<=7;y++)put(WX1-1,y,WZ1-1,'ladder',{f:[1,0]});}

    w.comp='wing-roof';
    roofField(WH,'deepslate_tile_stairs','deepslate_tiles','deepslate_tile_slab');
    for(const [k,{h}] of WH){const [x,z]=k.split(',').map(Number);
      const out=x>WX1||z<WZ0||z>WZ1;if(!out)continue;const f=x>WX1?[-1,0]:z<WZ0?[0,1]:[0,-1];
      if(!get(x,h-1,z))st(x,h-1,z,'dark_oak_stairs',f,true);}
    for(const z of [WZ0-1,WZ1+1]){const h=WHh(12,z);put(12,h+1,z,'dark_oak_fence');put(12,h+2,z,'lightning_rod');}
    put(12,WHh(12,WZ1+1)-2,WZ1+1,'dark_oak_fence');

    /* ===================== Inside ===================== */
    w.comp='beams';
    // ceiling beams under each floor, on the post lines
    for(let x=X0+1;x<=X1-1;x++){if(!postsX(x))continue;for(let z=ZB+1;z<=ZF0-1;z++)if(!get(x,5,z))put(x,5,z,LOG);
      for(let z=ZB+1;z<=ZF1-1;z++)if(!get(x,10,z))put(x,10,z,LOG);}
    // partition between taproom and kitchen, with a doorway
    for(let z=ZB+1;z<=ZF0-1;z++)for(let y=1;y<=4;y++){if(z===0&&y<=2)continue;put(1,y,z,(z===ZB+1||z===ZF0-1||y===4)?LOG:'calcite');}
    for(let y=1;y<=2;y++)clr(1,y,0);
    // staircase: kitchen to first floor along the east wall, then back up to the top floor
    for(let i=0;i<5;i++){const z=2-i,y=1+i;st(5,y,z,'spruce_stairs',[0,-1]);for(let yy=1;yy<y;yy++)put(5,yy,z,'spruce_planks');}
    for(const z of [-1,-2,-3])for(const yy of [J1])clr(5,yy,z);
    clr(5,5,-1);clr(5,5,-2);clr(5,10,-1);clr(5,10,-2);
    for(let i=0;i<4;i++){const z=-2+i,y=7+i;st(4,y,z,'spruce_stairs',[0,1]);for(let yy=7;yy<y;yy++)put(4,yy,z,'spruce_planks');}
    for(const z of [0,1,2])clr(4,J2,z);clr(4,10,0);clr(4,10,1);
    for(let z=-3;z<=2;z++)if(!get(3,J1+1,z))put(3,J1+1,z,'spruce_fence');
    for(const z of [-2,-1,0])put(5,J2+1,z,'spruce_fence');
    // partitions on the guest floors
    for(const y0 of [7,12])for(const x of [-6,0])for(let z=ZB+1;z<=(y0===7?ZF1:ZF2)-1;z++)for(let y=y0;y<=y0+3;y++){
      if(z===1&&y<=y0+1)continue;if(get(x,y,z))continue;put(x,y,z,(y===y0+3||z===ZB+1)?LOG:'calcite');}
    // cellar hatch and ladder behind the bar
    clr(-1,0,-3);for(let y=-3;y<=0;y++)put(-1,y,-3,'ladder',{f:[1,0]});

    w.comp='taproom';w.role='furnish';
    // long bar with a back bar of barrels and bottles
    for(let x=-6;x<=-1;x++){put(x,1,-2,x===-6?'spruce_planks':'stripped_spruce_log');put(x,2,-2,'spruce_slab');put(x,1,0,'oak_stairs',{f:[0,1]});
      if(x<-1){put(x,1,-4,'barrel');put(x,2,-4,'barrel');put(x,3,-4,'spruce_slab',{up:true});put(x,4,-4,x%2?'brewing_stand':'flower_pot');}}
    put(-6,1,-1,'spruce_planks');put(-6,2,-1,'spruce_slab');
    for(const x of [-5,-2]){put(x,4,-1,'chain');put(x,3,-1,'lantern');}
    // inglenook: settles either side of the fire, a mantel shelf over it
    st(-11,1,-3,'spruce_stairs',[0,-1]);st(-11,1,1,'spruce_stairs',[0,1]);
    for(let z=-2;z<=0;z++)put(-11,5,z,'dark_oak_slab',{up:true});
    put(-11,4,-3,'lantern');put(-11,4,1,'lantern');
    // tables and benches in the taproom
    for(const [tx,tz] of [[-8,-3],[-8,1],[-4,2]]){put(tx,1,tz,'spruce_fence');put(tx,2,tz,'oak_pressure_plate');
      st(tx-1,1,tz,'spruce_stairs',[-1,0]);st(tx+1,1,tz,'spruce_stairs',[1,0]);}
    for(const [x,z] of [[-8,-1],[-3,0]]){put(x,4,z,'chain');put(x,3,z,'lantern');}
    put(-10,1,2,'barrel');put(-10,2,2,'flower_pot');put(0,1,2,'barrel');
    w.role=null;

    w.comp='rooms';w.role='furnish';
    // kitchen
    put(4,1,-4,'cauldron');put(5,1,-4,'barrel');put(4,1,-3,'crafting_table');put(2,1,1,'chest');put(3,1,2,'barrel');put(2,1,2,'barrel');
    put(3,4,0,'chain');put(3,3,0,'lantern');
    // first floor: three guest rooms
    for(const [x,z] of [[-11,-4],[-5,-4],[-2,-4]]){put(x,7,z,'red_bed');put(x,7,z+1,'red_bed');put(x+1,7,z,'chest');}
    put(-8,7,-4,'bookshelf');put(-8,8,-4,'bookshelf');put(-11,7,3,'crafting_table');put(-4,7,3,'barrel');
    put(-9,9,0,'chain');put(-3,9,0,'chain');put(-9,8,0,'lantern');put(-3,8,0,'lantern');
    // top floor: dormitory
    for(let x=-11;x<=-7;x+=2){put(x,12,-4,'red_bed');put(x,12,-3,'red_bed');}
    for(let x=-5;x<=-1;x+=2){put(x,12,-4,'red_bed');put(x,12,-3,'red_bed');}
    put(-10,12,4,'chest');put(-8,12,4,'chest');put(-4,12,4,'barrel');put(2,12,4,'chest');
    put(-9,15,0,'chain');put(-9,14,0,'lantern');put(-3,15,0,'chain');put(-3,14,0,'lantern');
    // cellar racks
    for(let x=CX0+1;x<=CX1-1;x++)for(const z of [CZ0+1,CZ1-1]){if(x===-1&&z===CZ0+1)continue;for(let y=-3;y<=-2;y++)put(x,y,z,'barrel');}
    for(const x of [-9,-4]){put(x,-1,-1,'chain');put(x,-2,-1,'lantern');}
    w.role=null;

    w.comp='stable';w.role='furnish';
    for(const x of [9,12,15])for(let z=WZ0+1;z<=WZ0+3;z++)put(x,1,z,'spruce_fence');
    for(const x of [7,10,13]){put(x,1,WZ0+1,'hay_block');put(x+1,1,WZ0+1,'composter');}
    put(16,1,WZ0+1,'hay_block');put(16,2,WZ0+1,'hay_block');
    for(let x=WX0+1;x<=WX1-2;x++)for(const z of [WZ0+1,WZ0+2]){if(RNG(x,8,z)<.7)put(x,8,z,'hay_block');if(RNG(x,9,z)<.35&&get(x,8,z))put(x,9,z,'hay_block');}
    for(const x of [9,15]){put(x,6,-1,'lantern');}
    put(16,1,0,'barrel');put(16,1,-1,'chest');
    // yard: trough and hitching rail
    for(let x=8;x<=9;x++){put(x,1,5,'cauldron');}
    for(let x=14;x<=16;x++)put(x,1,5,'spruce_fence');
    w.role=null;

    /* ===================== Beer garden ===================== */
    w.comp='garden';
    const GX0=-13,GX1=6,GZ0=-16,GZ1=-7;
    for(let x=GX0;x<=GX1;x++)for(let z=GZ0;z<=GZ1;z++){
      const path=(x===0||z===-11)&&!onRect(x,z,GX0,GX1,GZ0,GZ1);
      put(x,0,z,path?'gravel':'grass_block');
      if(onRect(x,z,GX0,GX1,GZ0,GZ1)){if(x===0&&z===GZ1)continue;put(x,1,z,RNG(x,1,z)<.35?'mossy_cobblestone_wall':'cobblestone_wall');}}
    for(const x of [-1,1])put(x,2,GZ1,'lantern');
    for(let x=X0-1;x<=X1;x++)if(!get(x,0,-6))put(x,0,-6,'gravel');
    // pergola: posts, beams, slats and leaves
    const PX0=-12,PX1=-3,PZ0=-15,PZ1=-9;
    for(const x of [PX0,-9,-6,PX1])for(const z of [PZ0,PZ1])for(let y=1;y<=3;y++)put(x,y,z,LOG);
    for(let x=PX0;x<=PX1;x++)for(const z of [PZ0,PZ1])put(x,4,z,LOG);
    for(let x=PX0;x<=PX1;x+=2)for(let z=PZ0-1;z<=PZ1+1;z++)put(x,5,z,'dark_oak_slab');
    for(let x=PX0;x<=PX1;x++)for(let z=PZ0;z<=PZ1;z++)if(vnLeaf(x,z))put(x,6,z,'oak_leaves');
    function vnLeaf(x,z){return w.vn(x/2.3,z/2.3)>.52;}
    for(const x of [-10,-7,-4])for(const z of [PZ0,PZ1]){put(x,3,z,'chain');put(x,2,z,'lantern');}
    // long tables with benches under the pergola
    w.role='furnish';
    for(const z of [-14,-12,-10]){for(let x=-11;x<=-5;x++){put(x,1,z,'spruce_slab',{up:true});}
      for(let x=-11;x<=-5;x+=2){}}
    for(const z of [-13,-11])for(let x=-11;x<=-5;x++)if(x%3!==0)put(x,1,z,'spruce_stairs',{f:[0,z===-13?1:-1]});
    put(-11,1,-15,'spruce_stairs',{f:[0,-1]});
    // barrel tables on the lawn
    for(const [x,z] of [[3,-14],[3,-9]]){put(x,1,z,'barrel');put(x,2,z,'flower_pot');st(x-1,1,z,'spruce_stairs',[-1,0]);st(x+1,1,z,'spruce_stairs',[1,0]);}
    w.role=null;
    // well with a shingled hood
    {const cx=-1,cz=-13;
      for(let x=cx-1;x<=cx+1;x++)for(let z=cz-1;z<=cz+1;z++){if(x===cx&&z===cz){for(let y=-3;y<=0;y++)put(x,y,z,'water');continue;}
        put(x,0,z,'cobblestone');put(x,1,z,(x+z)%2?'mossy_cobblestone':'cobblestone');}
      for(const x of [cx-1,cx+1]){put(x,2,cz,'spruce_fence');put(x,3,cz,'spruce_fence');}
      for(let x=cx-1;x<=cx+1;x++){put(x,4,cz,'stripped_spruce_log');st(x,4,cz-1,'spruce_stairs',[0,1]);st(x,4,cz+1,'spruce_stairs',[0,-1]);put(x,5,cz,'spruce_slab');}
      put(cx,3,cz,'chain');put(cx,2,cz,'chain');}
    // young oak in the corner, and a hedge along the back wall of the inn
    {const tx=4,tz=-14;for(let y=1;y<=4;y++)put(tx,y,tz,'oak_log');
      for(let x=tx-2;x<=tx+2;x++)for(let z=tz-2;z<=tz+2;z++)for(let y=4;y<=7;y++){const d=Math.hypot(x-tx,(y-5.3)*1.2,z-tz);if(d<2.6&&!get(x,y,z)&&!(x===tx&&z===tz&&y<=4))put(x,y,z,'oak_leaves');}}
    for(let x=GX0+1;x<=GX1-1;x++)if(x<-1||x>1)put(x,1,GZ1-1,(x>=-3&&x<=-1)?'grass_block':'oak_leaves');
    for(let x=-3;x<=-2;x++){clr(x,1,GZ1-1);}

    /* ===================== Sign, lanterns and flower boxes ===================== */
    w.comp='lights';
    // wrought bracket and hanging sign over the street
    {const x=-7;put(x,9,ZF1+1,'iron_bars');put(x,9,ZF1+2,'iron_bars');put(x,9,ZF1+3,'iron_bars');put(x,8,ZF1+1,'iron_bars');
      put(x,8,ZF1+2,'chain');put(x,8,ZF1+3,'chain');
      for(let z=ZF1+2;z<=ZF1+3;z++)for(let y=6;y<=7;y++)put(x,y,z,'hanging_sign',{f:[1,0],hue:y===7?'#9a7038':'#7a5530'});
      put(x,6,ZF1+2,'hanging_sign',{f:[1,0],hue:'#c9a23a'});}
    // lanterns hung under the first jetty, either side of the portal
    for(const x of [-8,1]){put(x,5,ZF1,'lantern');}
    // moss flower boxes under the paired lights and the ribbon windows
    for(let x=X0;x<=X1;x++){if(get(x,8,ZF1)?.id==='glass_pane'&&!(x>=2&&x<=4))put(x,7,ZF1+1,'flower_box');
      if(GC.includes(x))put(x,12,ZF2+1,'flower_box');}
    for(const x of [-10,-8,-4,-2,4])put(x,7,ZB-1,'flower_box');
      /* ===== Compass: a wayfarer's crossroads in the street, an interlaced eight-point star round a fingerpost ===== */
    w.comp='compass';
    const CZ=14;
    each((x,z)=>{const dx=x,dz=z-CZ,r=Math.hypot(dx,dz);if(r>7.2)return;
      let id;
      if(r>6.3){const bin=Math.floor(((Math.atan2(dz,dx)+2*Math.PI)%(2*Math.PI))/(Math.PI/8));id=bin%2?'stone_bricks':'chiseled_stone_bricks';}
      else{const ax=Math.abs(dx),az=Math.abs(dz),inA=ax<=4.5&&az<=4.5,inB=ax+az<=6.3;
        const star=(p,q)=>(Math.abs(p)<=4.5&&Math.abs(q)<=4.5)||Math.abs(p)+Math.abs(q)<=6.3;
        const core=(p,q)=>Math.abs(p)<=4.5&&Math.abs(q)<=4.5&&Math.abs(p)+Math.abs(q)<=6.3;
        const edge=core(dx,dz)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>!core(dx+a,dz+b));   // the octagon where the squares cross
        if(r<1.5)id='polished_deepslate';
        else if(r<2.5)id='smooth_stone';
        else if(!inA&&!inB)id='cobblestone';
        else if(edge)id='polished_blackstone';
        else if(inA&&inB)id='smooth_sandstone';
        else if(inB)id=dz<0&&ax<1?'red_nether_bricks':'polished_andesite';     // cardinal tips; north, toward the inn, in red
        else id='polished_granite';}                                           // the four diagonal tips
      put(x,0,z,id);});
    // the fingerpost: a carved stone foot, a spruce post, four arms at two heights, a lantern on top
    put(0,1,CZ,'chiseled_stone_bricks');put(0,2,CZ,'stone_brick_wall');
    for(let y=3;y<=5;y++)put(0,y,CZ,'stripped_spruce_log');
    for(const s of [-1,1]){put(s,5,CZ,'spruce_slab',{up:true});put(0,4,CZ+s,'spruce_slab',{up:true});}
    put(0,6,CZ,'spruce_fence');put(0,7,CZ,'lantern');
    for(const [x,z] of [[-6,CZ-6],[6,CZ-6],[-6,CZ+6],[6,CZ+6]]){put(x,1,z,'stone_brick_wall');put(x,2,z,'lantern');}
  }
});
