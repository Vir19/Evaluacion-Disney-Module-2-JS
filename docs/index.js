(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const u=document.querySelector(".js_characters"),d=document.querySelector(".js__favourites"),h=document.querySelector(".js__searchForm"),p=document.querySelector(".js__inputSearch");document.querySelector(".js__btnSearch");let a=[],n=[];function g(e){u.innerHTML+=`
    <ul class="character-card" data-id="${e._id}">
      <li class="name li" data-id="${e._id}">${e.name}</li>
      <li class="li" data-id="${e._id}"><img class="pic"
         src=${e.imageUrl}
         alt="${e.name}"></li>
    </ul>
  `}function f(){for(let e=0;e<a.length;e++)g(a[e]);_()}function m(e){d.innerHTML="",n.forEach(t=>{d.innerHTML+=`
<ul class="character-card" data-id="${t._id}">
  <li class="name li" data-id="${t._id}">${t.name}</li>
  <li class="li" data-id="${t._id}">
    <img class="pic" src=${t.imageUrl} alt="${t.name}">
  </li>
</ul>
`})}function y(){d.innerHTML="";for(let e=0;e<n.length;e++)m(n[e])}function _(){document.querySelectorAll(".name").forEach(t=>{t.addEventListener("click",o=>{const s=o.currentTarget,r=s.dataset.id,i=a.find(l=>l._id===parseInt(r)),c=n.findIndex(l=>l._id===parseInt(r));c===-1?n.push(i):n.splice(c,1),localStorage.setItem("favouritesData",JSON.stringify(n)),m(),s.classList.toggle("favourited")})})}h.addEventListener("submit",e=>{e.preventDefault(),u.innerHTML="",fetch(`//api.disneyapi.dev/character?name=${p.value}`).then(t=>t.json()).then(t=>{a=t.data,f()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log(e.data),a=e.data,f();const t=localStorage.getItem("favouritesData");t?n=JSON.parse(t):n=[],y()});
//# sourceMappingURL=index.js.map
