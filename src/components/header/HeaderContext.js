import React from 'react';

const HeaderContext = React.createContext(
  {
    isMenuHidden: false,
    changeVisibility: () => {},
  },
);

export default HeaderContext;
