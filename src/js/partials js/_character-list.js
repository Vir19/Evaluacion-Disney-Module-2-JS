'use strict';

const charactersUl = document.querySelector('.js_characters');
const placeHolderPhoto = 'https://via.placeholder.com/110x105/ffffff/555555/?text=Disney';
const favourites = document.querySelector('.js__favourites');
const searchForm = document.querySelector('.js__searchForm');
const inputSearch = document.querySelector('.js__inputSearch');
const btnSearch = document.querySelector('.js__btnSearch');
//const newPhoto = { imageUrl: placeHolderPhoto };
let characterInfo = [];
let favouritesData = [];


// FUNCIONES
function renderCharacter(characterData) {
  charactersUl.innerHTML += `
    <ul class="character-card" data-id="${characterData._id}">
      <li class="name li" data-id="${characterData._id}">${characterData.name}</li>
      <li class="li" data-id="${characterData._id}"><img class="pic"
         src=${characterData.imageUrl}
         alt="${characterData.name}"></li>
    </ul>
  `;
}

function renderAllCharacters(){
  for(let i=0; i < characterInfo.length; i++) {
    renderCharacter(characterInfo[i]);
  }
  handleClickFavourited();
}

function renderFavourite(favouriteData) {
favourites.innerHTML = '';
favouritesData.forEach((favouriteData) => { 
favourites.innerHTML += `
<ul class="character-card" data-id="${favouriteData._id}">
  <li class="name li" data-id="${favouriteData._id}">${favouriteData.name}</li>
  <li class="li" data-id="${favouriteData._id}">
    <img class="pic" src=${favouriteData.imageUrl} alt="${favouriteData.name}">
  </li>
</ul>
`;
 });
}

function renderAllFavourites () {
  favourites.innerHTML = '';
  for(let i=0; i < favouritesData.length; i++) {
    renderFavourite(favouritesData[i]);
  }
}

// FUNCIONES HANDLER

function handleClickFavourited () {
  const allCharactersLi = document.querySelectorAll('.name');
  allCharactersLi.forEach((characterLi)=> {
    characterLi.addEventListener('click', (event) => {
      const clickedLi = event.currentTarget;
      const clickedCharacterId = clickedLi.dataset.id;

  const selectedCharacterData = characterInfo.find((oneCharacter)=> oneCharacter._id === parseInt(clickedCharacterId) );
  const favouriteCharacterIndex = favouritesData.findIndex((oneCharacter)=> oneCharacter._id === parseInt(clickedCharacterId));
  
  if (favouriteCharacterIndex === -1) {
    favouritesData.push (selectedCharacterData);
  }
  else {
    favouritesData.splice(favouriteCharacterIndex, 1);
  }   

  localStorage.setItem('favouritesData', JSON.stringify(favouritesData));
 
  renderFavourite(selectedCharacterData);

  clickedLi.classList.toggle('favourited'); 
  });
 });
}

// EVENTOS

searchForm.addEventListener ('submit', (event) => {
  event.preventDefault();
  charactersUl.innerHTML = '';
  fetch(`//api.disneyapi.dev/character?name=${inputSearch.value}`)
  .then (response => response.json())
  .then (data => {
   characterInfo = data.data;

   renderAllCharacters();
  })


});

// CÓDIGO CUANDO CARGA LA PÁGINA

fetch ('//api.disneyapi.dev/character?pageSize=50')
.then(response => response.json())
.then(data => {
 console.log(data.data);
 characterInfo = data.data;

 renderAllCharacters();
 const storedFavouritesData = localStorage.getItem('favouritesData');
 if (storedFavouritesData) {
     favouritesData = JSON.parse(storedFavouritesData);
 } else {
     favouritesData = [];
 }
 renderAllFavourites();
});


