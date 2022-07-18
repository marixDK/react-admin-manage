import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import asyncRoutes from './asyncRoutes';
import publicRoutes from './publicRoutes';

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
  const appRoutes = asyncRoutes.concat(publicRoutes);
  const routes = useRoutes(appRoutes);
  return routes;
};

const AppRoutes: React.FC = () => {
  return (
    // 配置router根目录basename
    <BrowserRouter basename='/'>
      {/* 用React.Suspense包裹懒加载组件 */}
      <Suspense fallback={null}>
        <GetRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
