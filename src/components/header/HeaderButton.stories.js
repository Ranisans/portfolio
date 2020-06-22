import React from 'react';

import HeaderButton from './HeaderButton';

export default {
  title: 'Header Button',
  component: HeaderButton,
};

export const Base = () => <div style={{ padding: 20 }}>
  <HeaderButton callback={() => {}}/>
</div>;
