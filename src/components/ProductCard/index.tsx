/* eslint-disable no-console */
import React, { useEffect } from 'react';

import { getPokemonDetails } from 'src/api';
import { formatterPrice } from 'src/utils';

import {
  ButtonAddToCart,
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  ProductCardName,
  ProductCardPrice,
} from './styles';

export type ProductCardProps = {
  productId?: number;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  productSpecies: string | undefined;
};

export const ProductCard = ({
  productName,
  productPrice,
  productImage,
  productId,
  productSpecies,
}: ProductCardProps) => {
  const [speciesColor, setSpeciesColor] = React.useState<string>('');
  const price = formatterPrice(productPrice || 0);

  const fetchSpecies = async () => {
    try {
      const data = await getPokemonDetails(productSpecies as string);
      setSpeciesColor(data.color.name);
    } catch (error) {
      console.log(error);
    }

    return null;
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  console.log(speciesColor);

  return (
    <ProductCardContainer id={String(productId)} color={speciesColor}>
      <ProductCardImage>
        <img src={productImage} alt={productName} />
      </ProductCardImage>

      <ProductCardInfo>
        <ProductCardName>{productName}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>

        <ButtonAddToCart>Adicionar ao Carrinho</ButtonAddToCart>
      </ProductCardInfo>
    </ProductCardContainer>
  );
};
