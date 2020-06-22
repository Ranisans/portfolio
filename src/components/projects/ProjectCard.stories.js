import React from 'react';

import ProjectCard from './ProjectCard';
import imageFile from '../../assets/images/piskel_clone.jpeg';
import imageFile2 from '../../assets/images/tmp.jpeg';

export default {
  title: 'Project Card',
  component: ProjectCard,
};

const images = [imageFile, imageFile2];
const technologies = ['html5', 'scss', 'react', 'redux', 'canvas'];
const projectName = 'Simple Piskel Clone';
const link = 'https://ranisans.github.io/simple-piskel-clone/';

export const Base = () => <ProjectCard
  images={images}
  technologies={technologies}
  projectName={projectName}
  link={link}
/>;
