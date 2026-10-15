// node tools/bundle.mjs [--artifact]  →  dist/blockwright.html, one self-contained file (CSS and JS inlined).
// --artifact also drops the <html>/<head>/<body> wrapper for hosts that add their own.
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
let html=read('index.html');
html=html.replace(/<link rel="stylesheet" href="(css\/[^"]+)">/g,(_,p)=>`<style>\n${read(p)}\n</style>`);
html=html.replace(/<script src="((?:js|designs)\/[^"]+)"><\/script>/g,(_,p)=>`<script>\n${read(p).replace(/<\/script/gi,'<\\/script')}\n</script>`);
if(process.argv.includes('--artifact')){
  html=html.replace(/<!doctype html>\s*/i,'').replace(/<html[^>]*>\s*/i,'').replace(/<\/html>\s*/i,'')
    .replace(/<head>\s*/i,'').replace(/<\/head>\s*/i,'').replace(/<body>\s*/i,'').replace(/<\/body>\s*/i,'')
    .replace(/<meta charset="utf-8">\s*/i,'').replace(/<meta name="viewport"[^>]*>\s*/i,'');
}
fs.mkdirSync(path.join(root,'dist'),{recursive:true});
const out=path.join(root,'dist','blockwright.html');fs.writeFileSync(out,html);
console.log('wrote',path.relative(process.cwd(),out),(html.length/1024).toFixed(0)+' KB');
