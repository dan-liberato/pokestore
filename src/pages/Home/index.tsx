/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { getPokemon } from 'src/api';
import { Layout } from 'src/components/Layout';
import { ProductCard } from 'src/components/ProductCard';
import { Grid } from 'src/components/ui/Grid';
import { Pokemon } from 'src/types';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  // const [pages, setPages] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(12, 6 * 0);
      setPokemon(data as Pokemon[]);
      setLoading(false);
      // setTotalPages(Math.ceil(data?.count / 6));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Grid columns="3">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          pokemon.map((item) => (
            <ProductCard
              key={item?.id}
              id={item?.id}
              name={item?.name}
              image={item?.sprites?.front_default}
              price={item?.base_experience}
              species={item?.species}
            />
          ))
        )}
      </Grid>
    </Layout>
  );
};

export default Home;
