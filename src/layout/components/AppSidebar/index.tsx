import React from 'react';
import Logo from './Logo';
import VerticalMenu from './VerticalMenu';

const AppSidebar: React.FC = () => {
  return (
    <div className='app-sidebar'>
      <Logo />
      <VerticalMenu />
    </div>
  );
};

export default AppSidebar;
