/* 配置公共路由 */

// login别懒加载，会导致页面无数据出来的
import Login from '@/views/global/login';
import Register from '@/views/global/register';

const publicRoutes = [
  {
    path: '/login',
    name: '登陆页',
    key: '/login',
    element: <Login />,
    children: [],
  },
  {
    path: '/register',
    name: '注册页',
    key: '/register',
    element: <Register />,
    children: [],
  },
];

export default publicRoutes;
