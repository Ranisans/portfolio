import React from 'react';

import ProjectCard from './ProjectCard';

export default {
  title: 'Project Card',
  component: ProjectCard,
};

const image = 'piskel_clone.jpeg';
const description = 'Light clone of piskelapp.com - free online editor for animated sprites & pixel art';
const technologies = ['html5', 'scss', 'react', 'redux', 'canvas'];
const projectName = 'Simple Piskel Clone';
const link = 'https://ranisans.github.io/simple-piskel-clone/';

export const Base = () => <ProjectCard
  image={image}
  description={description}
  technologies={technologies}
  projectName={projectName}
  link={link}
/>;
