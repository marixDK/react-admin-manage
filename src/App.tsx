import React from 'react';
import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  // 没有token就回到登陆页去
  const token = Cookies.get('token');
  console.log(token);
  return token ? <Outlet /> : <Navigate to='/login' replace={true} />;
};

export default App;
