import React from 'react';

import { CartProvider } from 'src/context/CartContext';

import { Cart } from '../Cart';
import { Header } from '../Header';
import { Container, Main } from './styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  const [cartOpen, setCartOpen] = React.useState(false);

  const toggleCart = () => {
    return setCartOpen(!cartOpen);
  };

  return (
    <Container>
      <Header toggleCart={toggleCart} open={cartOpen} />

      <CartProvider>
        <Main>
          {children}
          <Cart open={cartOpen} />
        </Main>
      </CartProvider>
    </Container>
  );
};
