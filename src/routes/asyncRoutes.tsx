import { lazy } from 'react';

// 在客户端渲染的场景下优先使用React.lazy搭配React.Suspense实现组件懒加载
// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import Layout from '@/Layout';
const Index = lazy(() => import('@/views/modules/Index'));
const User = lazy(() => import('@/views/modules/sys/User'));
const Role = lazy(() => import('@/views/modules/sys/Role'));
const Menu = lazy(() => import('@/views/modules/sys/Menu'));
const Dict = lazy(() => import('@/views/modules/sys/Dict'));

// 这里要使用tsx文件，不然使用<Home />组件的时候会报如下错误
// “Login”表示值，但在此处用作类型。是否指“类型 Login”

const asyncRoutes = [
  {
    path: '/',
    name: 'root',
    key: '/',
    element: <Layout />,
    children: [
      {
        path: 'index',
        name: '首页',
        key: 'index',
        element: <Index />,
        children: [],
      },
    ],
  },
  // V6使用路由嵌套及路由重定向方法,子路由路径不用加"/"，v6中会自动拼接
  {
    path: 'sys',
    name: '系统管理',
    key: 'sys',
    element: <Layout />,
    children: [
      {
        path: 'user',
        name: '用户管理',
        key: 'sys/user',
        element: <User />,
        children: [],
      },
      {
        path: 'role',
        name: '角色管理',
        key: 'sys/role',
        element: <Role />,
        children: [],
      },
      {
        path: 'menu',
        name: '菜单管理',
        key: 'sys/menu',
        element: <Menu />,
        children: [],
      },
      {
        path: 'dict',
        name: '字典管理',
        key: 'sys/dict',
        element: <Dict />,
        children: [],
      },
    ],
  },
];

export default asyncRoutes;
