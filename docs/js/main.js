const u=document.querySelector(".js_characters"),s=document.querySelector(".js__favourites"),_=document.querySelector(".js__searchForm"),p=document.querySelector(".js__inputSearch");document.querySelector(".js__btnSearch");let c=[],t=[];document.querySelector(".js_trashCan");function g(e){u.innerHTML+=`
    <ul class="character-card" data-id="${e._id}">
      <li class="name li" data-id="${e._id}">${e.name}</li>
      <li class="li" data-id="${e._id}"><img class="pic"
         src=${e.imageUrl}
         alt="${e.name}"></li>
    </ul>
  `}function h(){for(let e=0;e<c.length;e++)g(c[e]);S()}function f(e){s.innerHTML="",t.forEach(a=>{s.innerHTML+=`
<ul class="character-card" data-id="${a._id}">
    <li class="name li" data-id="${a._id}">${a.name}</li>
    <span class="trash-can js_trashCan">X</span>
  <li class="li" data-id="${a._id}">
    <img class="pic" src=${a.imageUrl} alt="${a.name}">
  </li>
</ul>
`})}function m(){s.innerHTML="";for(let e=0;e<t.length;e++)f(t[e])}function S(){document.querySelectorAll(".name").forEach(a=>{a.addEventListener("click",d=>{const n=d.currentTarget,r=n.dataset.id,i=c.find(l=>l._id===parseInt(r)),o=t.findIndex(l=>l._id===parseInt(r));o===-1?t.push(i):t.splice(o,1),localStorage.setItem("favouritesData",JSON.stringify(t)),f(),n.classList.toggle("favourited")})})}function v(){s.addEventListener("click",e=>{const a=e.target;if(a.classList.contains("js_trashCan")){const n=a.closest(".character-card").dataset.id,r=t.findIndex(i=>i._id===parseInt(n));r!==-1&&(t.splice(r,1),localStorage.setItem("favouritesData",JSON.stringify(t)),m())}})}_.addEventListener("submit",e=>{e.preventDefault(),u.innerHTML="",fetch(`//api.disneyapi.dev/character?name=${p.value}`).then(a=>a.json()).then(a=>{c=a.data,h()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log(e.data),c=e.data,h();const a=localStorage.getItem("favouritesData");a?t=JSON.parse(a):t=[],m(),v()});
//# sourceMappingURL=main.js.map
