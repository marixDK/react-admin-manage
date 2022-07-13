import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '首页',
    key: '1',
    icon: <i className='iconfont icon-index'></i>,
  }, // 菜单项务必填写 key
  {
    label: '系统管理',
    key: '2',
    icon: <i className='iconfont icon-setup'></i>,
    children: [
      {
        label: '用户管理',
        key: '21',
        icon: '',
      },
      {
        label: '角色管理',
        key: '22',
        icon: '',
      },
      {
        label: '菜单管理',
        key: '23',
        icon: '',
      },
      {
        label: '字典管理',
        key: '24',
        icon: '',
      },
    ],
  },
  {
    label: '编辑管理',
    key: '3',
    icon: <i className='iconfont icon-edit'></i>,
    children: [
      {
        label: '文章管理',
        key: '31',
        icon: '',
      },
    ],
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
      items={items}
    />
  );
};

export default VerticalMenu;
