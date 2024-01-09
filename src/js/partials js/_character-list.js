'use strict';

const charactersUl = document.querySelector('.js_characters');
const placeHolderPhoto = 'https://via.placeholder.com/110x105/ffffff/555555/?text=Disney';
const favourites = document.querySelector('.js__favourites');
//const newPhoto = { imageUrl: placeHolderPhoto };
let characterInfo = [];
let favouritesData = [];
const trashCan = document.querySelector('.js_trashCan');

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
  <li class="name li" data-id="${favouriteData._id}">${favouriteData.name}<i class="fa-solid fa-trash-can trash-can js_trashCan"></i></li>
  <li class="li" data-id="${favouriteData._id}">
    <img class="pic" src=${favouriteData.imageUrl} alt="${favouriteData.name}">
  </li>
</ul>


`;
 });
}

function renderAllFavourites () {
  for(let i=0; i < favouritesData.length; i++) {
    renderFavourite(favouritesData[i]);
  }
}

// FUNCIONES HANDLER

function handleClickFavourited () {
  const allCharactersLi = document.querySelectorAll('.name');
 // for (const characterLi of allCharactersLi ) {
  allCharactersLi.forEach((characterLi)=> {
    characterLi.addEventListener('click', (event) => {
      const clickedLi = event.currentTarget;
      const clickedCharacterId = clickedLi.dataset.id;

  const selectedCharacterData = characterInfo.find((oneCharacter)=> oneCharacter._id === parseInt(clickedCharacterId) );
  const favouriteCharacterIndex = favouritesData.findIndex((oneCharacter)=> oneCharacter._id === parseInt(clickedCharacterId));
  
  console.log('clickado favorito', favouriteCharacterIndex);


  if (favouriteCharacterIndex === -1) {
    favouritesData.push (selectedCharacterData);
  }
  else {
    favouritesData.splice(favouriteCharacterIndex, 1);
   }   

  
  renderFavourite(selectedCharacterData);

  // console.log('Clicked ID:', clickedCharacterId);
  console.log('Selected Character Data:', selectedCharacterData);

  clickedLi.classList.toggle('favourited'); 
  });
 });
}

// EVENTOS

// CÓDIGO CUANDO CARGA LA PÁGINA


fetch ('//api.disneyapi.dev/character?pageSize=50')
.then(response => response.json())
.then(data => {
 console.log(data.data);
 characterInfo = data.data;

 renderAllCharacters();
});



/* characterInfo[12] = newPhoto;    //charactersUl
const newHTMLelement = `
<ul class="character-card">
  <li class="name">${[characterInfo].name}</li>
  <li><img class="pic" src="${newPhoto.imageUrl}" alt="Nuevo Personaje"></li>
</ul>
`; */

//charactersUl.innerHTML += newHTMLelement;


// Array 12, meter place holder https://via.placeholder.com/110x105/ffffff/555555/?text=Disney

