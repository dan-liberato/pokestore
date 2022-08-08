/* eslint-disable no-console */
import React from 'react';

import { ProductItem } from 'src/types';
import { formatterPrice } from 'src/utils';

import { BuyButton } from '../ui/BuyButton';
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  ProductCardName,
  ProductCardPrice,
  LinkTo,
} from './styles';

export type ProductCardProps = {
  productId?: number;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  productSpecies?: string | undefined;
};

export const ProductCard = ({
  id,
  name,
  image,
  price: productPrice,
}: // species,
ProductItem) => {
  // const [speciesColor, setSpeciesColor] = React.useState<string>('');
  const price = formatterPrice(productPrice as number);

  // const fetchSpecies = async () => {
  //   try {
  //     const data = await getPokemonDetails(species?.url as string);
  //     setSpeciesColor(data.color.name);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return null;
  // };

  // useEffect(() => {
  //   fetchSpecies();
  // }, []);

  return (
    <ProductCardContainer id={String(id)} color="#fff">
      <LinkTo to={`/pokemon/${name}`}>
        <ProductCardImage>
          <img src={image} alt={name} />
        </ProductCardImage>

        <ProductCardInfo>
          <ProductCardName>{name}</ProductCardName>
          <ProductCardPrice>{price}</ProductCardPrice>
        </ProductCardInfo>
      </LinkTo>
      <BuyButton
        product={{
          id,
          name,
          price: Number(productPrice),
          image,
        }}
      />
    </ProductCardContainer>
  );
};
