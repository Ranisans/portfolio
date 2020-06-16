import React from 'react';

import HeaderItem from './HeaderItem';
import data from './headerData.json';

import './styles.scss';

const Header = () => (
  <header>
    <nav className='nav'>
      {data.header_item.map((item) => HeaderItem(item))}
    </nav>
  </header>
);

export default Header;