import React from 'react';

import { Cart } from '../Cart';
import { Header } from '../Header';
import { Container, Main } from './styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Main>
        {children}
        <Cart />
      </Main>
    </Container>
  );
};
