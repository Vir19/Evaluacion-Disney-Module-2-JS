const h=document.querySelector(".js_characters"),s=document.querySelector(".js__favourites"),_=document.querySelector(".js__searchForm"),g=document.querySelector(".js__inputSearch");document.querySelector(".js__btnSearch");let n=[],a=[];document.querySelector(".js_trashCan");const p=document.querySelector(".js__deleteAllBtn");function v(e){h.innerHTML+=`
    <ul class="character-card" data-id="${e._id}">
      <li class="name li" data-id="${e._id}">${e.name}</li>
      <li class="li" data-id="${e._id}"><img class="pic"
         src=${e.imageUrl}
         alt="${e.name}"></li>
    </ul>
  `}function f(){for(let e=0;e<n.length;e++)v(n[e]);S()}function m(e){s.innerHTML="",a.forEach(t=>{s.innerHTML+=`
<ul class="character-card" data-id="${t._id}">
    <li class="name li" data-id="${t._id}">${t.name}</li>
    <span class="trash-can js_trashCan">X</span>
  <li class="li" data-id="${t._id}">
    <img class="pic" src=${t.imageUrl} alt="${t.name}">
  </li>
</ul>
`})}function d(){s.innerHTML="";for(let e=0;e<a.length;e++)m(a[e])}function S(){document.querySelectorAll(".name").forEach(t=>{t.addEventListener("click",o=>{const c=o.currentTarget,r=c.dataset.id,i=n.find(l=>l._id===parseInt(r)),u=a.findIndex(l=>l._id===parseInt(r));u===-1?a.push(i):a.splice(u,1),localStorage.setItem("favouritesData",JSON.stringify(a)),m(),c.classList.toggle("favourited")})})}function I(){s.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("js_trashCan")){const c=t.closest(".character-card").dataset.id,r=a.findIndex(i=>i._id===parseInt(c));r!==-1&&(a.splice(r,1),localStorage.setItem("favouritesData",JSON.stringify(a)),d())}})}function L(){p.addEventListener("click",e=>{e.preventDefault(),a=[],localStorage.setItem("favouritesData",JSON.stringify(a)),d()})}_.addEventListener("submit",e=>{e.preventDefault(),h.innerHTML="",fetch(`//api.disneyapi.dev/character?name=${g.value}`).then(t=>t.json()).then(t=>{n=t.data,f()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log(e.data),n=e.data,f();const t=localStorage.getItem("favouritesData");t?a=JSON.parse(t):a=[],d(),I(),L()});
//# sourceMappingURL=main.js.map
