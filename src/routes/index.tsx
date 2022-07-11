import { lazy } from 'react';
import publicRoutes from './publicRoutes';

// 在客户端渲染的场景下优先使用React.lazy搭配React.Suspense实现组件懒加载
const Layout = lazy(() => import('@/layout'));
const Home = lazy(() => import('@/views/global/home'));

// 这里要使用tsx文件，不然使用<Home />组件的时候会报如下错误
// “Login”表示值，但在此处用作类型。是否指“类型 Login”

const asyncRoutes = [
  {
    path: '/',
    name: 'layout',
    key: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        name: '首页',
        key: 'home',
        element: <Home />,
        children: [],
      },
    ],
  },
];

// 将公共的路由和账号返回的路由合成登陆所拥有的全部路由
const appRoutes = asyncRoutes.concat(publicRoutes);

export default appRoutes;
