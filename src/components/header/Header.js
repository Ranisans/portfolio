import React from 'react';

import HeaderItem from './HeaderItem';

const Header = () => (
  <nav className='nav'>
    <HeaderItem name="About" link="/about" />
    <HeaderItem name="Portfolio" link="/portfolio" />
  </nav>
);

export default Header;
