const h=document.querySelector(".js_characters"),i=document.querySelector(".js__favourites"),_=document.querySelector(".js__searchForm"),v=document.querySelector(".js__inputSearch");document.querySelector(".js__btnSearch");let s=[],a=[];document.querySelector(".js_trashCan");const S=document.querySelector(".js__deleteAllBtn");document.querySelector(".js__textFav");document.querySelector(".js_favouritedCharacter");function p(e){h.innerHTML+=`
    <ul class="character-card" data-id="${e._id}">
      <li class="name li" data-id="${e._id}">${e.name}</li>
      <li class="li" data-id="${e._id}"><img class="pic"
         src=${e.imageUrl}
         alt="${e.name}"></li>
    </ul>
  `}function f(){for(let e=0;e<s.length;e++)p(s[e]);g()}function m(e){i.innerHTML="",a.forEach(t=>{i.innerHTML+=`
<ul class="character-card js_favouritedCharacter" data-id="${t._id}">
    <li class="name li" data-id="${t._id}">${t.name}</li>
    <span class="trash-can js_trashCan">X</span>
  <li class="li" data-id="${t._id}">
    <img class="pic" src=${t.imageUrl} alt="${t.name}">
  </li>
</ul>
`})}function d(){i.innerHTML="";for(let e=0;e<a.length;e++)m(a[e])}function g(){document.querySelectorAll(".name").forEach(t=>{t.addEventListener("click",o=>{const r=o.currentTarget,n=r.dataset.id,c=s.find(l=>l._id===parseInt(n)),u=a.findIndex(l=>l._id===parseInt(n));u===-1?a.push(c):a.splice(u,1),localStorage.setItem("favouritesData",JSON.stringify(a)),m(),r.classList.contains("favourited")===!1&&r.classList.add("favourited")})})}function L(){i.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("js_trashCan")){const r=t.closest(".character-card").dataset.id,n=a.findIndex(c=>c._id===parseInt(r));if(n!==-1){a.splice(n,1),localStorage.setItem("favouritesData",JSON.stringify(a));const c=document.querySelector(`.name[data-id="${r}"]`);c&&c.classList.remove("favourited"),d()}}})}function y(){S.addEventListener("click",e=>{e.preventDefault(),a=[],localStorage.setItem("favouritesData",JSON.stringify(a)),d()})}_.addEventListener("submit",e=>{e.preventDefault(),h.innerHTML="",fetch(`//api.disneyapi.dev/character?name=${v.value}`).then(t=>t.json()).then(t=>{s=t.data,f()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log(e.data),s=e.data,f();const t=localStorage.getItem("favouritesData");t?a=JSON.parse(t):a=[],d(),L(),y()});
//# sourceMappingURL=main.js.map
