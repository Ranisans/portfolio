import React from 'react';

const ProjectPicture = ({ className, pictureUrl }) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const pictureSrc = require(`../../assets/images/${pictureUrl}`);
  return (
    <picture className={className}>
      <source srcSet={pictureSrc} type="image/jpeg" />
      <img src={pictureSrc} />
    </picture>
  );
};

export default ProjectPicture;
