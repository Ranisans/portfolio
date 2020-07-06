import React from 'react';

import { projects } from './projects.json';
import ProjectCard from '../projects/ProjectCard';

const ProjectPage = () => (
  <div className="page projects_page">
    <h2 className="projects_title">web developer portfolio</h2>
    <ul className="projects">
      {projects.map((project) => <ProjectCard
        image={project.image}
        label={project.label}
        technologies={project.technologies}
        projectName={project.projectName}
        link={project.link}
        key={project.projectName}
      />)}
    </ul>
  </div>
);

export default ProjectPage;
