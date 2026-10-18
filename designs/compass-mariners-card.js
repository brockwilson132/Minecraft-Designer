/* Mariner's Compass — a 32-point compass card in navy, white, gold and sea-green, with a fleur-de-lis at north
   and the old chart-makers' cross at east, a 32-tick scale ring, a rope border and a band of waves. 43 blocks across. */
BK.register({
  id:'compass-mariners-card',
  version:1,
  name:"Mariner's Compass",
  blurb:'A sixteen-point compass card with all 32 winds, in navy, white, gold and sea-green: fleur-de-lis north, a cross at east, a 32-tick scale, a twisted rope border, a band of breaking waves and binnacle lamps.',
  tags:['Compass','Floor','Nautical','Large'],
  edition:'Bedrock',
  extent:23,
  start:{x:0,y:0,z:-18},
  ring:21,
  steps:[
    ['Card','hub','Hub & pivot'],
    ['Card','card','Parchment card'],
    ['Points','quarter','Quarter-wind rhumb lines (16)'],
    ['Points','half','Half-wind points (8)'],
    ['Points','inter','Corner points (4)'],
    ['Points','cardinal','Cardinal points (4)'],
    ['Points','emblems','Fleur-de-lis & east cross'],
    ['Rings','band','Navy band'],
    ['Rings','scale','32-tick scale ring'],
    ['Rings','rope','Rope border'],
    ['Rings','waves','Waves & sea lanterns'],
    ['Rings','lamps','Binnacle lamps']
  ],
  tiers:[
    {a:0,b:1,name:'Compass card',short:'16 points and 16 rhumb lines',p:'A compass card laid like the ones under a ship\'s needle. On a smooth sandstone ground, 16 points radiate in three sizes, each bevelled light and dark so it reads as raised, with the other 16 winds drawn as fine rhumb lines between them, as on a portolan chart: the four cardinals in white quartz and navy (north in red), the four corners in gold and brown, the eight half-winds in oxidized copper and dark prismarine and the sixteen quarter-wind lines in light blue. A gold fleur-de-lis caps the north point and a gold cross stands at east, as on old sea charts. A copper hub with a gold boss and a lightning-rod pivot sits at the centre.',m:['smooth_sandstone','smooth_quartz','blue_concrete','redstone_block','red_nether_bricks','gold_block','brown_terracotta','oxidized_cut_copper','dark_prismarine','light_blue_concrete','lightning_rod']},
    {a:0,b:3,name:'Rings',short:'Scale, rope and waves',p:'A navy band frames the card, then a scale ring of 32 ticks, white and light blue, gold on the eight main bearings. A dark prismarine line leads to a twisted rope border in sandstone and stripped oak, and outside it a band of waves in prismarine bricks and dark prismarine with calcite foam on the crests and a sea lantern under every main bearing. Four binnacle lamps on oak posts stand on the diagonals.',m:['blue_concrete','smooth_quartz','light_blue_concrete','gold_block','dark_prismarine','smooth_sandstone','stripped_oak_log','prismarine_bricks','calcite','sea_lantern','oak_fence','lantern']}
  ],
  notes:[
    ['Order','Lay the cardinal points last: they sit on top of the smaller points where they cross near the hub, so the smaller points are filled in first.'],
    ['The east cross','Old compass cards marked east with a cross. It is drawn here in gold across the scale ring.'],
    ['Size','About 1,600 blocks, nearly all flat. It fits a room or plaza 43 blocks across.']
  ],
  build(w){
    const {put,each,RNG}=w;
    const R=21;
    // bearing in degrees from north, clockwise
    const bear=(x,z)=>((Math.atan2(z,x)*180/Math.PI)+450)%360;
    // a bevelled kite-shaped point: [bearing, base radius (widest), tip radius, half-width at the base, light, dark, step]
    const P=[];
    for(let k=0;k<8;k++)P.push([22.5+k*45,5.2,11.6,1.9,'oxidized_cut_copper','dark_prismarine','half']);
    for(let k=0;k<4;k++)P.push([45+k*90,4.2,13.6,2.5,'gold_block','brown_terracotta','inter']);
    for(let k=0;k<4;k++)P.push([k*90,4.2,15.4,3.2,k===0?'redstone_block':'smooth_quartz',k===0?'red_nether_bricks':'blue_concrete','cardinal']);
    const hit=(x,z)=>{let best=null;
      for(const [b,rb,tip,W,lt,dk,step] of P){const t=b*Math.PI/180,al=x*Math.sin(t)-z*Math.cos(t),pe=x*Math.cos(t)+z*Math.sin(t);
        if(al<0||al>tip+.3)continue;const wd=al<rb?W*al/rb:W*(tip-al)/(tip-rb);if(Math.abs(pe)<=wd+.25)best=[pe>=0?lt:dk,step];}   // later (bigger) points win
      return best;};
    each((x,z)=>{const r=Math.hypot(x,z);if(r>R)return;const deg=bear(x,z);let id,step;
      if(r<1.5){id=x===0&&z===0?'gold_block':'oxidized_cut_copper';step='hub';}
      else if(r<=15.4){const h=hit(x,z);if(h)[id,step]=h;else{id='smooth_sandstone';step='card';
        const q=((deg-11.25)%22.5+22.5)%22.5;if(r>7&&(q<7.5/r||q>22.5-7.5/r)){id='light_blue_concrete';step='quarter';}}}
      else if(r<=16.2){id='blue_concrete';step='band';}
      else if(r<=17.5){const k=Math.floor(((deg+5.625)%360)/11.25);id=k%4===0?'gold_block':k%2?'smooth_quartz':'light_blue_concrete';step='scale';}
      else if(r<=18.1){id='dark_prismarine';step='band';}
      else if(r<=19.1){const s=Math.floor(deg/3.6+(r-18)*1.6)%2;id=s?'stripped_oak_log':'smooth_sandstone';step='rope';}   // twisted rope
      else{const crest=20+.75*Math.sin(deg*Math.PI/180*14);step='waves';
        id=Math.abs(r-crest)<.55?'calcite':r<crest?'prismarine_bricks':'dark_prismarine';}
      w.comp=step;put(x,0,z,id);});
    // sea lanterns under the waves on the eight main bearings
    w.comp='waves';
    for(let k=0;k<8;k++){const t=k*Math.PI/4;put(Math.round(20.1*Math.sin(t)),0,Math.round(-20.1*Math.cos(t)),'sea_lantern');}
    // a gold fleur-de-lis on the north point, and the cross at east
    w.comp='emblems';
    [[0,-17],[0,-16],[0,-15],[0,-14],[0,-13],[-1,-15],[1,-15],[-2,-15],[2,-15],[-2,-16],[2,-16],[-3,-15],[3,-15],[-3,-14],[3,-14],
     [-2,-13],[-1,-13],[1,-13],[2,-13],[-1,-12],[1,-12]].forEach(([x,z])=>put(x,0,z,'gold_block'));
    [[17,0],[18,0],[19,0],[16,0],[17,-1],[17,1],[18,-1],[18,1],[17,-2],[17,2]].forEach(([x,z])=>put(x,0,z,'gold_block'));
    // the pivot
    w.comp='hub';put(0,1,0,'lightning_rod');
    // binnacle lamps on the diagonals
    w.comp='lamps';
    for(const [sx,sz] of [[1,1],[1,-1],[-1,1],[-1,-1]]){const x=sx*16,z=sz*16;put(x,0,z,'dark_prismarine');put(x,1,z,'oak_fence');put(x,2,z,'oak_fence');put(x,3,z,'lantern');}
  }
});
