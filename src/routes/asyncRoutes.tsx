import { lazy } from 'react';

// 在客户端渲染的场景下优先使用React.lazy搭配React.Suspense实现组件懒加载
// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
// import Layout from '@/Layout';
// const Index = lazy(() => import('@/views/modules/home'));
// const User = lazy(() => import('@/views/modules/sys/user'));
// const Role = lazy(() => import('@/views/modules/sys/role'));
// const Menu = lazy(() => import('@/views/modules/sys/menu'));
// const Dict = lazy(() => import('@/views/modules/sys/dict'));

// 这里要使用tsx文件，不然使用<Home />组件的时候会报如下错误
// “Login”表示值，但在此处用作类型。是否指“类型 Login”

let asyncRoutes = [
  {
    id: '1',
    parentId: '0',
    path: '/',
    name: 'root',
    component: 'layout',
    redirect: '/index',
    title: '首页',
    icon: 'iconfont icon-index',
    frameSrc: '',
    hideInMenu: false,
    hideInBread: true,
    noCloseTab: false,
    sort: 1,
    isNew: false,
    menuType: 0, // 0目录，1菜单，2按钮
    children: [
      {
        id: '11',
        parentId: '1',
        path: '/home',
        name: 'home',
        component: 'modules/home',
        redirect: '',
        title: '首页',
        icon: 'iconfont icon-index',
        frameSrc: '',
        hideInMenu: false,
        hideInBread: false,
        noCloseTab: true,
        sort: 1,
        isNew: false,
        menuType: 1,
        children: null,
      },
    ],
  },
  {
    id: '2',
    parentId: '0',
    path: '/sys',
    name: 'sys',
    component: 'layout',
    redirect: '/sys/user',
    title: '系统管理',
    icon: 'iconfont icon-setup',
    frameSrc: '',
    hideInMenu: false,
    hideInBread: false,
    noCloseTab: false,
    sort: 2,
    isNew: false,
    menuType: 0,
    children: [
      {
        id: '21',
        parentId: '2',
        path: '/sys/user',
        name: 'user',
        component: 'modules/sys/user',
        redirect: '',
        title: '用户管理',
        icon: '',
        frameSrc: '',
        hideInMenu: false,
        hideInBread: false,
        noCloseTab: false,
        sort: 1,
        isNew: false,
        menuType: 1,
        children: null,
      },
      {
        id: '22',
        parentId: '2',
        path: '/sys/role',
        name: 'role',
        component: 'modules/sys/role',
        redirect: '',
        title: '角色管理',
        icon: '',
        frameSrc: '',
        hideInMenu: false,
        hideInBread: false,
        noCloseTab: false,
        sort: 2,
        isNew: false,
        menuType: 1,
        children: null,
      },
      {
        id: '23',
        parentId: '2',
        path: '/sys/menu',
        name: 'menu',
        component: 'modules/sys/menu',
        redirect: '',
        title: '菜单管理',
        icon: '',
        frameSrc: '',
        hideInMenu: false,
        hideInBread: false,
        noCloseTab: false,
        sort: 3,
        isNew: false,
        menuType: 1,
        children: null,
      },
      {
        id: '24',
        parentId: '2',
        path: '/sys/dict',
        name: 'dict',
        component: 'modules/sys/dict',
        redirect: '',
        title: '数据字典',
        icon: '',
        frameSrc: '',
        hideInMenu: false,
        hideInBread: false,
        noCloseTab: false,
        sort: 4,
        isNew: false,
        menuType: 1,
        children: null,
      },
    ],
  },
];

/**
 * @description 处理后端返回的路由数据
 * @param routerList 路由数据
 * @returns
 */
const formatRouter = (routerList) => {
  const routes = [];
  let rNew;
  // 这边的Component表示组件一定要是大写
  // react中<component />小写表示html标签
  let Component;
  for (const r of routerList) {
    /**
     * webpack 编译es6 动态引入 import() 时不能传入变量
     * 这是因为webpack的现在的实现方式不能实现完全动态。
     * 一定要用变量的时候，可以通过字符串模板来提供部分信息给webpack；
     * 在写死的路径里面必须包含一个'/', 且不能只有@等特殊字符，不然import还是无法动态引入所需的变量
     */
    r.component === 'layout'
      ? (Component = lazy(() => import(`@/layout`)))
      : (Component = lazy(() => import(`@/views/${r.component}`)));
    Component = <Component />;
    rNew = {
      path: r.path,
      name: r.title,
      element: Component,
    };
    if (r.children) {
      const children = formatRouter(r.children);
      // 保存权限
      rNew = { ...rNew, children: children };
    } else {
      rNew = { ...rNew, children: [] };
    }
    routes.push(rNew);
  }
  return routes;
};

asyncRoutes = formatRouter(asyncRoutes);

export default asyncRoutes;
