import React from 'react';

const HeaderItem = ({ link, name }) => (
  <a className='nav_link' key={link} href={`/${link}`}>
    <span className='nav_link_text' >{name}</span>
  </a>
);

export default HeaderItem;
