import React, { useState } from 'react';

import HeaderButton from './HeaderButton';
import Header from './Header';
import HeaderContext from './HeaderContext';

const HeaderAssembly = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const changeVisibility = () => {
    setIsMenuHidden(!isMenuHidden);
  };
  return (
    <HeaderContext.Provider value={{ isMenuHidden, callback: changeVisibility }}>
      <HeaderButton />
      <Header/>
    </HeaderContext.Provider>
  );
};

export default HeaderAssembly;
