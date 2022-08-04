import React from 'react';

import {
  CartItemContainer,
  CartItemContainerImage,
  CartItemName,
  CartItemPrice,
} from './styles';

export type CartItemProps = {
  item: {
    image: string;
    name: string;
    price: number;
  };
};

export const CartItem = ({ item: { image, name, price } }: CartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemContainerImage>
        <img src={image} alt={name} />
      </CartItemContainerImage>
      <CartItemName>{name}</CartItemName>
      <CartItemPrice>{price}</CartItemPrice>
    </CartItemContainer>
  );
};
