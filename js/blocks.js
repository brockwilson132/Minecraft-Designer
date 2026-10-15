/* Blockwright · block registry.
   n = display name, c = colour used in every view, sh = shape (stair, slab, wall, fence, rod, chain, lantern,
   bell, pot, trap, lectern, frame), glass = see-through strength, emit = gives light.
   A design can add its own blocks with `blocks:{...}` in BK.register(). */
(function(BK){
BK.BLOCKS={
  stone_bricks:{n:'Stone Bricks',c:'#7d7d7a'},
  chiseled_stone_bricks:{n:'Chiseled Stone Bricks',c:'#919189'},
  stone_brick_stairs:{n:'Stone Brick Stairs',c:'#868683',sh:'stair'},
  polished_andesite:{n:'Polished Andesite',c:'#8d908d'},
  smooth_stone:{n:'Smooth Stone',c:'#a3a3a1'},
  polished_deepslate:{n:'Polished Deepslate',c:'#424248'},
  calcite:{n:'Calcite',c:'#d8d9d2'},
  smooth_quartz:{n:'Smooth Quartz',c:'#efe9e0'},
  smooth_quartz_stairs:{n:'Smooth Quartz Stairs',c:'#e9e3d9',sh:'stair'},
  smooth_quartz_slab:{n:'Smooth Quartz Slab',c:'#e9e3d9',sh:'slab'},
  quartz_pillar:{n:'Quartz Pillar',c:'#e1d9cb'},
  chiseled_quartz:{n:'Chiseled Quartz Block',c:'#e6decd'},
  diorite_wall:{n:'Diorite Wall',c:'#cbcac6',sh:'wall'},
  dark_oak_planks:{n:'Dark Oak Planks',c:'#4b3321'},
  dark_oak_fence:{n:'Dark Oak Fence',c:'#4b3321',sh:'fence'},
  glass_pane:{n:'Glass Pane',c:'#bfe4ee',glass:.45},
  glass:{n:'Glass',c:'#cdeff6',glass:.45},
  oxidized_cut_copper:{n:'Oxidized Cut Copper',c:'#4ea88b'},
  oxidized_cut_copper_stairs:{n:'Oxidized Cut Copper Stairs',c:'#55b094',sh:'stair'},
  copper_grate:{n:'Oxidized Copper Grate',c:'#4a9f84',glass:.7},
  copper_bulb:{n:'Oxidized Copper Bulb (lit)',c:'#f0a85a',emit:1},
  decorated_pot:{n:'Decorated Pot',c:'#a5603f',sh:'pot'},
  gold_block:{n:'Block of Gold',c:'#f2c94a'},
  lightning_rod:{n:'Lightning Rod',c:'#c4703b',sh:'rod'},
  chain:{n:'Chain',c:'#3a3f48',sh:'chain'},
  lantern:{n:'Lantern',c:'#f3b348',sh:'lantern',emit:1},
  polished_diorite:{n:'Polished Diorite',c:'#c6c5c1'},
  quartz_bricks:{n:'Quartz Bricks',c:'#e8e1d5'},
  oxidized_chiseled_copper:{n:'Oxidized Chiseled Copper',c:'#3f9a7e'},
  iron_bars:{n:'Iron Bars',c:'#5c6166',glass:.65},
  copper_door:{n:'Oxidized Copper Door',c:'#3f8f77'},
  tuff_bricks:{n:'Tuff Bricks',c:'#6c6f67'},
  polished_tuff:{n:'Polished Tuff',c:'#6a6d65'},
  chiseled_tuff:{n:'Chiseled Tuff',c:'#5d6059'},
  chiseled_tuff_bricks:{n:'Chiseled Tuff Bricks',c:'#62655e'},
  tuff_brick_stairs:{n:'Tuff Brick Stairs',c:'#71746c',sh:'stair'},
  tuff_brick_slab:{n:'Tuff Brick Slab',c:'#71746c',sh:'slab'},
  dark_prismarine:{n:'Dark Prismarine',c:'#335c4f'},
  prismarine_bricks:{n:'Prismarine Bricks',c:'#62a495'},
  oxidized_copper:{n:'Oxidized Copper',c:'#53a286'},
  oxidized_cut_copper_slab:{n:'Oxidized Cut Copper Slab',c:'#55b094',sh:'slab'},
  dark_oak_stairs:{n:'Dark Oak Stairs',c:'#4b3321',sh:'stair'},
  dark_oak_trapdoor:{n:'Dark Oak Trapdoor',c:'#3f2a1b',sh:'trap'},
  bookshelf:{n:'Bookshelf',c:'#6e4d2c'},
  chiseled_bookshelf:{n:'Chiseled Bookshelf',c:'#5b3f25'},
  deepslate_tiles:{n:'Deepslate Tiles',c:'#36363b'},
  deepslate_tile_stairs:{n:'Deepslate Tile Stairs',c:'#3b3b40',sh:'stair'},
  stripped_dark_oak_log:{n:'Stripped Dark Oak Log',c:'#5a3f2a'},
  dark_oak_slab:{n:'Dark Oak Slab',c:'#4b3321',sh:'slab'},
  dark_oak_door:{n:'Dark Oak Door',c:'#3d2817'},
  deepslate_bricks:{n:'Deepslate Bricks',c:'#4e4e54'},
  chiseled_deepslate:{n:'Chiseled Deepslate',c:'#3c3c42'},
  stone_brick_wall:{n:'Stone Brick Wall',c:'#7b7b78',sh:'wall'},
  deepslate_brick_stairs:{n:'Deepslate Brick Stairs',c:'#55555b',sh:'stair'},
  cyan_stained_glass_pane:{n:'Cyan Stained Glass Pane',c:'#2f8f93',glass:.72},
  yellow_stained_glass_pane:{n:'Yellow Stained Glass Pane',c:'#e0c23c',glass:.68},
  polished_basalt:{n:'Polished Basalt',c:'#56565c'},
  cartography_table:{n:'Cartography Table',c:'#6b4b2e'},
  lectern:{n:'Lectern',c:'#7a5634',sh:'lectern'},
  cyan_glazed_terracotta:{n:'Cyan Glazed Terracotta',c:'#3d8e91'},
  orange_glazed_terracotta:{n:'Orange Glazed Terracotta',c:'#c9793a'},
  spruce_planks:{n:'Spruce Planks',c:'#735538'},
  brown_terracotta:{n:'Brown Terracotta',c:'#4d3324'},
  smooth_sandstone:{n:'Smooth Sandstone',c:'#d9cc9b'},
  ochre_froglight:{n:'Ochre Froglight',c:'#f3d58c',emit:1},
  polished_blackstone_bricks:{n:'Polished Blackstone Bricks',c:'#2e2a30'},
  chiseled_polished_blackstone:{n:'Chiseled Polished Blackstone',c:'#3a343c'},
  polished_blackstone_brick_wall:{n:'Polished Blackstone Brick Wall',c:'#302b32',sh:'wall'},
  gilded_blackstone:{n:'Gilded Blackstone',c:'#866a35'},
  pale_oak_planks:{n:'Pale Oak Planks',c:'#e4dad3'},
  glowstone:{n:'Glowstone',c:'#e7c06a',emit:1},
  redstone_block:{n:'Block of Redstone',c:'#b3170e'},
  red_nether_bricks:{n:'Red Nether Bricks',c:'#4a0f12'},
  map:{n:'Map in Item Frame',c:'#7fb238',sh:'frame'},
  polished_blackstone:{n:'Polished Blackstone',c:'#2f2a30'},
  polished_blackstone_stairs:{n:'Polished Blackstone Stairs',c:'#332e34',sh:'stair'},
  gray_stained_glass_pane:{n:'Gray Stained Glass Pane',c:'#7c8389',glass:.55},
  red_stained_glass_pane:{n:'Red Stained Glass Pane',c:'#a52c2c',glass:.72},
  purple_stained_glass_pane:{n:'Purple Stained Glass Pane',c:'#6c3aa3',glass:.72},
  bell:{n:'Bell',c:'#d6a637',sh:'bell'},
  soul_lantern:{n:'Soul Lantern',c:'#5fd0dc',sh:'lantern',emit:1},
  end_rod:{n:'End Rod',c:'#f4f0e4',sh:'rod',emit:1}
};
/* Box parts of a block inside its unit cell: [x0,y0,z0,x1,y1,z1] */
BK.partsOf=function partsOf(v,B){const sh=B[v.id].sh;
  if(!sh)return[[0,0,0,1,1,1]];
  if(sh==='slab')return v.up?[[0,.5,0,1,1,1]]:[[0,0,0,1,.5,1]];
  if(sh==='wall')return[[.25,0,.25,.75,.9,.75]];
  if(sh==='fence')return[[.375,0,.375,.625,1,.625],[0,.5,.45,1,.65,.55]];
  if(sh==='rod')return[[.43,0,.43,.57,1,.57]];
  if(sh==='chain')return[[.46,0,.46,.54,1,.54]];
  if(sh==='lantern')return[[.3,.1,.3,.7,.6,.7]];
  if(sh==='trap'){const [fx,fz]=v.f||[0,0];return[fx>0?[.82,0,0,1,1,1]:fx<0?[0,0,0,.18,1,1]:fz>0?[0,0,.82,1,1,1]:[0,0,0,1,1,.18]];}
  if(sh==='frame')return[[0,0,0,1,.07,1]];
  if(sh==='lectern')return[[.1,0,.1,.9,.15,.9],[.35,.15,.35,.65,.75,.65],[.15,.75,.15,.85,.95,.85]];
  if(sh==='pot')return[[.2,0,.2,.8,.75,.8],[.32,.75,.32,.68,.95,.68]];
  if(sh==='bell')return[[.25,.1,.25,.75,.75,.75],[.45,.75,.45,.55,1,.55]];
  if(sh==='stair'){const [fx,fz]=v.f||[0,0];const lo=v.up?[0,.5,0,1,1,1]:[0,0,0,1,.5,1];
    const yA=v.up?0:.5,yB=v.up?.5:1;let b;
    if(fx>0)b=[.5,yA,0,1,yB,1];else if(fx<0)b=[0,yA,0,.5,yB,1];else if(fz>0)b=[0,yA,.5,1,yB,1];else if(fz<0)b=[0,yA,0,1,yB,.5];else return[lo];
    return[lo,b];}
  return[[0,0,0,1,1,1]];};
})(globalThis.BK=globalThis.BK||{});
