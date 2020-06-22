import React from 'react';

const ProjectPicture = ({ className, pictureUrl }) => (
  <picture className={className}>
    <source srcSet={pictureUrl} type="image/jpeg"/>
    <img src={pictureUrl}/>
  </picture>
);

export default ProjectPicture;
