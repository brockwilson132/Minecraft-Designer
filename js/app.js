/* Blockwright · router. "#design-id" opens the builder for that design; anything else shows the library.
   Where the page runs inside Claude, designs saved in the app are loaded too and the Claude panel turns on. */
(function(BK){
const lib=document.getElementById('library'),bld=document.getElementById('builder');
let libScroll=0;
async function route(){
  const id=decodeURIComponent(location.hash.replace(/^#\/?/,''));
  const d=id&&BK.design(id);
  if(d){if(!lib.hidden)libScroll=window.scrollY;lib.hidden=true;bld.hidden=false;document.body.classList.add('app-open');
    try{await BK.Builder.open(id);}catch(err){console.error(err);}
    const p=BK.pendingPrompt;if(p&&p.id===id){BK.pendingPrompt=null;BK.Builder.openStudio();BK.Studio.start(id,p.text,p.shown);}}
  else{BK.Builder.close();bld.hidden=true;lib.hidden=false;document.body.classList.remove('app-open');document.title='Blockwright';
    BK.Library.show();requestAnimationFrame(()=>window.scrollTo(0,libScroll));}
}
window.addEventListener('hashchange',route);
route();
// designs saved in the app (Claude-hosted only); a link to one of them works once they have loaded
BK.Store.start().then(async()=>{await BK.Studio.init();BK.Store.onChange(()=>{if(!lib.hidden)BK.Library.refresh();});
  const id=decodeURIComponent(location.hash.replace(/^#\/?/,''));
  if(id&&BK.design(id)&&lib.hidden===false)route();else if(!lib.hidden)BK.Library.refresh();
  else if(bld.hidden===false)BK.Studio.refresh();});
})(globalThis.BK=globalThis.BK||{});
