import React from 'react';

import ProjectBar from './ProjectBar';
import ProjectPicture from './ProjectPicture';
import Tag from './Tag';

const ProjectCard = ({
  image, description, technologies, projectName, link,
}) => (
    <li className="projects_item" key={projectName}>
      <a href={link} className="project_screen">
        <ProjectBar projectName={projectName} />
        <div className="project_data_container">
          <div className="project_description_container">
            <p className="description">{description}</p>
          </div>
          <ProjectPicture className="project_image" pictureUrl={image} />
          <div className="tags_container">
            <ul className="project_tags">
              {technologies.map((tag) => <Tag tag={tag} key={tag} />)}
            </ul>
          </div>
        </div>
      </a>
    </li>
);

export default ProjectCard;
