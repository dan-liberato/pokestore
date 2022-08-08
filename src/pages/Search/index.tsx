import React, { useEffect, useState } from 'react';

import { getPokemon } from 'src/api';
import { Layout } from 'src/components/Layout';
import { ProductCard } from 'src/components/ProductCard';
import { Grid } from 'src/components/ui/Grid';
import { ProductItem } from 'src/types';

const Search = () => {
  const [searchFiltered, setSearchFiltered] = useState<ProductItem[]>([]);
  // const [pages, setPages] = useState(0);
  const { search } = window.location;
  const term = new URLSearchParams(search).get('term') as string;

  const filteredPokemon = async (searchTerm: string) => {
    try {
      const pokemon = await getPokemon(150, 0);
      if (pokemon && !searchTerm) return pokemon;

      const filteredTerm = pokemon?.filter((item: ProductItem) => {
        return item?.name?.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setSearchFiltered(filteredTerm as ProductItem[]);
      return pokemon;
    } catch (error) {
      console.log(error);
    }

    return null;
  };

  useEffect(() => {
    filteredPokemon(term);
  }, [term]);

  return (
    <Layout>
      <Grid columns="2">
        {searchFiltered.map((item) => (
          <ProductCard
            key={item?.id}
            id={item?.id}
            name={item?.name}
            image={item?.sprites?.front_default}
            price={item?.base_experience}
            species={item?.species}
          />
        ))}
      </Grid>
    </Layout>
  );
};
export default Search;
