/* Starter House — a first-night survival base: a 9 × 9 oak and cobblestone house with a porch,
   everything you need inside, and a fenced wheat farm behind. x 0, z 0 is the middle of the house; the door faces south. */
BK.register({
  id:'starter-house',
  version:1,
  name:'Starter House',
  blurb:'A survival starter base: oak and cobblestone house with a porch, bed, storage and furnaces inside, and a fenced, water-fed wheat farm behind it.',
  tags:['Survival','Base','House','Small'],
  edition:'Bedrock',
  extent:13,
  start:{x:0,y:1,z:4},
  figure:{x:2,z:9},
  steps:[
    ['House','floor','Floor & porch deck'],
    ['House','footing','Cobblestone footing'],
    ['House','corners','Corner logs & top beam'],
    ['House','walls','Plank walls'],
    ['House','openings','Door & windows'],
    ['Roof','gables','Gable ends'],
    ['Roof','roof','Roof'],
    ['Roof','porch','Porch'],
    ['Inside','furniture','Bed, storage & workstations'],
    ['Farm','farm','Farmland & water'],
    ['Farm','fence','Fence & lights']
  ],
  tiers:[
    {a:0,b:5,name:'House',p:'A cobblestone footing course, oak plank walls between oak log corners, windows on every side and a covered porch on the south.'},
    {a:5,b:10,name:'Roof',p:'A dark oak roof with plank gable ends and a small window in each.'},
    {a:0,b:2,name:'Farm',p:'Behind the house: 9 × 5 farmland watered by one channel down the middle, fenced, with a composter by the gate.'}
  ],
  notes:[['Order','Build the walls and roof first so you are safe at night, then the porch and the farm.'],
    ['Materials','About 3 stacks of oak (logs and planks), 1 stack of cobblestone and 1½ stacks of dark oak stairs. Swap the roof for any wood you have.']],
  build(w){
    const {put,clr,RNG}=w;
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const A=4,TOP=5;
    const onWall=(x,z)=>Math.max(Math.abs(x),Math.abs(z))===A;
    const corner=(x,z)=>Math.abs(x)===A&&Math.abs(z)===A;

    w.comp='floor';
    box(-A,A,0,0,-A,A,'cobblestone');box(-A+1,A-1,0,0,-A+1,A-1,'oak_planks');
    box(-3,3,0,0,A+1,A+3,'spruce_planks');
    for(let z=A+4;z<=13;z++)put(0,0,z,'dirt_path');

    w.comp='footing';
    for(let x=-A;x<=A;x++)for(let z=-A;z<=A;z++)if(onWall(x,z)&&!corner(x,z))put(x,1,z,'cobblestone');

    w.comp='corners';
    for(const x of [-A,A])for(const z of [-A,A])for(let y=1;y<TOP;y++)put(x,y,z,'oak_log');
    for(let x=-A;x<=A;x++)for(let z=-A;z<=A;z++)if(onWall(x,z))put(x,TOP,z,'stripped_oak_log');

    w.comp='walls';
    for(let x=-A;x<=A;x++)for(let z=-A;z<=A;z++)if(onWall(x,z)&&!corner(x,z))for(let y=2;y<TOP;y++)put(x,y,z,'oak_planks');

    w.comp='openings';
    put(0,1,A,'oak_door');put(0,2,A,'oak_door');
    for(const s of [-1,1]){for(let y=2;y<=3;y++){put(s*2,y,A,'glass_pane');put(s*2,y,-A,'glass_pane');put(s*A,y,-1,'glass_pane');put(s*A,y,1,'glass_pane');}}
    for(let y=2;y<=3;y++)put(-1,y,-A,'glass_pane'),put(1,y,-A,'glass_pane');

    w.comp='gables';
    for(let i=1;i<=4;i++)for(let z=-A+i;z<=A-i;z++)for(const x of [-A,A])put(x,TOP+i,z,'oak_planks');
    for(const x of [-A,A])put(x,TOP+2,0,'glass_pane');

    w.comp='roof';
    for(let i=0;i<=4;i++)for(let x=-A-1;x<=A+1;x++){st(x,TOP+i,-A-1+i,'dark_oak_stairs',0,1);st(x,TOP+i,A+1-i,'dark_oak_stairs',0,-1);}
    for(let x=-A-1;x<=A+1;x++)put(x,TOP+5,0,'dark_oak_slab');
    for(let i=0;i<=4;i++)for(const x of [-A-1,A+1]){st(x,TOP+i-1,-A-1+i,'dark_oak_stairs',0,-1,true);st(x,TOP+i-1,A+1-i,'dark_oak_stairs',0,1,true);}

    w.comp='porch';
    for(const x of [-3,3])for(let y=1;y<=3;y++)put(x,y,A+3,'oak_fence');
    for(const x of [-2,-1,1,2])put(x,1,A+3,'oak_fence');
    // a flat roof of slabs, tucked under the main eave
    for(let x=-3;x<=3;x++)for(let z=A+1;z<=A+3;z++)put(x,4,z,'dark_oak_slab');
    put(-2,1,A+1,'oak_stairs',{f:[0,-1]});put(-1,1,A+1,'oak_stairs',{f:[0,-1]});
    put(2,3,A+2,'lantern');

    w.comp='furniture';w.role='furnish';
    put(-3,1,-3,'red_bed');put(-3,1,-2,'red_bed');
    for(let x=-1;x<=2;x++)put(x,1,-3,'chest');put(3,1,-3,'barrel');put(3,2,-3,'barrel');
    put(3,1,-1,'crafting_table');put(3,1,0,'furnace');put(3,1,1,'blast_furnace');put(3,1,2,'smithing_table');
    put(-3,1,2,'oak_fence');put(-3,2,2,'oak_pressure_plate');put(-2,1,2,'oak_stairs',{f:[1,0]});
    put(-3,1,0,'composter');put(0,4,0,'chain');put(0,3,0,'lantern');
    w.role=null;

    w.comp='farm';
    const FZ0=-12,FZ1=-6,FX=4;
    for(let x=-FX;x<=FX;x++)for(let z=FZ0+1;z<=FZ1-1;z++)put(x,0,z,z===-9?'water':'farmland');

    w.comp='fence';
    for(let x=-FX-1;x<=FX+1;x++)for(let z=FZ0;z<=FZ1;z++){if(Math.abs(x)!==FX+1&&z!==FZ0&&z!==FZ1)continue;
      if(z===FZ1&&x===0)continue;put(x,0,z,'grass_block');put(x,1,z,'oak_fence');}
    for(const x of [-FX-1,FX+1])for(const z of [FZ0,FZ1])put(x,2,z,'lantern');
    put(-2,1,FZ1+1,'composter');put(2,1,FZ1+1,'chest');
  }
});
