(()=>{var n={418:(n,t,e)=>{const i=e(460);n.exports=(n={})=>{const t=new i(n.identityManager);return build=n=>{root=t.build(n),console.log(root)},{build}}},460:(n,t,e)=>{const{IdentityManager:i,Visual:l}=e(555);n.exports=class{constructor(n=i){this.identityManager=i()}build(n){if(null==n.tag||null==n.tag)return!1;let t=document.createElement(n.tag);return t.id=null==n.id||null==n.id?this.identityManager.genKey():n.id,t.innerHTML=null==n.inner||null==n.inner?"":n.inner,l(t).apply(n.styles),t}}},555:n=>{n.exports={IdentityManager:()=>({genKey:()=>Math.random()*Date.now()}),Visual:n=>({apply:t=>{if(null!=t&&null!=n&&null!=n.classList)return t.forEach((t=>{n.classList.add(t)})),n}})}}},t={};function e(i){var l=t[i];if(void 0!==l)return l.exports;var r=t[i]={exports:{}};return n[i](r,r.exports,e),r.exports}(()=>{const n=e(418)();object={tag:"div",id:"div-1",styles:["class-1","class-2"],inner:"Minha div 1"},n.build(object)})()})();