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
const trashCan = document.querySelector('.js_trashCan');
const deleteAllBtn = document.querySelector('.js__deleteAllBtn');
const textFav = document.querySelector('.js__textFav');
const favouritedCharacter = document.querySelector('.js_favouritedCharacter');

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
<ul class="character-card js_favouritedCharacter" data-id="${favouriteData._id}">
    <li class="name li" data-id="${favouriteData._id}">${favouriteData.name}</li>
    <span class="trash-can js_trashCan">X</span>
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

  if (clickedLi.classList.contains('favourited') === false) {
    clickedLi.classList.add('favourited');
  }
  });
 });
}

function handleDeleteFavourited () {
  favourites.addEventListener('click', (event) => {
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains('js_trashCan')) {

      // Obtén el elemento ul que contiene la tarjeta del personaje
      const characterCard = clickedElement.closest('.character-card');

      // Obtén el id del personaje asociado a la tarjeta
      const characterId = characterCard.dataset.id;

      // Encuentra el índice del personaje en el array de favoritos
      const characterIndex = favouritesData.findIndex(
        (oneCharacter) => oneCharacter._id === parseInt(characterId)
      );

      // Si se encuentra el personaje, elimínalo
      if (characterIndex !== -1) {
        favouritesData.splice(characterIndex, 1);

        // Actualiza el LocalStorage
        localStorage.setItem('favouritesData', JSON.stringify(favouritesData));
      
        const characterLi = document.querySelector(`.name[data-id="${characterId}"]`);
        if (characterLi) {
          characterLi.classList.remove('favourited');
        }
        // Vuelve a renderizar la lista de favoritos
        renderAllFavourites();
      }  
    }

  });
}

function handleDeleteAllFavourites() {
  deleteAllBtn.addEventListener('click', (event) => {
    event.preventDefault();
    favouritesData = []; 
    localStorage.setItem('favouritesData', JSON.stringify(favouritesData));
    renderAllFavourites(); 
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
 handleDeleteFavourited();
 handleDeleteAllFavourites();
});
