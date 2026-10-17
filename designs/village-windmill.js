/* Village Windmill — a grand octagonal tower mill. A battered stone base with buttresses and an arched porch,
   a timber stage on joists, a tapering spruce body, a white ogee boat cap with a fantail, and four lattice sails.
   Beside it, a granary on staddle stones, a wheat field, a cart and lamp posts.
   x 0, z 0 is the middle of the tower; the door and the sails face south. */
BK.register({
  id:'village-windmill',
  version:2,
  name:'Village Windmill',
  blurb:'A grand octagonal tower mill: buttressed stone base with an arched porch, a timber stage on joists, a white ogee cap with a fantail, four lattice sails, and a full set of millstones and gears inside.',
  tags:['Medieval','Village','Windmill','Large'],
  edition:'Bedrock',
  extent:18,
  start:{x:0,y:1,z:10},
  ring:8.5,
  figure:{x:2,z:13},
  blocks:{
    brown_wool:{n:'Brown Wool (grain sack)',c:'#724728'},
    hopper:{n:'Hopper',c:'#4a4a4e'},
    smooth_stone_slab:{n:'Smooth Stone Slab',c:'#a3a3a1',sh:'slab'},
    grindstone:{n:'Grindstone',c:'#8b8b86'}
  },
  steps:[
    ['Ground','ground','Floor, apron & paths'],
    ['Base','plinth','Battered plinth'],
    ['Base','base-walls','Stone tower & quoins'],
    ['Base','buttresses','Buttresses'],
    ['Base','door','South porch & door'],
    ['Base','base-windows','Base windows & string course'],
    ['Stage','brackets','Stage joists & corbels'],
    ['Stage','stage','Stage deck, railing & lamps'],
    ['Body','body','Timber body & corner posts'],
    ['Body','rails','Rails & drip ledges'],
    ['Body','body-windows','Windows, shutters & stage door'],
    ['Inside','floors','Floors & ladders'],
    ['Inside','machinery','Upright shaft & gears'],
    ['Inside','stones','Millstones, bins & sack hoist'],
    ['Cap','cap','Curb, eaves & cap'],
    ['Cap','cap-ribs','Cap ribs & finial'],
    ['Cap','fantail','Fantail'],
    ['Sails','stocks','Windshaft, poll end & stocks'],
    ['Sails','lattice','Sail lattices'],
    ['Sails','cloth','Sail cloth'],
    ['Granary','granary','Granary on staddle stones'],
    ['Granary','granary-roof','Granary roof'],
    ['Yard','yard','Wheat field, cart & lamp posts'],
    ['Inside','furniture','Sacks, barrels & lights']
  ],
  tiers:[
    {a:0,b:11,name:'Stone base',short:'Battered octagon, buttresses, arched porch',
      p:'An octagonal stone tower, 17 blocks across at the foot. Its first three courses are battered: cobblestone stepping in under cobblestone stair caps, so the base flares like a real tower mill. Four stepped buttresses stand on the diagonal faces, their setbacks capped with stairs. The corners are quoined in alternating polished andesite and stone bricks, and the walls are weathered with mossy and cracked bricks. The south door sits in a projecting porch, three orders deep: an outer arch of dressed andesite voussoirs with a carved keystone, an inner arch, then a spruce door with a glazed fanlight in a timber frame. A dripstone hood of upturned stairs follows the arch, and a small stepped pediment with a finial tops the porch. Deep-set windows to the east and north have iron grilles in front of the glass, dressed surrounds and slab sills, under a string course that runs round the tower.',
      m:['cobblestone','mossy_cobblestone','cobblestone_stairs','stone_bricks','mossy_stone_bricks','cracked_stone_bricks','polished_andesite','chiseled_stone_bricks','stone_brick_stairs','iron_bars','spruce_door']},
    {a:9,b:15,name:'Stage',short:'Timber gallery on sixteen joists',
      p:'A timber stage rings the tower where stone gives way to wood, so the miller can reach the sails and turn the cap. It stands three blocks proud on sixteen stripped dark oak joists, with dark oak struts under each and a ring of inverted dark oak stairs as a corbel course. The deck is spruce with a dark oak edge beam and a fence rail. Stripped dark oak posts at the eight corners carry lanterns. A spruce door under a little pent hood leads out from the north side.',
      m:['stripped_dark_oak_log','dark_oak_stairs','spruce_planks','dark_oak_fence','lantern']},
    {a:12,b:33,name:'Body',short:'Tapering spruce octagon, framed windows',
      p:'The timber body narrows from 14 blocks across to 10 as it rises. It is boarded in oak between stripped dark oak corner posts at the eight angles, and dark oak rails tie them at three heights, two of them with drip ledges of inverted spruce stairs. Small windows are framed in dark oak, with a slab sill on a bracket, spruce shutters and a stair hood over each.',
      m:['oak_planks','stripped_dark_oak_log','stripped_oak_log','spruce_stairs','glass_pane','dark_oak_slab','dark_oak_stairs','spruce_trapdoor']},
    {a:1,b:36,name:'Machinery',short:'Five floors, millstones, gears, sack hoist',
      p:'Inside, ladders climb five floors along the west wall. The upright shaft rises through the middle. A big spruce spur wheel with pegged cogs hangs under the stone floor, where two pairs of millstones sit in spruce tuns with hoppers above. Fence chutes feed the hoppers from barrel bins on the floor above. A sack hoist drum under the dust floor lowers a chain through hatches to the ground floor. In the cap, a spoked brake wheel on the windshaft drives a wallower on the upright shaft.',
      m:['spruce_planks','ladder','stripped_spruce_log','spruce_fence','smooth_stone','polished_andesite','hopper','barrel','chain']},
    {a:33,b:48,name:'Cap',short:'White ogee boat cap, ribs, gilded finial',
      p:'A boat-shaped cap, longer front to back than side to side, with an ogee profile that swells out then draws up to a point. It is laid in smooth quartz, every exposed edge a quartz stair so it reads as boarding, with four dark oak ribs running up its axes. It sits on a stripped dark oak curb over a corbelled cornice, and its long ends overhang on inverted dark oak stairs. The finial is chiseled quartz, a dark oak post and a gold ball under a lightning rod. At the back, a timber trestle carries an eight-bladed fantail that keeps the sails facing the wind.',
      m:['smooth_quartz','smooth_quartz_stairs','dark_oak_planks','dark_oak_stairs','stripped_dark_oak_log','chiseled_quartz','gold_block','white_wool']},
    {a:23,b:51,name:'Sails',short:'Four 14-block lattice sails',
      p:'The windshaft runs out of the front of the cap to a cast-iron poll end. Four stripped spruce stocks, 14 blocks long, cross in front of it. Each sail is a spruce fence lattice, four blocks wide, with bars every third block and a whip along the outer edge, and a thin leading board on the other side of the stock. The upper and east sails are fully clothed in white wool. The lower sail is half reefed. The west sail is fully reefed, its cloth rolled tight along the stock and its lattice bare.',
      m:['stripped_spruce_log','spruce_fence','white_wool','spruce_trapdoor','polished_blackstone','chiseled_polished_blackstone']},
    {a:0,b:13,name:'Granary & yard',short:'Granary on staddles, wheat field, cart',
      p:'East of the mill, a timber granary stands on nine staddle stones, wall posts with smooth stone caps, to keep the grain dry and the rats out. It has a log frame with spruce boarding, shuttered vents, a gabled loft door, a pent hood over the door and stone steps. A dirt path leads south between lamp posts, past a hay cart with trapdoor wheels and stacks of sacks by the porch. West of the mill is a fenced wheat field, watered down the middle, with hay bales at the gate.',
      m:['stone_brick_wall','smooth_stone_slab','stripped_spruce_log','spruce_planks','dark_oak_stairs','farmland','water','oak_fence','dirt_path','white_wool','brown_wool']}
  ],
  notes:[
    ['Order','Raise the stone base, then the stage joists and deck: you will stand on the stage to build the body. Build the floors and ladders as you go up, so you always have something to stand on.'],
    ['Octagon','Each course is an octagon, and the body narrows by about one block every twelve courses. Follow the Top view layer by layer: the diagonal faces step in on their own schedule.'],
    ['Sails','The sails stand in one plane, two blocks in front of the cap, centred on the windshaft at y 37. Place each stock first, then the fence lattice, then the cloth. The west sail is reefed on purpose.'],
    ['Survival','About 9 stacks of stone and cobblestone, 7 of spruce, 3 of dark oak, 2 of smooth quartz (with stairs) and a stack of white wool. The poll end uses a little polished blackstone from the Nether: swap it for deepslate if you like.']
  ],
  build(w){
    const {put,clr,get,each,RNG,S,inward,spotsAt}=w;
    const K2=Math.SQRT1_2,PI=Math.PI;
    // octagon with flat faces on the axes and the diagonals; A is the distance from the centre to each face
    const om=(x,z)=>Math.max(Math.abs(x),Math.abs(z),(Math.abs(x)+Math.abs(z))*K2);
    const inO=(x,z,A)=>om(x,z)<=A;
    const shell=(x,z,A)=>inO(x,z,A)&&(!inO(x+1,z,A)||!inO(x-1,z,A)||!inO(x,z+1,A)||!inO(x,z-1,A));
    const inner=(x,z,A)=>inO(x,z,A)&&!shell(x,z,A);
    const A=y=>y<=1?8.5:y===2?8.1:y===3?7.7:y<=11?7.5-(y-4)*.03:6.9-(y-12)*.085;
    const F=y=>Math.floor(A(y));
    const corner=(x,z)=>{const r=Math.hypot(x,z),t=Math.atan2(z,x);
      for(let k=0;k<8;k++){const c=PI/8+k*PI/4;if(Math.cos(t-c)>0&&Math.abs(r*Math.sin(t-c))<.5)return true;}return false;};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const E=[1,0],SO=[0,1],N=[0,-1];
    // place along a face: n blocks out along the face normal d, l blocks along the face
    const at=(d,n,l,y,id,ex)=>put(d[0]*n-d[1]*l,y,d[1]*n+d[0]*l,id,ex);
    const toWall=d=>({f:[-d[0],-d[1]]});
    const weather=(x,y,z)=>{const r=RNG(x,y,z);return r<.12?'mossy_stone_bricks':r<.21?'cracked_stone_bricks':'stone_bricks';};

    /* ===== Ground y0 ===== */
    w.comp='ground';
    each((x,z)=>{const m=om(x,z);
      if(m<=A(1))put(x,0,z,m<=1.5?'polished_andesite':m>A(1)-1.6?'polished_andesite':'smooth_stone');
      else if(m<=11)put(x,0,z,RNG(x,0,z)<.35?'gravel':'cobblestone');});
    for(let z=10;z<=18;z++){for(let x=-1;x<=1;x++)put(x,0,z,'dirt_path');for(const x of [-2,2])put(x,0,z,RNG(x,0,z)<.55?'gravel':'grass_block');}
    for(let x=2;x<=13;x++)put(x,0,10,'dirt_path');
    for(let z=8;z<=9;z++)put(13,0,z,'dirt_path');
    for(let x=-1;x<=1;x++)put(x,0,10,'polished_andesite');

    /* ===== Battered plinth y1–4 ===== */
    w.comp='plinth';
    for(let y=1;y<=3;y++)each((x,z)=>{if(inO(x,z,A(y))&&!inO(x,z,A(y)-1.2))put(x,y,z,y>1&&RNG(x,y,z)<.3?'mossy_cobblestone':'cobblestone');});
    for(let y=2;y<=4;y++)each((x,z)=>{if(inO(x,z,A(y-1))&&!inO(x,z,A(y)))S(x,y,z,y===4?'stone_brick_stairs':'cobblestone_stairs');});

    /* ===== Stone tower y4–11, quoined corners ===== */
    w.comp='base-walls';
    for(let y=4;y<=11;y++)each((x,z)=>{if(!shell(x,z,A(y)))return;
      put(x,y,z,corner(x,z)?(y%2?'polished_andesite':'stone_bricks'):y===9?'polished_andesite':weather(x,y,z));});

    /* ===== Buttresses on the four diagonal faces ===== */
    w.comp='buttresses';
    for(const a of [PI/4,3*PI/4,5*PI/4,7*PI/4]){const ca=Math.cos(a),sa=Math.sin(a),A4=A(4);
      each((x,z)=>{const rr=x*ca+z*sa,tt=-x*sa+z*ca;if(Math.abs(tt)>1.1||rr<A4-1||rr>A4+3.3)return;
        const top=rr>A4+2.3?3:rr>A4+1.3?6:9;
        for(let y=1;y<=top;y++){if(inO(x,z,A(y)))continue;put(x,y,z,y<=2?'cobblestone':y===top?'polished_andesite':(y%3===0?'polished_andesite':weather(x,y,z)));}
        if(!inO(x,z,A(top+1))&&!get(x,top+1,z))put(x,top+1,z,'stone_brick_stairs',{f:inward(x,z)});});}

    /* ===== South porch: two arch orders, voussoirs, keystones, hood and pediment ===== */
    w.comp='door';
    for(let x=-3;x<=3;x++)for(let z=8;z<=9;z++)for(let y=1;y<=8;y++)
      put(x,y,z,Math.abs(x)===3?(y%2?'polished_andesite':'stone_bricks'):y===8?'polished_andesite':weather(x,y,z));
    for(let x=-3;x<=3;x++)for(let y=1;y<=8;y++){const d=Math.hypot(x,y-4),ax=Math.abs(x);
      // outer order (z 9)
      const o9=(ax<=2&&y<=4)||(y>4&&d<=2.6);
      if(o9)clr(x,y,9);else if(y>=4&&d<=3.6)put(x,y,9,x===0&&y===7?'chiseled_stone_bricks':'polished_andesite');
      // inner order (z 8)
      const o8=(ax<=1&&y<=4)||(x===0&&y===5);
      if(o8)clr(x,y,8);else if(y>=4&&d<=2.6)put(x,y,8,x===0&&y===6?'chiseled_stone_bricks':'polished_andesite');else if(ax===2&&y<=3)put(x,y,8,'polished_andesite');
      // dripstone hood
      if(y>=5&&d>3.6&&d<=4.4&&ax<=3)st(x,y,10,'stone_brick_stairs',0,-1,true);}
    for(let x=-3;x<=3;x++)st(x,8,10,'stone_brick_stairs',0,-1,true);
    for(let z=8;z<=9;z++){
      for(let x=-2;x<=2;x++){if(Math.abs(x)===2)st(x,9,z,'stone_brick_stairs',-Math.sign(x),0);else put(x,9,z,'stone_bricks');}
      for(let x=-1;x<=1;x++){if(x)st(x,10,z,'stone_brick_stairs',-Math.sign(x),0);else put(x,10,z,'chiseled_stone_bricks');}}
    put(0,11,9,'stone_brick_wall');
    // the door itself, set back in the wall behind the arches
    for(let x=-1;x<=1;x++)for(let y=1;y<=5;y++)clr(x,y,7);
    put(0,1,7,'spruce_door');put(0,2,7,'spruce_door');put(0,3,7,'glass_pane');
    for(const x of [-1,1])for(let y=1;y<=3;y++)put(x,y,7,'stripped_spruce_log');
    for(let x=-1;x<=1;x++)put(x,4,7,'stripped_spruce_log');put(0,5,7,'glass_pane');
    for(const x of [-3,3])put(x,5,10,'lantern');

    /* ===== Base windows: iron grille in front, glass set back, dressed surround; string course ===== */
    w.comp='base-windows';
    for(const d of [E,N]){const n=F(7);
      for(const y of [7,8]){at(d,n,0,y,'iron_bars');at(d,n-1,0,y,'glass_pane');}
      for(let y=6;y<=9;y++){at(d,n,-1,y,'polished_andesite');at(d,n,1,y,'polished_andesite');at(d,n-1,-1,y,'stone_bricks');at(d,n-1,1,y,'stone_bricks');}
      at(d,n,0,6,'polished_andesite');at(d,n,0,9,'chiseled_stone_bricks');at(d,n-1,0,6,'polished_andesite');at(d,n-1,0,9,'polished_andesite');
      at(d,n+1,0,6,'stone_brick_slab',{up:true});}
    each((x,z)=>{if(inO(x,z,A(9)+1)&&!inO(x,z,A(9))&&!get(x,9,z))S(x,9,z,'stone_brick_stairs',true);});

    /* ===== Stage joists, struts and corbel ring ===== */
    w.comp='brackets';
    const AD=10.2;
    for(let k=0;k<16;k++){if(k===4)continue;const a=k*PI/8;let strut=false;
      for(let rr=7;rr<=10.01;rr+=.5){const x=Math.round(rr*Math.cos(a)),z=Math.round(rr*Math.sin(a));
        if(inO(x,z,A(11))||!inO(x,z,AD))continue;
        if(!get(x,11,z))put(x,11,z,'stripped_dark_oak_log');
        if(!strut&&!inO(x,z,A(10))&&!get(x,10,z)){put(x,10,z,'dark_oak_stairs',{f:inward(x,z),up:true});strut=true;}}}
    each((x,z)=>{if(inO(x,z,A(11)+1)&&!inO(x,z,A(11))&&!get(x,11,z))S(x,11,z,'dark_oak_stairs',true);});

    /* ===== Stage deck, rail and corner lamp posts ===== */
    w.comp='stage';
    each((x,z)=>{if(!inO(x,z,AD)||inO(x,z,A(12)))return;const edge=shell(x,z,AD);
      put(x,12,z,edge?'stripped_dark_oak_log':'spruce_planks');if(edge)put(x,13,z,'dark_oak_fence');});
    spotsAt(Array.from({length:8},(_,k)=>PI/8+k*PI/4),AD-.3,(x,z)=>shell(x,z,AD)).forEach(([x,z])=>{
      put(x,13,z,'stripped_dark_oak_log');put(x,14,z,'stripped_dark_oak_log');put(x,15,z,'lantern');});

    /* ===== Timber body y12–33 ===== */
    w.comp='body';
    for(let y=12;y<=33;y++)each((x,z)=>{if(!shell(x,z,A(y)))return;
      put(x,y,z,corner(x,z)?'stripped_dark_oak_log':(y===12||y===33)?'stripped_dark_oak_log':RNG(x,y,z)<.06?'stripped_oak_log':'oak_planks');});

    w.comp='rails';
    for(const y of [18,25,32]){each((x,z)=>{if(shell(x,z,A(y)))put(x,y,z,'stripped_dark_oak_log');});
      if(y<32)each((x,z)=>{if(inO(x,z,A(y)+1)&&!inO(x,z,A(y))&&!get(x,y,z))S(x,y,z,'spruce_stairs',true);});}

    /* ===== Body windows: dark oak frame, sill on a bracket, shutters, hood ===== */
    w.comp='body-windows';
    const WIN=[[15,[E,SO]],[20,[N,E,SO]],[28,[N,E,SO]]];
    for(const [y,ds] of WIN)for(const d of ds){const n=F(y);
      at(d,n,0,y,'glass_pane');at(d,n,0,y+1,'glass_pane');
      for(let yy=y-1;yy<=y+2;yy++){at(d,n,-1,yy,'stripped_dark_oak_log');at(d,n,1,yy,'stripped_dark_oak_log');}
      at(d,n,0,y-1,'stripped_dark_oak_log');at(d,n,0,y+2,'stripped_dark_oak_log');
      for(let l=-1;l<=1;l++){at(d,n+1,l,y-1,'dark_oak_slab',{up:true});at(d,n+1,l,y+2,'dark_oak_stairs',toWall(d));}
      at(d,n+1,0,y-2,'dark_oak_stairs',Object.assign(toWall(d),{up:true}));
      for(const l of [-1,1])for(const yy of [y,y+1])at(d,n+1,l,yy,'spruce_trapdoor',toWall(d));}
    // stage door on the north side, under a pent hood on brackets
    {const n=F(13);at(N,n,0,13,'spruce_door');at(N,n,0,14,'spruce_door');
      for(let yy=13;yy<=15;yy++){at(N,n,-1,yy,'stripped_dark_oak_log');at(N,n,1,yy,'stripped_dark_oak_log');}at(N,n,0,15,'stripped_dark_oak_log');
      for(let l=-1;l<=1;l++)at(N,n+1,l,16,'dark_oak_stairs',toWall(N));
      for(const l of [-1,1])at(N,n+1,l,15,'dark_oak_stairs',Object.assign(toWall(N),{up:true}));}

    /* ===== Floors and ladders ===== */
    w.comp='floors';
    const FLOORS=[5,12,19,26,33],HOIST=[3,-3];
    const SEGS=[[0,5],[5,12],[12,19],[19,26],[26,33]];
    for(const yf of FLOORS)each((x,z)=>{if(!inner(x,z,A(yf)))return;
      if(yf<33&&x===HOIST[0]&&z===HOIST[1])return;if(yf>12&&x===0&&z===0)return;
      put(x,yf,z,(yf===19&&Math.abs(z)<=1)?'dark_oak_planks':'spruce_planks');});
    for(const [y0,y1] of SEGS){const xl=-(Math.floor(A(y1))-1);
      for(let y=y0+1;y<=y1;y++){put(xl,y,0,'ladder',{f:[-1,0]});
        for(let xx=-Math.floor(A(y))+1;xx<xl;xx++)if(!get(xx,y,0))put(xx,y,0,'spruce_planks');}}

    /* ===== Upright shaft, spur wheel, wallower and brake wheel ===== */
    w.comp='machinery';
    for(let y=13;y<=36;y++)put(0,y,0,'stripped_spruce_log');
    for(let x=-3;x<=3;x++)for(let z=-3;z<=3;z++){const r=Math.hypot(x,z);if(!r)continue;
      if(r>1.8&&r<=2.6)put(x,18,z,'spruce_planks');
      else if(r<=1.8&&(x===0||z===0))put(x,18,z,'stripped_spruce_log');
      else if(r>2.6&&r<=3.2&&(x+z)%2===0)put(x,18,z,'spruce_fence');}
    for(let x=-2;x<=2;x++)for(let z=-2;z<=2;z++){const r=Math.hypot(x,z);if(r>.9&&r<=1.9)put(x,35,z,'spruce_planks');}
    for(let x=-3;x<=3;x++)for(let y=34;y<=40;y++){const r=Math.hypot(x,y-37);if(!r)continue;
      if(r>1.7&&r<=2.6)put(x,y,1,'stripped_spruce_log');else if(r<=1.7&&(x===0||y===37))put(x,y,1,'spruce_planks');}

    /* ===== Millstones in tuns, hoppers, chutes, bins; sack hoist ===== */
    w.comp='stones';w.role='furnish';
    for(const sz of [3,-3]){
      for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++){const c=!dx&&!dz;
        put(dx,20,sz+dz,c?'smooth_stone':'spruce_planks');put(dx,21,sz+dz,c?'polished_andesite':'spruce_slab');}
      put(0,22,sz,'hopper');put(-1,22,sz,'spruce_fence');put(1,22,sz,'spruce_fence');
      for(let y=23;y<=26;y++)put(0,y,sz,'spruce_fence');
      put(0,27,sz,'barrel');put(0,28,sz,'barrel');put(-1,27,sz,'barrel');put(1,27,sz,'barrel');}
    each((x,z)=>{if(!inO(x,z,A(27)-1)||inO(x,z,A(27)-2))return;if(Math.abs(z)<2||x<-2)return;if(x===HOIST[0]&&z===HOIST[1])return;
      put(x,27,z,'barrel');if(RNG(x,27,z)<.5)put(x,28,z,'barrel');});
    put(2,32,-3,'stripped_spruce_log');put(3,32,-3,'stripped_spruce_log');
    for(let y=5;y<=31;y++)put(3,y,-3,'chain');
    put(3,4,-3,'brown_wool');
    for(const yf of [12,19,26])put(3,yf,-2,'spruce_trapdoor',{f:[0,1]});

    /* ===== Cap: cornice, curb, corbelled eaves, ogee boat cap ===== */
    const A33=A(33),CB=35,CH=12,RX=6.0,RZ=7.6;
    const prof=y=>{const t=(y-CB)/CH;if(t<0||t>=1)return null;const s=t*t*(3-2*t);return [RX*(1-s),RZ*(1-s)];};
    const inE=(x,y,z)=>{const p=prof(y);if(!p||p[0]<.05)return false;if(!x&&!z)return true;return (x/p[0])**2+(z/p[1])**2<=1;};
    w.comp='cap';
    each((x,z)=>{
      if(inO(x,z,A33+1)&&!inO(x,z,A33))S(x,33,z,'dark_oak_stairs',true);
      if(inO(x,z,A33+1)&&!inO(x,z,A33-1.2))put(x,34,z,'stripped_dark_oak_log');
      else if(inE(x,CB,z)&&!inO(x,z,A33+1))S(x,34,z,'dark_oak_stairs',true);});
    for(let y=CB;y<CB+CH;y++){const p=prof(y);each((x,z)=>{
      if(!inE(x,y,z))return;
      const top=!inE(x,y+1,z),edge=!inE(x+1,y,z)||!inE(x-1,y,z)||!inE(x,y,z+1)||!inE(x,y,z-1);
      if(!top&&!edge)return;
      // four dark oak ribs run up the cap on its axes
      const rib=(x===0||z===0)&&Math.hypot(x,z)>1.2;
      w.comp=rib?'cap-ribs':'cap';
      const gx=x/(p[0]*p[0]),gz=z/(p[1]*p[1]);
      if(top&&(x||z))put(x,y,z,rib?'dark_oak_stairs':'smooth_quartz_stairs',{f:Math.abs(gx)>=Math.abs(gz)?[-Math.sign(x),0]:[0,-Math.sign(z)]});
      else put(x,y,z,rib?'dark_oak_planks':'smooth_quartz');});}
    w.comp='cap-ribs';
    {let top=CB;while(inE(0,top+1,0))top++;
      put(0,top+1,0,'chiseled_quartz');put(0,top+2,0,'dark_oak_fence');put(0,top+3,0,'gold_block');put(0,top+4,0,'lightning_rod');}

    /* ===== Fantail on a trestle at the back of the cap ===== */
    w.comp='fantail';
    const FZ=-10,FY=40;
    for(const x of [-1,1]){for(let z=-8;z>=FZ;z--)put(x,36,z,'stripped_dark_oak_log');
      put(x,35,-8,'dark_oak_stairs',{f:[0,1],up:true});
      for(let y=37;y<FY;y++)put(x,y,FZ,'dark_oak_fence');}
    for(let x=-1;x<=1;x++)put(x,FY,FZ,'stripped_spruce_log');
    for(let k=0;k<8;k++){const a=(k+.5)*PI/4;
      for(const r of [1,2,3]){const y=FY+Math.round(r*Math.sin(a)),z=FZ+Math.round(r*Math.cos(a));if(!get(0,y,z))put(0,y,z,r===1?'spruce_planks':'white_wool');}}

    /* ===== Windshaft, bearings, poll end and stocks ===== */
    w.comp='stocks';
    const HY=37,SZ=9,L=14;
    for(let z=-2;z<SZ;z++)put(0,HY,z,'stripped_spruce_log');
    for(let x=-4;x<=4;x++)put(x,35,-2,'stripped_dark_oak_log');
    put(0,36,-2,'dark_oak_planks');put(0,35,5,'dark_oak_planks');put(0,36,5,'dark_oak_planks');
    put(0,HY,SZ,'polished_blackstone');put(0,HY,SZ+1,'chiseled_polished_blackstone');put(0,HY,SZ+2,'polished_blackstone_brick_wall');
    const ARMS=[{d:[0,1],p:[1,0],cloth:'full'},{d:[1,0],p:[0,-1],cloth:'full'},{d:[0,-1],p:[-1,0],cloth:'half'},{d:[-1,0],p:[0,1],cloth:'reefed'}];
    for(const {d} of ARMS)for(let r=1;r<=L;r++)put(d[0]*r,HY+d[1]*r,SZ,'stripped_spruce_log');

    /* ===== Lattices and cloth ===== */
    for(const {d,p,cloth} of ARMS)for(let r=4;r<=L;r++)for(let o=-1;o<=4;o++){if(!o)continue;
      const x=d[0]*r+p[0]*o,y=HY+d[1]*r+p[1]*o;
      if(o===-1){w.comp='lattice';put(x,y,SZ,'spruce_trapdoor',{f:[0,1]});continue;}
      if(o===4||r===4||r===L||r%3===0){w.comp='lattice';put(x,y,SZ,'spruce_fence');continue;}
      w.comp='cloth';
      if(cloth==='full'||(cloth==='half'&&r<=9)||(cloth==='reefed'&&o===1))put(x,y,SZ,'white_wool');}

    /* ===== Granary on staddle stones ===== */
    w.comp='granary';
    const GX0=10,GX1=16,GZ=4;
    for(const x of [GX0,13,GX1])for(const z of [-GZ,0,GZ]){put(x,1,z,'stone_brick_wall');put(x,2,z,'smooth_stone_slab',{up:true});}
    for(let x=GX0;x<=GX1;x++)for(let z=-GZ;z<=GZ;z++)put(x,3,z,(x===GX0||x===GX1||Math.abs(z)===GZ)?'stripped_spruce_log':'spruce_planks');
    for(let x=GX0;x<=GX1;x++)for(let z=-GZ;z<=GZ;z++){const side=x===GX0||x===GX1,end=Math.abs(z)===GZ;if(!side&&!end)continue;
      const post=(side&&(Math.abs(z)===GZ||z===0))||(end&&(x===GX0||x===GX1));
      for(let y=4;y<=7;y++)put(x,y,z,(post||y===7)?'stripped_spruce_log':'spruce_planks');}
    for(const x of [GX0,GX1])for(const z of [-2,2])put(x,5,z,'spruce_trapdoor',{f:[x===GX0?-1:1,0]});
    // door on the south end, with a pent hood and stone steps
    put(13,4,GZ,'spruce_door');put(13,5,GZ,'spruce_door');for(const x of [12,14])for(let y=4;y<=6;y++)put(x,y,GZ,'stripped_spruce_log');put(13,6,GZ,'stripped_spruce_log');
    for(let x=12;x<=14;x++)st(x,7,GZ+1,'spruce_stairs',0,-1);for(const x of [12,14])st(x,6,GZ+1,'spruce_stairs',0,-1,true);
    st(13,3,5,'spruce_stairs',0,-1);st(13,2,6,'cobblestone_stairs',0,-1);st(13,1,7,'cobblestone_stairs',0,-1);
    put(13,1,5,'cobblestone');put(13,2,5,'cobblestone');put(13,1,6,'cobblestone');
    // gables with a loft door
    for(const z of [-GZ,GZ])for(let i=0;i<=3;i++)for(let x=GX0+i;x<=GX1-i;x++)put(x,8+i,z,x===13?'stripped_spruce_log':'spruce_planks');
    for(const z of [-GZ,GZ])put(13,9,z,'spruce_trapdoor',{f:[0,Math.sign(z)]});

    w.comp='granary-roof';
    for(let i=0;i<=3;i++)for(let z=-GZ-1;z<=GZ+1;z++){st(GX0-1+i,8+i,z,'dark_oak_stairs',1,0);st(GX1+1-i,8+i,z,'dark_oak_stairs',-1,0);}
    for(let z=-GZ-1;z<=GZ+1;z++)put(13,12,z,'dark_oak_slab');
    for(let i=0;i<=3;i++)for(const z of [-GZ-1,GZ+1]){st(GX0-1+i,7+i,z,'dark_oak_stairs',-1,0,true);st(GX1+1-i,7+i,z,'dark_oak_stairs',1,0,true);}

    /* ===== Yard: wheat field, hay, lamp posts, cart, sacks ===== */
    w.comp='yard';
    for(let x=-17;x<=-11;x++)for(let z=-7;z<=7;z++)put(x,0,z,x===-14?'water':'farmland');
    for(let x=-18;x<=-10;x++)for(let z=-8;z<=8;z++){if(x>-18&&x<-10&&Math.abs(z)<8)continue;if(x===-10&&z===0)continue;
      put(x,0,z,'grass_block');put(x,1,z,'oak_fence');}
    for(const [x,z] of [[-18,-8],[-18,8],[-10,-8],[-10,8],[-10,1],[-10,-1]])put(x,2,z,'lantern');
    for(const [x,y,z] of [[-9,1,5],[-9,2,5],[-9,1,6],[-8,1,6],[-9,1,4]])put(x,y,z,'hay_block');
    for(const x of [-3,3])for(const z of [12,17]){put(x,1,z,'cobblestone_wall');put(x,2,z,'spruce_fence');put(x,3,z,'spruce_fence');put(x,4,z,'lantern');}
    w.role='furnish';
    // hay cart: trapdoor wheels, slab bed, fence sides and shafts
    for(const z of [13,14])for(const [x,f] of [[4,[1,0]],[7,[-1,0]]])put(x,1,z,'dark_oak_trapdoor',{f});
    for(let x=5;x<=6;x++)for(let z=12;z<=15;z++)put(x,1,z,'spruce_slab',{up:true});
    for(const z of [12,15])for(let x=5;x<=6;x++)put(x,2,z,'spruce_fence');
    put(5,2,13,'hay_block');put(6,2,13,'white_wool');put(5,2,14,'brown_wool');put(6,2,14,'hay_block');put(5,3,13,'white_wool');
    for(const x of [5,6])for(const z of [16,17])put(x,1,z,'spruce_fence');
    // sacks and barrels by the porch
    for(const [x,y,z,id] of [[-5,1,9,'white_wool'],[-5,2,9,'brown_wool'],[-6,1,9,'brown_wool'],[-5,1,10,'white_wool'],[-6,1,10,'white_wool'],[5,1,9,'barrel'],[5,2,9,'barrel'],[6,1,9,'barrel'],[5,1,10,'flower_pot'],[-2,1,10,'flower_pot'],[2,1,10,'flower_pot']])put(x,y,z,id);
    w.role=null;

    /* ===== Inside: sacks, bins, workbench, hanging lights ===== */
    w.comp='furniture';w.role='furnish';
    each((x,z)=>{if(!inO(x,z,A(4)-1)||inO(x,z,A(4)-2))return;if(x<=-4&&Math.abs(z)<=1)return;if(z>=3&&Math.abs(x)<=2)return;if(x===HOIST[0]&&z===HOIST[1])return;
      if(z<-1){put(x,1,z,RNG(x,1,z)<.5?'white_wool':'brown_wool');if(RNG(x,2,z)<.45)put(x,2,z,'white_wool');}
      else if(x>1)put(x,1,z,'barrel');});
    put(2,1,2,'grindstone');put(-2,1,3,'crafting_table');
    each((x,z)=>{if(!inO(x,z,A(6)-1)||inO(x,z,A(6)-2))return;if(x<=-4&&Math.abs(z)<=1)return;if(x===HOIST[0]&&z===HOIST[1])return;
      if(z>1)put(x,6,z,'barrel');else if(z<-1&&RNG(x,6,z)<.6)put(x,6,z,'white_wool');});
    put(2,13,2,'lectern');put(-2,13,-3,'white_wool');put(-1,13,-3,'white_wool');put(-2,14,-3,'brown_wool');put(1,13,-4,'barrel');
    for(const [x,y,z] of [[2,4,2],[-2,11,2],[3,18,3],[-2,25,2],[2,32,2]])put(x,y,z,'lantern');
    w.role=null;
  }
});
