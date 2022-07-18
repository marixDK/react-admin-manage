/* 配置公共路由 */

// login别懒加载，会导致页面无数据出来的
import Login from '@/views/global/Login';
import Register from '@/views/global/Register';
import Error404 from '../views/global/Error/404';

const publicRoutes = [
  {
    path: 'login',
    name: '登陆页',
    key: '/login',
    element: <Login />,
    children: [],
  },
  {
    path: 'register',
    name: '注册页',
    key: '/register',
    element: <Register />,
    children: [],
  },
  {
    path: '*',
    name: '404',
    key: '/error-404',
    element: <Error404 />,
    children: [],
  },
];

export default publicRoutes;
