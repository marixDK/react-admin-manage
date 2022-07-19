import React from 'react';
import Cookies from 'js-cookie';
import Layout from '../Layout';
import { Navigate } from 'react-router-dom';

const Permission: React.FC = () => {
  // 没有token就回到登陆页去
  const token = Cookies.get('token');
  console.log(token);
  return token ? <Layout /> : <Navigate to='/login' replace={true} />;
};

export default Permission;
