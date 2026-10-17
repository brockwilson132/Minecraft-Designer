/* Castle Keep — a great square keep with four engaged round towers, a twin-drum gatehouse over a moat,
   machicolated battlements, a north bartizan, a chapel oriel and a pitched hall roof.
   x 0, z 0 is the middle of the great hall; the gate faces south. */
BK.register({
  id:'castle-keep',
  version:2,
  name:'Castle Keep',
  blurb:'A great keep: four round towers with dormered cones, a twin-drum gatehouse with portcullis, bretèche and timber hoarding over a moat, machicolated battlements, rose windows, a chapel oriel and a pillared great hall with a canopied throne.',
  tags:['Medieval','Castle','Landmark','Large'],
  edition:'Bedrock',
  extent:30,
  start:{x:0,y:1,z:22},
  figure:{x:4,z:29},
  steps:[
    ['Ground','ground','Floors, paving & moat'],
    ['Keep','plinth','Battered plinth'],
    ['Keep','keep-walls','Keep walls & string courses'],
    ['Keep','buttresses','Pilaster buttresses'],
    ['Keep','openings','Windows, roses & arrow loops'],
    ['Keep','machicolations','Machicolations & battlements'],
    ['Keep','floors','Upper floors & beams'],
    ['Keep','chimney','Chimney stack'],
    ['Keep','oriel','Chapel oriel'],
    ['Towers','towers','Tower shafts & loops'],
    ['Towers','spiral','Spiral stair (north-east tower)'],
    ['Towers','tower-tops','Tower machicolations'],
    ['Towers','tower-roofs','Cones, dormers & flags'],
    ['Gatehouse','gatehouse','Gatehouse & drum towers'],
    ['Gatehouse','gate','Gate arch, portcullis & bretèche'],
    ['Gatehouse','gate-tops','Hoarding, drum roofs & banners'],
    ['Gatehouse','drawbridge','Drawbridge'],
    ['Roof','bartizan','North bartizan'],
    ['Roof','roof','Hall roof, gables & louvre'],
    ['Inside','hall','Great hall'],
    ['Inside','upper','Armoury, chapel & solar'],
    ['Outside','outside','Well & lamp posts']
  ],
  tiers:[
    {a:-3,b:0,name:'Ground & moat',short:'Chequered hall floor, cobbled bailey, moat',p:'Inside, the great hall floor is a chequer of polished andesite and stone bricks with a red carpet edged in polished deepslate running from the gate to the dais. Outside, a cobbled bailey with gravel patches rings the keep and opens into a courtyard on the east. In front of the gate a moat three blocks wide is cut two blocks deep between stone revetments, with a gravel bed.',m:['polished_andesite','stone_bricks','red_wool','polished_deepslate','cobblestone','gravel','water']},
    {a:1,b:14,name:'Great hall',short:'Basalt arcade, canopied throne, hearth',p:'Two arcades of five polished basalt columns with chiseled capitals carry pointed arches down the length of the hall, under oak beams that rest on stone corbels. Dark oak chandeliers hang over the nave. On the north dais a gold and blackstone throne sits under a red canopy on dark oak posts, between red and gold tapestries. Long tables with benches fill the aisles, and on the west wall a deep hearth burns under a stepped stone hood. Outside, the great east window has three lights with stone mullions and a stained centre light, under a pointed archivolt and hood mould; the north face carries the same tracery as a blind arch.',m:['polished_basalt','chiseled_stone_bricks','stripped_dark_oak_log','dark_oak_slab','spruce_stairs','gold_block','polished_blackstone_stairs','red_wool','yellow_wool','bricks','stone_brick_wall','glass_pane']},
    {a:15,b:24,name:'Armoury & chapel',short:'Rose windows, oriel altar',p:'A string course on a drip mould marks the first floor. The west half is the armoury: armour stands along the wall, a smithy corner with anvil, grindstone and smithing table, and archery butts. The east half is the chapel, lit by a rose window with stone tracery and red, yellow and cyan glass, with pews facing a quartz altar. In the south-east bay a three-sided oriel stands out on a stepped corbel with a carved pendant, holding a side altar behind stained glass under a small tiled roof. A second rose lights the north face.',m:['dark_oak_planks','stone_brick_stairs','red_stained_glass_pane','yellow_stained_glass_pane','cyan_stained_glass_pane','chiseled_quartz','dark_oak_stairs','deepslate_tile_stairs','polished_andesite']},
    {a:25,b:31,name:'Solar & dormitory',short:'Lord\'s chamber, garrison beds',p:'The top floor has the lord\'s solar on the east, with a carpeted floor, a double bed, a desk and bookshelves, and a garrison dormitory on the west behind a timber partition. Cross-shaped arrow loops with splayed embrasures light both.',m:['spruce_planks','red_carpet','red_bed','bookshelf','dark_oak_planks','stripped_dark_oak_log']},
    {a:29,b:47,name:'Battlements & hall roof',short:'Machicolations, capped merlons, tiled roof',p:'The parapet stands a block proud on a continuous corbel row carried by brackets on every other block, leaving murder slots between them. Merlons alternate with crenels and carry slab caps. Inside the wall walk a steep deepslate roof covers the hall, with stone-coped gables and gable lancets, four timber dormers and a louvred smoke vent on the ridge. A bartizan with its own cone is corbelled out over the middle of the north face.',m:['stone_brick_stairs','stone_bricks','stone_brick_slab','polished_andesite','deepslate_tile_stairs','deepslate_tiles','stripped_dark_oak_log','dark_oak_planks','iron_bars']},
    {a:1,b:66,name:'Corner towers',short:'Engaged round towers, dormered cones',p:'Four round towers, eleven blocks across, are engaged into the corners on a two-step battered plinth. Each has cross loops and lancets with hoods turned to the three outward faces, bands at every floor, and a machicolated top with capped merlons round a wall walk. Above rises a sixteen-course deepslate cone with brick ribs, three timber dormers and a gilded finial with a red and gold flag. The north-east tower holds the spiral stair from the hall to the tower top.',m:['stone_bricks','mossy_stone_bricks','cracked_stone_bricks','polished_andesite','deepslate_tile_stairs','deepslate_tiles','deepslate_brick_stairs','stripped_dark_oak_log','gold_block','dark_oak_fence','red_wool','yellow_wool']},
    {a:0,b:44,name:'Gatehouse',short:'Twin drums, portcullis, bretèche, hoarding',p:'Two drum towers flank a gate of two orders: a pointed outer arch with polished deepslate jambs, an andesite archivolt and a gilded keystone under a hood mould, then a darker deepslate inner order with the portcullis hanging in it. Dark oak doors close the passage, and murder holes open into it from the guardroom above. Over the gate a bretèche on corbels has slots in its floor and an arrow slit, above it a two-light window, and at the top a dark oak hoarding on putlog beams with shutters and a lean-to roof. Heraldic banners in red and gold hang from both drums, each drum has its own machicolated top and cone, and a drawbridge on chains crosses the moat.',m:['polished_deepslate','deepslate_bricks','chiseled_stone_bricks','gilded_blackstone','iron_bars','dark_oak_door','dark_oak_planks','dark_oak_trapdoor','stripped_dark_oak_log','chain','red_wool','yellow_wool']}
  ],
  notes:[
    ['Size','About 30,000 blocks. Most are stone bricks; mossy and cracked bricks are mixed in at random, so swap them for plain bricks if you are short. The cones take roughly 9 stacks of deepslate tiles and tile stairs.'],
    ['Order','Plinth, walls, buttresses, then the openings, then the battlements. Raise the towers before the hall roof: the roof stops where it meets their curved walls.'],
    ['Machicolations','Brackets go on every other block (upside-down stairs), then a full row of upside-down stairs on top, then the parapet. The gaps between the brackets are the murder slots, so leave them open.'],
    ['Cones','Each cone shrinks a little every layer. Edges that the layer above does not cover are stairs facing the tower centre; covered ones are full tiles. Follow the top view layer by layer. Ribs are the same shapes in deepslate bricks.'],
    ['Spiral stair','In the north-east tower the stair turns once every 16 layers around a single newel. Build it as you raise the tower so you can always stand on it.'],
    ['Moat','The moat is dug two blocks below the ground with a gravel bed three down. Fill it from the ends so the water settles still.']
  ],
  blocks:{
    armor_stand:{n:'Armor Stand',c:'#9b7c53',sh:'rod'},
    grindstone:{n:'Grindstone',c:'#8d8d8d',sh:'lectern'},
    red_carpet:{n:'Red Carpet',c:'#a12722',sh:'frame'},
    campfire:{n:'Campfire',c:'#e0893a',sh:'slab',emit:1},
    yellow_wool:{n:'Yellow Wool',c:'#e9bf2b'}
  },
  build(w){
    const {put,clr,get,each,RNG}=w;
    const KE=13,KI=11;
    const stone=(x,y,z)=>{const r=RNG(x,y,z);return r<.12?'mossy_stone_bricks':r<.22?'cracked_stone_bricks':'stone_bricks';};
    const st=(x,y,z)=>put(x,y,z,stone(x,y,z));
    const mx=(x,z)=>Math.max(Math.abs(x),Math.abs(z));
    const axis=(vx,vz)=>Math.abs(vx)>=Math.abs(vz)?[Math.sign(vx),0]:[0,Math.sign(vz)];
    const toward=(x,z,cx,cz)=>axis(cx-x,cz-z);
    const TOW=[[13,13],[-13,13],[13,-13],[-13,-13]],TR=5.6,TT=44;
    const DRUM=[[6,18],[-6,18]],DR=3.6,DT=28;
    const nearTower=(x,z,r)=>TOW.some(([cx,cz])=>Math.hypot(x-cx,z-cz)<=r);
    const inBody=(x,z)=>(Math.abs(x)<=5&&z>=14&&z<=19)||(Math.abs(x)<=3&&z>=20&&z<=21);
    // the four faces of the keep: t runs along the face, d is depth (0 outer face, 1 inner layer, -1 and -2 stand proud)
    const F={N:{p:(t,d)=>[t,-(KE-d)],i:[0,1],g:[1,0]},S:{p:(t,d)=>[t,KE-d],i:[0,-1],g:[1,0]},
             E:{p:(t,d)=>[KE-d,t],i:[-1,0],g:[0,1]},W:{p:(t,d)=>[-(KE-d),t],i:[1,0],g:[0,1]}};
    const FACES=['N','S','E','W'];
    const P=(f,t,y,d,id,ex)=>{const [x,z]=F[f].p(t,d);put(x,y,z,id,ex);};
    const PW=(f,t,y,d)=>{const [x,z]=F[f].p(t,d);st(x,y,z);};
    const C=(f,t,y,d)=>{const [x,z]=F[f].p(t,d);clr(x,y,z);};
    const PS=(f,t,y,d,id,up)=>P(f,t,y,d,id,{f:F[f].i,up:!!up});
    const PSs=(f,t,y,d,id,up)=>{const [x,z]=F[f].p(t,d);const g=get(x,y,z);if(g&&!/stairs/.test(g.id))return;put(x,y,z,id,{f:F[f].i,up:!!up});};
    const furn=(x,y,z,id,ex)=>{if(!nearTower(x,z,TR+.3))put(x,y,z,id,ex);};

    /* ---------- shared pieces for round towers ---------- */
    const roundShaft=(cx,cz,R,T,bands)=>each((x,z)=>{const r=Math.hypot(x-cx,z-cz);if(r>R)return;
      if(r>R-2){const outer=r>R-1;for(let y=1;y<T;y++)put(x,y,z,outer?(y===1?'polished_deepslate':bands.includes(y)?'polished_andesite':stone(x,y,z)):'stone_bricks');}
      else{const ki=mx(x,z)<=KI;for(let y=1;y<T;y++){if(ki&&y>31)break;clr(x,y,z);}}});
    const roundPlinth=(cx,cz,R,wide,skip)=>each((x,z)=>{const r=Math.hypot(x-cx,z-cz);if(r<=R||r>R+(wide?2:1)||skip(x,z))return;const f=toward(x,z,cx,cz);
      put(x,1,z,'polished_deepslate');
      if(r<=R+1){put(x,2,z,stone(x,2,z));put(x,3,z,'stone_brick_stairs',{f});}else put(x,2,z,'stone_brick_stairs',{f});});
    // cross loops and hooded lancets on a round wall, facing angle a
    const roundOpen=(cx,cz,R,a,y0,kind)=>{const ca=Math.cos(a),sa=Math.sin(a);
      each((x,z)=>{const dx=x-cx,dz=z-cz,r=Math.hypot(dx,dz);if(r>R+1||r<=R-2)return;
        const rr=dx*ca+dz*sa,tt=-dx*sa+dz*ca;if(rr<=0)return;const at=Math.abs(tt),f=toward(x,z,cx,cz);
        if(r>R){if(kind==='lancet'&&at<1.5){put(x,y0+4,z,'stone_brick_stairs',{f,up:true});if(at<.5)put(x,y0-1,z,'stone_brick_stairs',{f,up:true});}return;}
        const outer=r>R-1;
        for(let y=y0-1;y<=y0+5;y++){
          if(kind==='loop'){const slit=(at<.5&&y>=y0&&y<=y0+4)||(at<1.5&&y===y0+2);
            if(outer){if(slit)clr(x,y,z);else if(at<1.5||(at<2.5&&y>=y0+1&&y<=y0+3))put(x,y,z,'polished_andesite');}
            else if(at<1.5&&y>=y0&&y<=y0+4)clr(x,y,z);}
          else{const lite=at<.5&&y>=y0&&y<=y0+3;
            if(outer){if(lite)clr(x,y,z);else if(at<1.5&&y<=y0+4)put(x,y,z,at<.5&&y===y0+4?'chiseled_stone_bricks':'polished_andesite');}
            else if(lite)put(x,y,z,'glass_pane');}}});};
    // machicolated top: brackets on every other block, a corbel row, parapet, capped merlons, wall walk
    const roundTop=(cx,cz,R,T)=>each((x,z)=>{const r=Math.hypot(x-cx,z-cz);if(r>R+1)return;
      if(r<=R){put(x,T,z,r>R-2?'polished_andesite':'spruce_planks');return;}
      const f=toward(x,z,cx,cz),alt=((x+z)&1)===0;
      if(alt)put(x,T-2,z,'stone_brick_stairs',{f,up:true});
      put(x,T-1,z,'stone_brick_stairs',{f,up:true});
      for(let y=T;y<=T+2;y++)put(x,y,z,y===T+2?'polished_andesite':stone(x,y,z));
      if(alt){put(x,T+3,z,stone(x,T+3,z));put(x,T+4,z,'stone_brick_slab');}});
    // a cone of deepslate tiles: stairs where the next layer steps in, brick ribs
    const cone=(cx,cz,y0,r0,H,ribs)=>{let top=y0;
      for(let i=0;i<H;i++){const rc=r0*(1-i/H),rn=r0*(1-(i+1)/H),y=y0+i;top=y;
        if(rc<.75){put(cx,y,cz,'deepslate_tiles');continue;}
        each((x,z)=>{const dx=x-cx,dz=z-cz,r=Math.hypot(dx,dz);if(r>rc||r<=rc-1.3)return;
          let rib=false;if(ribs&&r>.9){const a=Math.atan2(dz,dx);for(const b of ribs){const d=Math.atan2(Math.sin(a-b),Math.cos(a-b));if(Math.abs(d*r)<.55)rib=true;}}
          if(r<=rn)put(x,y,z,rib?'deepslate_bricks':'deepslate_tiles');
          else put(x,y,z,rib?'deepslate_brick_stairs':'deepslate_tile_stairs',{f:toward(x,z,cx,cz)});});}
      return top;};
    const coneDormer=(cx,cz,a,yb,r0)=>{const ca=Math.cos(a),sa=Math.sin(a);
      for(let x=cx-8;x<=cx+8;x++)for(let z=cz-8;z<=cz+8;z++){const dx=x-cx,dz=z-cz,rr=dx*ca+dz*sa,tt=-dx*sa+dz*ca;
        if(rr<r0-2.6||rr>r0+.5||Math.abs(tt)>1.5)continue;const tk=Math.round(tt),front=rr>r0-.5;
        const s=tk<0?1:-1,side=axis(-sa*s,ca*s);
        for(let y=yb;y<=yb+1;y++){if(front)put(x,y,z,tk===0?'glass_pane':'stripped_dark_oak_log');else if(tk!==0)put(x,y,z,'dark_oak_planks');else clr(x,y,z);}
        if(tk!==0)put(x,yb+2,z,'deepslate_tile_stairs',{f:side});else put(x,yb+2,z,front?'dark_oak_planks':'deepslate_tiles');
        if(tk===0)put(x,yb+3,z,'deepslate_tile_slab');}};
    const finial=(cx,cz,y,sx)=>{put(cx,y,cz,'gold_block');for(let k=1;k<=4;k++)put(cx,y+k,cz,'dark_oak_fence');
      for(const [d,dy,id] of [[1,4,'red_wool'],[2,4,'yellow_wool'],[3,4,'red_wool'],[1,3,'yellow_wool'],[2,3,'red_wool'],[3,3,'yellow_wool']])put(cx+sx*d,y+dy,cz,id);
      put(cx,y+5,cz,'lightning_rod');};
    const ribs8=a0=>Array.from({length:8},(_,k)=>a0+Math.PI/8+k*Math.PI/4);

    /* ---------- facade pieces ---------- */
    // three-light window with stone mullions and a pointed head; blind = recessed stone tracery with no glass
    const greatWindow=(f,y0,blind)=>{
      for(let t=-2;t<=2;t++)for(let y=y0;y<=y0+9;y++){const a=Math.abs(t);
        if(!((y<=y0+7)||(y===y0+8&&a<=1)||(y===y0+9&&a===0)))continue;
        C(f,t,y,0);let id;
        if(blind)id=(a===1||y===y0+4||(y===y0+8&&t===0))?'polished_andesite':'deepslate_bricks';
        else if(y<=y0+7)id=a===1?'stone_brick_wall':(t===0&&y>=y0+2&&y<=y0+4?'red_stained_glass_pane':(t===0&&y===y0+5?'yellow_stained_glass_pane':'glass_pane'));
        else if(y===y0+8)id=t===0?'stone_brick_wall':'glass_pane';
        else id='yellow_stained_glass_pane';
        P(f,t,y,1,id);}
      for(let y=y0;y<=y0+7;y++){P(f,-3,y,0,'polished_andesite');P(f,3,y,0,'polished_andesite');}
      for(const [t,y,id] of [[-3,y0+8,'chiseled_stone_bricks'],[3,y0+8,'chiseled_stone_bricks'],[-2,y0+8,'polished_andesite'],[2,y0+8,'polished_andesite'],[-1,y0+9,'polished_andesite'],[1,y0+9,'polished_andesite'],[0,y0+10,'chiseled_stone_bricks']])P(f,t,y,0,id);
      for(const [t,y] of [[-3,y0+9],[3,y0+9],[-2,y0+9],[2,y0+9],[-1,y0+10],[1,y0+10],[0,y0+11]])PSs(f,t,y,-1,'stone_brick_stairs',true);
      for(let t=-3;t<=3;t++)PSs(f,t,y0-1,-1,'stone_brick_stairs',true);};
    const lancet=(f,t0,y0,h)=>{const y1=y0+h-1;
      for(let y=y0;y<=y1;y++){C(f,t0,y,0);P(f,t0,y,1,'glass_pane');P(f,t0-1,y,0,'polished_andesite');P(f,t0+1,y,0,'polished_andesite');}
      P(f,t0,y1+1,0,'chiseled_stone_bricks');
      for(let t=t0-1;t<=t0+1;t++)PSs(f,t,y1+2,-1,'stone_brick_stairs',true);
      PSs(f,t0,y0-1,-1,'stone_brick_stairs',true);};
    const loop=(f,t0,y0)=>{
      for(let y=y0-1;y<=y0+5;y++)for(let t=t0-1;t<=t0+1;t++)P(f,t,y,0,'polished_andesite');
      for(let y=y0+1;y<=y0+3;y++){P(f,t0-2,y,0,'polished_andesite');P(f,t0+2,y,0,'polished_andesite');}
      for(let y=y0;y<=y0+4;y++)C(f,t0,y,0);
      for(let t=t0-1;t<=t0+1;t++)C(f,t,y0+2,0);
      for(let y=y0;y<=y0+4;y++)for(let t=t0-1;t<=t0+1;t++)C(f,t,y,1);};   // splayed embrasure behind
    const rose=(f,cy)=>{
      for(let t=-4;t<=4;t++)for(let y=cy-4;y<=cy+4;y++){const dy=y-cy,g=Math.hypot(t,dy);if(g>3.8)continue;
        if(g>2.9){P(f,t,y,0,(Math.abs(t)+Math.abs(dy))%2?'polished_andesite':'chiseled_stone_bricks');continue;}
        if(g<.5){P(f,t,y,0,'chiseled_stone_bricks');continue;}
        const spoke=t===0||dy===0||Math.abs(t)===Math.abs(dy);
        C(f,t,y,0);
        P(f,t,y,1,spoke?'stone_brick_wall':((t>0)===(dy>0)?'red_stained_glass_pane':'yellow_stained_glass_pane'));
        if(g<1.6&&!spoke)P(f,t,y,1,'cyan_stained_glass_pane');}
      for(let t=-4;t<=4;t++)for(let y=cy;y<=cy+5;y++){const g=Math.hypot(t,y-cy);if(g>3.8&&g<=4.7)PSs(f,t,y,-1,'stone_brick_stairs',true);}};

    /* ===== Ground: hall floor, bailey paving, moat ===== */
    w.comp='ground';
    each((x,z)=>{const m=mx(x,z);
      if(m<=KI){let id=(x+z)&1?'polished_andesite':'stone_bricks';
        if(Math.abs(x)<=1&&z>=-7)id='red_wool';else if(Math.abs(x)===2&&z>=-7)id='polished_deepslate';
        put(x,0,z,id);return;}
      if(m<=KE){put(x,0,z,'polished_deepslate');return;}
      const pave=m<=17||nearTower(x,z,TR+3)||(x>=15&&x<=24&&Math.abs(z)<=7)||(Math.abs(x)<=16&&z>=14&&z<=22);
      if(pave&&z<=22){const r=RNG(x,0,z);put(x,0,z,r<.18?'mossy_cobblestone':r<.4?'gravel':'cobblestone');}});
    for(let x=-17;x<=17;x++){
      for(const z of [23,27])for(let y=-2;y<=0;y++)put(x,y,z,y===0?'stone_bricks':stone(x,y,z));
      for(let z=24;z<=26;z++){put(x,-3,z,'gravel');put(x,-2,z,'water');put(x,-1,z,'water');}}
    for(const x of [-18,18])for(let z=23;z<=27;z++)for(let y=-2;y<=0;y++)st(x,y,z);
    for(let x=-2;x<=2;x++)for(let z=28;z<=30;z++)put(x,0,z,'gravel');

    /* ===== Battered plinth ===== */
    w.comp='plinth';
    for(const f of FACES)for(let t=-12;t<=12;t++){if(f==='S'&&Math.abs(t)<=6)continue;
      for(const [d,h] of [[-1,2],[-2,1]]){const [x,z]=F[f].p(t,d);if(nearTower(x,z,TR+2.2))continue;
        for(let y=1;y<=h;y++)if(y===1)P(f,t,y,d,'polished_deepslate');else PW(f,t,y,d);
        PS(f,t,h+1,d,'stone_brick_stairs');}}
    for(const [cx,cz] of TOW)roundPlinth(cx,cz,TR,true,(x,z)=>mx(x,z)<=KE);

    /* ===== Keep walls, two thick, with string courses ===== */
    w.comp='keep-walls';
    each((x,z)=>{const m=mx(x,z);if(m!==KE&&m!==KE-1)return;const outer=m===KE;
      for(let y=1;y<=32;y++){let id;
        if(y===1)id='polished_deepslate';
        else if(y===32)id='polished_andesite';
        else if(outer)id=(y===15||y===25)?'polished_andesite':y===31?'polished_deepslate':stone(x,y,z);
        else id='stone_bricks';
        put(x,y,z,id);}});
    // drip moulds under the string courses
    for(const f of FACES)for(let t=-8;t<=8;t++)for(const y of [15,25]){const [x,z]=F[f].p(t,-1);if(nearTower(x,z,TR))continue;PS(f,t,y,-1,'stone_brick_stairs',true);}

    /* ===== Pilaster buttresses, stepped back at the first floor ===== */
    w.comp='buttresses';
    for(const f of FACES)for(const t of [-4,4]){
      for(let y=1;y<=12;y++)if(y===1)P(f,t,y,-2,'polished_deepslate');else PW(f,t,y,-2);
      PS(f,t,13,-2,'stone_brick_stairs');
      for(let y=1;y<=27;y++){if(y===1)P(f,t,y,-1,'polished_deepslate');else if(y===15||y===25)P(f,t,y,-1,'polished_andesite');else if(y>=18&&y<=20)P(f,t,y,-1,'chiseled_stone_bricks');else PW(f,t,y,-1);}
      PS(f,t,28,-1,'stone_brick_stairs');}

    /* ===== Openings ===== */
    w.comp='openings';
    greatWindow('E',5,false);greatWindow('N',5,true);
    for(const f of ['E','W'])for(const t of [-6,6]){if(f==='E'&&t===6)lancet(f,t,5,4);else lancet(f,t,5,6);}
    for(const t of [-6,6])loop('N',t,5);
    rose('N',20);rose('E',20);
    for(const f of ['N','E','W'])for(const t of [-6,6]){if(f==='E'&&t===6)continue;lancet(f,t,17,6);}
    for(const f of FACES)for(const t of [-6,0,6]){if(t===0&&f!=='E')continue;loop(f,t,26);}

    /* ===== Machicolations and battlements ===== */
    w.comp='machicolations';
    for(const f of FACES)for(let t=-12;t<=12;t++){const [x,z]=F[f].p(t,-1);if(nearTower(x,z,TR+.2))continue;
      const even=t%2===0;
      if(even)PS(f,t,29,-1,'stone_brick_stairs',true);
      PS(f,t,30,-1,'stone_brick_stairs',true);
      for(let y=31;y<=34;y++)if(y===34)P(f,t,y,-1,'polished_andesite');else PW(f,t,y,-1);
      if(even){PW(f,t,35,-1);P(f,t,36,-1,'stone_brick_slab');}}

    /* ===== Floors ===== */
    w.comp='floors';
    each((x,z)=>{if(mx(x,z)>KI)return;put(x,15,z,'dark_oak_planks');put(x,25,z,'spruce_planks');});
    for(const z of [-8,-4,0,4,8]){for(let x=-KI;x<=KI;x++)put(x,14,z,'stripped_dark_oak_log');
      put(KI,13,z,'stone_brick_stairs',{f:[1,0],up:true});put(-KI,13,z,'stone_brick_stairs',{f:[-1,0],up:true});}

    /* ===== Chimney stack on the west face ===== */
    w.comp='chimney';
    for(let t=-1;t<=1;t++)for(const d of [-1,-2]){
      for(let y=1;y<=41;y++){if(y===1)P('W',t,y,d,'polished_deepslate');else if(y===15||y===25||y===38)P('W',t,y,d,'polished_andesite');else if(y===40)P('W',t,y,d,'chiseled_stone_bricks');else PW('W',t,y,d);}
      P('W',t,42,d,t!==0&&d===-1?'brick_wall':'stone_brick_slab');}
    for(let t=-2;t<=2;t+=4){PS('W',t,3,-1,'stone_brick_stairs');}

    /* ===== Chapel oriel on the east face, south bay ===== */
    w.comp='oriel';
    {const O=6;
      P('E',O,11,-1,'stone_brick_wall');
      PS('E',O,12,-1,'stone_brick_stairs',true);
      for(let t=O-1;t<=O+1;t++){P('E',t,13,-1,t===O?'chiseled_stone_bricks':'stone_bricks');PS('E',t,13,-2,'stone_brick_stairs',true);}
      for(let t=O-1;t<=O+1;t++){P('E',t,14,-1,'stone_bricks');P('E',t,14,-2,'stone_bricks');PS('E',t,14,-3,'stone_brick_stairs',true);}
      for(let t=O-1;t<=O+1;t++)for(let d=-3;d<=-1;d++)P('E',t,15,d,'polished_andesite');
      const glass=['cyan_stained_glass_pane','yellow_stained_glass_pane','red_stained_glass_pane','yellow_stained_glass_pane'];
      for(let t=O-1;t<=O+1;t++)for(let d=-3;d<=-1;d++){if(t===O&&d>-3)continue;const post=t!==O&&d!==-2;
        for(let y=16;y<=21;y++){let id;
          if(y===16)id='polished_andesite';else if(y===21)id='chiseled_stone_bricks';
          else if(post)id='polished_andesite';
          else id=t===O?glass[y-17]:'yellow_stained_glass_pane';
          P('E',t,y,d,id);}}
      const g=F.E.g;
      for(let t=O-1;t<=O+1;t++)for(let d=-3;d<=-1;d++){
        if(d===-3)PS('E',t,22,d,'deepslate_tile_stairs');
        else if(t!==O)P('E',t,22,d,'deepslate_tile_stairs',{f:t<O?g:[-g[0],-g[1]]});
        else P('E',t,22,d,'deepslate_tiles');}
      PS('E',O,23,-2,'deepslate_tile_stairs');P('E',O,23,-1,'deepslate_tiles');P('E',O,24,-1,'lightning_rod');
      for(let y=16;y<=19;y++){C('E',O,y,0);C('E',O,y,1);}
      P('E',O,20,0,'chiseled_stone_bricks');}

    /* ===== Corner towers ===== */
    w.comp='towers';
    const angsOf=(cx,cz)=>{const sx=Math.sign(cx),sz=Math.sign(cz);return [Math.atan2(sz,sx),Math.atan2(0,sx),Math.atan2(sz,0)];};
    for(const [cx,cz] of TOW){
      roundShaft(cx,cz,TR,TT,[15,25,35]);
      // doors from the keep's wall walk
      each((x,z)=>{const r=Math.hypot(x-cx,z-cz);if(r>TR||r<=TR-2)return;const m=mx(x,z);
        if((m===12||m===13)&&Math.min(Math.abs(x),Math.abs(z))<=11){clr(x,33,z);clr(x,34,z);}});
      if(!(cx===13&&cz===-13))for(const y of [15,25,32])each((x,z)=>{if(Math.hypot(x-cx,z-cz)<=TR-2)put(x,y,z,'spruce_planks');});
      for(const a of angsOf(cx,cz)){roundOpen(cx,cz,TR,a,5,'loop');roundOpen(cx,cz,TR,a,17,'lancet');roundOpen(cx,cz,TR,a,27,'loop');roundOpen(cx,cz,TR,a,37,'lancet');}}

    /* ===== Spiral stair in the north-east tower ===== */
    w.comp='spiral';
    const SX=13,SZ=-13,binOf=(x,z)=>{let a=Math.atan2(z-SZ,x-SX);if(a<0)a+=2*Math.PI;return Math.floor(a/(2*Math.PI)*16)%16;};
    for(let y=1;y<TT;y++){put(SX,y,SZ,'stone_bricks');const bin=(y-1)%16;
      each((x,z)=>{const r=Math.hypot(x-SX,z-SZ);if(r<.6||r>TR-2)return;if(binOf(x,z)!==bin)return;
        const a=Math.atan2(z-SZ,x-SX);put(x,y,z,'stone_brick_stairs',{f:axis(-Math.sin(a),Math.cos(a))});});}

    /* ===== Tower tops ===== */
    w.comp='tower-tops';
    for(const [cx,cz] of TOW)roundTop(cx,cz,TR,TT);
    {const open=[(TT-2)%16,(TT-3)%16,(TT-4)%16];
      each((x,z)=>{const r=Math.hypot(x-SX,z-SZ);if(r<.6||r>TR-2)return;if(open.includes(binOf(x,z)))clr(x,TT,z);});}

    /* ===== Tower cones, dormers and flags ===== */
    w.comp='tower-roofs';
    for(const [cx,cz] of TOW){const angs=angsOf(cx,cz);
      const tip=cone(cx,cz,TT+1,TR-1,16,ribs8(angs[0]));
      for(const a of angs)coneDormer(cx,cz,a,TT+1,TR-1);
      finial(cx,cz,tip+1,Math.sign(cx));}

    /* ===== Gatehouse body and drum towers ===== */
    w.comp='gatehouse';
    each((x,z)=>{if(!inBody(x,z))return;for(let y=1;y<=25;y++){
      if(Math.abs(x)<=3&&z>=15&&z<=18&&((y>=8&&y<=14)||(y>=16&&y<=24)))continue;
      put(x,y,z,y===1?'polished_deepslate':(y===15||y===25)?'polished_andesite':stone(x,y,z));}});
    for(const [cx,cz] of DRUM){roundShaft(cx,cz,DR,DT,[8,15,22]);
      for(const y of [8,15,22])each((x,z)=>{if(Math.hypot(x-cx,z-cz)<=DR-2)put(x,y,z,'spruce_planks');});
      const sx=Math.sign(cx),front=Math.PI/2,side=sx>0?0:Math.PI,diag=Math.atan2(1,sx);
      for(const a of [front,side,diag])roundOpen(cx,cz,DR,a,3,'loop');
      for(const a of [side,diag])roundOpen(cx,cz,DR,a,10,'lancet');
      for(const a of [front,side,diag])roundOpen(cx,cz,DR,a,17,'loop');}
    w.comp='plinth';
    for(const [cx,cz] of DRUM)roundPlinth(cx,cz,DR,false,(x,z)=>inBody(x,z)||mx(x,z)<=KE+1||z>=23);

    /* ===== Gate: two orders, portcullis, doors, murder holes, bretèche, window ===== */
    w.comp='gate';
    for(let z=12;z<=21;z++)for(let x=-1;x<=1;x++){for(let y=1;y<=4;y++)clr(x,y,z);if(x===0)clr(0,5,z);put(x,0,z,'cobblestone');}
    for(let x=-2;x<=2;x++){const a=Math.abs(x);
      for(let y=1;y<=7;y++)if(y<=5||(y===6&&a<=1)||(y===7&&a===0))clr(x,y,21);
      for(let y=1;y<=6;y++)if((a<=1&&y<=5)||(a===0&&y===6))clr(x,y,20);}
    for(const x of [-3,3])for(let y=1;y<=5;y++)put(x,y,21,'polished_deepslate');
    for(const x of [-2,2])for(let y=1;y<=5;y++)put(x,y,20,'deepslate_bricks');
    for(const [x,y] of [[-1,6],[1,6],[0,7]])put(x,y,20,'deepslate_bricks');
    for(const [x,y,id] of [[-3,6,'polished_andesite'],[3,6,'polished_andesite'],[-2,6,'chiseled_stone_bricks'],[2,6,'chiseled_stone_bricks'],[-2,7,'polished_andesite'],[2,7,'polished_andesite'],
      [-1,7,'chiseled_stone_bricks'],[1,7,'chiseled_stone_bricks'],[-1,8,'polished_andesite'],[1,8,'polished_andesite'],[0,8,'gilded_blackstone'],[0,9,'chiseled_stone_bricks']])put(x,y,21,id);
    for(const [x,y] of [[-3,7],[3,7],[-2,8],[2,8],[-1,9],[1,9],[0,10]])put(x,y,22,'stone_brick_stairs',{f:[0,-1],up:true});
    for(let x=-1;x<=1;x++)for(let y=4;y<=5;y++)put(x,y,20,'iron_bars');put(0,6,20,'iron_bars');
    for(let x=-1;x<=1;x++){put(x,1,17,'dark_oak_door');put(x,2,17,'dark_oak_door');put(x,3,17,'dark_oak_planks');put(x,4,17,'dark_oak_planks');}put(0,5,17,'stripped_dark_oak_log');
    for(let x=-1;x<=1;x++){put(x,1,12,'dark_oak_door');put(x,2,12,'dark_oak_door');put(x,3,12,'dark_oak_planks');put(x,4,12,'dark_oak_planks');}put(0,5,12,'stripped_dark_oak_log');
    for(const z of [15,19])for(let y=6;y<=7;y++)clr(0,y,z);          // murder holes from the guardroom
    // doors from the gatehouse rooms into the keep's first and second floors
    for(const y of [16,26]){for(const z of [12,13]){clr(0,y,z);clr(0,y+1,z);}put(0,y,12,'dark_oak_door');put(0,y+1,12,'dark_oak_door');}
    // bretèche on corbels, with slots in its floor
    for(let x=-2;x<=2;x++){const even=x%2===0;
      if(even)put(x,11,22,'stone_brick_stairs',{f:[0,-1],up:true});
      st(x,12,22);if(even)put(x,12,23,'stone_brick_stairs',{f:[0,-1],up:true});
      for(let y=13;y<=16;y++){put(x,y,23,y===16?'polished_andesite':stone(x,y,23));if(Math.abs(x)===2)st(x,y,22);}
      st(x,17,23);put(x,17,22,'stone_brick_slab',{up:true});if(even)put(x,18,23,'stone_brick_slab');}
    clr(0,14,23);clr(0,15,23);
    for(let x=-1;x<=1;x++)for(let y=13;y<=14;y++)for(const z of [19,20,21])clr(x,y,z);
    // two-light window over the bretèche
    for(let y=19;y<=21;y++){for(let x=-1;x<=1;x++)clr(x,y,21);put(-1,y,20,'glass_pane');put(1,y,20,'glass_pane');put(0,y,20,'stone_brick_wall');put(-2,y,21,'polished_andesite');put(2,y,21,'polished_andesite');}
    clr(0,22,21);put(0,22,20,'cyan_stained_glass_pane');put(-1,22,21,'chiseled_stone_bricks');put(1,22,21,'chiseled_stone_bricks');put(0,23,21,'chiseled_stone_bricks');
    for(const [x,y] of [[-2,22],[2,22],[-1,23],[1,23],[0,24]])put(x,y,22,'stone_brick_stairs',{f:[0,-1],up:true});

    /* ===== Hoarding, drum tops and banners ===== */
    w.comp='gate-tops';
    for(const x of [-2,2])for(const z of [22,23])put(x,24,z,'stripped_dark_oak_log');
    for(let x=-2;x<=2;x++)for(const z of [22,23])put(x,25,z,'dark_oak_planks');
    for(let x=-2;x<=2;x++){put(x,26,23,'dark_oak_planks');put(x,27,23,x%2===0?'dark_oak_trapdoor':'dark_oak_planks',x%2===0?{f:[0,1]}:undefined);}
    for(const x of [-2,2])for(let y=26;y<=27;y++)put(x,y,22,'dark_oak_planks');
    for(let x=-2;x<=2;x++){put(x,28,23,'dark_oak_stairs',{f:[0,-1]});put(x,28,22,'dark_oak_planks');put(x,29,22,'dark_oak_stairs',{f:[0,-1]});}
    for(const [cx,cz] of DRUM){roundTop(cx,cz,DR,DT);const sx=Math.sign(cx);
      const tip=cone(cx,cz,DT+1,DR-1,10,ribs8(Math.PI/2));finial(cx,cz,tip+1,sx);
      put(cx,15,22,'dark_oak_fence');
      for(let y=9;y<=14;y++)put(cx,y,22,y===12||y===10?'yellow_wool':'red_wool');}

    /* ===== Drawbridge ===== */
    w.comp='drawbridge';
    for(let z=22;z<=28;z++)for(let x=-2;x<=2;x++)put(x,0,z,Math.abs(x)===2?'stripped_dark_oak_log':'dark_oak_planks');
    for(const x of [-2,2])for(let k=0;k<=6;k++)put(x,1+k,28-k,'chain');

    /* ===== Bartizan corbelled out over the north face ===== */
    w.comp='bartizan';
    {const BX=0,BZ=-15,BR=2.5,bIn=(x,z,r)=>Math.hypot(x-BX,z-BZ)<=r;
      for(let x=-2;x<=2;x++){
        if(Math.abs(x)<=1)put(x,25,-14,'stone_brick_stairs',{f:[0,1],up:true});
        st(x,26,-14);if(bIn(x,-15,BR))put(x,26,-15,'stone_brick_stairs',{f:[0,1],up:true});
        st(x,27,-14);if(bIn(x,-15,BR))st(x,27,-15);if(bIn(x,-16,BR))put(x,27,-16,'stone_brick_stairs',{f:[0,1],up:true});
        for(const z of [-14,-15,-16])if(bIn(x,z,BR))put(x,28,z,'polished_andesite');
        if(bIn(x,-17,BR))put(x,28,-17,'stone_brick_stairs',{f:[0,1],up:true});}
      each((x,z)=>{if(z>-14||!bIn(x,z,BR))return;const r=Math.hypot(x-BX,z-BZ);
        for(let y=29;y<=41;y++){
          if(r>1.3)put(x,y,z,y===32||y===41?'polished_andesite':y===37?'chiseled_stone_bricks':stone(x,y,z));
          else if(y<=31)put(x,y,z,'stone_bricks');else if(y===32)put(x,y,z,'spruce_planks');else clr(x,y,z);}});
      for(let y=34;y<=37;y++){clr(0,y,-17);clr(-2,y,-15);clr(2,y,-15);}
      each((x,z)=>{const r=Math.hypot(x-BX,z-BZ);if(r>BR&&r<=BR+.9)put(x,41,z,'stone_brick_stairs',{f:toward(x,z,BX,BZ),up:true});});
      put(0,36,-15,'lantern');
      const tip=cone(BX,BZ,42,3.1,8,ribs8(-Math.PI/2));finial(BX,BZ,tip+1,1);}

    /* ===== Hall roof, gables, dormers, louvre ===== */
    w.comp='roof';
    each((x,z)=>{if(mx(x,z)===KI&&!nearTower(x,z,TR))put(x,32,z,'stripped_dark_oak_log');});
    for(let i=0;i<=10;i++){const y=33+i;for(let x=-10;x<=10;x++)for(const s of [1,-1]){const z=s*(11-i);if(nearTower(x,z,TR))continue;put(x,y,z,'deepslate_tile_stairs',{f:[0,-s]});}}
    for(let x=-10;x<=10;x++){put(x,44,0,'deepslate_tiles');put(x,45,0,'deepslate_tile_slab');}
    for(const x of [-KI,KI])for(let z=-KI;z<=KI;z++){if(nearTower(x,z,TR))continue;const top=33+(KI-Math.abs(z));
      for(let y=33;y<top;y++)st(x,y,z);
      if(z===0){put(x,top,z,'chiseled_stone_bricks');put(x,top+1,z,'chiseled_stone_bricks');put(x,top+2,z,'lightning_rod');}
      else put(x,top,z,'stone_brick_stairs',{f:[0,z>0?-1:1]});}
    for(const x of [-KI,KI]){for(let y=35;y<=39;y++){put(x,y,0,'glass_pane');put(x,y,-1,'polished_andesite');put(x,y,1,'polished_andesite');}put(x,40,0,'chiseled_stone_bricks');}
    for(const s of [1,-1])for(const xc of [-5,5]){
      for(let k=4;k<=7;k++){const z=s*k;for(let y=37;y<=38;y++){
        if(k===7){put(xc-1,y,z,'stripped_dark_oak_log');put(xc+1,y,z,'stripped_dark_oak_log');put(xc,y,z,'glass_pane');}
        else{put(xc-1,y,z,'dark_oak_planks');put(xc+1,y,z,'dark_oak_planks');clr(xc,y,z);}}}
      for(let k=4;k<=8;k++){const z=s*k;put(xc-1,39,z,'deepslate_tile_stairs',{f:[1,0]});put(xc+1,39,z,'deepslate_tile_stairs',{f:[-1,0]});
        put(xc,39,z,k>=7?'dark_oak_planks':'deepslate_tiles');put(xc,40,z,'deepslate_tile_slab');}}
    for(const x of [-1,1])for(let y=45;y<=46;y++)put(x,y,0,'dark_oak_fence');
    put(0,45,0,'iron_bars');put(0,46,0,'iron_bars');
    for(let x=-1;x<=1;x++){put(x,47,0,'deepslate_tile_slab');put(x,47,-1,'deepslate_tile_stairs',{f:[0,1]});put(x,47,1,'deepslate_tile_stairs',{f:[0,-1]});}
    put(0,48,0,'lightning_rod');

    /* ===== Great hall ===== */
    w.comp='hall';
    const COLZ=[-8,-4,0,4,8];
    for(const cx of [-5,5]){
      for(const z of COLZ){put(cx,1,z,'polished_deepslate');for(let y=2;y<=9;y++)put(cx,y,z,'polished_basalt');put(cx,10,z,'chiseled_stone_bricks');for(let y=11;y<=14;y++)put(cx,y,z,'stone_bricks');}
      for(let z=-KI;z<=KI;z++){if(COLZ.includes(z))continue;
        const n=Math.min(...COLZ.map(c=>Math.abs(z-c)),Math.abs(z-12),Math.abs(z+12));
        for(let y=n===2?13:11;y<=14;y++)put(cx,y,z,y===14?'polished_andesite':'stone_bricks');}}
    // hearth on the west wall under a stepped hood
    for(let z=-1;z<=1;z++){for(let y=1;y<=3;y++)clr(-12,y,z);put(-13,1,z,'bricks');put(-13,2,z,'bricks');put(-13,3,z,'bricks');put(-12,0,z,'bricks');put(-11,0,z,'bricks');}
    put(-12,1,0,'campfire');put(-11,1,-1,'iron_bars');put(-11,1,1,'iron_bars');
    for(const z of [-2,2])for(let y=1;y<=3;y++)put(-11,y,z,'polished_deepslate');
    for(let z=-2;z<=2;z++){put(-11,4,z,'stone_brick_stairs',{f:[-1,0],up:true});put(-11,5,z,'polished_andesite');}
    for(let y=6;y<=9;y++)for(let z=-1;z<=1;z++)put(-11,y,z,y===7?'chiseled_stone_bricks':'stone_bricks');
    for(const z of [-2,2])put(-11,6,z,'stone_brick_stairs',{f:[0,-Math.sign(z)]});
    for(const z of [-1,1])put(-11,10,z,'stone_brick_stairs',{f:[0,-z]});
    for(let y=10;y<=13;y++)put(-11,y,0,'stone_bricks');
    // dais, throne and canopy
    w.role='furnish';
    for(let x=-4;x<=4;x++){for(let z=-11;z<=-8;z++)put(x,1,z,'polished_deepslate');put(x,1,-7,'stone_brick_stairs',{f:[0,-1]});}
    for(let z=-9;z<=-8;z++)put(0,2,z,'red_carpet');
    put(0,2,-10,'polished_blackstone_stairs',{f:[0,-1]});
    put(0,2,-11,'gold_block');put(0,3,-11,'gold_block');put(0,4,-11,'chiseled_polished_blackstone');put(0,5,-11,'gold_block');
    for(const x of [-1,1]){put(x,2,-10,'polished_blackstone_brick_wall');put(x,2,-11,'polished_blackstone');put(x,3,-11,'polished_blackstone_stairs',{f:[0,-1]});}
    for(const x of [-2,2])for(let y=2;y<=6;y++)put(x,y,-8,'dark_oak_fence');
    for(let x=-2;x<=2;x++)for(let z=-11;z<=-8;z++)put(x,7,z,'red_wool');
    for(let x=-2;x<=2;x++){put(x,7,-8,x%2===0?'yellow_wool':'red_wool');put(x,8,-8,'dark_oak_stairs',{f:[0,-1]});}
    for(let x=-1;x<=1;x++)put(x,6,-8,x===0?'yellow_wool':'red_wool');
    put(0,8,-9,'gold_block');put(0,9,-9,'lightning_rod');
    for(const x of [-4,-3,3,4])for(let y=2;y<=10;y++)put(x,y,-11,y===6||y===9?'yellow_wool':'red_wool');
    for(const x of [-4,4]){put(x,2,-7,'dark_oak_fence');put(x,3,-7,'lantern');}
    // long tables with benches
    for(const tx of [-8,8]){for(let z=-6;z<=6;z++){put(tx,1,z,'dark_oak_slab',{up:true});put(tx-1,1,z,'spruce_stairs',{f:[-1,0]});put(tx+1,1,z,'spruce_stairs',{f:[1,0]});}
      for(const z of [-4,0,4])put(tx,2,z,'lantern');put(tx,1,-7,'barrel');put(tx,1,7,'barrel');}
    // chandeliers from the beams, sconces on the columns and walls
    for(const z of [-4,0,4]){put(0,13,z,'chain');put(0,12,z,'chain');put(0,11,z,'dark_oak_planks');
      for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){put(dx,11,z+dz,'dark_oak_fence');put(dx,10,z+dz,'lantern');}}
    for(const cx of [-5,5])for(const z of COLZ){const ix=-Math.sign(cx);put(cx+ix,8,z,'dark_oak_fence');put(cx+ix,7,z,'lantern');}
    for(const x of [-KI,KI])for(const z of [-6,6]){put(x,8,z,'dark_oak_fence');put(x,7,z,'lantern');}
    w.role=null;

    /* ===== Upper floors ===== */
    w.comp='upper';
    for(let z=-KI;z<=9;z++){for(let y=16;y<=24;y++)put(0,y,z,y===16?'polished_andesite':'stone_bricks');
      for(let y=26;y<=31;y++)put(0,y,z,z%4===0?'stripped_dark_oak_log':'dark_oak_planks');put(0,32,z,'stripped_dark_oak_log');}
    for(const y of [16,26]){clr(0,y,0);clr(0,y+1,0);put(0,y,0,'dark_oak_door');put(0,y+1,0,'dark_oak_door');}
    put(0,18,0,'chiseled_stone_bricks');
    w.role='furnish';
    // armoury
    for(const z of [-8,-6,-4,4,6,8])furn(-10,16,z,'armor_stand');
    [['barrel',-9],['barrel',-8],['smithing_table',-6],['anvil',-5],['grindstone',-4],['blast_furnace',-3]].forEach(([id,x])=>furn(x,16,-11,id));
    furn(-9,17,-11,'barrel');
    for(let x=-9;x<=-7;x++)furn(x,16,10,'chest');
    for(const z of [3,5])furn(-4,16,z,'hay_block');furn(-4,17,4,'hay_block');
    for(const z of [-6,0,6]){put(-6,24,z,'chain');put(-6,23,z,'lantern');}
    // chapel
    for(let z=-1;z<=1;z++){furn(11,16,z,'chiseled_quartz');furn(10,16,z,'smooth_quartz_slab');}
    furn(11,17,0,'gold_block');furn(11,18,0,'gold_block');furn(11,17,-1,'lantern');furn(11,17,1,'lantern');
    for(const x of [3,5,7])for(let z=-8;z<=8;z++){if(Math.abs(z)<=1)continue;furn(x,16,z,'dark_oak_stairs',{f:[-1,0]});}
    put(14,16,6,'red_carpet');put(15,16,6,'chiseled_quartz');put(15,17,6,'lantern');
    furn(9,16,7,'lectern');
    for(const z of [-5,5]){put(6,24,z,'chain');put(6,23,z,'lantern');}
    // solar
    for(let x=3;x<=8;x++)for(let z=-6;z<=3;z++)furn(x,26,z,'red_carpet');
    for(const x of [5,6])for(const z of [-10,-9])furn(x,26,z,'red_bed');
    furn(3,26,-11,'chest');furn(4,26,-11,'chest');
    for(let z=-8;z<=-3;z++){furn(1,26,z,'bookshelf');furn(1,27,z,'bookshelf');}
    furn(6,26,-2,'dark_oak_fence');furn(6,27,-2,'oak_pressure_plate');furn(5,26,-2,'spruce_stairs',{f:[-1,0]});furn(7,27,-2,'flower_pot');furn(7,26,-2,'dark_oak_fence');
    furn(8,26,-4,'lectern');furn(3,26,5,'barrel');furn(3,27,5,'lantern');furn(9,26,6,'chest');
    // dormitory
    for(const z of [-7,-4,-1,2,5]){furn(-10,26,z,'red_bed');furn(-10,26,z+1,'red_bed');furn(-9,26,z,'chest');}
    for(let x=-4;x<=-2;x++)furn(x,26,-11,'barrel');furn(-3,27,-11,'lantern');
    // tower rooms
    for(const [cx,cz] of TOW){if(cx===13&&cz===-13)continue;const sx=Math.sign(cx),sz=Math.sign(cz);
      put(cx+2*sx,16,cz,'barrel');put(cx+2*sx,17,cz,'barrel');put(cx,16,cz+2*sz,'barrel');put(cx+sx,16,cz+2*sz,'chest');
      put(cx+2*sx,26,cz,'red_bed');put(cx+2*sx,26,cz+sz,'red_bed');put(cx,26,cz+2*sz,'chest');put(cx,33,cz,'lantern');}
    w.role=null;

    /* ===== Outside: well and lamp posts ===== */
    w.comp='outside';
    for(let x=19;x<=21;x++)for(let z=-1;z<=1;z++){if(x===20&&z===0){put(20,0,0,'water');put(20,-1,0,'water');continue;}
      put(x,0,z,'cobblestone');put(x,1,z,RNG(x,1,z)<.4?'mossy_cobblestone':'cobblestone');}
    for(const x of [19,21])for(let y=2;y<=3;y++)put(x,y,0,'dark_oak_fence');
    for(let x=19;x<=21;x++){put(x,4,0,'stripped_dark_oak_log');put(x,4,-1,'dark_oak_stairs',{f:[0,1]});put(x,4,1,'dark_oak_stairs',{f:[0,-1]});put(x,5,0,'dark_oak_slab');}
    put(20,3,0,'chain');put(20,2,0,'chain');
    w.role='furnish';
    put(22,1,2,'barrel');put(22,1,3,'barrel');put(22,2,2,'barrel');put(18,1,4,'hay_block');put(19,1,4,'hay_block');put(18,2,4,'hay_block');put(22,1,-3,'composter');
    w.role=null;
    for(const [x,z] of [[-4,29],[4,29],[-10,21],[10,21],[18,-6],[18,6],[-18,-6],[-18,6],[-6,-18],[6,-18]]){
      put(x,0,z,'polished_deepslate');put(x,1,z,'cobblestone_wall');put(x,2,z,'cobblestone_wall');put(x,3,z,'dark_oak_fence');put(x,4,z,'lantern');}
  }
});
