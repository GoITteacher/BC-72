import axios from 'axios';

export async function getPokemons(url) {
  const data = await getPokemon(url);
  let pokemons = data.results.map(el => {
    return getPokemon(el.url);
  });
  pokemons = await Promise.all(pokemons);
  data.results = pokemons;
  return data;
}

async function getPokemon(url) {
  const response = await axios.get(url);
  return response.data;
}
