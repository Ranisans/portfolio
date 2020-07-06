import React from 'react';

import ProjectBar from './ProjectBar';
import ProjectPicture from './ProjectPicture';
import Tag from './Tag';

const ProjectCard = ({
  image, label, technologies, projectName, link,
}) => (
    <li className="projects_item" key={projectName}>
      <a href={link} className="project_screen">
        {
          label
            ? <div
              className="project_label"
              style={{ backgroundColor: label.color }}
            >
              {label.text}
            </div>
            : null
        }
        <ProjectBar projectName={projectName} />
        <div className="project_data_container">
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
