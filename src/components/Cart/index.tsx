import React from 'react';

import { CartItem } from './CartItem';
import {
  CartButtonProceedToCheckout,
  CartContainer,
  CartContainerItems,
  CartFooter,
  CartHeader,
  CartTotal,
} from './styles';

const items = [
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
    name: 'Item 1',
    price: 10,
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
    name: 'Item 2',
    price: 20,
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
    name: 'Item 3',
    price: 30,
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
    name: 'Item 4',
    price: 40,
  },
];

export const Cart = () => {
  return (
    <CartContainer>
      <CartHeader>
        <h2>Carrinho</h2>
      </CartHeader>

      <CartContainerItems>
        {items.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </CartContainerItems>

      <CartFooter>
        <CartTotal>
          <h3>Total</h3>
          <h3>R$ 100,00</h3>
        </CartTotal>
        <CartButtonProceedToCheckout type="button">
          Finalizar Pedido
        </CartButtonProceedToCheckout>
      </CartFooter>
    </CartContainer>
  );
};
