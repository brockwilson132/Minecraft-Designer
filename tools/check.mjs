// node tools/check.mjs — builds every design listed in index.html and reports problems.
import fs from 'node:fs';import vm from 'node:vm';import path from 'node:path';
const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const srcs=[...html.matchAll(/<script src="((?:js|designs)\/[^"]+)"/g)].map(m=>m[1]).filter(s=>/blocks|world|designs\//.test(s));
const extra=process.argv.slice(2);
const ctx=vm.createContext({console,Math,Map,Set,Array,Object,JSON,Error});ctx.globalThis=ctx;
for(const s of [...srcs,...extra])vm.runInContext(fs.readFileSync(path.join(root,s),'utf8'),ctx,{filename:s});
let bad=0;
for(const d of ctx.BK.designs()){const t=Date.now();
  try{const S=ctx.BK.load(d);
    const empty=(d.steps||[]).map(s=>s[1]||s.id).filter(id=>!S.steps.some(x=>x.id===id));
    console.log(`✓ ${d.id}: ${S.ALL.length} blocks, y ${S.MINY}–${S.MAXY}, ${S.steps.length} steps, ${Date.now()-t} ms`);
    if(S.untagged){console.log(`  ! ${S.untagged} blocks have no build step (set w.comp before placing them)`);bad++;}
    if(empty.length)console.log(`  ! steps with no blocks: ${empty.join(', ')}`);
  }catch(e){bad++;console.log(`✗ ${d.id}: ${e.message}`);}}
process.exit(bad?1:0);
