import React from 'react';

import Tag from './Tag';

export default {
  title: 'Tag',
  component: Tag,
};

export const Base = () => (
  <div className="project_screen" style={{ backgroundColor: 'gray', width: 200, height: 50 }}>
    <ul className="project_tags">
      <Tag tag="Test Tag"/>
    </ul>
  </div>
);
