/* Storage Barn — a red gambrel-roofed barn laid out as a storage hall: walls of barrels, rows of chests,
   workstations by the doors and a hay loft above. x 0, z 0 is the middle of the floor; the big doors face east. */
BK.register({
  id:'storage-barn',
  version:1,
  name:'Storage Barn',
  blurb:'A red gambrel-roofed barn fitted out as a storage hall: 75 barrels, 18 chests, workstations by the sliding doors, and a hay loft under the roof.',
  tags:['Survival','Storage','Barn','Medium'],
  edition:'Bedrock',
  extent:11,
  start:{x:7,y:1,z:0},
  figure:{x:10,z:3},
  steps:[
    ['Ground','floor','Floor & apron'],
    ['Walls','footing','Cobblestone footing'],
    ['Walls','walls','Red walls & corner trim'],
    ['Walls','openings','Doors & windows'],
    ['Loft','loft','Loft floor & ladder'],
    ['Roof','gables','Gable ends'],
    ['Roof','roof','Gambrel roof'],
    ['Roof','hoist','Loft door & hoist'],
    ['Inside','storage','Barrels & chests'],
    ['Inside','work','Workstations & lights'],
    ['Inside','hay','Hay in the loft']
  ],
  tiers:[
    {a:0,b:6,name:'Storage hall',p:'Red terracotta walls on a cobblestone footing, with calcite corner trim. Barrels three high line the long walls; two rows of double chests run down the middle.'},
    {a:7,b:14,name:'Loft & roof',p:'A plank loft reached by a ladder on the west wall, under a dark oak gambrel roof: steep lower slopes, shallow upper ones.'}
  ],
  notes:[['Sorting','Barrels stack and still open, so the long walls are three high. Chests need air above them, so the middle rows stay one high.'],
    ['Doors','The big doors are trapdoors laid flat against the wall either side of the opening, like slid-open barn doors.']],
  build(w){
    const {put,clr}=w;
    const box=(x0,x1,y0,y1,z0,z1,id,ex)=>{for(let x=x0;x<=x1;x++)for(let y=y0;y<=y1;y++)for(let z=z0;z<=z1;z++)put(x,y,z,id,ex);};
    const st=(x,y,z,id,fx,fz,up)=>put(x,y,z,id,{f:[fx,fz],up:!!up});
    const X=7,Z=5,TOP=6;
    const onWall=(x,z)=>Math.abs(x)===X&&Math.abs(z)<=Z||Math.abs(z)===Z&&Math.abs(x)<=X;
    const corner=(x,z)=>Math.abs(x)===X&&Math.abs(z)===Z;
    // gambrel profile: for |z| the roof block (full) and stair heights; gable walls fill up to wallTop
    const prof={6:{s:6},5:{f:[7,8],s:9},4:{f:[10],s:11},3:{s:12},2:{top:12},1:{s:13},0:{top:13}};
    const wallTop={5:6,4:9,3:11,2:11,1:12,0:12};

    w.comp='floor';
    box(-X,X,0,0,-Z,Z,'cobblestone');box(-X+1,X-1,0,0,-Z+1,Z-1,'spruce_planks');
    box(X+1,X+3,0,0,-2,2,'gravel');

    w.comp='footing';
    for(let x=-X;x<=X;x++)for(let z=-Z;z<=Z;z++)if(onWall(x,z))put(x,1,z,'cobblestone');

    w.comp='walls';
    for(let x=-X;x<=X;x++)for(let z=-Z;z<=Z;z++)if(onWall(x,z))for(let y=2;y<=TOP;y++)put(x,y,z,corner(x,z)||y===TOP?'calcite':'red_terracotta');

    w.comp='openings';
    // big east opening, 3 wide and 4 tall, framed in calcite
    for(let z=-1;z<=1;z++)for(let y=1;y<=4;y++)clr(X,y,z);
    for(let y=1;y<=5;y++){put(X,y,-2,'calcite');put(X,y,2,'calcite');}for(let z=-1;z<=1;z++)put(X,5,z,'calcite');
    for(const s of [-1,1])for(let z=3;z<=4;z++)for(let y=1;y<=4;y++)put(X+1,y,s*z,'spruce_trapdoor',{f:[-1,0]});
    // small west door
    put(-X,1,0,'spruce_door');put(-X,2,0,'spruce_door');
    // windows above the barrel walls
    for(const x of [-4,0,4])for(const z of [-Z,Z])for(let y=4;y<=5;y++)put(x,y,z,'glass_pane');

    w.comp='loft';
    for(let x=-X+1;x<=X-1;x++)for(let z=-Z+1;z<=Z-1;z++)if(!(x===-X+1&&z===-2))put(x,7,z,'spruce_planks');
    for(let y=1;y<=7;y++)put(-X+1,y,-2,'ladder',{f:[-1,0]});
    for(let z=-Z+1;z<=Z-1;z++)if(z!==-2)put(X-1,8,z,'spruce_fence');

    w.comp='gables';
    for(const x of [-X,X])for(let z=-Z;z<=Z;z++){const t=wallTop[Math.abs(z)];for(let y=TOP+1;y<=t;y++)put(x,y,z,'red_terracotta');}
    for(const x of [-X,X])for(let y=TOP+1;y<=12;y++)put(x,y,0,'calcite');

    w.comp='roof';
    for(let x=-X-1;x<=X+1;x++)for(let a=0;a<=6;a++){const p=prof[a];
      for(const s of a===0?[1]:[-1,1]){const z=s*a;
        if(p.f)p.f.forEach(y=>put(x,y,z,'dark_oak_planks'));
        if(p.s)st(x,p.s,z,'dark_oak_stairs',0,-s);
        if(p.top)put(x,p.top,z,'dark_oak_slab',{up:true});}}
    // trim under the overhang on the gable ends
    for(const x of [-X-1,X+1])for(const s of [-1,1]){st(x,5,s*6,'dark_oak_stairs',0,s,true);}

    w.comp='hoist';
    for(let z=-1;z<=1;z++)for(let y=8;y<=9;y++)clr(X,y,z);
    for(let z=-1;z<=1;z++)put(X,10,z,'calcite');
    for(let x=X;x<=X+2;x++)put(x,11,0,'stripped_spruce_log');
    put(X+2,10,0,'chain');put(X+2,9,0,'chain');put(X+2,8,0,'lantern');

    w.comp='storage';w.role='furnish';
    for(let x=-X+2;x<=X-3;x++)for(const z of [-Z+1,Z-1])for(let y=1;y<=3;y++)put(x,y,z,'barrel');
    for(let z=-Z+2;z<=Z-2;z++)if(z!==-2&&z!==0)for(let y=1;y<=3;y++)put(-X+1,y,z,'barrel');
    for(let x=-4;x<=3;x++)for(const z of [-2,2])put(x,1,z,'chest');
    put(-4,1,-1,'chest');put(-4,1,1,'chest');

    w.comp='work';
    put(X-2,1,-3,'crafting_table');put(X-1,1,-3,'furnace');put(X-1,1,-2,'blast_furnace');
    put(X-2,1,3,'smithing_table');put(X-1,1,3,'anvil');put(X-1,1,2,'cauldron');
    for(const x of [-4,0,4]){put(x,6,0,'chain');put(x,5,0,'lantern');}

    w.comp='hay';
    for(let x=-5;x<=3;x++)for(const z of [-3,3]){put(x,8,z,'hay_block');if(x<0)put(x,9,z,'hay_block');}
    for(let x=-5;x<=-3;x++)for(let z=-1;z<=1;z++)put(x,8,z,'hay_block');
    put(2,8,0,'chest');put(1,8,0,'barrel');
    w.role=null;
  }
});
