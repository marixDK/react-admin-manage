import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const permission: React.FC = () => {
  // 没有token就回到登陆页去
  const token = Cookies.get('token');
  if (!token) {
    // Navigate 只能用在BrowserRouter组件内
    return <Navigate to='/login' />;
  }
  return <></>;
};

export default permission;
