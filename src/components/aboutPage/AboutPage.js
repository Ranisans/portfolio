import React from 'react';

import data from './about.json';

const AboutPage = () => (
  <div className="page page_about">
    <div className="about_container">
      <div className="about_greeting">
        <span>{data.title}</span>
        <span className="about_name">{data.name}</span></div>
      <p className="about_representation">{data.representation}</p>
    </div>
  </div>
);

export default AboutPage;
