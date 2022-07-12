// 路由访问权限配置
import React from 'react';
import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const Permission: React.FC = () => {
  const token = Cookies.get('token');
  if (!token) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};

export default Permission;
