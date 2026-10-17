BK.register({
  id:'example-watchtower',
  version:1,
  name:'Example Watchtower',
  blurb:'A small round stone tower with a timber gallery and a pointed roof.',
  tags:['Example','Tower','Small'],
  edition:'Bedrock',
  extent:8,
  start:{x:4,y:1,z:0},
  ring:4.5,
  steps:[['Base','floor','Floor'],['Base','walls','Walls'],['Base','windows','Windows & door'],['Top','gallery','Timber gallery'],['Top','roof','Roof']],
  tiers:[],
  notes:[],
  build(w){
    const {put,clr,ins,rim,each,S}=w;
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
