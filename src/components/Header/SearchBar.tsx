import React from 'react';

import { SearchForm } from './styles';

export const SearchBar = () => {
  return (
    <div>
      <SearchForm action="/search" method="get">
        <input
          type="text"
          placeholder="Qual pokemon você quer?"
          name="term"
          required
        />
        <button type="submit">Buscar</button>
      </SearchForm>
    </div>
  );
};
