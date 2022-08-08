import React from 'react';

import { Routes as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Search from './pages/Search';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/pokemon/:name" element={<Pokemon />} />
    </Router>
  );
};
export default Routes;
