import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import HeaderContext from './HeaderContext';

export default {
  title: 'Header',
  component: Header,
};

export const Base = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const changeVisibility = () => {
    setIsMenuHidden(!isMenuHidden);
  };
  return (<Router>
    <HeaderContext.Provider value={{ isMenuHidden, callback: changeVisibility }}>
      <Header />
    </HeaderContext.Provider>
  </Router>);
};
