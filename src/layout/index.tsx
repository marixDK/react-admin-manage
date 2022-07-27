import React from 'react';
import './index.scss';
import { AppSidebar, AppNav, AppTabs, AppPage } from './components';
import { useSelector } from 'react-redux';
import { SIDEBAR_REDUCER } from '@/store/rootReducer';

const Layout: React.FC = () => {
  const { open } = useSelector((store) => store[SIDEBAR_REDUCER]);
  return (
    <div id='layout'>
      <div
        className={`layout-container ${open ? 'openSidebar' : 'closeSidebar'}`}>
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
