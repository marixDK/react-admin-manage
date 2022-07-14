import { lazy } from 'react';

// 在客户端渲染的场景下优先使用React.lazy搭配React.Suspense实现组件懒加载
const Layout = lazy(() => import('@/Layout'));
const Index = lazy(() => import('@/views/modules/Index'));
const User = lazy(() => import('@/views/modules/sys/User'));

// 这里要使用tsx文件，不然使用<Home />组件的时候会报如下错误
// “Login”表示值，但在此处用作类型。是否指“类型 Login”

const asyncRoutes = [
  {
    path: '/',
    name: 'Layout',
    key: '/',
    element: <Layout />,
    children: [
      {
        path: 'index',
        name: '首页',
        key: '/index',
        element: <Index />,
        children: [],
      },
      {
        path: 'sys',
        name: '系统管理',
        key: '/sys',
        element: <User />,
        children: [
          {
            path: 'user',
            name: '用户管理',
            key: '/sys/user',
            element: <User />,
            children: [],
          },
        ],
      },
    ],
  },
];

export default asyncRoutes;
