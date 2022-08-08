import React from 'react';

import { useCart } from 'src/context/CartContext';
import { formatterPrice } from 'src/utils';

import { CartItem } from './CartItem';
import {
  CartButtonProceedToCheckout,
  CartContainer,
  CartContainerItems,
  CartFooter,
  CartHeader,
  CartTotal,
} from './styles';

export type Props = {
  open: boolean;
};

export const Cart = ({ open }: Props) => {
  const { cart } = useCart();
  const cartItems = Object.values(cart);
  const total = cartItems.reduce(
    (acc, curr) => acc + curr.quantity * Number(curr.price),
    0
  );

  return (
    <CartContainer open={open}>
      <CartHeader>
        <h2>Carrinho</h2>
      </CartHeader>

      <CartContainerItems>
        {cartItems?.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </CartContainerItems>

      <CartFooter>
        <CartTotal>
          <h3>Total</h3>
          <h3>{formatterPrice(total)}</h3>
        </CartTotal>
        <CartButtonProceedToCheckout type="button">
          Finalizar Pedido
        </CartButtonProceedToCheckout>
      </CartFooter>
    </CartContainer>
  );
};
