/* eslint-disable no-console */
/* eslint-disable consistent-return */
const getPokemonOriginals = async (limit = 9, offeSet = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offeSet}`
    );
    return await response.json();
  } catch (error) {
    console.log('error', error);
  }
};

const getPokemonDetails = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const getPokemon = async (limit = 9, offeSet = 0, page = 0) => {
  try {
    const data = await getPokemonOriginals(limit, offeSet * page);
    const pokemonDetails = data.results.map(
      async (pk: { url: string; species: { url: string } }) => {
        const pokemonInfo = await getPokemonDetails(pk?.url);

        return pokemonInfo;
      }
    );

    return await Promise.all(pokemonDetails);
  } catch (error) {
    console.log('error', error);
  }
};

// export const serachPokemon = async (name: string) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     return await response.json();

export { getPokemonOriginals, getPokemonDetails };
