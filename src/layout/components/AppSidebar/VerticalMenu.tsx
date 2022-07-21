import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    label: '首页',
    key: '/home',
    icon: <i className='iconfont icon-index'></i>,
  }, // 菜单项务必填写 key
  {
    label: '系统管理',
    key: '/sys',
    icon: <i className='iconfont icon-setup'></i>,
    children: [
      {
        label: '用户管理',
        key: '/sys/user',
        icon: '',
      },
      {
        label: '角色管理',
        key: '/sys/role',
        icon: '',
      },
      {
        label: '菜单管理',
        key: '/sys/menu',
        icon: '',
      },
      {
        label: '字典管理',
        key: '/sys/dict',
        icon: '',
      },
    ],
  },
  {
    label: '编辑管理',
    key: '/dict',
    icon: <i className='iconfont icon-edit'></i>,
    children: [
      {
        label: '文章管理',
        key: '/dict/article',
        icon: '',
      },
    ],
  },
  {
    label: '组件管理',
    key: '/case',
    icon: <i className='iconfont icon-app'></i>,
    children: [
      {
        label: '滚动组件',
        key: '/case/scroll',
        icon: '',
      },
      {
        label: '按钮组件',
        key: '/case/button',
        icon: '',
      },
      {
        label: '视频组件',
        key: '/case/video',
        icon: '',
      },
      {
        label: '表格',
        key: '/case/table',
        icon: '',
        children: [
          {
            label: '模糊查询',
            key: '/case/table-fuzzy-query',
            icon: '',
          },
        ],
      },
      {
        label: '切割面板',
        key: '/case/splitPane',
        icon: '',
      },
    ],
  },
  {
    label: '拖拽功能',
    key: '/drag',
    icon: <i className='iconfont icon-Group'></i>,
    children: [
      {
        label: '列表拖拽',
        key: '/drag/list',
        icon: '',
      },
      {
        label: '表格拖拽',
        key: '/drag/table',
        icon: '',
      },
      {
        label: '卡片拖拽',
        key: '/drag/card',
        icon: '',
      },
    ],
  },
  {
    label: '错误页面',
    key: '/error',
    icon: <i className='iconfont icon-warn'></i>,
    children: [
      {
        label: '401页面',
        key: '/error/401',
        icon: '',
      },
      {
        label: '404页面',
        key: '/error/404',
        icon: '',
      },
    ],
  },
];

const VerticalMenu: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState(['/index']);
  const [openKeys, setOpenKeys] = useState(['/index']);
  // 回调参数：所有展开的submenu的key数组
  const onOpenChange = (openKeys) => {
    // console.log(openKeys);
    setOpenKeys(openKeys);
  };

  const navigate = useNavigate();
  // 点击事件默认有三个回调参数：key，keyPath，domEvent
  const goPage = ({ key, keyPath }) => {
    // console.log(keyPath);
    // console.log('跳转页面');
    setSelectedKeys(keyPath);
    navigate(key);
  };
  return (
    // defaultSelectedKeys	初始选中的菜单项 key 数组
    // selectedKeys 当前选中的菜单项 key 数组
    // openKeys 当前展开的 SubMenu 菜单项 key 数组，用于设置只展开一项
    // onOpenChange SubMenu 展开/关闭的回调
    <Menu
      className='vertical-menu'
      mode='inline'
      theme='light'
      // 注释掉莫名的类型错误，也可以在头部用@ts-nocheck，忽略整个文件
      items={menuItems}
      onOpenChange={onOpenChange}
      defaultOpenKeys={openKeys}
      openKeys={openKeys}
      defaultSelectedKeys={selectedKeys}
      selectedKeys={selectedKeys}
      onClick={goPage}
    />
  );
};

export default VerticalMenu;
