import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Permission: React.FC = () => {
  // You should call navigate() in a React.useEffect(), not when your component is first rendered.
  const navigate = useNavigate();
  useEffect(() => {
    // 两秒后返回登陆页
    setTimeout(() => navigate('/login', { replace: true }), 100);
  });
  return <div></div>;
};

export default Permission;
