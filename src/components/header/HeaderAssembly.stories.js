import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderAssembly from './HeaderAssembly';

export default {
  title: 'Header Assembly',
  component: HeaderAssembly,
};

export const Base = () => (
    <Router>
      <HeaderAssembly />
    </Router>
);
