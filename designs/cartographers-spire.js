/* Cartographer's Spire — a Gothic tower with a slate spire over a square 15-block floor map.
   An earlier concept for the same site: 35 blocks across, 171 tall. x 0, z 0 is the center of the map. */
BK.register({
  id:'cartographers-spire',
  version:1,
  name:"Cartographer's Spire",
  blurb:'A Gothic tower: lancet nave with four rose windows, flying buttresses, a louvred belfry with bells and gargoyles, and a crocketed slate spire.',
  tags:['Gothic','Spire','Map room','Concept'],
  edition:'Bedrock',
  extent:24,
  start:{x:17,y:1,z:0},
  ring:17.5,
  steps:[
    ['Floor','floor','Map & floor'],
    ['Nave','buttresses','Buttress piers & flyers'],['Nave','nave','Nave walls & rose windows'],['Nave','portal','South portal'],['Nave','pier-pinnacles','Pier pinnacles'],
    ['Inside','inside','Arcade, stairs & lights'],
    ['Belfry','gallery','Gallery & lancets'],['Belfry','belfry','Belfry & louvres'],['Belfry','bells','Bells'],['Belfry','gargoyles','Gargoyles & pinnacles'],
    ['Spire','spire','Slate spire'],['Spire','crockets','Crockets & hoods'],['Spire','finial','Finial & cross'],['Spire','chandelier','Chandelier']
  ],
  tiers:[
    {a:0,b:0,name:'Floor',p:'A square 15 × 15 map framed in polished blackstone, with a gilded north mark and blackstone rhumb lines.'},
    {a:1,b:21,name:'Nave',p:'Stone walls with twin lancets between buttress piers, four rose windows on the compass points, and flying buttresses.'},
    {a:23,b:44,name:'Gallery',p:'Deepslate walls with triple lancets and standing tracery.'},
    {a:45,b:64,name:'Belfry',p:'Blackstone belfry with louvred openings, hanging bells and gargoyles at the bay centers.'},
    {a:65,b:170,name:'Spire',p:'An octagonal slate spire with blackstone corner ribs, gilded crockets and spire lights, topped with a gilded cross.'}
  ],
  notes:[['Concept','This was an alternative direction for the map room. It has not been refined like the rotunda.']],
  build(w){
    const {V,K,put,clr,get,ins,rim,each,depthMap,bay,inward,outward,S,SO,spotsAt,pillarAng,bayAng,RNG,vn}=w;
    const mapColor=(x,z)=>{const e=.62*vn(x/4.2+3,z/4.2+5)+.38*vn(x/1.9+11,z/1.9+2);
      return e<.33?'#3f5bc0':e<.42?'#4f70d4':e<.46?'#e6d9a0':e<.66?'#7fb238':e<.79?'#3f8a2a':'#8f8f8f';};
    const R1=17.5,R2=14.5,R3=12.5,RW=10.5;
    const D1=depthMap(R1),D2=depthMap(R2);

    w.comp='floor';
    /* ===== Floor y0 ===== */
    each((x,z)=>{
      if(!ins(x,z,R1))return;
      const ax=Math.abs(x),az=Math.abs(z),m=Math.max(ax,az);
      let f='stone_bricks';
      if(m<=7)f='map';
      else if(m===8)f=(ax===8&&az===8)?'chiseled_polished_blackstone':'polished_blackstone_bricks';
      else if(m===9)f='polished_deepslate';
      else if(ax<=1&&az>=10)f=z<0?(ax===0?'gilded_blackstone':'polished_blackstone'):'polished_blackstone';
      else if(az<=1&&ax>=10)f='polished_blackstone';
      else if(D1(x,z)===4)f='deepslate_tiles';
      put(x,0,z,f,f==='map'?{hue:mapColor(x,z)}:undefined);
    });

    w.comp='nave';
    /* ===== Tier 1 · Nave y1–21: stone walls, twin lancets, four rose windows ===== */
    const twin=(u,y)=>{const a=Math.abs(u);return (y>=4&&y<=15&&a>=1&&a<3.6)||(y===16&&a>=1.4&&a<3.2)||(y===17&&a>=1.9&&a<2.7);};
    const foil1=(u,y)=>{const a=Math.abs(u);return (y===18&&a<1.5)||((y===17||y===19)&&a<.5);};
    const twinZone=(u,y)=>y>=4&&y<=19&&Math.abs(u)<3.6;
    function roseCell(u,y,cy,R){const dy=y-cy,r=Math.hypot(u,dy);if(r>R)return null;
      if(r>R-.85)return'polished_blackstone_bricks';
      if(r<.9)return'gilded_blackstone';
      const a=Math.abs(u),b=Math.abs(dy);
      if(a<.5||b<.5||Math.abs(a-b)<.55)return'polished_blackstone';
      return r<2.7?'red_stained_glass_pane':'purple_stained_glass_pane';}
    each((x,z)=>{
      const d=D1(x,z);
      if(rim(x,z,R1)){put(x,0,z,'polished_deepslate');S(x,1,z,'stone_brick_stairs');S(x,20,z,'deepslate_tile_stairs',true);put(x,21,z,'polished_blackstone_brick_wall');}
      if(d===0||d===1){const {u,h,k}=bay(x,z,8);const card=k%2===0,pil=Math.abs(u)>h-1.2;
        for(let y=1;y<=21;y++){let id='stone_bricks';
          if(y===1)id='polished_deepslate';
          else if(y===3)id='chiseled_stone_bricks';
          else if(y===20)id=d===0?'chiseled_stone_bricks':'stone_bricks';
          else if(y===21)id=d===0?'polished_deepslate':'deepslate_tile_stairs';
          else if(card&&y>=9&&y<=19&&roseCell(u,y,14,4.6)){const rc=roseCell(u,y,14,4.6);id=d===0?rc:null;}
          else if(!card&&twinZone(u,y)){
            if(d===0)id=twin(u,y)||foil1(u,y)?null:'polished_blackstone';
            else id=twin(u,y)||foil1(u,y)?'gray_stained_glass_pane':'stone_bricks';}
          else if(!card&&d===0&&y>=4&&y<=20&&Math.abs(u)<4.2&&Math.abs(u)>=3.6)id='polished_blackstone_bricks';
          if(id==='deepslate_tile_stairs'){S(x,y,z,id);continue;}
          if(id)put(x,y,z,id);}
      }
      // aisle roof between the nave wall and the gallery
      if(ins(x,z,R1)&&!ins(x,z,R2)&&d>=2){put(x,21,z,'deepslate_tiles');S(x,22,z,'deepslate_tile_stairs');}
      if(ins(x,z,R2)&&!ins(x,z,RW))put(x,22,z,'dark_oak_planks');
      if(rim(x,z,RW))put(x,23,z,'dark_oak_fence');
    });

    w.comp='buttresses';
    /* ===== Buttress piers and flying buttresses (8, between the bays) ===== */
    const pierA=pillarAng(8);
    for(const a of pierA){const ca=Math.cos(a),sa=Math.sin(a);
      each((x,z)=>{const rr=x*ca+z*sa,tt=-x*sa+z*ca;
        if(Math.abs(tt)>1.05)return;
        if(rr>16.6&&rr<=21.6){
          const top=rr>20.6?8:rr>19.6?15:27;
          for(let y=0;y<=top;y++)put(x,y,z,y<=1?'polished_deepslate':(y===top&&top<27?'deepslate_bricks':'deepslate_bricks'));
          if(top<27)put(x,top+1,z,'deepslate_tile_stairs',{f:inward(x,z),up:false});
          else{put(x,28,z,'chiseled_polished_blackstone');}
          if(Math.abs(tt)<.5&&rr>20.6)put(x,5,z,'polished_blackstone_bricks');
          if(Math.abs(tt)<.5&&rr>19.6&&rr<=20.6)put(x,12,z,'polished_blackstone_bricks');
        }
        // flyer: from the pier top to the gallery wall
        if(Math.abs(tt)<=.55&&rr>14.4&&rr<=16.6){const yt=Math.round(27+(16.6-rr)*2.4);
          put(x,yt,z,'deepslate_bricks');put(x,yt-1,z,'deepslate_brick_stairs',{f:outward(x,z),up:true});}
      });
    }
    w.comp='pier-pinnacles';
    // pier pinnacles
    spotsAt(pierA,19,(x,z)=>get(x,28,z)?.id==='chiseled_polished_blackstone').forEach(([x,z])=>{for(let y=29;y<=33;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,34,z,'end_rod');});

    w.comp='gallery';
    /* ===== Tier 2 · Gallery y23–44: deepslate, triple lancets with standing tracery ===== */
    const tri=(u,y)=>{const a=Math.abs(u);return (y>=28&&y<=40&&a<.9)||(y===41&&a<.4)||(y>=28&&y<=37&&a>=1.5&&a<3.3)||(y===38&&a>=1.9&&a<2.9);};
    const triZone=(u,y)=>y>=27&&y<=42&&Math.abs(u)<3.9;
    each((x,z)=>{
      const d=D2(x,z);
      if(d===0||d===1){const {u,h}=bay(x,z,8);const pil=Math.abs(u)>h-1.2;
        for(let y=23;y<=44;y++){let id='deepslate_bricks';
          if(y===23)id='polished_deepslate';
          else if(y===44)id='polished_deepslate';
          else if(y===43)id=d===0?'chiseled_polished_blackstone':'deepslate_bricks';
          else if(d===0&&pil&&y>=25)id=(y===34||y===35)?'chiseled_polished_blackstone':'polished_deepslate';
          else if(triZone(u,y)){
            if(d===0)id=tri(u,y)?null:(Math.abs(u)>=3.3||y===42?'polished_blackstone_bricks':'polished_blackstone');
            else id=tri(u,y)?'gray_stained_glass_pane':'deepslate_bricks';}
          if(id)put(x,y,z,id);}
      }
      if(rim(x,z,R2)){S(x,43,z,'deepslate_tile_stairs',true);put(x,44,z,'polished_blackstone_brick_wall');}
      // gallery roof up to the belfry
      if(ins(x,z,R2)&&!ins(x,z,R3)){if(d===0)S(x,45,z,'deepslate_tile_stairs');else{put(x,45,z,'deepslate_tiles');S(x,46,z,'deepslate_tile_stairs');}}
      if(ins(x,z,R3)&&!ins(x,z,RW))put(x,44,z,'dark_oak_planks');
      if(rim(x,z,RW))put(x,45,z,'dark_oak_fence');
    });

    w.comp='belfry';
    /* ===== Tier 3 · Belfry y45–64: blackstone, louvred openings, bells, gargoyles ===== */
    each((x,z)=>{
      if(ins(x,z,R3)&&!ins(x,z,11.5)&&!rim(x,z,RW)){}
      if(ins(x,z,R3)&&!ins(x,z,R3-1)){const {u,h}=bay(x,z,8);const pil=Math.abs(u)>h-1.1,a=Math.abs(u);
        for(let y=45;y<=64;y++){let id='deepslate_bricks';
          if(y===63||y===64||y===45)id='polished_deepslate';
          else if(pil)id=(y===50||y===57)?'chiseled_polished_blackstone':'polished_blackstone_bricks';
          else if(a<3.3&&a>=2.7&&y>=48&&y<=61)id='polished_blackstone_bricks';
          else if(!pil&&y>=48&&y<=61&&a<2.7){
            if(a<.5)id=y===61?'chiseled_polished_blackstone':'polished_blackstone';
            else if(y<=53)id='iron_bars';
            else if(y<=59)id=null;
            else if(y===60)id=a<2.1?null:'polished_blackstone';
            else id=a<1.4?null:'polished_blackstone';}
          if(id)put(x,y,z,id);else clr(x,y,z);}
      }
      if(rim(x,z,R3)&&!ins(x,z,R2-1)){}
    });
    each((x,z)=>{if(rim(x,z,R3)){S(x,63,z,'polished_blackstone_stairs',true);put(x,64,z,'polished_blackstone_brick_wall');}});
    w.comp='bells';
    // bells hang just inside each opening
    spotsAt(bayAng(8),11,(x,z)=>ins(x,z,R3-1)&&!ins(x,z,RW)).forEach(([x,z])=>put(x,57,z,'bell'));
    w.comp='gargoyles';
    // gargoyles at bay centers, belfry pinnacles at the piers
    spotsAt(bayAng(8),13.2,(x,z)=>rim(x,z,R3)).forEach(([x,z])=>{put(x,62,z,'chiseled_polished_blackstone');const [ox,oz]=outward(x,z);put(x+ox,62,z+oz,'polished_blackstone_stairs',{f:inward(x,z),up:true});});
    spotsAt(pillarAng(8),13.2,(x,z)=>rim(x,z,R3)).forEach(([x,z])=>{for(let y=63;y<=67;y++)put(x,y,z,'polished_blackstone_bricks');put(x,68,z,'chiseled_polished_blackstone');for(let y=69;y<=76;y++)put(x,y,z,'polished_blackstone_brick_wall');put(x,72,z,'gilded_blackstone');put(x,77,z,'end_rod');});

    w.comp='spire';
    /* ===== Spire y65–160: octagonal slate spire, blackstone corner ribs, gilded crockets, spire lights ===== */
    const SB=65,ST=160,SR=10.4;
    const rad=y=>Math.max(SR*Math.pow(1-(y-SB)/(ST-SB),1.12),.5);
    const oct=(x,z)=>Math.max(Math.abs(x),Math.abs(z),(Math.abs(x)+Math.abs(z))/Math.SQRT2);
    const corner=(x,z)=>Math.abs(Math.max(Math.abs(x),Math.abs(z))-(Math.abs(x)+Math.abs(z))/Math.SQRT2)<.75;
    for(let y=SB;y<=ST;y++){const rr=rad(y);
      each((x,z)=>{if(Math.abs(x)>12||Math.abs(z)>12)return;const r=oct(x,z);if(r>rr)return;
        const nb=[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>oct(x+a,z+b)>rr)||(y<ST&&r>rad(y+1));
        if(!nb)return;
        let id='deepslate_tiles';
        if(corner(x,z)||rr<1.6)id='deepslate_bricks';
        if((y-SB)%22===21&&!corner(x,z))id='polished_blackstone_bricks';
        if(y===SB||y===SB+1)id='polished_deepslate';
        const face=Math.abs(x)>=Math.abs(z)?(x>0?'e':'w'):(z>0?'s':'n');
        for(const ly of [82,104,126])if(y>=ly&&y<=ly+2&&!corner(x,z)&&(Math.abs(x)<=.5||Math.abs(z)<=.5))id='gray_stained_glass_pane';
        put(x,y,z,id);});
    }
    each((x,z)=>{if(ins(x,z,R3-1)&&oct(x,z)>SR+.1)put(x,64,z,'polished_deepslate');});
    w.comp='crockets';
    // crockets on the eight corner ribs, gabled hoods over the spire lights
    for(let y=SB+10;y<ST-10;y+=13){const rr=rad(y);
      for(const a of pillarAng(8)){const x=Math.round((rr+1)*Math.cos(a)),z=Math.round((rr+1)*Math.sin(a));if(!get(x,y,z)&&oct(x,z)>rr)put(x,y,z,'gilded_blackstone');}}
    for(const ly of [82,104,126]){const rr=rad(ly+3);
      for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const R=Math.floor(rr)+1;
        for(let t=-1;t<=1;t++){const x=dx*R+(dz?t:0),z=dz*R+(dx?t:0);
          if(t===0){put(x,ly+3,z,'polished_blackstone_bricks');put(x,ly+4,z,'end_rod');}
          else put(x,ly+3,z,'polished_blackstone_stairs',{f:dx?[0,-t]:[-t,0],up:false});}}}
    w.comp='finial';
    // finial and gilded cross
    for(let y=ST+1;y<=ST+2;y++)put(0,y,0,'polished_blackstone_bricks');
    put(0,ST+3,0,'gold_block');[[1,0],[-1,0],[0,1],[0,-1]].forEach(([x,z])=>put(x,ST+3,z,'gilded_blackstone'));
    for(let y=ST+4;y<=ST+10;y++)put(0,y,0,'gold_block');
    for(const x of [-2,-1,1,2])put(x,ST+8,0,'gold_block');

    w.comp='portal';
    /* ===== South portal: deep pointed arch under a gable ===== */
    each((x,z)=>{if(Math.abs(x)<=2&&z>0&&(D1(x,z)===0||D1(x,z)===1)){for(let y=1;y<=6;y++)clr(x,y,z);if(Math.abs(x)<=1)clr(x,7,z);if(x===0)clr(x,8,z);}});
    for(let x=-5;x<=5;x++)for(let z=17;z<=23;z++){if(ins(x,z,R1))continue;for(let y=0;y<=22;y++)clr(x,y,z);}
    for(let x=-4;x<=4;x++)for(let z=17;z<=21;z++){if(ins(x,z,R1))continue;
      put(x,0,z,Math.abs(x)<=3?'polished_deepslate':'polished_blackstone');
      const ax=Math.abs(x);
      for(let y=1;y<=10;y++){
        const open=(ax<=2&&y<=6)||(ax<=1&&y===7)||(ax===0&&y===8);
        if(open)continue;
        let id='deepslate_bricks';
        if(z===21&&((ax===3&&y<=7)||(ax===2&&(y===7||y===8))||(ax===1&&(y===8||y===9))||(ax===0&&y===9)))id='polished_blackstone_bricks';
        if(z===21&&ax===4)id='polished_blackstone_bricks';
        put(x,y,z,id);}
      for(let lv=0;lv<5;lv++){const y=11+lv,w=3-lv;if(w<0)break;
        if(ax>w)continue;
        if(ax===w&&w>0)put(x,y,z,z===21?'polished_blackstone_stairs':'deepslate_tile_stairs',{f:[-Math.sign(x),0],up:false});
        else put(x,y,z,z===21?(x===0&&y===12?'gilded_blackstone':'deepslate_bricks'):'deepslate_tiles');}
    }
    put(0,14,21,'polished_blackstone_brick_wall');put(0,15,21,'gold_block');
    for(const x of [-4,4]){for(let y=11;y<=14;y++)put(x,y,21,'polished_blackstone_brick_wall');put(x,15,21,'end_rod');}
    for(let x=-3;x<=3;x++)put(x,0,22,'stone_brick_stairs',{f:[0,-1],up:false});
    put(0,6,18,'lantern');

    w.comp='inside';
    /* ===== Inside: basalt arcade round the map, stairs, lights ===== */
    const colA=pillarAng(8);
    spotsAt(colA,11.6,(x,z)=>!ins(x,z,RW)&&ins(x,z,12.3)).forEach(([x,z])=>{for(let y=1;y<=20;y++)put(x,y,z,'polished_basalt');put(x,21,z,'chiseled_polished_blackstone');});
    each((x,z)=>{if(!ins(x,z,12.3)||ins(x,z,RW))return;const {u,h}=bay(x,z,8),a=Math.abs(u);
      if(!get(x,21,z))put(x,21,z,'deepslate_bricks');
      if(a>h-2.6&&!get(x,20,z))put(x,20,z,'deepslate_bricks');
      if(a>h-1.5&&!get(x,19,z))put(x,19,z,'deepslate_bricks');
      if(a>h-.9&&!get(x,18,z))put(x,18,z,'deepslate_bricks');});
    spotsAt(bayAng(8),11.3,(x,z)=>!ins(x,z,RW)&&ins(x,z,12.3)).forEach(([x,z])=>{put(x,20,z,'soul_lantern');});
    spotsAt(bayAng(8),11.2,(x,z)=>rim(x,z,RW)).forEach(([x,z])=>{put(x,43,z,'lantern');});
    function stair(rIn,rOut,y0,n,th0,radius,openY,openFrom,mat){const a=1/radius;
      each((x,z)=>{const r=Math.hypot(x,z);if(r<=rIn||r>rOut)return;
        let dt=Math.atan2(z,x)-th0;dt=((dt%(2*Math.PI))+2*Math.PI)%(2*Math.PI);
        const k=Math.floor(dt/a)+1;if(k<1||k>n)return;
        for(let y=y0+1;y<y0+k;y++)put(x,y,z,mat);
        const t=Math.atan2(z,x)+Math.PI/2;put(x,y0+k,z,'stone_brick_stairs',{f:Math.abs(Math.cos(t))>Math.abs(Math.sin(t))?[Math.sign(Math.cos(t)),0]:[0,Math.sign(Math.sin(t))],up:false});
        for(let y=y0+k+1;y<=y0+k+3&&y<openY;y++){const g=get(x,y,z);if(g&&g.id!=='polished_basalt')clr(x,y,z);}
        if(k>=openFrom)clr(x,openY,z);});}
    stair(12.4,15.5,0,22,Math.PI/2+.32,14,22,19,'stone_bricks');
    stair(11.4,12.5,22,22,-Math.PI/2+.32,12,44,19,'deepslate_bricks');
    w.comp='chandelier';
    // chandelier: a long chain from the spire down the well
    for(let y=48;y<=140;y++)put(0,y,0,'chain');put(0,47,0,'soul_lantern');
    spotsAt(pillarAng(8),18.6,(x,z)=>rim(x,z,R1)&&get(x,21,z)?.id==='polished_blackstone_brick_wall').forEach(([x,z],i)=>{});
    spotsAt(bayAng(8),18.2,(x,z)=>rim(x,z,R1)&&get(x,21,z)?.id==='polished_blackstone_brick_wall').forEach(([x,z])=>put(x,22,z,'lantern'));
    spotsAt(bayAng(8),15.2,(x,z)=>rim(x,z,R2)&&get(x,44,z)?.id==='polished_blackstone_brick_wall').forEach(([x,z])=>put(x,45,z,'soul_lantern'));
  }
});
