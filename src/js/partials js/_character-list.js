'use strict';

const charactersUl = document.querySelector('.js_characters');
const placeHolderPhoto = 'https://via.placeholder.com/110x105/ffffff/555555/?text=Disney';
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

// FUNCIONES HANDLER

function handleClickFavourited () {
  const allCharactersLi = document.querySelectorAll('.name');
  for (const characterLi of allCharactersLi ) {
    characterLi.addEventListener('click', (event) => {
      const clickedLi = event.currentTarget;
      const clickedCharacterId = clickedLi.dataset.id;

    const selectedCharacterData = characterInfo.find((oneCharacter)=> oneCharacter._id === parseInt(clickedCharacterId) );

      
     
     console.log('Clicked ID:', clickedCharacterId);
      console.log('Selected Character Data:', selectedCharacterData);


      clickedLi.classList.toggle('favourited'); 
    })
  } 
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

