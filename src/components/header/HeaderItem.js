import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = ({ link, name, callback }) => (
  <Link className='nav_link' to={link} onClick={callback}>
    <span className='nav_link_text' >{name}</span>
  </Link>
);

export default HeaderItem;
