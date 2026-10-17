/* Village Windmill — a tapering round tower mill with a stone base, timber body, a ring gallery,
   a cap roof and four cloth sails facing south. x 0, z 0 is the middle of the mill. */
BK.register({
  id:'village-windmill',
  version:1,
  name:'Village Windmill',
  blurb:'A tapering tower mill: cobblestone base, spruce body with log corner posts, a ring gallery, a dark oak cap and four wool sails.',
  tags:['Medieval','Village','Windmill','Medium'],
  edition:'Bedrock',
  extent:9,
  start:{x:0,y:1,z:4},
  ring:4.6,
  figure:{x:3,z:8},
  steps:[
    ['Base','floor','Floor'],
    ['Base','base','Stone base'],
    ['Tower','body','Timber body'],
    ['Tower','openings','Door & windows'],
    ['Tower','floors','Upper floors & ladder'],
    ['Tower','gallery','Ring gallery'],
    ['Top','cap','Cap roof'],
    ['Top','axle','Axle & hub'],
    ['Top','sails','Sail frames'],
    ['Top','cloth','Sail cloth'],
    ['Inside','furniture','Millstone & stores']
  ],
  tiers:[
    {a:0,b:4,name:'Stone base',p:'A cobblestone base with mossy patches and an arched south door.'},
    {a:5,b:20,name:'Timber body',p:'Spruce planks between stripped spruce corner posts, narrowing as it rises, with a gallery ring at the first floor.'},
    {a:21,b:29,name:'Cap',p:'A dark oak cap roof. The axle comes out on the south side and carries four sails, 8 blocks long, with white wool cloth.'}
  ],
  notes:[['Sails','The sails stand one block in front of the south wall. Build the frames from the hub outward, then hang the cloth.']],
  build(w){
    const {put,get,ins,each,bay,S,RNG}=w;
    const Rof=y=>4.6-y*0.07;
    const wall=(x,z,y)=>{const R=Rof(y);return ins(x,z,R)&&!ins(x,z,R-1);};
    const face=y=>Math.floor(Rof(y));

    w.comp='floor';
    each((x,z)=>{if(ins(x,z,4.6))put(x,0,z,ins(x,z,3.6)?'smooth_stone':'cobblestone');});
    for(let z=5;z<=9;z++)put(0,0,z,'gravel');

    w.comp='base';
    each((x,z)=>{for(let y=1;y<=4;y++)if(wall(x,z,y))put(x,y,z,RNG(x,y,z)<.25?'mossy_cobblestone':'cobblestone');});

    w.comp='body';
    each((x,z)=>{for(let y=5;y<=20;y++){if(!wall(x,z,y))continue;const {u,h}=bay(x,z,8);
      put(x,y,z,Math.abs(u)>h-.75?'stripped_spruce_log':((y===10||y===15)?'stripped_spruce_log':'spruce_planks'));}});

    w.comp='openings';
    put(0,1,face(1),'spruce_door');put(0,2,face(2),'spruce_door');put(0,3,face(3),'stripped_spruce_log');
    for(const y of [8,13,18]){const f=face(y);for(const [x,z] of [[f,0],[-f,0],[0,-f]])put(x,y,z,'glass_pane');}
    put(0,8,face(8),'glass_pane');

    w.comp='floors';
    for(const y of [5,11,16])each((x,z)=>{if(ins(x,z,Rof(y)-1))put(x,y,z,'spruce_planks');});
    for(let y=1;y<=6;y++)put(0,y,-3,'spruce_planks');
    for(let y=1;y<=20;y++)put(0,y,-2,'ladder',{f:[0,-1]});

    w.comp='gallery';
    const G=5,RG=Rof(G)+2.2;
    each((x,z)=>{if(ins(x,z,RG)&&!ins(x,z,Rof(G))){put(x,G,z,'spruce_slab',{up:true});if(!ins(x,z,RG-1))put(x,G+1,z,'spruce_fence');}});
    // brackets under the gallery on the compass points
    for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]){const r=Math.floor(Rof(G))+1;put(dx*r,G-1,dz*r,'spruce_stairs',{f:[-dx,-dz],up:true});}
    // gallery door on the north side
    put(0,6,-face(6),'spruce_door');put(0,7,-face(7),'spruce_door');

    w.comp='cap';
    for(let i=0;i<=6;i++){const r=4.3-i*.68;each((x,z)=>{if(ins(x,z,r)&&!ins(x,z,r-1))S(x,21+i,z,'dark_oak_stairs');else if(ins(x,z,r-1)&&i===0)put(x,21,z,'dark_oak_planks');});}
    put(0,27,0,'dark_oak_planks');put(0,28,0,'dark_oak_fence');put(0,29,0,'lightning_rod');

    w.comp='axle';
    const HY=18,HZ=7;
    for(let z=face(HY)+1;z<HZ;z++)put(0,HY,z,'stripped_oak_log');
    put(0,HY,HZ,'oak_log');

    w.comp='sails';
    const L=8;
    for(let i=1;i<=L;i++){put(0,HY+i,HZ,'oak_fence');put(0,HY-i,HZ,'oak_fence');put(i,HY,HZ,'oak_fence');put(-i,HY,HZ,'oak_fence');}

    w.comp='cloth';
    // each sail hangs on the trailing side of its arm, so they turn clockwise seen from the south
    for(let i=2;i<=L;i++)for(let s=1;s<=2;s++){
      put(s,HY+i,HZ,'white_wool');put(-s,HY-i,HZ,'white_wool');
      put(i,HY-s,HZ,'white_wool');put(-i,HY+s,HZ,'white_wool');}

    w.comp='furniture';w.role='furnish';
    put(0,1,0,'smooth_stone');put(0,2,0,'stone_brick_slab');put(0,3,0,'oak_fence');put(0,4,0,'oak_fence');
    put(2,1,-1,'barrel');put(2,1,1,'barrel');put(-2,1,1,'hay_block');put(-2,1,-1,'chest');
    put(-2,6,1,'barrel');put(2,6,1,'hay_block');put(0,10,0,'chain');put(0,9,0,'lantern');
    put(3,1,7,'hay_block');put(3,2,7,'hay_block');put(4,1,6,'hay_block');put(-3,1,7,'barrel');put(-4,1,6,'composter');
    put(-1,4,face(4)+1,'lantern');
    w.role=null;
  }
});
