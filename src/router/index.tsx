import Discover from "@/views/Discover";
import Follow from "@/views/Follow";
import Login from "@/views/global/login";
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

// import { Suspense, lazy } from "react";
// /**
//  * @description 默认的菜单项
//  */
//  const defaultRoutes = [
//   {
//     path: "discover",
//     component: lazy(() => import('../views/Discover')),
//   },
//   {
//     path: "follow",
//     component: lazy(() => import('../views/Follow')),
//   },
// ];

// export default defaultRoutes;
