/* Wizard's Tower — a round stone tower with a spiral stair, a stair turret, a corbelled study at the top
   with tall purple windows, and a crooked purpur hat. x 0, z 0 is the middle of the tower; the door faces south. */
BK.register({
  id:'wizard-tower',
  version:1,
  name:"Wizard's Tower",
  blurb:'A weathered stone tower with a spiral stair, a side turret, a corbelled study ringed with purple windows, and a tall crooked purpur roof.',
  tags:['Fantasy','Tower','Landmark','Large'],
  edition:'Bedrock',
  extent:12,
  start:{x:0,y:1,z:5},
  ring:5.5,
  figure:{x:2,z:9},
  steps:[
    ['Base','floor','Floor & path'],
    ['Base','buttresses','Buttresses'],
    ['Shaft','shaft','Tower shaft'],
    ['Shaft','shaft-openings','Door & windows'],
    ['Shaft','spiral','Spiral stair'],
    ['Turret','turret','Stair turret'],
    ['Turret','turret-roof','Turret roof'],
    ['Study','corbels','Corbels & study floor'],
    ['Study','study','Study walls'],
    ['Study','study-windows','Study windows'],
    ['Hat','hat','Purpur roof'],
    ['Hat','finial','Finial'],
    ['Inside','furniture','Study furniture & lights']
  ],
  tiers:[
    {a:0,b:30,name:'Shaft',p:'Weathered stone bricks with deepslate bands, purple lancet windows that wind around the tower, four buttresses and a spiral stair round a solid core. A stair turret clings to the north-east side.'},
    {a:31,b:41,name:'Study',p:'Corbelled out on two courses of deepslate stairs. Deepslate walls with eight tall purple windows, each under an amethyst keystone.'},
    {a:42,b:66,name:'Hat',p:'A purpur cone that leans east as it rises, finished with an end rod.'}
  ],
  notes:[['Spiral','The stair turns once every 16 blocks of height. Build it as you raise the shaft, so you can always stand on it.'],
    ['Hat','Each layer of the hat is centred a little further east than the one below. Follow the top view layer by layer.']],
  build(w){
    const {put,clr,get,ins,each,bay,S,RNG,inward,outward}=w;
    const R=5.5,TOP=30,RS=7.5,SY=31,ST=41;
    const stone=(x,y,z)=>{const r=RNG(x,y,z);return r<.18?'mossy_stone_bricks':r<.3?'cracked_stone_bricks':'stone_bricks';};
    const ang=(x,z)=>Math.atan2(z,x);

    w.comp='floor';
    each((x,z)=>{if(ins(x,z,7.6))put(x,0,z,ins(x,z,R)?'polished_deepslate':(RNG(x,0,z)<.3?'mossy_cobblestone':'cobblestone'));});
    for(let z=8;z<=12;z++)for(let x=-1;x<=1;x++)put(x,0,z,'gravel');
    for(let x=-1;x<=1;x++)put(x,1,6,'stone_brick_stairs',{f:[0,-1]});

    w.comp='buttresses';
    for(const a of [Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4]){const ca=Math.cos(a),sa=Math.sin(a);
      each((x,z)=>{const rr=x*ca+z*sa,tt=-x*sa+z*ca;if(Math.abs(tt)>.7||rr<5||rr>7.9)return;
        const top=rr>6.9?5:rr>5.9?11:16;
        for(let y=1;y<=top;y++)put(x,y,z,y===1?'polished_deepslate':stone(x,y,z));
        if(!get(x,top+1,z))put(x,top+1,z,'stone_brick_stairs',{f:inward(x,z)});});}

    w.comp='shaft';
    each((x,z)=>{if(!ins(x,z,R)||ins(x,z,R-1))return;
      for(let y=1;y<=TOP;y++)put(x,y,z,(y===1||y===10||y===20||y===TOP)?'polished_deepslate':stone(x,y,z));});

    w.comp='shaft-openings';
    put(0,1,5,'dark_oak_door');put(0,2,5,'dark_oak_door');put(0,3,5,'chiseled_stone_bricks');
    put(-1,3,5,'stone_brick_stairs',{f:[1,0],up:true});put(1,3,5,'stone_brick_stairs',{f:[-1,0],up:true});
    put(-2,1,6,'soul_lantern');put(2,1,6,'soul_lantern');
    // lancets wind round the tower: three levels, each turned 45° from the one below
    [[5,7,[1,5]],[13,16,[2,6]],[22,26,[3,7]]].forEach(([a,b,ks])=>each((x,z)=>{
      if(!ins(x,z,R)||ins(x,z,R-1))return;const {u,k}=bay(x,z,8);if(!ks.includes(k)||Math.abs(u)>.6)return;
      for(let y=a;y<=b;y++)put(x,y,z,'purple_stained_glass_pane');put(x,b+1,z,'chiseled_stone_bricks');}));

    w.comp='spiral';
    each((x,z)=>{if(ins(x,z,1.5))for(let y=1;y<=TOP;y++)put(x,y,z,'polished_deepslate');});
    for(let y=1;y<=TOP;y++){const bin=(y-1)%16;
      each((x,z)=>{const r=Math.hypot(x,z);if(r<=1.5||r>4.5)return;
        let a=ang(x,z);if(a<0)a+=2*Math.PI;if(Math.floor(a/(2*Math.PI)*16)!==bin)return;
        const tx=-Math.sin(a),tz=Math.cos(a);const f=Math.abs(tx)>Math.abs(tz)?[Math.sign(tx),0]:[0,Math.sign(tz)];
        put(x,y,z,'stone_brick_stairs',{f});});}

    w.comp='turret';
    const TX=5,TZ=-5,TR=2.6,TT=24;
    each((x,z)=>{const dx=x-TX,dz=z-TZ;if(!ins(dx,dz,TR)||ins(dx,dz,TR-1))return;if(ins(x,z,R-1))return;
      for(let y=1;y<=TT;y++)put(x,y,z,(y===TT||y===1)?'polished_deepslate':stone(x,y,z));});
    for(const y of [6,12,18])put(TX+2,y,TZ,'purple_stained_glass_pane'),put(TX,y+2,TZ-2,'purple_stained_glass_pane');

    w.comp='turret-roof';
    for(let i=0;i<=7;i++){const r=3.4*(1-i/7.5);
      each((x,z)=>{const dx=x-TX,dz=z-TZ;if(!ins(dx,dz,r)||ins(dx,dz,r-1))return;
        put(x,TT+1+i,z,'purpur_stairs',{f:Math.abs(dx)>=Math.abs(dz)?[-Math.sign(dx),0]:[0,-Math.sign(dz)]});});}
    put(TX,TT+9,TZ,'purpur_block');put(TX,TT+10,TZ,'end_rod');

    w.comp='corbels';
    each((x,z)=>{if(ins(x,z,6.5)&&!ins(x,z,R))S(x,29,z,'deepslate_brick_stairs',true);
      if(ins(x,z,RS)&&!ins(x,z,6.5))S(x,30,z,'deepslate_brick_stairs',true);});
    // study floor, with an opening over the last turn of the stair
    each((x,z)=>{if(!ins(x,z,RS))return;const r=Math.hypot(x,z);let a=ang(x,z);if(a<0)a+=2*Math.PI;const bin=Math.floor(a/(2*Math.PI)*16);
      const open=r>1.5&&r<=4.5&&[(TOP-1)%16,(TOP-2)%16,(TOP-3)%16].includes(bin);
      if(!open)put(x,SY,z,ins(x,z,R-1)?'dark_oak_planks':'polished_deepslate');});

    w.comp='study';
    each((x,z)=>{if(!ins(x,z,RS)||ins(x,z,RS-1))return;const {u,h}=bay(x,z,8);const pil=Math.abs(u)>h-1.1;
      for(let y=SY+1;y<=ST;y++)put(x,y,z,(y===ST||y===SY+1)?'polished_deepslate':pil?'polished_blackstone_bricks':'deepslate_bricks');});

    w.comp='study-windows';
    each((x,z)=>{if(!ins(x,z,RS)||ins(x,z,RS-1))return;const {u}=bay(x,z,8),a=Math.abs(u);
      for(let y=SY+3;y<=SY+8;y++){if(a<1.6&&!(y===SY+8&&a>.6))put(x,y,z,'purple_stained_glass_pane');}
      if(a<.6)put(x,SY+9,z,'amethyst_block');});

    w.comp='hat';
    const HB=42,HH=24,R0=9.2;
    let lastOx=0;
    for(let i=0;i<HH;i++){const t=i/HH,r=R0*Math.pow(1-t,1.25),ox=Math.round(4*t*t*t);
      const t2=(i+1)/HH,r2=R0*Math.pow(1-t2,1.25),ox2=Math.round(4*t2*t2*t2);
      if(r<.75){put(ox,HB+i,0,'purpur_block');if(ox!==lastOx)put(lastOx,HB+i,0,'purpur_block');lastOx=ox;continue;}
      lastOx=ox;
      each((x,z)=>{const dx=x-ox,dz=z;if(!ins(dx,dz,r)||ins(dx,dz,r-1.15))return;
        const above=ins(x-ox2,z,r2);
        if(above)put(x,HB+i,z,'purpur_block');
        else put(x,HB+i,z,'purpur_stairs',{f:Math.abs(dx)>=Math.abs(dz)?[-Math.sign(dx),0]:[0,-Math.sign(dz)]});});}
    // eaves: the bottom ring stands out past the study wall on inverted stairs
    each((x,z)=>{if(ins(x,z,R0)&&!ins(x,z,RS))S(x,HB-1,z,'purpur_stairs',true);});
    each((x,z)=>{if(ins(x,z,RS-1))put(x,HB-1,z,'dark_oak_planks');});

    w.comp='finial';
    const tip=[...w.V.values()].filter(v=>v.c==='hat').reduce((m,v)=>v.y>m.y?v:m,{y:-1});
    put(tip.x,tip.y+1,tip.z,'amethyst_block');put(tip.x,tip.y+2,tip.z,'end_rod');

    w.comp='furniture';w.role='furnish';
    put(0,SY+1,0,'enchanting_table');
    each((x,z)=>{if(!ins(x,z,RS-1)||ins(x,z,RS-2))return;const {u,h}=bay(x,z,8);if(Math.abs(u)<1.8)return;
      put(x,SY+1,z,'bookshelf');put(x,SY+2,z,'bookshelf');});
    put(3,SY+1,-3,'brewing_stand');put(-3,SY+1,-3,'cauldron');put(-3,SY+1,3,'lectern');put(3,SY+1,3,'chest');
    for(let y=HB-2;y>=SY+6;y--)put(0,y,0,'chain');put(0,SY+5,0,'soul_lantern');
    for(const [x,z] of [[4,0],[-4,0],[0,4],[0,-4]]){put(x,HB-2,z,'chain');put(x,HB-3,z,'lantern');}
    w.role=null;
  }
});
