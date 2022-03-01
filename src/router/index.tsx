// 路由懒加载，为什么要使用它@loadable/component 
// https://blog.csdn.net/qq_42780323/article/details/121289730
// https://blog.csdn.net/heroboyluck/article/details/106294011
// npm i --save-dev @types/loadable__component 类型
import loadable from '@loadable/component'

const Login = loadable(() => import("@/views/login/Login"));
/**
 * @description 默认的菜单项
 */
const defaultRoutes = [
  {
    path: "login",
    element: <Login />,
  },
];

export default defaultRoutes;
