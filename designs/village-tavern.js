/* Village Tavern — a two-storey inn: a stone taproom with a timber-framed upper floor that juts out over the street,
   a long spruce roof and a brick chimney. x 0, z 0 is the middle of the ground floor; the door faces south. */
BK.register({
  id:'village-tavern',
  version:1,
  name:'Village Tavern',
  blurb:'A two-storey inn: stone taproom with a bar and tables, a jettied timber-framed upper floor with guest beds, and a long spruce roof.',
  tags:['Medieval','Village','Tavern','Medium'],
  edition:'Bedrock',
  extent:9,
  start:{x:0,y:1,z:4},
  figure:{x:-3,z:8},
  steps:[
    ['Ground','floor','Floor & yard'],
    ['Ground','stone','Stone walls'],
    ['Ground','ground-openings','Door & windows'],
    ['Upper','jetty','Jetty floor & corbels'],
    ['Upper','frame','Timber frame'],
    ['Upper','panels','Plaster panels'],
    ['Upper','upper-windows','Upper windows'],
    ['Roof','gables','Gable ends'],
    ['Roof','roof','Spruce roof'],
    ['Roof','chimney','Hearth & chimney'],
    ['Inside','stairs','Staircase'],
    ['Inside','taproom','Bar & tables'],
    ['Inside','rooms','Guest rooms'],
    ['Outside','outside','Lanterns, barrels & bench']
  ],
  tiers:[
    {a:0,b:4,name:'Taproom',p:'Cobblestone and stone brick walls with wide windows. Inside: a bar with barrels behind it, two tables and a hearth.'},
    {a:5,b:9,name:'Upper floor',p:'Dark oak frame and calcite panels. It juts one block over the street on dark oak corbels, with lanterns hung underneath.'},
    {a:10,b:15,name:'Roof',p:'A spruce stair roof over plastered gables, with a brick chimney at the west end.'}
  ],
  notes:[['Order','Build the jetty floor before the upper frame: the front posts stand on its overhang.']],
  build(w){
    const {put,clr,RNG}=w;
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const X0=-6,X1=6,Z0=-4,Z1=4,ZU=5; // ground walls end at z 4, the upper floor at z 5
    const edge=(x,z,z1)=>x===X0||x===X1||z===Z0||z===z1;

    w.comp='floor';
    box(X0,X1,0,0,Z0,Z1,'cobblestone');box(X0+1,X1-1,0,0,Z0+1,Z1-1,'spruce_planks');
    for(let x=-1;x<=1;x++)for(let z=Z1+1;z<=9;z++)put(x,0,z,RNG(x,0,z)<.3?'cobblestone':'gravel');

    w.comp='stone';
    for(let x=X0;x<=X1;x++)for(let z=Z0;z<=Z1;z++){if(!edge(x,z,Z1))continue;
      const corner=(x===X0||x===X1)&&(z===Z0||z===Z1);
      for(let y=1;y<=4;y++)put(x,y,z,corner?'stone_bricks':y===1?'cobblestone':(RNG(x,y,z)<.2?'mossy_stone_bricks':'stone_bricks'));}

    w.comp='ground-openings';
    put(0,1,Z1,'dark_oak_door');put(0,2,Z1,'dark_oak_door');put(0,3,Z1,'chiseled_stone_bricks');
    for(const s of [-1,1]){for(let x=2;x<=4;x++)for(let y=2;y<=3;y++)put(s*x,y,Z1,'glass_pane');
      for(let z=-2;z<=2;z+=4)for(let y=2;y<=3;y++)put(s*X1,y,z,'glass_pane');}
    for(const x of [-3,3])for(let y=2;y<=3;y++)put(x,y,Z0,'glass_pane');

    w.comp='jetty';
    box(X0,X1,5,5,Z0,ZU,'dark_oak_planks');
    for(const x of [-6,-3,0,3,6])st(x,4,ZU,'dark_oak_stairs',0,-1,true);

    w.comp='frame';
    const postX=[-6,-3,0,3,6],postZ=[-4,0,5];
    for(let x=X0;x<=X1;x++)for(let z=Z0;z<=ZU;z++){if(!edge(x,z,ZU))continue;
      const post=((z===Z0||z===ZU)&&postX.includes(x))||((x===X0||x===X1)&&postZ.includes(z));
      if(post)for(let y=6;y<=8;y++)put(x,y,z,'stripped_dark_oak_log');
      put(x,9,z,'stripped_dark_oak_log');}

    w.comp='panels';
    for(let x=X0;x<=X1;x++)for(let z=Z0;z<=ZU;z++){if(!edge(x,z,ZU))continue;for(let y=6;y<=8;y++)if(!w.get(x,y,z))put(x,y,z,'calcite');}

    w.comp='upper-windows';
    for(const z of [Z0,ZU])for(const x of [-5,-4,-2,-1,1,2,4,5])if(z===ZU||Math.abs(x)!==4)for(let y=7;y<=8;y++)put(x,y,z,'glass_pane');
    for(const x of [X0,X1])for(const z of [-2,2,3])for(let y=7;y<=8;y++)put(x,y,z,'glass_pane');
    for(const x of [-5,-4,-2,-1,1,2,4,5])put(x,6,ZU+1,'spruce_trapdoor',{f:[0,1]});
    for(const x of [-4,-1,1,4])put(x,7,ZU+1,'flower_pot');

    w.comp='gables';
    for(let i=0;i<=4;i++)for(let z=Z0-1+i+1;z<=ZU+1-i-1;z++)for(const x of [X0,X1]){
      const id=(z===0||z===1)&&i<4?'stripped_dark_oak_log':'calcite';put(x,10+i,z,id);}
    for(const x of [X0,X1])put(x,12,1,'glass_pane'),put(x,12,0,'glass_pane');

    w.comp='roof';
    for(let i=0;i<=5;i++)for(let x=X0-1;x<=X1+1;x++){st(x,10+i,Z0-1+i,'spruce_stairs',0,1);st(x,10+i,ZU+1-i,'spruce_stairs',0,-1);}
    for(let x=X0-1;x<=X1+1;x++){put(x,16,0,'spruce_slab');put(x,16,1,'spruce_slab');}
    for(let i=0;i<=5;i++)for(const x of [X0-1,X1+1]){st(x,9+i,Z0-1+i,'spruce_stairs',0,-1,true);st(x,9+i,ZU+1-i,'spruce_stairs',0,1,true);}

    w.comp='chimney';
    for(let y=1;y<=17;y++)put(-5,y,-3,'bricks');
    put(-5,18,-3,'brick_wall');
    put(-4,1,-3,'bricks');put(-4,2,-3,'bricks');put(-5,1,-2,'bricks');put(-5,2,-2,'bricks');put(-4,3,-3,'bricks');put(-5,3,-2,'bricks');
    put(-4,1,-2,'furnace');

    w.comp='stairs';
    // up along the east wall, rising northward into a hole in the upper floor
    for(let i=0;i<4;i++){const z=3-i,y=1+i;st(5,y,z,'spruce_stairs',0,-1);for(let yy=1;yy<y;yy++)put(5,yy,z,'spruce_planks');clr(5,5,z);}
    for(let z=0;z<=3;z++)put(4,6,z,'spruce_fence');

    w.comp='taproom';w.role='furnish';
    for(let x=-2;x<=3;x++)put(x,1,-1,x===-2?'spruce_planks':'spruce_slab',x===-2?undefined:{up:true});
    for(let x=-1;x<=3;x++)put(x,1,-3,'barrel'),put(x,2,-3,x%2?'barrel':'flower_pot');
    for(const x of [-1,1,3])put(x,1,0,'spruce_stairs',{f:[0,1]});
    for(const [tx,tz] of [[-4,2],[3,2]]){put(tx,1,tz,'spruce_fence');put(tx,2,tz,'oak_pressure_plate');
      st(tx-1,1,tz,'spruce_stairs',-1,0);st(tx+1,1,tz,'spruce_stairs',1,0);}
    for(const x of [-3,0,3]){put(x,4,0,'chain');put(x,3,0,'lantern');}

    w.comp='rooms';
    for(const x of [-3,0,3]){put(x,6,-3,'red_bed');put(x,6,-2,'red_bed');put(x+1,6,-3,'chest');put(x+1,7,-3,'lantern');}
    put(-5,6,3,'barrel');put(-4,6,4,'crafting_table');
    w.role=null;

    w.comp='outside';w.role='furnish';
    for(const x of [-2,2])put(x,4,Z1+1,'lantern');
    put(-5,1,6,'barrel');put(-6,1,6,'barrel');put(-6,2,6,'barrel');
    for(let x=3;x<=5;x++)put(x,1,6,'spruce_stairs',{f:[0,-1]});
    put(6,1,6,'spruce_fence');put(6,2,6,'lantern');
    w.role=null;
  }
});
