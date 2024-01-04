const charactersUl = document.querySelector('.js_characters');

// DATOS
const characterInfo = [
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
    }
]
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

// FUNCIONES HANDLER

// EVENTOS

// CÓDIGO CUANDO CARGA LA PÁGINA

renderCharacter(characterInfo[0]);
renderCharacter(characterInfo[1]);

