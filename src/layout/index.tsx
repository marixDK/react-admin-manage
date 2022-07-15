import React from 'react';
import './index.scss';
import { AppSidebar, AppNav, AppTabs, AppPage } from './components';

const Layout: React.FC = () => {
  return (
    <div id='layout'>
      <div className='layout-container openSidebar'>
        <AppSidebar />
        <main className='app-main'>
          <div className='app-header'>
            {/* 网站顶部导航栏 */}
            <AppNav />
            <AppTabs />
          </div>
          {/* 页面内容区 */}
          <AppPage />
        </main>
      </div>
    </div>
  );
};

export default Layout;
