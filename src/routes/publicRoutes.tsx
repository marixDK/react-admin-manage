/* 配置公共路由 */

// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import Login from '@/views/global/login';
import Register from '@/views/global/register';

const publicRoutes = [
  {
    path: '/login',
    name: '登陆页',
    element: <Login />,
    children: [],
  },
  {
    path: '/register',
    name: '注册页',
    element: <Register />,
    children: [],
  },
  // {
  //   path: '/*',
  //   name: '404',
  //   key: '/*',
  //   element: <Error404 />,
  //   children: [],
  // },
];

export default publicRoutes;
