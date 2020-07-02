import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = ({ link, name }) => (
  <Link className='nav_link' to={link}>
    <span className='nav_link_text' >{name}</span>
  </Link>
);

export default HeaderItem;
