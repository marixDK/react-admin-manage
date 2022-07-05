import { lazy } from 'react';
import Login from '@/views/global/login';

// 在客户端渲染的场景下优先使用React.lazy搭配React.Suspense实现组件懒加载
// login别懒加载，会导致页面无数据出来的
// const Login = lazy(() => import('@/views/global/login'));
const Home = lazy(() => import('@/views/global/home'));

// 这里要使用tsx文件，不然使用<Login />组件的时候会报如下错误
// “Login”表示值，但在此处用作类型。是否指“类型 Login”
const appRoutes = [
  {
    path: '/login',
    name: '登陆页',
    key: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    name: '首页',
    key: '/home',
    element: <Home />,
  },
];

export default appRoutes;
