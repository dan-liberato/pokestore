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

export { getPokemonOriginals, getPokemonDetails };
