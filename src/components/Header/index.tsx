import React from 'react';

import { Link } from 'react-router-dom';

import PokeBall from '../../assets/icons/pokeball.png';
import Logo from '../../assets/images/pokemon-store.png';
import { SearchBar } from './SearchBar';
import {
  HeaderContainer,
  HeaderContent,
  ContainerImage,
  ToggleCart,
} from './styles';

export type Props = {
  toggleCart: () => void;
  open?: boolean;
};

export const Header = ({ toggleCart, open }: Props) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContainerImage>
          <Link to="/">
            <img src={Logo} alt="Pokemon Store" />
          </Link>
        </ContainerImage>
        <ToggleCart type="button" onClick={() => toggleCart()}>
          {open ? 'Fechar Carrinho' : 'Ver Carrinho'}
          <img src={PokeBall} alt="Cart" />
        </ToggleCart>
        <SearchBar />
      </HeaderContent>
    </HeaderContainer>
  );
};
