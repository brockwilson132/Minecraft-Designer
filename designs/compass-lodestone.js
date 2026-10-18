/* Lodestone Compass — a needle compass in Nether materials: a red and netherite needle on a lodestone pivot over a
   blackstone dial with gold N, E, S and W letters, a degree ring studded with crying obsidian, a ring of glowing
   magma, and basalt columns with soul lanterns. 39 blocks across. */
BK.register({
  id:'compass-lodestone',
  version:1,
  name:'Lodestone Compass',
  blurb:'A needle compass in Nether materials: a red and netherite needle turning on a lodestone pivot over a blackstone dial with gold letters, a crying-obsidian degree ring, a ring of glowing magma, and basalt columns with soul lanterns.',
  tags:['Compass','Floor','Nether','Large'],
  edition:'Bedrock',
  extent:21,
  start:{x:0,y:0,z:-17},
  ring:18.5,
  steps:[
    ['Dial','dial','Blackstone dial'],
    ['Dial','letters','Gold letters'],
    ['Dial','fine','Fine degree lines'],
    ['Rings','obsidian','Obsidian & magma rings'],
    ['Rings','degrees','Degree ring'],
    ['Rings','rim','Blackstone rim'],
    ['Rim','columns','Basalt columns & soul lanterns'],
    ['Needle','pivot','Lodestone pivot'],
    ['Needle','needle','Needle']
  ],
  tiers:[
    {a:0,b:0,name:'Dial',short:'Blackstone face, gold letters',p:'A dial of blackstone and polished blackstone with fine lines to the eight winds and gold letters N, E, S and W five blocks long, so they read from the south. Outside the dial, a band of obsidian and a ring of magma blocks glow through cracks between obsidian, then a degree ring of 36 ticks in gilded and polished blackstone bricks, crying obsidian on the four cardinals, inside a polished blackstone brick rim.',m:['blackstone','polished_blackstone','gold_block','obsidian','magma_block','gilded_blackstone','polished_blackstone_bricks','crying_obsidian']},
    {a:0,b:4,name:'Needle & columns',short:'A needle on a lodestone, basalt columns',p:'The needle lies one block above the dial, a long lozenge 13 blocks from tip to tip: the north half in redstone and red nether brick, the magnetised end, the south half in netherite and polished basalt, bevelled light and dark. It turns on a lodestone pivot with a gold cap. Twenty-four polished basalt columns stand round the rim, each topped with a soul lantern.',m:['redstone_block','red_nether_bricks','netherite_block','polished_basalt','lodestone','gold_block','soul_lantern']}
  ],
  notes:[
    ['The needle','It floats a block over the dial, held only at the pivot. Blocks do not need support, so it stays where you put it. Point it at a real lodestone if you like: this is the shape a lodestone compass needle takes.'],
    ['Netherite','The needle uses a few blocks of netherite. Swap them for polished blackstone or polished basalt if you would rather not spend it.']
  ],
  build(w){
    const {put,each}=w;
    const bear=(x,z)=>((Math.atan2(z,x)*180/Math.PI)+450)%360;
    each((x,z)=>{const r=Math.hypot(x,z);if(r>18.6)return;const deg=bear(x,z);let id,step;
      if(r<=11.6){id=((Math.floor(r)+Math.floor(deg/45))%2)?'blackstone':'polished_blackstone';step='dial';
        if(r>2&&(deg%45<2.6||deg%45>42.4)&&r<10.5){id='polished_blackstone_bricks';step='fine';}}
      else if(r<=12.4){id='obsidian';step='obsidian';}
      else if(r<=13.4){id=(Math.floor(deg/7.5)%3===0)?'obsidian':'magma_block';step='obsidian';}
      else if(r<=14.1){id='obsidian';step='obsidian';}
      else if(r<=16.4){const k=Math.round(deg/10)%36,card=k%9===0;id=card?'crying_obsidian':(deg%10<3||deg%10>7)?'gilded_blackstone':'polished_blackstone_bricks';if(card&&Math.abs(((deg+5)%90)-5)>2.5)id='polished_blackstone_bricks';step='degrees';}
      else{id='polished_blackstone_bricks';step='rim';}
      w.comp=step;put(x,0,z,id);});
    // gold letters, 3 wide and 5 long, readable from the south
    w.comp='letters';
    const G={N:['X...X','XX..X','X.X.X','X..XX','X...X'],E:['XXXX','X...','XXX.','X...','XXXX'],
      S:['.XXX','X...','.XX.','...X','XXX.'],W:['X...X','X...X','X.X.X','XX.XX','X...X']};
    const letter=(ch,cx,cz)=>{const g=G[ch],wdt=g[0].length;g.forEach((row,i)=>[...row].forEach((c,j)=>{if(c==='X')put(cx-Math.floor(wdt/2)+j,0,cz-2+i,'gold_block');}));};
    letter('N',0,-9);letter('E',9,0);letter('S',0,9);letter('W',-9,0);
    // basalt columns with soul lanterns round the rim
    w.comp='columns';
    for(let k=0;k<24;k++){const t=k*15*Math.PI/180,x=Math.round(17.6*Math.sin(t)),z=Math.round(-17.6*Math.cos(t));
      for(let y=1;y<=3;y++)put(x,y,z,'polished_basalt');put(x,4,z,'soul_lantern');}
    // pivot and needle
    w.comp='pivot';put(0,1,0,'lodestone');put(0,2,0,'gold_block');
    w.comp='needle';
    each((x,z)=>{const L=6.6,a=Math.abs(z),wd=1.7*(1-a/L);if(a>L||Math.abs(x)>wd+.2||(x===0&&z===0))return;
      const north=z<0,lite=x<=0;put(x,1,z,north?(lite?'redstone_block':'red_nether_bricks'):(lite?'netherite_block':'polished_basalt'));});
  }
});
