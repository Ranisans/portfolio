import React from 'react';

import AboutPage from './AboutPage';

export default {
  title: 'About Page',
  component: AboutPage,
};

export const Base = () => <div style={{ height: '100vh' }}><AboutPage /></div>;
