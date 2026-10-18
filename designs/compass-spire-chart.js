/* Spire Chart Floor — the floor of the Cartographer's Spire on its own: a square 15 × 15 map framed in
   polished blackstone, with blackstone rhumb lines to the four quarters and a gilded north mark. 35 blocks across. */
BK.register({
  id:'compass-spire-chart',
  version:1,
  name:'Spire Chart Floor',
  blurb:'The floor of the Cartographer\'s Spire on its own: a square 15 × 15 map in a polished blackstone frame, rhumb lines to the four quarters, a gilded north mark and a deepslate tile ring.',
  tags:['Compass','Floor','Map room','Large'],
  edition:'Bedrock',
  extent:19,
  start:{x:0,y:0,z:-12},
  ring:17.5,
  steps:[
    ['Map','map','Square map'],
    ['Map','frame','Blackstone frame & deepslate border'],
    ['Lines','rhumbs','Rhumb lines & north mark'],
    ['Field','field','Stone field & tile ring']
  ],
  tiers:[
    {a:0,b:0,name:'Chart floor',short:'Square map, blackstone frame, rhumb lines',p:'A square map 15 × 15 (225 maps in item frames) sits in a frame of polished blackstone bricks with chiseled blackstone corners, then a border of polished deepslate. From the middle of each side a three-block rhumb line of polished blackstone runs out to the wall, and the north one carries a gilded blackstone mark down its centre. The rest is a stone brick field with a ring of deepslate tiles four blocks in from the edge.',m:['map','polished_blackstone_bricks','chiseled_polished_blackstone','polished_deepslate','polished_blackstone','gilded_blackstone','stone_bricks','deepslate_tiles']}
  ],
  notes:[['Where it comes from','This is the floor drawn for the Cartographer\'s Spire. It suits a square map where the rotunda\'s rose suits a round one.']],
  build(w){
    const {put,ins,each,depthMap,vn}=w;
    const mapColor=(x,z)=>{const e=.62*vn(x/4.2+3,z/4.2+5)+.38*vn(x/1.9+11,z/1.9+2);
      return e<.33?'#3f5bc0':e<.42?'#4f70d4':e<.46?'#e6d9a0':e<.66?'#7fb238':e<.79?'#3f8a2a':'#8f8f8f';};
    const R1=17.5,D1=depthMap(R1);
    each((x,z)=>{
      if(!ins(x,z,R1))return;
      const ax=Math.abs(x),az=Math.abs(z),m=Math.max(ax,az);
      let f='stone_bricks';w.comp='field';
      if(m<=7){f='map';w.comp='map';}
      else if(m===8){f=(ax===8&&az===8)?'chiseled_polished_blackstone':'polished_blackstone_bricks';w.comp='frame';}
      else if(m===9){f='polished_deepslate';w.comp='frame';}
      else if(ax<=1&&az>=10){f=z<0?(ax===0?'gilded_blackstone':'polished_blackstone'):'polished_blackstone';w.comp='rhumbs';}
      else if(az<=1&&ax>=10){f='polished_blackstone';w.comp='rhumbs';}
      else if(D1(x,z)===4)f='deepslate_tiles';
      put(x,0,z,f,f==='map'?{hue:mapColor(x,z)}:undefined);
    });
  }
});
