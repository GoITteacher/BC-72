import { getPokemons } from './modules/pokemonApi';
const url = `https://pokeapi.co/api/v2/pokemon?limit=4&offset=0`;

const refs = {
  formElem: document.querySelector('.js-search-form'),
  pokemonListElem: document.querySelector('.js-pokemon-list'),
  prevBtnElem: document.querySelector('.js-btn-prev'),
  nextBtnElem: document.querySelector('.js-btn-next'),
};

let nextUrl = '';
let prevUrl = '';

getPokemonsData(url);

//!===============================================================

function pokemonTemplate({
  sprites,
  name,
  id,
  weight,
  height,
  base_experience,
  order,
}) {
  return `<li class="card pokemon">
  <img
    class="pokemon-img"
    src="${sprites.front_default}"
    alt="#"
  />
  <div class="pokemon-header">
    <h4 class="pokemon-title">${name}</h4>
    <span class="pokemon-id">#${(id + '').padStart(5, '0')}</span>
  </div>

  <div class="pokemon-desc">
    <span>Weight: ${weight}</span>
    <span>Height: ${height}</span>
    <span>Experience: ${base_experience}</span>
    <span>Order: ${order}</span>
  </div>

  <div class="pokemon-footer"></div>
</li>`;
}

function renderPokemon(pokemonList) {
  const markup = pokemonList.map(pokemonTemplate).join('');
  refs.pokemonListElem.innerHTML = markup;
}

//!===============================================================

async function getPokemonsData(url) {
  try {
    const data = await getPokemons(url);
    renderPokemon(data.results);

    nextUrl = data.next;
    prevUrl = data.previous;

    refs.nextBtnElem.disabled = !data.next;
    refs.prevBtnElem.disabled = !data.previous;
  } catch {
    console.log('err');
  }
}

refs.nextBtnElem.addEventListener('click', () => {
  getPokemonsData(nextUrl);
});

refs.prevBtnElem.addEventListener('click', () => {
  getPokemonsData(prevUrl);
});
