import React from 'react';
import Permission from '@/routes/permission';
import './index.scss';
import { AppSidebar } from './components';

const Layout: React.FC = () => {
  return (
    <div id='layout'>
      <div className='layout-container openSidebar'>
        <AppSidebar />
        <Permission />
      </div>
    </div>
  );
};

export default Layout;
