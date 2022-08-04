import React from 'react';

import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <header>
      <div>
        <h1>PokeStore</h1>
        <SearchBar />
      </div>
    </header>
  );
};
