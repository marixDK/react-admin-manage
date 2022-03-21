import { lazy } from "react";
const Discover = lazy(() => import("@/views/Discover"));
const Follow = lazy(() => import("@/views/Follow"));
const Login = lazy(() => import("@/views/global/login/Login"));
/**
 * @description 默认的菜单项
 */
const defaultRoutes = [
  {
    path: "discover",
    element: <Discover />,
  },
  {
    path: "follow",
    element: <Follow />,
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default defaultRoutes;
