import React from 'react';

import HeaderItem from './HeaderItem';
import HeaderContext from './HeaderContext';

const Header = () => (
  <HeaderContext.Consumer>
    {({ isMenuHidden, callback }) => (
      <nav className={`nav ${isMenuHidden ? 'nav--hidden' : ''}`}>
        <HeaderItem name="About" link="/about" callback={callback}/>
        <HeaderItem name="Portfolio" link="/portfolio" callback={callback}/>
      </nav>
    )}
  </HeaderContext.Consumer>
);

export default Header;
