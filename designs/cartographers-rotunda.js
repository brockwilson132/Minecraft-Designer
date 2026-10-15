/* Cartographer's Rotunda — a Baroque rotunda with a copper dome over a round 15-block floor map.
   Bedrock, creative. 37 blocks across, 149 tall. x 0, z 0 is the center of the map. */
BK.register({
  id:'cartographers-rotunda',
  version:26,
  name:"Cartographer's Rotunda",
  blurb:'Eight deep arches, a rose-window storey, a hooded drum and a ribbed copper dome over a sunken round map on a compass-rose floor.',
  tags:['Rotunda','Copper dome','Map room'],
  edition:'Bedrock',
  extent:24,
  start:{x:18,y:1,z:0},
  ring:18.5,                       // dashed guide circle on the top view (your existing base)
  // build order: [group, step id (matches w.comp in build), name]
  steps:[
 ['Floor','map-bed','Map bed & halo'],['Floor','floor-rose','Compass-rose floor'],['Floor','entrance','South steps & lamps'],
 ['Arches','buttresses','Buttresses'],['Arches','arch-walls','Arch walls'],['Arches','arch-windows','Arch windows, doors & niches'],
 ['Arches','arch-balconies','Arch balconies'],['Arches','parapet1','Cornice, parapet & balcony floor'],['Arches','buttress-pinnacles','Buttress pinnacles'],
 ['Inside','columns','Basalt columns & arches'],['Inside','stair1','Stair to first balcony'],['Inside','pulpits','Pulpits & rail'],['Inside','furniture','Shelves, tables & lecterns'],
 ['Rose storey','pier-towers','Pier towers'],['Rose storey','rose-walls','Walls & loggias'],['Rose storey','rose-windows','Rose windows & hoods'],
 ['Rose storey','rose-balconies','Loggia balconies'],['Rose storey','gables','Gables'],['Rose storey','deck73','Parapet & upper balcony'],
 ['Rose storey','stair2','Stair to upper balcony'],['Rose storey','tower-crowns','Tower pinnacles'],
 ['Drum','drum-walls','Drum walls & dwarf gallery'],['Drum','pilasters','Pilasters, hoods & cornice'],['Drum','drum-windows','Drum windows'],
 ['Drum','library','Library shelves'],['Drum','drum-orn','Drum lanterns & pinnacles'],
 ['Dome','dome-shell','Dome shell'],['Dome','dome-ribs','Dome ribs'],['Dome','lucarnes','Lucarnes'],['Dome','lantern','Lantern'],['Dome','cupola','Cupola & orb'],['Dome','armillary','Armillary sphere']
  ],
/* ---------- Tiers ---------- */
  tiers:[
 {a:-1,b:0,name:'Map floor',short:'Sunken map at the heart of a compass rose',p:'Your round map, 15 blocks across (177 maps in regular item frames), is sunk one block on glowstone at y −1, so it sits in a shallow basin. A band of dark prismarine forms its lip, like sea round land, and a ring of oxidized copper grate over ochre froglights glows around it. The floor is laid like an old parchment chart. A great 24-point compass rose springs from the halo onto a smooth sandstone field. Each point is bevelled, light on one side and dark on the other, so it reads as raised. North is red, as on old sea charts: a redstone block side and a red nether brick side, crowned with a gold fleur-de-lis. East, south and west are smooth stone and polished blackstone, the ink of the chart. The four corner points are brown terracotta and dark oak, and the eight half-winds are spruce and dark oak. A 32-tick degree ring of dark oak and brown terracotta crosses the points near the wall. Orange glazed terracotta rosettes sit on the half-wind lines. A solid dark oak band frames the rose, and beyond it a sunburst of alternating spruce and dark oak wedges, 32 of them, runs out to the arches.',m:['map','glowstone','dark_prismarine','copper_grate','ochre_froglight','redstone_block','red_nether_bricks','gold_block','smooth_sandstone','smooth_stone','polished_blackstone_bricks','brown_terracotta','spruce_planks','dark_oak_planks','orange_glazed_terracotta']},
 {a:1,b:30,name:'Grand arches (outside)',short:'Eight deep arches, eight buttresses',p:'Eight two-storey arches, each three orders deep: a deepslate archivolt, a darker inner order, then a back wall. The ground storey of each recess is solid, with an urn in a deepslate niche. A dark oak balcony on brackets crosses each arch, under a great window with stripped dark oak mullions. The south arch has a gold keystone and dark oak doors. Over every arch, an orange glazed terracotta roundel in a chiseled stone frame repeats the floor rosettes outside. The buttresses have carved tuff panels and dark blackstone pinnacles. Eight stepped buttresses carry pinnacles at every setback, and a crenellated parapet tops the level.',m:['stone_bricks','deepslate_bricks','polished_deepslate','polished_andesite','stripped_dark_oak_log','dark_oak_slab','dark_oak_fence','glass_pane','stone_brick_wall','gold_block']},
 {a:1,b:30,name:'Map room',short:'Basalt arcade, cartographer\'s walk',p:'Eight polished basalt columns stand just outside the map and carry pointed stone arches under the first balcony, with a lantern in every arch and a sconce on every column. Behind them, a walk runs round the wall, lined with low bookshelves. Seven cartography tables, each paired with a lectern, stand on the degree ring against the shelves. The stair to the balcony climbs along the wall.',m:['polished_basalt','chiseled_stone_bricks','stone_bricks','lantern','bookshelf','cartography_table','lectern','decorated_pot']},
 {a:31,b:31,name:'First balcony',short:'Iron rail, four viewing pulpits',p:'A ring balcony over the arcade with an iron rail. Four dark oak pulpits are corbelled out over the well, so you can stand directly above the edge of the map and look straight down onto it.',m:['dark_oak_planks','dark_oak_stairs','iron_bars']},
 {a:32,b:73,name:'Rose storey',short:'Loggias, rose windows, gables, pier towers',p:'Each bay opens at its foot into a loggia of three small arches with a dark oak door, fronted by a timber balcony on brackets with a lantern above. Over it sits a 13-block rose window built block by block: a gold boss in a copper-grate hub, a dark oak ring, eight petals of alternating cyan and yellow stained glass between dark oak spokes, a ring of clear lights divided by carved stone cusps, and a deepslate frame. A raised hood of carved stone and deepslate stairs rings each rose, and a stepped stone gable with a finial rises over it. The buttresses continue up as pier towers with deepslate corner shafts, slit windows, hanging lanterns and a five-pinnacle crown in polished blackstone, set on a chiseled copper band with a gilded blackstone collar. Inside, an armillary sphere hangs over the map: copper meridians and equator, a tilted dark oak ecliptic and a gold sun at its heart, with lanterns hung from its equator.',m:['stone_bricks','polished_andesite','dark_oak_door','dark_oak_slab','stripped_dark_oak_log','gold_block','copper_grate','cyan_stained_glass_pane','yellow_stained_glass_pane','glass_pane','deepslate_bricks','chiseled_stone_bricks','deepslate_brick_stairs','iron_bars','lantern']},
 {a:74,b:83,name:'Dwarf gallery',short:'Ring of 24 small arches',p:'A Romanesque dwarf gallery: twenty-four small arches between polished basalt colonnettes, the same stone as the map room columns, backed in deepslate so they read as a band of shadow, under a chiseled stone course and a corbelled ledge.',m:['polished_andesite','polished_deepslate','chiseled_stone_bricks','stone_brick_stairs']},
 {a:84,b:104,name:'Drum',short:'Hooded windows, bracketed lanterns',p:'Sixteen tall arched windows in deepslate frames with stripped dark oak mullions. Each has a deepslate hood with a carved keystone and a small finial above, and a dark oak sill on a bracket below. A lantern hangs from a timber bracket on every pilaster. A carved tuff entablature and a ring of sixteen pinnacles finish the top. Inside is the library.',m:['stone_bricks','deepslate_bricks','deepslate_brick_stairs','stripped_dark_oak_log','glass_pane','dark_oak_slab','dark_oak_fence','lantern','chiseled_tuff_bricks','bookshelf']},
 {a:105,b:127,name:'Dome',short:'Copper scales, dark oak ribs',p:'A 33-block copper dome in stepped courses. Every exposed edge is an oxidized cut copper stair, so the surface reads as scales. Eight dark oak ribs stand a block proud, and eight gabled timber lucarnes with pinnacles ring the base.',m:['oxidized_cut_copper_stairs','oxidized_cut_copper','oxidized_copper','dark_oak_planks','dark_oak_stairs','stripped_dark_oak_log','glass_pane','lightning_rod']},
 {a:128,b:147,name:'Lantern',short:'Timber posts, gold orb',p:'A lantern of stripped dark oak posts with oxidized copper grate screens and a lit lantern inside, under a copper cupola with dark oak ribs and a gold orb.',m:['stripped_dark_oak_log','iron_bars','polished_deepslate','copper_bulb','oxidized_cut_copper','dark_oak_planks','gold_block','lightning_rod']}
],
  notes:[
    ['Coordinates','x 0, z 0 is the center of your map. +x is east, +z is south, as in Minecraft. y 0 is the layer your maps sit on; the finial tops out at y 148.'],
    ['Match your ring','Where your stone-brick base differs from this 37-block circle by a block, follow your base and keep each part the same distance in.'],
    ['Clear space','The buttresses step out three blocks past your circle at their base and the south steps reach two. Keep about four blocks clear around the base.'],
    ['Glazed terracotta','Each rosette is four orange tiles, each turned a quarter from the last. In Bedrock the pattern faces the way you are looking, so turn 90° between tiles. The cursor readout gives each tile\'s turn.'],
    ['The map','Sunk one block: glowstone at y −1 with the item frames on top of it at y 0. The froglights under the copper grate are also at y −1.']
  ],
  build(w){
    const {V,K,put,clr,get,ins,rim,each,depthMap,bay,inward,outward,S,SO,spotsAt,pillarAng,bayAng,RNG,vn}=w;
    const mapColor=(x,z)=>{const e=.62*vn(x/4.2+3,z/4.2+5)+.38*vn(x/1.9+11,z/1.9+2);
      return e<.33?'#3f5bc0':e<.42?'#4f70d4':e<.46?'#e6d9a0':e<.66?'#7fb238':e<.79?'#3f8a2a':'#8f8f8f';};
    const R1=18.5,R2=16.5,RW=10.5;
    const D1=depthMap(R1),D2=depthMap(R2);
    const card8=[[1,0],[-1,0],[0,1],[0,-1]];
    const ringCells=(r0,r1,fn)=>each((x,z)=>{const r=Math.hypot(x,z);if(r>r0&&r<=r1)fn(x,z,r);});
    const local=(x,z,a)=>[x*Math.cos(a)+z*Math.sin(a),-x*Math.sin(a)+z*Math.cos(a)];
    const BUT=pillarAng(8), BAY=bayAng(8);

    /* ===== Floor y0: the map sunk in a sea band and a lit copper halo, at the heart of a great 24-point
       compass rose with bevelled points, inside a 32-point degree ring, on a tuff field ===== */
    const MAPR=7.5,ROSE0=9.5;
    // points: [bearing from north (deg), tip radius, half-width at base, light block, dark block]
    const POINTS=[];
    POINTS.push([0,15.3,3.0,'redstone_block','red_nether_bricks']);                                   // north, in red as on old charts
    for(let i=1;i<4;i++)POINTS.push([i*90,15.3,3.0,'smooth_stone','polished_blackstone_bricks']);     // east, south, west
    for(let i=0;i<4;i++)POINTS.push([45+i*90,13.6,2.3,'brown_terracotta','dark_oak_planks']);       // the corners, in earth and oak
    for(let i=0;i<8;i++)POINTS.push([22.5+i*45,11.6,1.3,'spruce_planks','dark_oak_planks']);        // half-winds, in two woods
    const ROS=new Map(); // glazed terracotta rosettes on the half-wind lines, between the columns and the degree ring
    BUT.forEach(a=>{const cx=12.9*Math.cos(a)-.5,cz=12.9*Math.sin(a)-.5;const x0=Math.round(cx),z0=Math.round(cz);
      [[0,0,0],[1,0,90],[1,1,180],[0,1,270]].forEach(([dx,dz,t])=>ROS.set((x0+dx)+','+(z0+dz),t));});
    each((x,z)=>{
      if(!ins(x,z,R1))return;
      const r=Math.hypot(x,z),deg=((Math.atan2(z,x)*180/Math.PI)+450)%360; // 0 = north, clockwise
      w.comp=r<=9.5?'map-bed':'floor-rose';
      let f;
      if(ins(x,z,MAPR)){f='map';put(x,-1,z,'glowstone');}   // map sunk one block on glowstone
      else if(r<=8.5)f='dark_prismarine';                                                   // the sea, and the lip of the sunken map
      else if(r<=9.5){f='copper_grate';put(x,-1,z,'ochre_froglight');}                      // lit halo
      else{
        for(const [b0,tip,w0,lt,dk] of POINTS){
          let d=deg-b0;d=((d+540)%360)-180;const t=d*Math.PI/180,along=r*Math.cos(t),perp=r*Math.sin(t);
          if(along<ROSE0||along>tip+.3)continue;
          const w=w0*(tip-along)/(tip-ROSE0);
          if(Math.abs(perp)<=w+.2){f=perp>=0?lt:dk;
            break;}
        }
        if(!f){
          if(ROS.has(x+','+z))f='orange_glazed_terracotta';
          else if(r>13.9&&r<=14.9){const k=Math.floor(((deg+5.625)%360)/11.25);f=k%2?'dark_oak_planks':'brown_terracotta';} // degree ring
          else if(r>14.9&&r<=15.9)f='dark_oak_planks';   // dark oak band framing the rose
          else if(r>15.9)f=(Math.floor(deg/11.25)%2)?'spruce_planks':'dark_oak_planks'; // sunburst out to the arches
          else f='smooth_sandstone';}   // parchment field
      }
      if(f==='orange_glazed_terracotta')put(x,0,z,f,{turn:ROS.get(x+','+z)});else put(x,0,z,f,f==='map'?{hue:mapColor(x,z)}:undefined);
    });
    // a gold fleur-de-lis crowns the north point
    w.comp='floor-rose';
    [[0,-15],[-1,-14],[0,-14],[1,-14],[0,-13],[-2,-13],[2,-13]].forEach(([x,z])=>put(x,0,z,'gold_block'));

    /* ===== Level 1 · Grand arches y1–31: eight two-storey arches, three orders deep ===== */
    const inArch=(u,y,R,cy)=>(y<=cy&&Math.abs(u)<R)||(y>cy&&u*u+(y-cy)*(y-cy)<R*R);
    const CYA=20;
    each((x,z)=>{
      const d=D1(x,z);if(d<0||d>2)return;
      const {u,k}=bay(x,z,8),a=Math.abs(u),south=k===6;
      for(let y=1;y<=30;y++){let id='stone_bricks';w.comp='arch-walls';
        const o0=inArch(u,y,4.3,CYA),o1=inArch(u,y,3.4,CYA);
        if(y===1)id='polished_deepslate';
        else if(d===0){
          if(o0)id=null;
          else if(inArch(u,y,5.4,CYA)&&y>CYA-1)id=(a<.6&&y>=CYA+4)?(south?'gold_block':'chiseled_stone_bricks'):'deepslate_bricks'; // archivolt
          else if(a>=4.3&&a<5.4&&y>=2&&y<=CYA)id='deepslate_bricks'; // jambs
          else if((y===26||y===27)&&a<1)id='orange_glazed_terracotta';
          else if(y>=25&&y<=28&&a<1.9&&!(y===28))id='chiseled_stone_bricks';
          else if(y===26)id='polished_andesite';
          else if(y===28)id='chiseled_tuff_bricks';
          else if(y>=29)id='polished_deepslate';
          else if(y%4===2&&y<CYA)id='polished_andesite';
        }else if(d===1){
          if(o1)id=null;
          else if(o0)id=(y===CYA&&a>=3.4)?'chiseled_stone_bricks':'polished_deepslate';   // inner order
          else if(y>=29)id='polished_deepslate';
        }else{ // back wall of the recess
          if(o1){
            const head=u*u+(y-21)*(y-21)<2.7*2.7;
            if(y>=13&&(y<=21&&a<2.7||y>21&&head)){
              if(a<.45||y===17)id='stripped_dark_oak_log';else id='glass_pane';w.comp='arch-windows';}
            else if(y===11||y===12)id='polished_andesite';
            else if(south&&y<=5&&a<1.5&&(w.comp='arch-windows'))id=(y<=2&&a<1)?'dark_oak_door':(y<=2?'stripped_dark_oak_log':(a<1?'copper_grate':'stripped_dark_oak_log'));
            else if(!south&&y>=3&&y<=8&&a<1.4&&(w.comp='arch-windows'))id=(y===3&&a<.5)?'decorated_pot':'polished_deepslate';
            else if(!south&&y===9&&a<.5&&(w.comp='arch-windows'))id='chiseled_tuff';
            else id='stone_bricks';
          }else if(y>=29)id='polished_deepslate';
        }
        if(id)put(x,y,z,id);else clr(x,y,z);}
    });
    // timber balconies across each recess, on brackets
    w.comp='arch-balconies';
    each((x,z)=>{if(D1(x,z)!==1)return;const {u}=bay(x,z,8),a=Math.abs(u);if(a>=3.3)return;
      put(x,11,z,'dark_oak_slab',{up:true});put(x,12,z,'dark_oak_fence');if(Math.round(u)%2===0)put(x,10,z,'dark_oak_stairs',{f:inward(x,z),up:true});});
    // cornice and crenellated parapet
    w.comp='parapet1';
    each((x,z)=>{if(!rim(x,z,R1))return;const {u}=bay(x,z,8);
      S(x,29,z,'stone_brick_stairs',true);put(x,30,z,'polished_deepslate');put(x,31,z,(Math.floor(u+50)%2===0)?'stone_bricks':'stone_brick_wall');});
    ringCells(RW,R1,(x,z)=>{if(!get(x,31,z))put(x,31,z,Math.hypot(x,z)<=14.5?'dark_oak_planks':'polished_andesite');});
    // steps up to the south door
    w.comp='entrance';
    for(let x=-4;x<=4;x++){put(x,0,19,'polished_deepslate');put(x,0,20,'stone_brick_stairs',{f:[0,-1],up:false});}
    for(const x of [-5,5]){put(x,0,20,'polished_deepslate');for(let y=1;y<=3;y++)put(x,y,20,'dark_oak_fence');put(x,4,20,'lantern');}

    /* ===== Buttresses: eight stepped piers with pinnacle clusters ===== */
    for(const a of BUT){
      w.comp='buttresses';
      each((x,z)=>{const [rr,tt]=local(x,z,a);if(Math.abs(tt)>1.55||rr<16.5||rr>21.6)return;
        const top=rr>20.5?10:rr>19.5?20:30;
        for(let y=0;y<=top;y++){let id=y<=1?'polished_deepslate':(y%5===0?'polished_andesite':'stone_bricks');
          if(Math.abs(tt)<.5&&rr>19.5&&((y>=3&&y<=7)||(y>=13&&y<=17))&&rr>(y<10?20.5:19.5))id='chiseled_tuff_bricks'; // carved panels
          put(x,y,z,id);}
        if(top<30)put(x,top+1,z,'stone_brick_stairs',{f:inward(x,z),up:false});
      });
      // pinnacles on each setback and a cluster on top
      const P=(rr,tt)=>[Math.round(rr*Math.cos(a)-tt*Math.sin(a)),Math.round(rr*Math.sin(a)+tt*Math.cos(a))];
      w.comp='buttress-pinnacles';
      for(const [rr,y0,h] of [[21,12,3],[20,22,4]]){const [x,z]=P(rr,0);for(let y=y0;y<y0+h;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,y0+h,z,'lightning_rod');}
    }

    /* ===== Level 2 · Drum y31–62: sixteen tall barred windows between pilasters ===== */
    each((x,z)=>{
      const d=D2(x,z);
      if(d===0||d===1){const {u}=bay(x,z,16),a=Math.abs(u);
        for(let y=32;y<=62;y++){let id='stone_bricks';w.comp='drum-walls';
          const lite=(y>=44&&y<=53&&a<1.15)||(y===54&&a<.8)||(y===55&&a<.35);
          const frame=!lite&&((y>=43&&y<=56&&a<1.75));
          const {u:u24}=bay(x,z,24),dw=(y>=33&&y<=37&&Math.abs(u24)<.75)||(y===38&&Math.abs(u24)<.3); // dwarf gallery
          if(y===32)id='polished_deepslate';
          else if(y<=40&&dw)id=d===0?null:'polished_deepslate';
          else if(y<=37&&d===0)id='polished_basalt';
          else if(y===39)id=d===0?'chiseled_stone_bricks':'stone_bricks';
          else if(y===40)id='polished_deepslate';
          else if(y>=59&&y<=60)id=y===59?'polished_deepslate':'chiseled_tuff_bricks';
          else if(y>=61)id='polished_deepslate';
          else if(lite&&(w.comp='drum-windows'))id=d===0?null:(a<.4&&y<=53?'stripped_dark_oak_log':(y===49?'stripped_dark_oak_log':'glass_pane'));
          else if(d===0&&y===56&&a<.6)id='chiseled_stone_bricks';
          else if(d===0&&frame)id='deepslate_bricks';
          if(id)put(x,y,z,id);else clr(x,y,z);}
      }
      if(rim(x,z,R2)){const {u,h}=bay(x,z,16),a=Math.abs(u);w.comp='pilasters';
        S(x,40,z,'stone_brick_stairs',true);put(x,41,z,'polished_andesite');
        if(h-a<.95){put(x,41,z,'polished_deepslate');S(x,42,z,'stone_brick_stairs');for(let y=43;y<=57;y++)put(x,y,z,y===50?'chiseled_stone_bricks':'stone_bricks');put(x,58,z,'chiseled_stone_bricks');}
        else if(a<1.3){w.comp='drum-windows';put(x,43,z,'dark_oak_slab',{up:true});put(x,42,z,'dark_oak_stairs',{f:inward(x,z),up:true});w.comp='pilasters';}
        if(h-a>=.95&&a<1.7)S(x,56,z,'deepslate_brick_stairs');      // hood over each window
        if(a<.6){put(x,57,z,'chiseled_stone_bricks');put(x,58,z,'lightning_rod');}
        put(x,59,z,'polished_deepslate');put(x,60,z,'chiseled_tuff_bricks');S(x,61,z,'stone_brick_stairs',true);put(x,62,z,'polished_deepslate');}
      // library inside the drum
      if(d===2){w.comp='library';const {u}=bay(x,z,16);if(Math.abs(u)>=1.1)for(let y=32;y<=48;y++)put(x,y,z,(RNG(x,y,z)<.12)?'chiseled_bookshelf':(y===32||y===48)?'dark_oak_planks':'bookshelf');}
    });
    w.comp='pilasters';
    ringCells(R2,18.6,(x,z)=>{if(!get(x,62,z))put(x,62,z,'polished_deepslate');});
    // lanterns on timber brackets off every pilaster
    w.comp='drum-orn';
    spotsAt(pillarAng(16),17.6,(x,z)=>!ins(x,z,R2+.9)&&ins(x,z,R2+1.9)).forEach(([x,z])=>{put(x,52,z,'dark_oak_fence');put(x,51,z,'lantern');});
    // pinnacles ring the foot of the dome
    spotsAt(pillarAng(16),17,(x,z)=>rim(x,z,R2)).forEach(([x,z])=>{for(let y=63;y<=67;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,68,z,'lightning_rod');});

    /* ===== Dome y63–85: copper scales in stepped courses, protruding dark oak ribs ===== */
    const CY=62,RH=16.4,RV=24;
    const rD=y=>RH*Math.sqrt(Math.max(0,1-((y-CY)/RV)**2));
    const inD=(x,y,z)=>y<=CY||(x*x+z*z)/(RH*RH)+((y-CY)*(y-CY))/(RV*RV)<=1;
    for(let y=63;y<=87;y++)for(let x=-17;x<=17;x++)for(let z=-17;z<=17;z++){
      if(!inD(x,y,z))continue;
      if(inD(x+1,y,z)&&inD(x-1,y,z)&&inD(x,y+1,z)&&inD(x,y-1,z)&&inD(x,y,z+1)&&inD(x,y,z-1))continue;
      const r=Math.hypot(x,z),{u,h}=bay(x,z,8),a=Math.abs(u),open=!inD(x,y+1,z);
      let id=open?'oxidized_cut_copper_stairs':(y%2?'oxidized_cut_copper':'oxidized_copper');
      w.comp='dome-shell';if(r>2.2&&h-a<.7){id=open?'dark_oak_stairs':'dark_oak_planks';w.comp='dome-ribs';}
      if(id.endsWith('stairs'))S(x,y,z,id);else put(x,y,z,id);}
    // raised ribs: a dark oak fin standing proud of the copper on each rib line
    w.comp='dome-ribs';
    for(let y=63;y<=83;y++){const rr=rD(y)+.9;for(const a of BUT){const x=Math.round(rr*Math.cos(a)),z=Math.round(rr*Math.sin(a));if(!get(x,y,z))put(x,y,z,'dark_oak_planks');}}

    /* ===== Lucarnes: eight gabled timber dormers with flanking pinnacles ===== */
    w.comp='lucarnes';
    for(const a of BAY){
      each((x,z)=>{const [rr,tt]=local(x,z,a);const at=Math.abs(tt);if(at>2.6||rr<12||rr>17.7)return;
        for(let y=63;y<=72;y++){
          const w=y<=69?2.6:y===70?2.1:y===71?1.4:.6;if(at>w)continue;
          if(inD(x,y,z)&&rr<rD(y)-1.2)continue;
          const front=rr>15.7;
          let id='dark_oak_planks';
          if(y>=70)id=(at>w-.9)?'dark_oak_stairs':'dark_oak_planks';
          else if(front&&at>2.0)id='stripped_dark_oak_log';
          else if(front&&y>=64&&y<=68)id=(at<.45||y===66)?'stripped_dark_oak_log':'glass_pane';
          else if(front&&y===69)id='chiseled_stone_bricks';
          else if(front&&y===63)id='polished_deepslate';
          if(id==='dark_oak_stairs'){const vx=tt>0?Math.sin(a):-Math.sin(a),vz=tt>0?-Math.cos(a):Math.cos(a);put(x,y,z,id,{f:Math.abs(vx)>=Math.abs(vz)?[Math.sign(vx),0]:[0,Math.sign(vz)],up:false});}
          else put(x,y,z,id);}
      });
      const P=(rr,tt)=>[Math.round(rr*Math.cos(a)-tt*Math.sin(a)),Math.round(rr*Math.sin(a)+tt*Math.cos(a))];
      const [gx,gz]=P(17.2,0);put(gx,73,gz,'lightning_rod');
    }

    /* ===== Lantern y85–103: timber-posted lantern, copper cupola, gold orb ===== */
    const LB=86;
    w.comp='lantern';
    each((x,z)=>{if(!ins(x,z,4.6))return;put(x,LB,z,'polished_deepslate');put(x,LB+9,z,'polished_deepslate');
      if(!ins(x,z,3.6))for(let y=LB+1;y<=LB+8;y++)put(x,y,z,'copper_grate');});
    spotsAt(BUT,4.1,(x,z)=>ins(x,z,4.6)&&!ins(x,z,3.6)).forEach(([x,z])=>{for(let y=LB+1;y<=LB+8;y++)put(x,y,z,'stripped_dark_oak_log');put(x,LB+9,z,'chiseled_stone_bricks');});
    each((x,z)=>{if(rim(x,z,4.6)){S(x,LB+9,z,'stone_brick_stairs',true);put(x,LB+10,z,'stone_brick_wall');}});
    put(0,LB+1,0,'copper_bulb');put(0,LB+2,0,'lantern');
    w.comp='cupola';
    for(let y=LB+10;y<=LB+15;y++)each((x,z)=>{const rr=3.9*Math.sqrt(Math.max(0,1-((y-LB-9.5)/6.2)**2));if(x*x+z*z<=rr*rr){const {u,h}=bay(x,z,4);put(x,y,z,(h-Math.abs(u)<.6&&Math.hypot(x,z)>1)?'dark_oak_planks':'oxidized_cut_copper');}});
    put(0,LB+16,0,'gold_block');card8.forEach(([x,z])=>put(x,LB+17,z,'gold_block'));put(0,LB+17,0,'gold_block');put(0,LB+18,0,'gold_block');
    for(let y=LB+19;y<=LB+20;y++)put(0,y,0,'lightning_rod');


    /* ===== Raise everything above the arches to make room for the new level ===== */
    const LIFT=42;
    {const moved=[...V.values()].filter(v=>v.y>=32);moved.forEach(v=>V.delete(K(v.x,v.y,v.z)));moved.forEach(v=>{v.y+=LIFT;V.set(K(v.x,v.y,v.z),v);});}

    /* ===== Level 2 · Rose-window storey y32–73: loggias, timber balconies, rose windows under gables, pier towers ===== */
    const RM=17.5,DM=depthMap(RM),RC=58,RR=6.4;
    const loggia=(u,y)=>{for(const c of [-3,0,3]){if((y>=37&&y<=44&&Math.abs(u-c)<.95)||(y===45&&Math.abs(u-c)<.5))return true;}return false;};
    each((x,z)=>{
      const d=DM(x,z);if(d!==0&&d!==1)return;
      const {u,h,k}=bay(x,z,8),a=Math.abs(u);
      for(let y=32;y<=73;y++){let id='stone_bricks';w.comp='rose-walls';
        const dy=y-RC,rr=Math.hypot(u,dy);
        if(y===32)id='polished_deepslate';
        else if(y===33||y===34)id=d===0?'polished_andesite':'stone_bricks';
        else if(a<4.3&&loggia(u,y))id=d===0?null:(y<=38&&a<.5?'dark_oak_door':'polished_deepslate');
        else if(d===0&&y>=36&&y<=46&&a<4.6)id='polished_andesite';
        else if(y===48)id=d===0?'chiseled_stone_bricks':'stone_bricks';
        else if(rr<=RR){w.comp='rose-windows';
          // pixel-planned rose: integer grid so every bar lands on a whole block
          const gu=Math.round(u),gy=y-RC,g=Math.hypot(gu,gy),spoke=gu===0||gy===0||Math.abs(gu)===Math.abs(gy);
          const oct=Math.floor(((Math.atan2(gy,gu)+Math.PI/8+2*Math.PI)%(2*Math.PI))/(Math.PI/4))%2;
          let t;
          if(g>5.5)t='polished_blackstone_bricks';                     // outer frame
          else if(g>4.5)t=spoke?'chiseled_stone_bricks':'G:clear';     // ring of lights, carved cusps on the eight axes
          else if(g>2.5)t=spoke?'stripped_dark_oak_log':(oct?'G:cyan':'G:yellow'); // eight petals
          else if(g>1.5)t='stripped_dark_oak_log';                     // hub ring
          else t=g<.5?'gold_block':'copper_grate';                     // hub
          const glass={'G:clear':'glass_pane','G:cyan':'cyan_stained_glass_pane','G:yellow':'yellow_stained_glass_pane'};
          if(t.startsWith('G:'))id=d===0?null:glass[t];
          else id=d===0?t:(t==='polished_blackstone_bricks'?'deepslate_bricks':null);}
        else if(d===0&&rr<=RR+.9&&(w.comp='rose-windows'))id='chiseled_stone_bricks';
        else if(y===69)id='polished_deepslate';
        else if(y===70)id=d===0?'chiseled_tuff_bricks':'stone_bricks';
        else if(y>=71)id='polished_deepslate';
        else if(d===0&&y%5===0)id='polished_andesite';
        if(id)put(x,y,z,id);else clr(x,y,z);}
    });
    // timber balcony in front of each loggia, gabled hood over each rose
    each((x,z)=>{if(!rim(x,z,RM))return;const {u}=bay(x,z,8),a=Math.abs(u);
      w.comp='rose-balconies';
      if(a<4.4){put(x,35,z,'dark_oak_slab',{up:true});put(x,36,z,'dark_oak_fence');if(Math.round(u)%2===0)put(x,34,z,'dark_oak_stairs',{f:inward(x,z),up:true});}
      w.comp='gables';
      for(let y=65;y<=71;y++){const w=5.9-(y-65)*.9;if(a>=w)continue;put(x,y,z,a>w-1?'stone_brick_stairs':'stone_bricks',a>w-1?{f:inward(x,z),up:false}:undefined);}
      if(a<.5)put(x,72,z,'lightning_rod');
      w.comp='rose-windows';
      for(let y=RC-7;y<=64;y++){const rr=Math.hypot(u,y-RC);if(rr>RR-.1&&rr<=RR+.9)put(x,y,z,y>=RC?'deepslate_brick_stairs':'chiseled_stone_bricks',y>=RC?{f:inward(x,z),up:true}:undefined);}
      w.comp='deck73';S(x,71,z,'stone_brick_stairs',true);if(a>=.5)put(x,72,z,(Math.floor(u+50)%2===0)?'stone_bricks':'stone_brick_wall');
    });
    w.comp='rose-balconies';
    spotsAt(BAY,17,(x,z)=>rim(x,z,RM)).forEach(([x,z])=>{put(x,47,z,'lantern');});
    w.comp='deck73';
    ringCells(RW,RM+1,(x,z)=>{if(!get(x,73,z))put(x,73,z,Math.hypot(x,z)<=14.5?'dark_oak_planks':'polished_andesite');});
    // pier towers continue the buttresses, each crowned with a cluster of pinnacles
    for(const a of BUT){
      const P=(rr,tt)=>[Math.round(rr*Math.cos(a)-tt*Math.sin(a)),Math.round(rr*Math.sin(a)+tt*Math.cos(a))];
      w.comp='pier-towers';
      each((x,z)=>{const [rr,tt]=local(x,z,a);if(Math.abs(tt)>1.55||rr<16||rr>19.6)return;
        for(let y=31;y<=73;y++){let id=y%6===1?'polished_andesite':'stone_bricks';
          if(Math.abs(tt)>1&&rr>18.5)id='deepslate_bricks';                       // corner shafts
          if(Math.abs(tt)<.5&&rr>18.5&&((y>=40&&y<=45)||(y>=55&&y<=61)))id='iron_bars'; // slit windows
          if(y===48)id='chiseled_stone_bricks';
          if(y===70)id='chiseled_tuff_bricks';
          if(y===73)id='oxidized_chiseled_copper';
          put(x,y,z,id);}
      });
      w.comp='tower-crowns';
      {const [x,z]=P(18.6,0);for(let y=74;y<=84;y++)put(x,y,z,y===79?'gilded_blackstone':'polished_blackstone_brick_wall');put(x,85,z,'lightning_rod');}
      for(const [rr,t] of [[17.6,-1],[17.6,1],[19.4,-1],[19.4,1]]){const [x,z]=P(rr,t);for(let y=74;y<=77;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,78,z,'lightning_rod');}
      {const [x,z]=P(19.4,0);put(x,51,z,'dark_oak_fence');put(x,50,z,'lantern');}
    }
    /* ===== Inside ===== */
    function stair(rIn,rOut,y0,n,th0,radius,openY,openFrom,mat){const a=1/radius;
      each((x,z)=>{const r=Math.hypot(x,z);if(r<=rIn||r>rOut)return;
        let dt=Math.atan2(z,x)-th0;dt=((dt%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
        const k=Math.floor(dt/a)+1;if(k<1||k>n)return;
        for(let y=y0+1;y<y0+k;y++)put(x,y,z,mat);
        const t=Math.atan2(z,x)+Math.PI/2;put(x,y0+k,z,'stone_brick_stairs',{f:Math.abs(Math.cos(t))>Math.abs(Math.sin(t))?[Math.sign(Math.cos(t)),0]:[0,Math.sign(Math.sin(t))],up:false});
        for(let y=y0+k+1;y<=y0+k+3&&y<openY;y++){const g=get(x,y,z);if(g)clr(x,y,z);}
        if(k>=openFrom)clr(x,openY,z);});}
    const ST1=Math.PI/2+.5;
    const onStair=(x,z)=>{const r=Math.hypot(x,z);if(r<=13.5||r>15.5)return false;let dt=Math.atan2(z,x)-ST1;dt=((dt%(2*Math.PI))+2*Math.PI)%(2*Math.PI);return dt<31/14.5+.1;};

    // arcade of eight basalt columns round the map, carrying the first balcony on pointed arches
    w.comp='columns';
    const PIERS=spotsAt(BUT,11.7,(x,z)=>{const r=Math.hypot(x,z);return r>RW+.4&&r<=12.3;});
    PIERS.forEach(([x,z])=>{put(x,1,z,'polished_deepslate');for(let y=2;y<=26;y++)put(x,y,z,'polished_basalt');put(x,27,z,'chiseled_stone_bricks');});
    each((x,z)=>{const r=Math.hypot(x,z);if(r<=RW||r>12.4)return;const {u,h}=bay(x,z,8),a=Math.abs(u);
      if(!get(x,30,z))put(x,30,z,'stone_bricks');
      if(a>h-3.2&&!get(x,29,z))put(x,29,z,'stone_bricks');
      if(a>h-1.8&&!get(x,28,z))put(x,28,z,'stone_bricks');
      if(a>h-.9&&!get(x,27,z))put(x,27,z,'stone_bricks');});
    spotsAt(BAY,11.5,(x,z)=>{const r=Math.hypot(x,z);return r>RW&&r<=12.3&&!get(x,29,z);}).forEach(([x,z])=>{put(x,29,z,'chain');put(x,28,z,'lantern');});
    // sconces on every column
    PIERS.forEach(([x,z])=>{const [ix,iz]=inward(x,z);put(x+ix,14,z+iz,'lantern');});

    // the walk behind the columns: low bookshelves along the wall, cartographer's tables, lecterns
    w.role='furnish';w.comp='furniture';
    each((x,z)=>{const r=Math.hypot(x,z);if(r<=14.6||r>15.5||onStair(x,z))return;if(Math.abs(z)>13&&Math.abs(x)<=2)return;
      put(x,1,z,'bookshelf');put(x,2,z,'bookshelf');put(x,3,z,'dark_oak_slab');});
    BAY.forEach((a,i)=>{if(i===6)return;const b=a+Math.PI/16,x=Math.round(14.2*Math.cos(b)),z=Math.round(14.2*Math.sin(b));if(onStair(x,z))return;
      put(x,1,z,'cartography_table');const c=a-Math.PI/16,lx=Math.round(14.2*Math.cos(c)),lz=Math.round(14.2*Math.sin(c));if(!onStair(lx,lz))put(lx,1,lz,'lectern');});
    w.role=null;
    w.comp='stair1';stair(13.5,15.5,0,31,ST1,14.5,31,27,'stone_bricks');
    w.comp='stair2';stair(13.5,15.5,31,42,-Math.PI/2+.5,14.5,73,38,'stone_bricks');
    each((x,z)=>{if(rim(x,z,RW)){w.comp='pulpits';put(x,32,z,'iron_bars');w.comp='deck73';put(x,74,z,'iron_bars');}});

    // four viewing pulpits corbelled out over the well from the first balcony
    w.comp='pulpits';
    BUT.filter((_,i)=>i%2===0).forEach(a=>{each((x,z)=>{const [rr,tt]=local(x,z,a);if(Math.abs(tt)>1.6||rr<8.6||rr>RW+.9)return;
      put(x,31,z,'dark_oak_planks');put(x,30,z,'dark_oak_stairs',{f:outward(x,z),up:true});
      clr(x,32,z);if(rr<9.6||Math.abs(tt)>1.1)put(x,32,z,'iron_bars');});});

    // armillary sphere hung over the map: copper meridians and equator, dark oak ecliptic, a gold sun
    w.role='furnish';w.comp='armillary';
    const AY=50,AR=4.5,EPS=23.4*Math.PI/180;
    for(let x=-5;x<=5;x++)for(let y=AY-5;y<=AY+5;y++)for(let z=-5;z<=5;z++){const dy=y-AY;
      const eq=Math.abs(dy)<.5&&Math.abs(Math.hypot(x,z)-AR)<.55;
      const m1=Math.abs(x)<.5&&Math.abs(Math.hypot(z,dy)-AR)<.55, m2=Math.abs(z)<.5&&Math.abs(Math.hypot(x,dy)-AR)<.55;
      const yp=dy*Math.cos(EPS)-z*Math.sin(EPS),zp=dy*Math.sin(EPS)+z*Math.cos(EPS);
      const ec=Math.abs(yp)<.5&&Math.abs(Math.hypot(x,zp)-AR)<.6;
      if(eq||m1||m2)put(x,y,z,'oxidized_cut_copper');else if(ec)put(x,y,z,'dark_oak_planks');}
    put(0,AY,0,'gold_block');for(let y=AY+1;y<=AY+4;y++)if(!get(0,y,0))put(0,y,0,'chain');
    for(let y=AY-4;y<AY;y++)if(!get(0,y,0))put(0,y,0,'chain');
    for(let y=AY+6;y<=127;y++)put(0,y,0,'chain');
    card8.forEach(([x,z])=>{const px=Math.round(x*AR),pz=Math.round(z*AR);put(px,AY-1,pz,'lantern');});
    w.role=null;
  }
});
