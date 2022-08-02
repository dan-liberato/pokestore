import React from 'react';

import { Routes as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Router>
  );
};
export default Routes;
