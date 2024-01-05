const charactersUl = document.querySelector('.js_characters');

// DATOS
/* const characterInfo = [
  {
    "_id": 112,
    "films": [
    "Hercules (film)"
    ],
    "shortFilms": [],
    "tvShows": [
    "Hercules (TV series)"
    ],
    "videoGames": [
    "Kingdom Hearts III"
    ],
    "parkAttractions": [],
    "allies": [],
    "enemies": [],
    "sourceUrl": "https://disney.fandom.com/wiki/Achilles_(Hercules)",
    "name": "Achilles",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
    "createdAt": "2021-04-12T01:31:30.547Z",
    "updatedAt": "2021-12-20T20:39:18.033Z",
    "url": "https://api.disneyapi.dev/characters/112",
    "__v": 0
    },
    {
    "_id": 18,
    "films": [
    "The Fox and the Hound",
    "The Fox and the Hound 2"
    ],
    "shortFilms": [],
    "tvShows": [],
    "videoGames": [],
    "parkAttractions": [],
    "allies": [],
    "enemies": [],
    "sourceUrl": "https://disney.fandom.com/wiki/Abigail_the_Cow",
    "name": "Abigail the Cow",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
    "createdAt": "2021-04-12T01:26:03.413Z",
    "updatedAt": "2021-12-20T20:39:18.032Z",
    "url": "https://api.disneyapi.dev/characters/18",
    "__v": 0
    },
    {
      "_id": 36,
      "films": [],
      "shortFilms": [],
      "tvShows": [
      "K.C. Undercover"
      ],
      "videoGames": [],
      "parkAttractions": [],
      "allies": [],
      "enemies": [],
      "sourceUrl": "https://disney.fandom.com/wiki/Candace_Adams",
      "name": "Candace Adams",
      "imageUrl": "https://static.wikia.nocookie.net/disney/images/8/8b/Enemy_of_the_State_promo_3.jpg",
      "createdAt": "2021-04-12T01:26:16.062Z",
      "updatedAt": "2021-12-20T20:39:18.033Z",
      "url": "https://api.disneyapi.dev/characters/36",
      "__v": 0
      },
      {
        "_id": 181,
        "films": [],
        "shortFilms": [],
        "tvShows": [
        "Chip 'n Dale Rescue Rangers"
        ],
        "videoGames": [],
        "parkAttractions": [],
        "allies": [],
        "enemies": [],
        "sourceUrl": "https://disney.fandom.com/wiki/Irwina_Allen",
        "name": "Irwina Allen",
        "imageUrl": "https://static.wikia.nocookie.net/disney/images/4/48/Chip_%27n_Dale_Rescue_Rangers_109_Risky_Beesness_arsenaloyal_-_YouTube12.jpg",
        "createdAt": "2021-04-12T01:32:15.300Z",
        "updatedAt": "2021-12-20T20:39:18.877Z",
        "url": "https://api.disneyapi.dev/characters/181",
        "__v": 0
        },
        {
          "_id": 204,
          "films": [
          "The Robber Kitten",
          "Mickey's Polo Team"
          ],
          "shortFilms": [],
          "tvShows": [],
          "videoGames": [],
          "parkAttractions": [],
          "allies": [],
          "enemies": [],
          "sourceUrl": "https://disney.fandom.com/wiki/Ambrose",
          "name": "Ambrose",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/d/d3/Ambrose.jpg",
          "createdAt": "2021-04-12T01:32:29.083Z",
          "updatedAt": "2021-12-20T20:39:19.408Z",
          "url": "https://api.disneyapi.dev/characters/204",
          "__v": 0
          }
] */
let characterInfo = [];
const placeHolderPhoto = 'https://via.placeholder.com/110x105/ffffff/555555/?text=Disney';
const newPhoto = { imageUrl: placeHolderPhoto };


// FUNCIONES
function renderCharacter(characterData) {
  charactersUl.innerHTML += `
  <ul class="character-card">
    <li class="name">${characterData.name}</li>
    <li><img class="pic"
       src=${characterData.imageUrl}
       alt="${characterData.name}"></li>
  </ul>
  `;
}

function renderAllCharacters(){
  for(let i=0; i < characterInfo.length; i++) {
    renderCharacter(characterInfo[i]);
  }
}
// FUNCIONES HANDLER

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

charactersUl.innerHTML += newHTMLelement;


// Array 12, meter place holder https://via.placeholder.com/110x105/ffffff/555555/?text=Disney

