import React from 'react';

import ProjectCard from './ProjectCard';

export default {
  title: 'Project Card',
  component: ProjectCard,
};

const image = 'piskel_clone.jpeg';
const description = 'Simple clone of piskelapp.com - free online editor for animated sprites & pixel art';
const technologies = ['html5', 'scss', 'react', 'redux', 'canvas'];
const projectName = 'Simple Piskel Clone';
const link = 'https://ranisans.github.io/simple-piskel-clone/';
const label = { text: 'chrome', color: 'rgb(173, 110, 110)' };

export const Base = () => <ProjectCard
  image={image}
  label={label}
  description={description}
  technologies={technologies}
  projectName={projectName}
  link={link}
/>;

export const WithoutLabel = () => <ProjectCard
  image={image}
  description={description}
  technologies={technologies}
  projectName={projectName}
  link={link}
/>;
