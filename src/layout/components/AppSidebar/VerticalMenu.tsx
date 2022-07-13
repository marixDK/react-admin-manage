import React from 'react';
import { Menu } from 'antd';

const items = [
  {
    label: '首页',
    key: '1',
    icon: 'iconfont icon-index',
    children: [],
    type: null,
  },
  {
    label: '系统管理',
    key: '2',
    icon: 'iconfont icon-setup',
    children: [],
    type: null,
  },
];

const VerticalMenu: React.FC = () => {
  const goPage = () => {
    console.log('跳转页面');
  };
  return (
    <Menu
      className='vertical-menu'
      mode='inline'
      theme='light'
      onClick={goPage}
      items={items}></Menu>
  );
};

export default VerticalMenu;
