import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Permission: React.FC = () => {
  // You should call navigate() in a React.useEffect(), not when your component is first rendered.
  const navigate = useNavigate();
  Cookies.set('redirectUrl', window.location.href);
  useEffect(() => {
    // 两秒后返回登陆页
    // history replace模式：跟push模式不一样，不会向history里面添加新的记录，点击返回，
    // 会跳转到上上一个页面。上一个记录是不存在的。
    setTimeout(() => navigate('/login', { replace: true }), 100);
  });
  return null;
};

export default Permission;
