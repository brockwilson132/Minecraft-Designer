/* Wizard's Tower — a weathered stone tower on a buttressed plinth: an arched portal, lancet storeys, a ring balcony,
   a rose-window storey, an observatory with a telescope, a corbelled study with tracery windows, and a ribbed,
   crooked purpur hat with dormers and a star finial. Three turrets with their own hats; one is linked by a bridge.
   x 0, z 0 is the middle of the tower; the portal faces south. */
BK.register({
  id:'wizard-tower',
  version:3,
  name:"Wizard's Tower",
  blurb:'A weathered stone tower on a buttressed plinth: arched portal, purple lancets, a ring balcony, four rose windows, an observatory with a brass telescope, a corbelled study, and a ribbed, crooked purpur hat with a star finial.',
  tags:['Fantasy','Tower','Landmark','Large'],
  edition:'Bedrock',
  extent:34,
  start:{x:0,y:1,z:12},
  ring:9.5,
  figure:{x:2,z:15},
  blocks:{
    magenta_stained_glass_pane:{n:'Magenta Stained Glass Pane',c:'#b54fb5',glass:.72},
    amethyst_cluster:{n:'Amethyst Cluster',c:'#c39cf5',sh:'rod',emit:1},
    purpur_pillar:{n:'Purpur Pillar',c:'#b38bb3'},
    deepslate_brick_slab:{n:'Deepslate Brick Slab',c:'#55555b',sh:'slab'},
    deepslate_brick_wall:{n:'Deepslate Brick Wall',c:'#4e4e54',sh:'wall'},
    purple_bed:{n:'Purple Bed',c:'#7b2fa8',sh:'slab'},
    smooth_basalt:{n:'Smooth Basalt',c:'#48484e'}
  },
  steps:[
    ['Grounds','grounds','Grounds, path & star-chart floor'],
    ['Grounds','astral-ring','Astral ring compass'],
    ['Plinth','plinth','Plinth & blind arcade'],
    ['Plinth','portal','South portal'],
    ['Plinth','plinth-top','Cornice, parapet & terrace'],
    ['Shaft','shaft-low','Lower shaft'],
    ['Shaft','lancets','Lancet windows'],
    ['Shaft','courses','String courses & sills'],
    ['Shaft','buttresses','Buttresses, flyers & pinnacles'],
    ['Turrets','turrets','Turrets & bridge'],
    ['Turrets','turret-hats','Turret hats & belfry bell'],
    ['Rose storey','balcony','Ring balcony'],
    ['Rose storey','rose-walls','Rose storey walls & piers'],
    ['Rose storey','rose-windows','Rose windows & hoods'],
    ['Observatory','observatory','Observatory arcade & telescope'],
    ['Study','corbels','Corbel courses'],
    ['Study','study-walls','Study walls & pilasters'],
    ['Study','study-windows','Tracery windows'],
    ['Hat','hat','Ribbed purpur hat'],
    ['Hat','dormers','Dormers'],
    ['Hat','finial','Star finial'],
    ['Inside','spiral','Newel stair & floors'],
    ['Inside','rooms-low','Hall, library & alchemy lab'],
    ['Inside','rooms-high','Crystal hall, armillary & study']
  ],
  tiers:[
    {a:0,b:0,name:'Grounds',short:'Star-chart floor, amethyst outcrops',p:'Inside, the floor of the entrance hall is a star chart: a deepslate tile sky scattered with glowstone and froglight stars, a constellation drawn in calcite, a blackstone ring with gold hour marks, and a zodiac band of twelve alternating purpur and amethyst signs. Outside, a weathered cobble and gravel apron rings the plinth. A paved path runs south between two pairs of soul lanterns on blackstone posts and two flower beds, and four amethyst geodes break the ground, each a calcite rim round a heap of amethyst crowned with glowing clusters.',m:['deepslate_tiles','glowstone','ochre_froglight','calcite','polished_blackstone_bricks','gold_block','purpur_block','amethyst_block','cobblestone','gravel','polished_andesite','amethyst_cluster']},
    {a:0,b:17,name:'Plinth & portal',short:'Blind arcade, eight buttresses, three-order portal',p:'A plinth 19 blocks across, set on a sloped deepslate skirt. Each bay is a blind arch: a deepslate archivolt round a recess with an iron-barred slit, and a soul lantern glowing in the wall behind the bars. The south portal stands out from the plinth as a gabled frontispiece three orders deep: a deepslate archivolt with an amethyst keystone, a polished deepslate inner order, then a narrow arch to three dark oak doors under a purple fanlight. A soul lantern hangs in the porch and a magenta oculus sits in the gable. Eight stepped buttresses with carved tuff panels and blackstone pinnacles stand round the plinth, and flying buttresses spring from them to the shaft. A stair cornice, a blackstone parapet and a stone terrace finish the top.',m:['polished_deepslate','deepslate_bricks','stone_bricks','mossy_stone_bricks','iron_bars','soul_lantern','dark_oak_door','amethyst_block','chiseled_tuff_bricks','polished_blackstone_brick_wall','stone_brick_stairs']},
    {a:10,b:35,name:'Lower shaft',short:'Winding purple lancets, corbelled courses',p:'Weathered stone bricks, mossier near the ground, two blocks thick. Tall lancets with dark oak mullions and transoms are set back a block in deepslate frames with carved keystones, purple glass below and magenta in the points. The lower lancets face the four compass points and the upper ones the four diagonals, so the windows wind round the tower. Each sits on a deepslate sill. A corbelled string course divides the two levels, and a second course carries the balcony brackets. Inside are the library and the alchemy lab.',m:['stone_bricks','mossy_stone_bricks','cracked_stone_bricks','deepslate_bricks','polished_deepslate','purple_stained_glass_pane','magenta_stained_glass_pane','stripped_dark_oak_log','chiseled_stone_bricks','deepslate_brick_slab']},
    {a:1,b:62,name:'Turrets',short:'Belfry turret, bridge turret, garden turret',p:'Three round turrets cling to the tower, each with deepslate bands, purple slit windows, a corbelled cornice and its own ribbed purpur hat. The tall north-east turret has an open belfry with a bell hung on a chain. The west turret is joined to the tower by a stone bridge on a pointed arch, with a door at each end. The small south-east turret stands in the garden.',m:['stone_bricks','polished_deepslate','purple_stained_glass_pane','stone_brick_stairs','purpur_block','purpur_stairs','polished_blackstone','bell','chain','dark_oak_door']},
    {a:36,b:54,name:'Rose storey',short:'Ring balcony, four rose windows',p:'A dark oak ring balcony on two rows of brackets circles the tower, with a fence rail and lanterns on its posts. Doors open onto it on the north, east and south. Above, four rose windows face the compass points, each built block by block: an amethyst boss in a gilded blackstone hub, eight petals of purple and clear glass between blackstone spokes, a ring of magenta lights split by carved stone cusps, and a blackstone frame. A deepslate hood and carved surround ring each rose. Deepslate piers stand on the balcony between them. Inside is the crystal hall.',m:['dark_oak_slab','dark_oak_planks','dark_oak_fence','dark_oak_stairs','lantern','amethyst_block','stripped_dark_oak_log','purple_stained_glass_pane','magenta_stained_glass_pane','glass_pane','chiseled_stone_bricks','polished_blackstone_bricks','deepslate_brick_stairs']},
    {a:55,b:63,name:'Observatory',short:'Eight arches, brass telescope',p:'An arcade of eight round arches on polished basalt columns, glazed with clear glass. A copper telescope with gold collars and a glass lens points east through one arch and rests on a blackstone strut on the ledge. Inside, an armillary ring of copper and a tilted dark oak ecliptic hang on chains round the stair.',m:['polished_basalt','deepslate_bricks','glass_pane','chiseled_stone_bricks','oxidized_cut_copper','gold_block','glass','polished_blackstone_brick_wall','dark_oak_planks','chain','lantern']},
    {a:64,b:79,name:'Study',short:'Corbelled out, tall tracery windows',p:'Three courses of deepslate corbels step the study out to 21 blocks across. Eight tall pointed windows with dark oak mullions, a transom and magenta heads sit in deepslate frames under amethyst keystones. Each has a hood of deepslate stairs and a dark oak sill on brackets. Projecting deepslate pilasters with carved blackstone panels stand between them, and a ring of dark oak brackets carries the eave. Inside: an enchanting table ringed by 30 bookshelves, a desk, a bed and a soul-lantern chandelier.',m:['deepslate_brick_stairs','deepslate_bricks','polished_deepslate','polished_blackstone_bricks','stripped_dark_oak_log','purple_stained_glass_pane','magenta_stained_glass_pane','amethyst_block','dark_oak_slab','dark_oak_stairs','chiseled_tuff_bricks']},
    {a:80,b:112,name:'Hat',short:'Ribbed, leaning, star-tipped',p:'A purpur hat 25 blocks across at the eave. It flares at the brim and leans east as it rises, with a slight twist north at the top. Every exposed edge is a purpur stair, so the surface reads as shingles, crossed by purpur pillar bands. Eight polished blackstone ribs stand a block proud. Four gabled dormers with dark oak frames and purple glass sit on the brim. The tip carries a blackstone spike and a gold star with end rod points.',m:['purpur_block','purpur_stairs','purpur_pillar','polished_blackstone','stripped_dark_oak_log','deepslate_bricks','purple_stained_glass_pane','gold_block','end_rod']}
  ],
  notes:[
    ['Astral ring','Where the path ends, a compass laid as a piece of sky, 13 blocks across: a long four-point lodestar in calcite and smooth basalt (north in amethyst and purpur), short purpur pillar rays between, on deepslate tiles scattered with froglight stars. A zodiac ring of polished blackstone carries twelve signs, gold on the four quarters and purpur between. Eight standing stones surround it: tall deepslate ones on the quarters crowned with amethyst, a pair of gold-crowned gate stones with end rods either side of the path at north, and pale calcite stones with soul lanterns between. An amethyst crystal stands at the heart.'],
    ['Build order','Raise the newel and the spiral stair as you build each storey, so you always have a way up. Build the corbel courses before the study walls: the study stands on them.'],
    ['The hat','Each layer of the hat is centred a little further east than the one below. Use the top view one layer at a time; the stairs always face the centre of their own layer.'],
    ['Rose windows','Each rose is planned on the block grid, so every spoke and cusp lands on a whole block. Use the side view through the window centre.'],
    ['Enchanting','The enchanting table in the study is two blocks from a ring of 30 bookshelves, with a one-block gap to walk in, which gives full level 30 enchantments.'],
    ['Survival','Roughly 9 stacks of stone bricks, 4 of deepslate bricks, 5 of purpur blocks and stairs, plus amethyst from a geode and a few stacks of dark oak. Purpur comes from the End, so it is an endgame build.']
  ],
  build(w){
    const {V,K,put,clr,get,ins,rim,each,depthMap,bay,inward,outward,S,spotsAt,pillarAng,bayAng,RNG}=w;
    const RP=9.5,RS=7.5,RT=10.5;
    const DP=depthMap(RP),DS=depthMap(RS),DT=depthMap(RT);
    const stone=(x,y,z)=>{const r=RNG(x,y,z),m=.22*Math.max(0,1-y/70);return r<m?'mossy_stone_bricks':r<m+.1?'cracked_stone_bricks':'stone_bricks';};
    const local=(x,z,a)=>[x*Math.cos(a)+z*Math.sin(a),-x*Math.sin(a)+z*Math.cos(a)];
    const toward=(x,z,cx,cz)=>{const dx=cx-x,dz=cz-z;return Math.abs(dx)>=Math.abs(dz)?[Math.sign(dx)||1,0]:[0,Math.sign(dz)||1];};
    const inArch=(u,y,R,cy)=>(y<=cy&&Math.abs(u)<R)||(y>cy&&u*u+(y-cy)*(y-cy)<R*R);
    const angBin=(x,z,n)=>{let a=Math.atan2(z,x);if(a<0)a+=2*Math.PI;return Math.floor(a/(2*Math.PI)*n)%n;};
    const TUR=[{cx:7,cz:-7,R:3.1,top:50,H:12,lx:1},{cx:-12,cz:0,R:2.6,top:34,H:11,lx:-1},{cx:8,cz:8,R:2.2,top:22,H:9,lx:1}];
    const nearTurret=(x,z,pad)=>TUR.some(t=>ins(x-t.cx,z-t.cz,t.R+pad));
    const portalZone=(x,z)=>Math.abs(x)<=3&&z>=6;
    const FL=[9,22,36,54,66];
    const stepBin=y=>(y-1)%16;

    /* a ribbed, curving hat: each layer a ring centred a little further along the lean */
    function hat(cx,cz,y0,R0,H,lx,lz,ribs,ribA0,fin,comp,ex){
      const c=i=>{const t=i/H;return [cx+Math.round(lx*Math.pow(t,2.2)),cz+Math.round(lz*Math.pow(t,3)),R0*Math.pow(1-t,ex||1.3)];};
      let prev=[cx,cz],top=null;
      for(let i=0;i<H;i++){const [ox,oz,r]=c(i),[nx,nz,nr]=c(i+1),y=y0+i;w.comp=comp;
        if(r<.8){put(ox,y,oz,'purpur_block');if(ox!==prev[0]||oz!==prev[1])put(prev[0],y,prev[1],'purpur_block');prev=[ox,oz];top=[ox,y,oz];continue;}
        prev=[ox,oz];top=[ox,y,oz];
        each((x,z)=>{const dx=x-ox,dz=z-oz;if(!ins(dx,dz,r))return;
          if(ins(dx,dz,r-1.25)){if(i===0)put(x,y,z,'dark_oak_planks');return;}
          if(ins(x-nx,z-nz,nr))put(x,y,z,i%7===4?'purpur_pillar':'purpur_block');
          else put(x,y,z,'purpur_stairs',{f:toward(x,z,ox,oz)});});
        if(ribs&&r>1.4&&i<H*.8)for(let k=0;k<ribs;k++){const a=ribA0+k*2*Math.PI/ribs;
          const rx=ox+Math.round((r-.5)*Math.cos(a)),rz=oz+Math.round((r-.5)*Math.sin(a));const g=get(rx,y,rz);
          if(g){if(g.id==='purpur_stairs')put(rx,y,rz,'polished_blackstone_stairs',{f:g.f});else put(rx,y,rz,'polished_blackstone');}
          if(fin&&i>0){const fx=ox+Math.round((r+.45)*Math.cos(a)),fz=oz+Math.round((r+.45)*Math.sin(a));if(!get(fx,y,fz))put(fx,y,fz,'polished_blackstone');}}
      }
      return top;
    }

    /* ===== Grounds y0: star-chart floor inside, apron, path, beds and amethyst geodes outside ===== */
    w.comp='grounds';
    const CONST=[[-3,-2],[-2,-3],[0,-4],[2,-3],[3,-1],[3,2],[1,3]];
    const constLine=new Set();
    for(let i=0;i<CONST.length-1;i++){const [a0,b0]=CONST[i],[a1,b1]=CONST[i+1];for(let s=0;s<=20;s++){const t=s/20;constLine.add(Math.round(a0+(a1-a0)*t)+','+Math.round(b0+(b1-b0)*t));}}
    const constStar=new Set(CONST.map(p=>p+''));
    each((x,z)=>{const r=Math.hypot(x,z);
      if(ins(x,z,RP)){
        if(DS(x,z)>=2){const deg=(Math.atan2(z,x)*180/Math.PI+450)%360;let f;
          if(r>5.4)f=Math.floor(deg/30)%2?'amethyst_block':'purpur_block';
          else if(r>4.5)f=(deg%30<5||deg%30>25)?'gold_block':'polished_blackstone_bricks';
          else if(constStar.has(x+','+z))f='glowstone';
          else if(constLine.has(x+','+z))f='calcite';
          else{const q=RNG(x,0,z);f=q<.07?'glowstone':q<.12?'ochre_froglight':'deepslate_tiles';}
          put(x,0,z,f);}
        else put(x,0,z,'polished_deepslate');}
      else if(r<=12.6){const q=RNG(x,0,z);put(x,0,z,q<.22?'mossy_cobblestone':q<.45?'gravel':'cobblestone');}
    });
    for(let z=11;z<=18;z++)for(let x=-3;x<=3;x++){const a=Math.abs(x);
      put(x,0,z,a===0?(z%3===0?'chiseled_stone_bricks':'polished_andesite'):a<=2?'stone_bricks':'mossy_cobblestone');}
    for(let x=-3;x<=3;x++)put(x,0,11,'stone_brick_stairs',{f:[0,-1]});
    for(const x of [-3,3])for(const z of [13,17]){for(let y=1;y<=3;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,4,z,'soul_lantern');}
    for(const s of [-1,1])for(let x=5;x<=7;x++)for(let z=13;z<=17;z++){const ex=x===5||x===7||z===13||z===17;
      put(s*x,0,z,ex?'mossy_cobblestone':'grass_block');if(!ex&&RNG(s*x,1,z)<.6)put(s*x,1,z,'flower_pot');}
    for(const [gx,gz,hh] of [[13,3,2],[-10,11,1],[-5,-14,2],[14,-11,1]]){
      each((x,z)=>{const d=Math.hypot(x-gx,z-gz);if(d>2.6)return;
        if(d>1.6){put(x,0,z,'calcite');return;}
        put(x,0,z,'smooth_basalt');const h=d<.5?hh:(RNG(x,1,z)<.5?1:0);
        for(let y=1;y<=h;y++)put(x,y,z,'amethyst_block');
        if(RNG(x,9,z)<.75)put(x,h+1,z,'amethyst_cluster');});}

    /* ===== Plinth y1–9: solid ring with a blind arcade; soul lanterns glow behind barred slits ===== */
    each((x,z)=>{if(!ins(x,z,RP)||DS(x,z)>=2)return;const d=DP(x,z),{u,h,k}=bay(x,z,8),a=Math.abs(u);
      for(let y=1;y<=8;y++){let id=stone(x,y,z);w.comp='plinth';
        if(y===1)id='polished_deepslate';
        else if(d===0){
          if(k!==6&&inArch(u,y,2.1,5)&&y>=2)id=null;
          else if(k!==6&&inArch(u,y,3.0,5)&&y>=2)id=(a<.6&&y===8)?'chiseled_stone_bricks':'deepslate_bricks';
          else if(a>h-.8)id='polished_deepslate';
          else if(y===8)id='polished_andesite';}
        else if(d===1&&k!==6&&inArch(u,y,2.1,5)&&y>=2){id=(a<.6&&y>=3&&y<=5)?'iron_bars':(y===2?'polished_deepslate':'deepslate_bricks');}
        else if(d===2&&k!==6&&a<.6&&y===4)id='soul_lantern';
        if(id)put(x,y,z,id);else clr(x,y,z);}
      put(x,9,z,d===0?'polished_deepslate':'polished_andesite');});
    // sloped deepslate skirt round the foot
    each((x,z)=>{if(rim(x,z,RP)&&!portalZone(x,z))S(x,1,z,'deepslate_brick_stairs');});

    /* ===== South portal: a gabled frontispiece three orders deep ===== */
    w.comp='portal';
    for(let x=-3;x<=3;x++)for(let z=6;z<=10;z++)for(let y=1;y<=10;y++){if(z<=8&&get(x,y,z)&&y<10)continue;put(x,y,z,y===1?'polished_deepslate':stone(x,y,z));}
    for(let x=-3;x<=3;x++)for(let y=1;y<=10;y++){
      // outer order at z 10
      if(y>=1&&inArch(x,y,2.6,5))clr(x,y,10);
      else if(inArch(x,y,3.6,5))put(x,y,10,(x===0&&y===8)?'amethyst_block':'deepslate_bricks');
      else if(Math.abs(x)===3)put(x,y,10,'polished_deepslate');
      // inner order at z 9
      if(inArch(x,y,1.9,4))clr(x,y,9);else if(inArch(x,y,2.6,5))put(x,y,9,'polished_deepslate');
      // passage z 7–8
      for(const z of [7,8])if(inArch(x,y,1.3,3))clr(x,y,z);}
    for(const x of [-1,0,1]){put(x,1,6,'dark_oak_door');put(x,2,6,'dark_oak_door');put(x,3,6,'purple_stained_glass_pane');}
    put(0,4,6,'magenta_stained_glass_pane');put(-1,4,6,'chiseled_stone_bricks');put(1,4,6,'chiseled_stone_bricks');
    put(0,6,9,'soul_lantern');
    for(let x=-3;x<=3;x++){put(x,10,10,'polished_deepslate');put(x,10,11,'stone_brick_stairs',{f:[0,-1],up:true});}
    for(let y=11;y<=14;y++){const wd=14-y;for(let x=-wd;x<=wd;x++){put(x,y,9,'stone_bricks');put(x,y,10,Math.abs(x)===wd&&wd>0?'stone_brick_stairs':'stone_bricks',Math.abs(x)===wd&&wd>0?{f:[-Math.sign(x),0]}:undefined);}}
    put(0,12,10,'magenta_stained_glass_pane');put(0,15,10,'polished_blackstone_brick_wall');put(0,16,10,'polished_blackstone_brick_wall');put(0,17,10,'end_rod');
    for(const x of [-3,3]){put(x,11,10,'polished_blackstone_brick_wall');put(x,12,10,'lightning_rod');}

    /* ===== Plinth top: cornice, parapet, terrace ===== */
    w.comp='plinth-top';
    each((x,z)=>{if(!rim(x,z,RP)||portalZone(x,z)||nearTurret(x,z,.3))return;
      S(x,8,z,'stone_brick_stairs',true);put(x,9,z,'polished_deepslate');
      if(angBin(x,z,56)%2===0){put(x,10,z,'stone_bricks');put(x,11,z,'stone_brick_slab');}else put(x,10,z,'polished_blackstone_brick_wall');});

    /* ===== Lower shaft y10–35: lancets winding round, set back a block in deepslate frames ===== */
    const lancet=(a,y,y0,y1)=>(y>=y0&&y<=y1-2&&a<1.15)||(y===y1-1&&a<.75)||(y===y1&&a<.35);
    each((x,z)=>{const d=DS(x,z);if(d!==0&&d!==1)return;const {u,h,k}=bay(x,z,8),a=Math.abs(u);
      const [y0,y1]=k%2===0?[12,20]:[25,33];
      for(let y=10;y<=35;y++){let id=stone(x,y,z);w.comp='shaft-low';
        if(y===10||y===21||y===35)id='polished_deepslate';
        else if(y===22)id=d===0?'chiseled_stone_bricks':'stone_bricks';
        else if(y===34&&d===0)id='chiseled_tuff_bricks';
        else if(lancet(a,y,y0,y1)){w.comp='lancets';
          id=d===0?null:((a<.42&&y<=y1-2)||y===y1-4)?'stripped_dark_oak_log':(y>=y1-1?'magenta_stained_glass_pane':'purple_stained_glass_pane');}
        else if(d===0&&y>=y0-1&&y<=y1+1&&a<1.9)id=(y===y1+1&&a<.6)?'chiseled_stone_bricks':'deepslate_bricks';
        else if(d===0&&a>h-.7)id='deepslate_bricks';
        if(id)put(x,y,z,id);else clr(x,y,z);}});

    /* ===== Courses: sloped foot, corbelled string course, sills, balcony corbels ===== */
    w.comp='courses';
    each((x,z)=>{if(!rim(x,z,RS)||nearTurret(x,z,.2)||portalZone(x,z))return;const {u,k}=bay(x,z,8),a=Math.abs(u);
      S(x,10,z,'stone_brick_stairs');
      S(x,21,z,'stone_brick_stairs',true);put(x,22,z,'stone_brick_slab');
      const y0=k%2===0?12:25;if(a<1.25){put(x,y0-1,z,'deepslate_brick_slab',{up:true});if(y0-2!==21&&y0-2!==10)S(x,y0-2,z,'deepslate_brick_stairs',true);}
      S(x,34,z,'stone_brick_stairs',true);});

    /* ===== Buttresses round the plinth, flying buttresses to the shaft, pinnacles ===== */
    for(const ang of pillarAng(8)){
      const P=(rr,tt)=>[Math.round(rr*Math.cos(ang)-tt*Math.sin(ang)),Math.round(rr*Math.sin(ang)+tt*Math.cos(ang))];
      w.comp='buttresses';
      each((x,z)=>{const [rr,tt]=local(x,z,ang);if(Math.abs(tt)>1.05||rr<9||rr>12.6||nearTurret(x,z,.3)||portalZone(x,z))return;
        const top=rr>11.6?4:rr>10.5?8:13;
        for(let y=0;y<=top;y++){let id=y<=1?'polished_deepslate':(y%5===0?'polished_andesite':stone(x,y,z));
          if(Math.abs(tt)<.5&&rr>10.5&&y>=3&&y<=(top===8?6:3)&&top<13)id='chiseled_tuff_bricks';
          if(Math.abs(tt)<.5&&top===13&&y>=9&&y<=11)id='chiseled_tuff_bricks';
          put(x,y,z,id);}
        put(x,top+1,z,'stone_brick_stairs',{f:inward(x,z)});});
      // flyer: a solid fin from the buttress head up to the shaft, with a stair soffit
      each((x,z)=>{const [rr,tt]=local(x,z,ang);if(Math.abs(tt)>.55||rr<=RS||rr>9.4||nearTurret(x,z,.3))return;
        const f=r=>13+(9.4-r)*4.3;const yb=Math.round(f(rr+.5)),yt=Math.round(f(rr-.5));
        for(let y=yb;y<=yt;y++)put(x,y,z,'deepslate_bricks');put(x,yb-1,z,'deepslate_brick_stairs',{f:outward(x,z),up:true});});
      {const [x,z]=P(10,0);if(!nearTurret(x,z,.3)&&!portalZone(x,z)){for(let y=14;y<=17;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,18,z,'end_rod');}}
      {const [x,z]=P(11.1,0);if(!nearTurret(x,z,.3)&&!portalZone(x,z)){put(x,10,z,'polished_blackstone_brick_wall');put(x,11,z,'lightning_rod');}}
      {const [x,z]=P(12.1,0);if(!nearTurret(x,z,.3)&&!portalZone(x,z)){put(x,6,z,'polished_blackstone_brick_wall');put(x,7,z,'lightning_rod');}}
    }

    /* ===== Ring balcony y34–38 on two rows of brackets ===== */
    w.comp='balcony';
    const balc=(x,z)=>ins(x,z,10.2)&&!ins(x,z,RS)&&!TUR.some(t=>ins(x-t.cx,z-t.cz,t.R+1.6));
    each((x,z)=>{if(!balc(x,z))return;const outer=!ins(x,z,9.2);
      put(x,36,z,outer?'dark_oak_planks':'dark_oak_slab',outer?undefined:{up:true});
      if(outer)put(x,37,z,'dark_oak_fence');
      const b=angBin(x,z,40);
      if(!ins(x,z,8.5)&&b%2===0)S(x,35,z,'dark_oak_stairs',true);
      if(!ins(x,z,8.5)&&ins(x,z,9.6)&&b%4===0)S(x,35,z,'dark_oak_stairs',true);});
    spotsAt(bayAng(8).map(a=>a+Math.PI/8),9.7,(x,z)=>balc(x,z)&&!ins(x,z,9.2)).forEach(([x,z])=>put(x,38,z,'lantern'));

    /* ===== Rose storey y37–54: four pixel-planned roses on the compass points, doors to the balcony ===== */
    const RC=45,RR=4.4;
    each((x,z)=>{const d=DS(x,z);if(d!==0&&d!==1)return;const {u,h,k}=bay(x,z,4),a=Math.abs(u);
      for(let y=37;y<=54;y++){let id=stone(x,y,z);w.comp='rose-walls';
        const gu=Math.round(u),gy=y-RC,g=Math.hypot(gu,gy);
        if(y===37||y===53)id='polished_deepslate';
        else if(y===54)id=d===0?'chiseled_tuff_bricks':'stone_bricks';
        else if(y===52)id=d===0?'polished_andesite':'stone_bricks';
        else if(k!==0&&a<.6&&y<=38)id=d===0?'dark_oak_door':null;
        else if(k!==0&&a<1.5&&y<=39)id=d===0?(y===39?'chiseled_stone_bricks':'polished_deepslate'):(y===39?'stone_bricks':null);
        else if(g<=RR){w.comp='rose-windows';let t;
          const spoke=gu===0||gy===0||Math.abs(gu)===Math.abs(gy);
          const oct=Math.floor(((Math.atan2(gy,gu)+Math.PI/8+2*Math.PI)%(2*Math.PI))/(Math.PI/4))%2;
          if(g>3.6)t='polished_blackstone_bricks';
          else if(g>2.6)t=spoke?'chiseled_stone_bricks':'G:magenta_stained_glass_pane';
          else if(g>1.5)t=spoke?'polished_blackstone':(oct?'G:purple_stained_glass_pane':'G:glass_pane');
          else if(g>.6)t='gilded_blackstone';
          else t='amethyst_block';
          if(t.startsWith('G:'))id=d===0?null:t.slice(2);
          else id=d===0?t:(t==='polished_blackstone_bricks'?'deepslate_bricks':null);}
        else if(d===0&&g<=RR+1)id='chiseled_stone_bricks';
        else if(d===0&&a>h-1.3)id='deepslate_bricks';
        if(id)put(x,y,z,id);else clr(x,y,z);}});
    each((x,z)=>{if(!rim(x,z,RS)||nearTurret(x,z,1.6))return;const {u,h}=bay(x,z,4),a=Math.abs(u);
      w.comp='rose-windows';
      for(let y=RC-5;y<=RC+5;y++){const rr=Math.hypot(u,y-RC);if(rr>RR-.1&&rr<=RR+.9)put(x,y,z,y>=RC?'deepslate_brick_stairs':'chiseled_stone_bricks',y>=RC?{f:inward(x,z),up:true}:undefined);}
      w.comp='rose-walls';
      if(h-a<.95){for(let y=37;y<=51;y++)put(x,y,z,y===44?'chiseled_stone_bricks':'deepslate_bricks');S(x,52,z,'deepslate_brick_stairs');}});
    w.comp='courses';
    each((x,z)=>{if(!rim(x,z,RS)||nearTurret(x,z,.2))return;S(x,53,z,'stone_brick_stairs',true);if(!get(x,54,z))put(x,54,z,'stone_brick_slab');});

    /* ===== Observatory y55–63: eight round arches on basalt columns, telescope out of the east arch ===== */
    each((x,z)=>{const d=DS(x,z);if(d!==0&&d!==1)return;const {u,h}=bay(x,z,8),a=Math.abs(u);
      for(let y=55;y<=63;y++){let id='stone_bricks';w.comp='observatory';
        if(y===55||y===63)id='polished_deepslate';
        else if(inArch(u,y,1.7,60))id=d===0?null:'glass_pane';
        else if(d===0&&inArch(u,y,2.4,60))id=(a<.5&&y===62)?'chiseled_stone_bricks':'deepslate_bricks';
        else if(d===0&&a>h-.9)id='polished_basalt';
        if(id)put(x,y,z,id);else clr(x,y,z);}});
    each((x,z)=>{if(!rim(x,z,RS)||nearTurret(x,z,.2))return;const {u,h}=bay(x,z,8),a=Math.abs(u);
      if(h-a<.95){put(x,54,z,'polished_deepslate');for(let y=55;y<=62;y++)put(x,y,z,'polished_basalt');put(x,63,z,'chiseled_stone_bricks');}});
    // the telescope: eyepiece inside, copper tube with gold collars, a glass lens, on a strut from the ledge
    [[2,56],[3,57],[4,57],[5,58],[6,58],[7,59],[8,59],[9,60],[10,60],[11,61]].forEach(([x,y],i)=>
      put(x,y,0,i===0?'chiseled_polished_blackstone':i===9?'glass':(i===3||i===7)?'gold_block':'oxidized_cut_copper'));
    put(4,56,0,'polished_blackstone_brick_wall');put(4,55,0,'polished_blackstone');
    for(let y=55;y<=58;y++)put(8,y,0,'polished_blackstone_brick_wall');put(8,54,0,'polished_deepslate');

    /* ===== Corbel courses y64–66 step the study out ===== */
    w.comp='corbels';
    each((x,z)=>{const r=Math.hypot(x,z);if(r<=RS||r>RT)return;
      if(r<=8.5){S(x,64,z,'deepslate_brick_stairs',true);put(x,65,z,'deepslate_bricks');put(x,66,z,'polished_deepslate');}
      else if(r<=9.5){S(x,65,z,'deepslate_brick_stairs',true);put(x,66,z,'polished_deepslate');}
      else S(x,66,z,'deepslate_brick_stairs',true);});

    /* ===== Study y67–79: tall pointed tracery windows between pilasters ===== */
    const swin=(a,y)=>(y>=69&&y<=75&&a<1.9)||(y===76&&a<1.5)||(y===77&&a<.9);
    each((x,z)=>{const d=DT(x,z);if(d!==0&&d!==1)return;const {u,h}=bay(x,z,8),a=Math.abs(u);
      for(let y=67;y<=79;y++){let id=stone(x,y,z);w.comp='study-walls';
        if(y===67||y===78)id='polished_deepslate';
        else if(y===79)id=d===0?'chiseled_tuff_bricks':'stone_bricks';
        else if(swin(a,y)){w.comp='study-windows';
          id=d===0?null:(a<.42&&y<=75)||y===72?'stripped_dark_oak_log':(y>=76?'magenta_stained_glass_pane':'purple_stained_glass_pane');}
        else if(d===0&&a<2.6&&y>=68)id=(y===77&&a<.6)?'amethyst_block':'deepslate_bricks';
        else if(d===0&&a>h-1)id='polished_blackstone_bricks';
        if(id)put(x,y,z,id);else clr(x,y,z);}});
    each((x,z)=>{if(!rim(x,z,RT))return;const {u,h}=bay(x,z,8),a=Math.abs(u);
      if(h-a<.95){w.comp='study-walls';S(x,66,z,'deepslate_brick_stairs',true);for(let y=67;y<=77;y++)put(x,y,z,y===72?'chiseled_polished_blackstone':'deepslate_bricks');put(x,78,z,'chiseled_stone_bricks');}
      else if(a<2.1){w.comp='study-windows';put(x,68,z,'dark_oak_slab',{up:true});if(Math.round(u)%2===0)S(x,67,z,'dark_oak_stairs',true);
        if(a>=.9)S(x,77,z,'deepslate_brick_stairs');else S(x,78,z,'deepslate_brick_stairs');}
      w.comp='study-walls';
      if(!get(x,79,z))put(x,79,z,angBin(x,z,48)%2===0?'dark_oak_stairs':'dark_oak_planks',angBin(x,z,48)%2===0?{f:inward(x,z),up:true}:undefined);});

    /* ===== Hat y80+: ribbed purpur, flared brim, leaning east ===== */
    const HB=80,HH=32,R0=12.2,HX=1.55;
    const tip=hat(0,0,HB,R0,HH,7,-2,8,Math.PI/8,false,'hat',HX);
    // dormers on the four compass points
    w.comp='dormers';
    for(const a of [0,Math.PI/2,Math.PI,-Math.PI/2]){
      each((x,z)=>{const [rr,tt]=local(x,z,a),at=Math.abs(tt);if(rr<7.5||rr>12.6||at>2.8)return;
        for(let y=HB;y<=HB+8;y++){const i=y-HB,wd=i<=5?2.4:i===6?1.7:i===7?1.0:.4;if(at>wd)continue;
          const rh=R0*Math.pow(1-i/HH,HX);if(rr<rh-1.3)continue;
          const front=rr>11.5;let id;
          if(i>=6)id=at>wd-.8?'S':'purpur_block';
          else if(front){if(at>1.7)id='stripped_dark_oak_log';else if(i===0)id='deepslate_bricks';else if(i===5)id='chiseled_stone_bricks';
            else id=(at<.45||i===3)?'stripped_dark_oak_log':(i>=4?'magenta_stained_glass_pane':'purple_stained_glass_pane');}
          else id=i===0?'dark_oak_planks':(at>wd-1?'purpur_block':null);
          if(id==='S'){const vx=tt>0?Math.sin(a):-Math.sin(a),vz=tt>0?-Math.cos(a):Math.cos(a);
            put(x,y,z,'purpur_stairs',{f:Math.abs(vx)>=Math.abs(vz)?[Math.sign(vx),0]:[0,Math.sign(vz)]});}
          else if(id)put(x,y,z,id);else clr(x,y,z);}});
      const px=Math.round(12*Math.cos(a)),pz=Math.round(12*Math.sin(a));put(px,HB+9,pz,'end_rod');
    }

    /* ===== Star finial ===== */
    w.comp='finial';
    {const [tx,ty,tz]=tip;put(tx,ty+1,tz,'polished_blackstone_brick_wall');put(tx,ty+2,tz,'polished_blackstone_brick_wall');
      put(tx,ty+3,tz,'gold_block');for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]])put(tx+dx,ty+3,tz+dz,'end_rod');
      put(tx,ty+4,tz,'end_rod');put(tx,ty+5,tz,'end_rod');}

    /* ===== Turrets: banded shafts, slit windows, corbelled cornices, their own hats ===== */
    for(const t of TUR){
      w.comp='turrets';
      each((x,z)=>{const dx=x-t.cx,dz=z-t.cz;if(!ins(dx,dz,t.R)||ins(dx,dz,t.R-1))return;
        for(let y=1;y<=t.top;y++)put(x,y,z,(y===1||y%9===0)?'polished_deepslate':stone(x,y,z));});
      const rs=Math.round(t.R-.5);
      for(const [ux,uz] of [[1,0],[-1,0],[0,1],[0,-1]]){const x=t.cx+ux*rs,z=t.cz+uz*rs;if(ins(x,z,RS+.5))continue;
        for(let y=13;y<=t.top-4;y+=8){put(x,y,z,'purple_stained_glass_pane');put(x,y+1,z,'purple_stained_glass_pane');put(x,y+2,z,'chiseled_stone_bricks');
          put(x+ux,y-1,z+uz,'deepslate_brick_slab',{up:true});}}
      each((x,z)=>{const dx=x-t.cx,dz=z-t.cz;if(ins(x,z,RS))return;
        if(ins(dx,dz,t.R+1)&&!ins(dx,dz,t.R)){put(x,t.top-1,z,'stone_brick_stairs',{f:toward(x,z,t.cx,t.cz),up:true});put(x,t.top,z,'polished_deepslate');}
        if(ins(dx,dz,t.R-1))put(x,t.top,z,'spruce_planks');});
      w.comp='turret-hats';
      const tt=hat(t.cx,t.cz,t.top+1,t.R+1.5,t.H,t.lx,0,4,Math.PI/4,false,'turret-hats');
      put(tt[0],tt[1]+1,tt[2],'amethyst_block');put(tt[0],tt[1]+2,tt[2],'end_rod');
    }
    // belfry in the tall turret: four openings and a bell on a chain
    {const t=TUR[0];w.comp='turret-hats';
      for(const [ux,uz] of [[1,0],[0,-1]])for(let y=44;y<=47;y++)clr(t.cx+ux*3,y,t.cz+uz*3);
      for(const [ux,uz] of [[1,0],[0,-1]]){put(t.cx+ux*3,48,t.cz+uz*3,'chiseled_stone_bricks');put(t.cx+ux*4,43,t.cz+uz*4,'deepslate_brick_slab',{up:true});}
      for(let y=46;y<=49;y++)put(t.cx,y,t.cz,'chain');put(t.cx,45,t.cz,'bell');}
    // bridge to the west turret on a pointed arch
    w.comp='turrets';
    for(let x=-10;x<=-8;x++)for(let z=-1;z<=1;z++){put(x,28,z,'polished_deepslate');if(z!==0)put(x,29,z,'stone_brick_wall');}
    for(let z=-1;z<=1;z++){put(-8,27,z,'stone_brick_stairs',{f:[1,0],up:true});put(-9,27,z,'stone_bricks');put(-9,26,z,'stone_brick_stairs',{f:[1,0],up:true});put(-10,27,z,'stone_brick_stairs',{f:[-1,0],up:true});}
    for(const x of [-7,-10]){put(x,29,0,'dark_oak_door');put(x,30,0,'dark_oak_door');}clr(-6,29,0);clr(-6,30,0);
    each((x,z)=>{if(ins(x+12,z,1.6))put(x,28,z,'spruce_planks');});
    put(-9,30,1,'lantern');put(-9,30,-1,'lantern');

    /* ===== Inside: a newel stair with a spiral of steps, floors with stairwells ===== */
    w.comp='spiral';
    each((x,z)=>{if(ins(x,z,1.5))for(let y=1;y<=65;y++)put(x,y,z,FL.includes(y)?'chiseled_polished_blackstone':'polished_deepslate');});
    for(let y=1;y<=65;y++){const b=stepBin(y);
      each((x,z)=>{const r=Math.hypot(x,z);if(r<=1.5||r>3.4||angBin(x,z,16)!==b)return;
        const a=Math.atan2(z,x),tx=-Math.sin(a),tz=Math.cos(a);
        put(x,y,z,'stone_brick_stairs',{f:Math.abs(tx)>Math.abs(tz)?[Math.sign(tx),0]:[0,Math.sign(tz)]});});}
    for(const F of FL){
      const holes=[stepBin(F-1),stepBin(F-2),stepBin(F-3)];
      each((x,z)=>{const r=Math.hypot(x,z);if(r<=1.5)return;
        const inside=F===66?ins(x,z,RS):DS(x,z)>=2;if(!inside)return;
        if(r<=3.4){const b=angBin(x,z,16);if(holes.includes(b)||(F<=65&&b===stepBin(F)))return;}
        put(x,F,z,F===54?(RNG(x,F,z)<.08?'glowstone':'deepslate_tiles'):'dark_oak_planks');});}

    /* ===== Rooms: entrance hall, library, alchemy lab ===== */
    w.role='furnish';w.comp='rooms-low';
    const ring2=(x,z)=>DS(x,z)===2;
    // entrance hall: soul lanterns on chains, pots by the door
    for(const [x,z] of [[4,0],[-4,0],[0,-4],[3,3],[-3,3]]){put(x,8,z,'chain');put(x,7,z,'soul_lantern');}
    put(-2,1,5,'decorated_pot');put(2,1,5,'decorated_pot');put(-5,1,-1,'lectern');put(5,1,-1,'chest');
    // library: shelves on the wall between the lancets, lecterns and a reading table
    each((x,z)=>{if(!ring2(x,z))return;const {u,k}=bay(x,z,8);if(k%2===0&&Math.abs(u)<1.7)return;
      for(let y=10;y<=19;y++)put(x,y,z,y===15?'dark_oak_planks':(RNG(x,y,z)<.15?'chiseled_bookshelf':'bookshelf'));put(x,20,z,'dark_oak_slab');});
    put(4,10,2,'lectern');put(-4,10,-2,'lectern');put(0,10,4,'dark_oak_fence');put(0,11,4,'oak_pressure_plate');put(-1,10,4,'dark_oak_stairs',{f:[-1,0]});put(1,10,4,'dark_oak_stairs',{f:[1,0]});
    for(const [x,z] of [[4,-2],[-4,2],[2,-4]]){put(x,21,z,'chain');put(x,20,z,'lantern');}
    // alchemy lab: deepslate counters with brewing stands, cauldrons, stores
    each((x,z)=>{if(!ring2(x,z))return;const {u,k}=bay(x,z,8);if(k%2===1&&Math.abs(u)<1.7)return;if(z===0&&x<0)return;
      put(x,23,z,'polished_deepslate');const q=RNG(x,24,z);
      if(q<.3)put(x,24,z,'brewing_stand');else if(q<.42)put(x,24,z,'flower_pot');else if(q<.5)put(x,24,z,'decorated_pot');
      for(let y=26;y<=27;y++)put(x,y,z,RNG(x,y,z)<.5?'barrel':'bookshelf');});
    for(const [x,z] of [[4,1],[-3,-4],[1,-5]])put(x,23,z,'cauldron');
    put(-4,23,3,'barrel');put(-4,24,3,'barrel');put(4,23,-3,'chest');put(3,23,4,'crafting_table');
    for(const [x,z] of [[4,-1],[-4,1],[0,4]]){put(x,35,z,'chain');put(x,34,z,'lantern');}

    /* ===== Crystal hall, armillary, study ===== */
    w.comp='rooms-high';
    for(const [x,z] of [[4,4],[-4,4],[4,-4],[-4,-4]]){put(x,37,z,'polished_blackstone');put(x,38,z,'amethyst_block');put(x,39,z,'amethyst_cluster');}
    for(let y=50;y<=53;y++)put(0,y,-5,'chain');put(0,49,-5,'bell');
    for(const [x,z] of [[5,0],[-5,0],[0,5]]){put(x,53,z,'chain');put(x,52,z,'lantern');}
    // armillary: a copper equator hung on chains, a tilted dark oak ecliptic, lanterns below
    {const AY=60,EPS=23.4*Math.PI/180;
      for(let x=-6;x<=6;x++)for(let y=AY-3;y<=AY+3;y++)for(let z=-6;z<=6;z++){const dy=y-AY,h=Math.hypot(x,z);if(h<3.6)continue;
        const eq=dy===0&&Math.abs(h-4.5)<.55;
        const yp=dy*Math.cos(EPS)-z*Math.sin(EPS),zp=dy*Math.sin(EPS)+z*Math.cos(EPS);
        const ec=Math.abs(yp)<.5&&Math.abs(Math.hypot(x,zp)-5.2)<.55;
        if(eq)put(x,y,z,'oxidized_cut_copper');else if(ec&&!get(x,y,z)&&DS(x,z)>=2)put(x,y,z,'dark_oak_planks');}
      for(const [x,z] of [[3,3],[-3,3],[3,-3],[-3,-3]])for(let y=AY+1;y<=65;y++)if(!get(x,y,z))put(x,y,z,'chain');
      for(const [x,z] of [[0,5],[0,-5],[-5,0]])if(get(x,AY,z))put(x,AY-1,z,'lantern');}
    // study: enchanting table in a ring of 30 bookshelves, wall shelves, a desk and a bed, a chandelier
    {const ex=0,ez=-5;put(ex,67,ez,'enchanting_table');
      for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++){if(Math.max(Math.abs(dx),Math.abs(dz))!==2||(dx===0&&dz===2))continue;
        put(ex+dx,67,ez+dz,'bookshelf');put(ex+dx,68,ez+dz,'bookshelf');}}
    each((x,z)=>{if(DT(x,z)!==2)return;const {u}=bay(x,z,8);if(Math.abs(u)<2.3)return;if(z<-2&&Math.abs(x)<=3)return;
      for(let y=67;y<=70;y++)put(x,y,z,RNG(x,y,z)<.2?'chiseled_bookshelf':'bookshelf');put(x,71,z,'dark_oak_slab');});
    put(0,67,6,'lectern');put(1,67,6,'cartography_table');put(-1,67,6,'chest');put(2,67,5,'brewing_stand');
    put(-6,67,3,'purple_bed');put(-6,67,4,'purple_bed');put(-5,67,5,'barrel');
    for(let y=75;y<=79;y++)put(0,y,0,'chain');put(0,74,0,'soul_lantern');
    for(const [x,z] of [[5,0],[-5,0],[0,5]]){for(let y=77;y<=79;y++)put(x,y,z,'chain');put(x,76,z,'lantern');}
    w.role=null;
      /* ===== Compass: an astral ring of standing stones at the end of the path ===== */
    w.comp='astral-ring';
    {const CZ=26;
      for(let z=19;z<=CZ-7;z++)for(let x=-2;x<=2;x++)put(x,0,z,(x===0)?'polished_deepslate':'stone_bricks');
      const RAYS=[];
      for(let k=0;k<8;k++)RAYS.push([k*Math.PI/4-Math.PI/2,k%2?3.1:5.2,k%2?.6:1.15,k]);
      for(let x=-8;x<=8;x++)for(let z=CZ-8;z<=CZ+8;z++){const dx=x,dz=z-CZ,r=Math.hypot(dx,dz);if(r>6.2)continue;
        let id=RNG(x,3,z)<.07?'ochre_froglight':'deepslate_tiles';                     // a night sky with a few stars
        const a=(Math.atan2(dz,dx)+2*Math.PI)%(2*Math.PI);
        if(r>5.3){const sgn=Math.round(a/(Math.PI/6))%12,near=Math.abs(a-sgn*Math.PI/6)<.13||Math.abs(a-2*Math.PI)<.13;
          id=near?(sgn%3===0?'gold_block':'purpur_block'):'polished_blackstone_bricks';}  // zodiac ring: twelve signs, gold on the quarters
        else{const th=Math.atan2(dz,dx),dA=q=>Math.abs(((th-q)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);
          for(const [q,R,W,k] of [...RAYS].sort((p,o)=>dA(p[0])-dA(o[0]))){const al=dx*Math.cos(q)+dz*Math.sin(q),pe=-dx*Math.sin(q)+dz*Math.cos(q);
            if(al<0||al>R+.3||Math.abs(pe)>W*(1-al/(R+.3))+.2)continue;const lite=pe>=0;
            id=k===0?(lite?'amethyst_block':'purpur_block'):k%2?'purpur_pillar':(lite?'calcite':'smooth_basalt');break;}
          if(r<1.2)id='amethyst_block';}
        put(x,0,z,id);}
      // a crystal at the heart
      put(0,1,CZ,'amethyst_block');put(0,2,CZ,'amethyst_cluster');
      // eight standing stones: tall dark ones on the quarters, pale lantern stones between, the north one crowned in gold
      for(let k=0;k<8;k++){const q=k*Math.PI/4-Math.PI/2,x=Math.round(7.3*Math.cos(q)),z=CZ+Math.round(7.3*Math.sin(q));put(x,0,z,'polished_deepslate');
        if(k%2){put(x,1,z,'calcite');put(x,2,z,'calcite');put(x,3,z,'soul_lantern');continue;}
        if(k===0){clr(x,0,z);put(x,0,z,'polished_deepslate');                     // north: a pair of gate stones either side of the path
          for(const gx of [-3,3]){put(gx,0,z,'polished_deepslate');for(let y=1;y<6;y++)put(gx,y,z,y===2?'chiseled_polished_blackstone':'polished_deepslate');put(gx,6,z,'gold_block');put(gx,7,z,'end_rod');}
          continue;}
        for(let y=1;y<5;y++)put(x,y,z,y===2?'chiseled_polished_blackstone':'polished_deepslate');
        put(x,5,z,'amethyst_block');put(x,6,z,'amethyst_cluster');}}
  }
});
