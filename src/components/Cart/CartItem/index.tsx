import React from 'react';

import { formatterPrice } from 'src/utils';

import {
  CartItemContainer,
  CartItemContainerImage,
  CartItemName,
  CartItemPrice,
  // CartItemQtd,
} from './styles';

export type CartItemProps = {
  item: {
    image: string;
    name: string;
    price: number;
    quantity: number;
  };
};

export const CartItem = ({ item: { image, name, price } }: CartItemProps) => {
  return (
    <CartItemContainer>
      <CartItemContainerImage>
        <img src={image} alt={name} />
      </CartItemContainerImage>
      <CartItemName>{name}</CartItemName>
      {/* <CartItemQtd>quantidade {quantity}</CartItemQtd> */}
      <CartItemPrice>{formatterPrice(price)}</CartItemPrice>
    </CartItemContainer>
  );
};
