/* Village Cottage — a small timber-framed cottage with a steep spruce roof, brick chimney and flower boxes.
   9 × 7 walls, 10 tall. x 0, z 0 is the middle of the floor; the door faces south. */
BK.register({
  id:'village-cottage',
  version:1,
  name:'Village Cottage',
  blurb:'A one-room timber-framed cottage: cobblestone footing, oak frame with plaster panels, shutters, a brick chimney and a steep spruce roof.',
  tags:['Medieval','Village','House','Small'],
  edition:'Bedrock',
  extent:8,
  start:{x:0,y:1,z:3},
  figure:{x:2,z:6},
  steps:[
    ['Ground','floor','Floor & path'],
    ['Walls','footing','Cobblestone footing'],
    ['Walls','frame','Oak frame'],
    ['Walls','panels','Plaster panels'],
    ['Walls','openings','Door, windows & shutters'],
    ['Roof','gables','Gable ends'],
    ['Roof','roof','Spruce roof'],
    ['Roof','chimney','Fireplace & chimney'],
    ['Inside','furniture','Furniture & lights']
  ],
  tiers:[
    {a:0,b:0,name:'Floor',p:'Spruce plank floor with a dirt path leading to the south door.'},
    {a:1,b:5,name:'Walls',p:'A cobblestone footing course, then oak log posts and beams with calcite plaster between them.'},
    {a:5,b:10,name:'Roof',p:'A steep spruce stair roof over plastered gable ends, with a brick chimney at the north-east corner.'}
  ],
  notes:[['Survival','Needs about 2 stacks of cobblestone, 2½ stacks of spruce stairs and a stack of oak logs. Everything is early-game.']],
  build(w){
    const {put,clr,get}=w;
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const X0=-4,X1=4,Z0=-3,Z1=3,TOP=5;
    const onWall=(x,z)=>x===X0||x===X1||z===Z0||z===Z1;
    const post=(x,z)=>(x===X0||x===X1||x===0)&&(z===Z0||z===Z1)||(z===0&&(x===X0||x===X1));

    w.comp='floor';
    box(X0,X1,0,0,Z0,Z1,'cobblestone');
    box(X0+1,X1-1,0,0,Z0+1,Z1-1,'spruce_planks');
    for(let z=Z1+1;z<=8;z++){put(0,0,z,'dirt_path');if(z>4){put(-1,0,z,'dirt_path');}}
    put(1,0,Z1+1,'dirt_path');

    w.comp='footing';
    for(let x=X0;x<=X1;x++)for(let z=Z0;z<=Z1;z++)if(onWall(x,z))put(x,1,z,(x+z)%3===0?'mossy_cobblestone':'cobblestone');

    w.comp='frame';
    for(let x=X0;x<=X1;x++)for(let z=Z0;z<=Z1;z++){if(!onWall(x,z))continue;
      if(post(x,z))for(let y=2;y<=4;y++)put(x,y,z,'oak_log');
      put(x,TOP,z,'oak_log');}

    w.comp='panels';
    for(let x=X0;x<=X1;x++)for(let z=Z0;z<=Z1;z++){if(!onWall(x,z)||post(x,z))continue;for(let y=2;y<=4;y++)put(x,y,z,'calcite');}

    w.comp='openings';
    put(0,1,Z1,'oak_door');put(0,2,Z1,'oak_door');put(0,3,Z1,'oak_log');put(0,4,Z1,'oak_log');
    for(const x of [-2,2]){for(const z of [Z0,Z1])for(let y=2;y<=3;y++)put(x,y,z,'glass_pane');
      // shutters either side, flower box under the front windows
      for(const s of [-1,1]){put(x+s,2,Z1+1,'spruce_trapdoor',{f:[0,-1]});put(x+s,3,Z1+1,'spruce_trapdoor',{f:[0,-1]});}
      put(x,1,Z1+1,'spruce_trapdoor',{f:[0,1]});put(x,2,Z1+1,'flower_pot');}
    for(const x of [X0,X1])for(let y=2;y<=3;y++)put(x,y,0,'oak_log'),put(x,y,-1,'glass_pane'),put(x,y,1,'glass_pane');

    w.comp='gables';
    // plaster triangles above the top beam on the east and west ends
    for(let i=1;i<=3;i++)for(let z=Z0+i;z<=Z1-i;z++)for(const x of [X0,X1])put(x,TOP+i,z,z===0?'oak_log':'calcite');
    for(const x of [X0,X1])put(x,TOP+2,0,'glass_pane');

    w.comp='roof';
    // ridge runs east–west; rows step up from both eaves
    for(let i=0;i<=3;i++)for(let x=X0-1;x<=X1+1;x++){st(x,TOP+i,Z0-1+i,'spruce_stairs',0,1);st(x,TOP+i,Z1+1-i,'spruce_stairs',0,-1);}
    for(let x=X0-1;x<=X1+1;x++)put(x,TOP+4,0,'spruce_slab');
    // eave trim under the overhang on the gable ends
    for(let i=0;i<=3;i++)for(const x of [X0-1,X1+1]){st(x,TOP+i-1,Z0-1+i,'spruce_stairs',0,-1,true);st(x,TOP+i-1,Z1+1-i,'spruce_stairs',0,1,true);}

    w.comp='chimney';
    box(2,3,1,1,-2,-2,'bricks');put(2,2,-2,'bricks');put(3,2,-2,'bricks');
    for(let y=3;y<=TOP+5;y++)put(3,y,-2,'bricks');
    put(3,TOP+6,-2,'brick_wall');
    put(2,1,-2,'furnace');

    w.comp='furniture';w.role='furnish';
    put(-3,1,-2,'red_bed');put(-3,1,-1,'red_bed');
    put(-1,1,-2,'crafting_table');put(0,1,-2,'chest');put(1,1,-2,'barrel');
    put(-3,1,2,'bookshelf');put(3,1,2,'oak_fence');put(3,2,2,'oak_pressure_plate');put(2,1,2,'oak_stairs',{f:[1,0]});
    put(0,4,0,'chain');put(0,3,0,'lantern');
    put(0,4,Z1+1,'lantern');
    w.role=null;
  }
});
