import React from 'react';

import data from './about.json';

const AboutPage = () => (
  <div className="page page_about">
    <div className="about_container">
      <p className="about_greeting">
        {data.title} <span className="about_name">{data.name}</span></p>
      <p className="about_representation">{data.representation}</p>
    </div>
  </div>
);

export default AboutPage;
