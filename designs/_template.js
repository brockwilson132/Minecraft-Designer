/* Template for a new design. Copy this file to designs/<your-id>.js, change the id and name,
   write the build, then add  <script src="designs/<your-id>.js"></script>  to index.html under "Designs".
   Run  node tools/check.mjs  to make sure every block has a build step and every block id exists.

   Coordinates: x east, z south, y up. y 0 is the ground floor layer; x 0, z 0 is the middle of the build.
   Blocks: any id from js/blocks.js. Need a new one? Add  blocks:{my_block:{n:'My Block',c:'#rrggbb'}}  below. */
BK.register({
  id:'example-watchtower',            // unique, used in the link: index.html#example-watchtower
  version:1,                           // bump when the build changes so the library redraws its picture
  name:'Example Watchtower',
  blurb:'A small round stone tower with a timber gallery and a pointed roof. A starting point for new designs.',
  tags:['Example','Tower','Small'],
  edition:'Bedrock',
  extent:8,                            // the views cover x and z from -extent to +extent
  start:{x:4,y:1,z:0},                 // where the cursor starts
  ring:4.5,                            // optional dashed guide circle on the top view
  // Build steps in the order you'd build them: [group, step id, name]. Set w.comp to a step id before placing its blocks.
  steps:[
    ['Base','floor','Floor'],
    ['Base','walls','Walls'],
    ['Base','windows','Windows & door'],
    ['Top','gallery','Timber gallery'],
    ['Top','roof','Roof']
  ],
  tiers:[{a:0,b:10,name:'Tower',p:'Stone walls with a door to the south and windows on the other sides.'},{a:11,b:16,name:'Roof',p:'A timber gallery under a pointed dark oak roof.'}],
  notes:[['Example','This design exists to show how a design file is put together.']],
  build(w){
    const {put,clr,get,ins,rim,each,S,inward}=w;
    const R=4.5,H=10;
    w.comp='floor';
    each((x,z)=>{if(ins(x,z,R))put(x,0,z,'polished_andesite');});
    w.comp='walls';
    each((x,z)=>{if(!ins(x,z,R)||ins(x,z,R-1))return;for(let y=1;y<=H;y++)put(x,y,z,y%4===0?'chiseled_stone_bricks':'stone_bricks');});
    w.comp='windows';
    for(let y=1;y<=2;y++){clr(0,y,4);}put(0,1,4,'dark_oak_door');
    for(const [x,z] of [[4,0],[-4,0],[0,-4]])for(let y=5;y<=6;y++)put(x,y,z,'glass_pane');
    w.comp='gallery';
    each((x,z)=>{if(rim(x,z,R)){put(x,H+1,z,'dark_oak_planks');put(x,H+2,z,'dark_oak_fence');}});
    w.comp='roof';
    for(let i=0;i<=5;i++){const r=R+1-i;each((x,z)=>{if(ins(x,z,r)&&!ins(x,z,r-1))S(x,H+3+i,z,'dark_oak_stairs');});}
    put(0,H+9,0,'lightning_rod');
  }
});
