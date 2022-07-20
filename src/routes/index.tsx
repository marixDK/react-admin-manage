import {
  BrowserRouter,
  useLocation,
  Navigate,
  useRoutes,
} from 'react-router-dom';
import { Suspense } from 'react';
import asyncRoutes from './asyncRoutes';
import publicRoutes from './publicRoutes';
import Cookies from 'js-cookie';
import Error404 from '../views/global/Error/404';
import Permission from './Permission';

// 路由白名单
const whiteList = ['/login', '/register'];

// 无法将AppRoutes代码提取到AppRouter中，用下面的代码代替
// 会报错：useRoutes() may be used only in the context of a <Router> component.
// 原因：需要将使用了useRoutes的整个组件都放入<Router>当中，而不是在组件里直接包裹useRoutes钩子返回值。
/**
    const appRoutes = asyncRoutes.concat(publicRoutes);
    const element = useRoutes(appRoutes)
    ...
    {element}
 */
const GetRoutes: React.FC = () => {
  // 将公共的路由和账号返回的路由合成登陆所拥有的全部路由
  // const appRoutes = asyncRoutes.concat(publicRoutes);
  // 从当前的location当中获取 路径名称
  const location = useLocation();
  const { pathname } = location;
  const routes = useRoutes([
    ...publicRoutes,
    // 嵌套路由重定向, 在要实现重定向的一级路由声明两次element属性，一个代表当前路径所展示的页面，另一个表示重定向路径。
    { path: '/', element: <Navigate to='/index' /> },
    ...asyncRoutes,
    { path: '/*', element: <Error404 /> },
  ]);
  const noLoginRoutes = useRoutes([
    ...publicRoutes,
    { path: '/', element: <Navigate to='/index' /> },
    { path: '/*', element: <Permission /> },
  ]);
  // 如果是 登录页或者是注册页 正常返回要渲染的路由
  const token = Cookies.get('token');
  if (whiteList.includes(pathname)) return routes;
  if (!token) return noLoginRoutes;
  return routes;
};

const AppRoutes: React.FC = () => {
  return (
    // 配置BrowserRouter根目录basename  basename='/'
    <BrowserRouter basename='/'>
      {/* 用React.Suspense包裹懒加载组件 */}
      <Suspense fallback={null}>
        <GetRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
