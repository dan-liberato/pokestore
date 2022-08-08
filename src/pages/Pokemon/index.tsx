/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { getPokemonDetails } from 'src/api';
import { Layout } from 'src/components/Layout';
import { Grid } from 'src/components/ui/Grid';
import { useUrlPath } from 'src/hooks/useUrlPath';
import { Pokemon } from 'src/types';

const PokemonDetails = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>({} as Pokemon);
  const urlPath = useUrlPath();

  useEffect(() => {
    if (urlPath.length > 1) {
      const splitPath = urlPath.split('/');
      setPokemonName(splitPath[2]);
    }
  }, [urlPath]);

  const fetchPokemonDetails = async () => {
    try {
      setLoading(true);
      const data = await getPokemonDetails(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log({ data });
      setPokemonInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchPokemonDetails();
    }, 100);

    return () => clearTimeout(getData);
  }, []);

  console.log({ pokemonName, pokemonInfo });

  return (
    <Layout>
      <Grid columns="1">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>{pokemonInfo?.name}</h1>
            <img
              src={pokemonInfo?.sprites?.front_default}
              alt={pokemonInfo?.name}
            />
            <p>{pokemonInfo?.species?.name}</p>
            <p>{pokemonInfo?.base_experience}</p>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default PokemonDetails;
