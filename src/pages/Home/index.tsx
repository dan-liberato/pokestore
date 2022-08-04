/* eslint-disable no-shadow */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { getPokemonDetails, getPokemonOriginals } from 'src/api';
import { Grid } from 'src/components/Grid';
import { Layout } from 'src/components/Layout';
import { ProductCard } from 'src/components/ProductCard';
import { Pokemon } from 'src/types';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pages, setPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getPokemonOriginals(9, 6 * pages);
      const pokemonDetails = data.results.map(
        async (pk: { url: string; species: { url: string } }) => {
          const pokeDetails = await getPokemonDetails(pk?.url);

          return pokeDetails;
        }
      );

      const pokemonDetailsData = await Promise.all(pokemonDetails);
      setPokemon(pokemonDetailsData);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 6));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(pokemon);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Grid>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          pokemon.map((item) => (
            <ProductCard
              key={item?.id}
              productSpecies={item.species?.url}
              productId={item?.id}
              productName={item.name}
              productPrice={item.base_experience}
              productImage={item.sprites?.front_default}
            />
          ))
        )}
      </Grid>
    </Layout>
  );
};

export default Home;
