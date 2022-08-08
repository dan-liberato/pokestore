import React, { useCallback } from 'react';

import styled from 'styled-components';

import { useCart } from 'src/context/CartContext';
import { Product } from 'src/types';

interface ItemsOnCart {
  id?: number;
  name?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

export type Props = {
  product: ItemsOnCart;
};

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #32b9ff;
  color: #fff;
  font-size: 0.75rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin: 0;
  &:hover {
    background-color: #00a8ff;
  }
`;

export const BuyButton = ({ product }: Props) => {
  const { addToCart } = useCart();

  const addToCartHandler = useCallback((item: Product) => {
    addToCart(item);
  }, []);

  return (
    <Button
      type="button"
      onClick={() => addToCartHandler(product as unknown as Product)}
    >
      Adicionar ao Carrinho
    </Button>
  );
};
