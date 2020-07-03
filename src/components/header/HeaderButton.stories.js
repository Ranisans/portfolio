import React, { useState } from 'react';

import HeaderButton from './HeaderButton';
import HeaderContext from './HeaderContext';

export default {
  title: 'Header Button',
  component: HeaderButton,
};

export const Base = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const changeVisibility = () => {
    setIsMenuHidden(!isMenuHidden);
  };
  return (<div style={{ padding: 20 }}>
  <HeaderContext.Provider value={{ isMenuHidden, callback: changeVisibility }}>
    <HeaderButton />
  </HeaderContext.Provider>
</div>);
};
