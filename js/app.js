/* Blockwright · router. "#design-id" opens the builder for that design; anything else shows the library. */
(function(BK){
const lib=document.getElementById('library'),bld=document.getElementById('builder');
let libScroll=0;
function route(){
  const id=decodeURIComponent(location.hash.replace(/^#\/?/,''));
  const d=id&&BK.design(id);
  if(d){if(!lib.hidden)libScroll=window.scrollY;lib.hidden=true;bld.hidden=false;document.body.classList.add('app-open');
    try{BK.Builder.open(id);}catch(err){bld.hidden=true;lib.hidden=false;document.body.classList.remove('app-open');console.error(err);}}
  else{BK.Builder.close();bld.hidden=true;lib.hidden=false;document.body.classList.remove('app-open');document.title='Blockwright';
    BK.Library.show();requestAnimationFrame(()=>window.scrollTo(0,libScroll));}
}
window.addEventListener('hashchange',route);route();
})(globalThis.BK=globalThis.BK||{});
