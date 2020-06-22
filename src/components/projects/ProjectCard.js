import React from 'react';

import ProjectBar from './ProjectBar';
import ProjectPicture from './ProjectPicture';
import Tag from './Tag';

const ProjectCard = ({
  images, technologies, projectName, link,
}) => (
    <li className="projects_item" key={projectName}>
      <a href={link} className="project_screen">
        <ProjectBar projectName={projectName}/>
        <div className="project_data_container">
          <ProjectPicture className="project_image image_back" pictureUrl={images[0]}/>
          <div className="tags_container">
            <ul className="project_tags">
              {technologies.map((tag) => <Tag tag={tag} key={tag} />)}
            </ul>
          </div>
          <ProjectPicture className="project_image image_top" pictureUrl={images[1]}/>
        </div>
      </a>
    </li>
);

export default ProjectCard;
