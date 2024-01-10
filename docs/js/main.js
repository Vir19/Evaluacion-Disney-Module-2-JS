const h=document.querySelector(".js_characters"),l=document.querySelector(".js__favourites"),v=document.querySelector(".js__searchForm"),_=document.querySelector(".js__inputSearch");document.querySelector(".js__btnSearch");let n=[],a=[];document.querySelector(".js_trashCan");const S=document.querySelector(".js__deleteAllBtn");function p(e){h.innerHTML+=`
    <ul class="character-card" data-id="${e._id}">
      <li class="name li" data-id="${e._id}">${e.name}</li>
      <li class="li" data-id="${e._id}"><img class="pic"
         src=${e.imageUrl}
         alt="${e.name}"></li>
    </ul>
  `}function f(){for(let e=0;e<n.length;e++)p(n[e]);L()}function m(e){l.innerHTML="",a.forEach(t=>{l.innerHTML+=`
<ul class="character-card js_favouritedCharacter" data-id="${t._id}">
    <li class="name li" data-id="${t._id}">${t.name}</li>
    <span class="trash-can js_trashCan">X</span>
  <li class="li" data-id="${t._id}">
    <img class="pic" src=${t.imageUrl} alt="${t.name}">
  </li>
</ul>
`})}function o(){l.innerHTML="";for(let e=0;e<a.length;e++)m(a[e])}function L(){document.querySelectorAll(".name").forEach(t=>{t.addEventListener("click",i=>{const r=i.currentTarget,s=r.dataset.id,c=n.find(d=>d._id===parseInt(s)),u=a.findIndex(d=>d._id===parseInt(s));u===-1?a.push(c):a.splice(u,1),localStorage.setItem("favouritesData",JSON.stringify(a)),m(),r.classList.contains("favourited")===!1&&r.classList.add("favourited")})})}function g(){l.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("js_trashCan")){const r=t.closest(".character-card").dataset.id,s=a.findIndex(c=>c._id===parseInt(r));if(s!==-1){a.splice(s,1),localStorage.setItem("favouritesData",JSON.stringify(a));const c=document.querySelector(`.name[data-id="${r}"]`);c&&c.classList.remove("favourited"),o()}}})}function C(){S.addEventListener("click",e=>{e.preventDefault(),document.querySelectorAll(".name").forEach(i=>{i.classList.remove("favourited")}),a=[],localStorage.setItem("favouritesData",JSON.stringify(a)),o()})}v.addEventListener("submit",e=>{e.preventDefault(),h.innerHTML="",fetch(`//api.disneyapi.dev/character?name=${_.value}`).then(t=>t.json()).then(t=>{n=t.data,f()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log(e.data),n=e.data,f();const t=localStorage.getItem("favouritesData");t?a=JSON.parse(t):a=[],o(),g(),C()});
//# sourceMappingURL=main.js.map
