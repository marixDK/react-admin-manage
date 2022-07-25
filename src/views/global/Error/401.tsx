import React, { useState, useEffect, useRef, useCallback } from 'react';
import './error.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import four from '@/assets/image/401.png';
import cloud from '@/assets/image/cloud.png';

const Error401: React.FC = () => {
  const navigate = useNavigate();
  const toPage = useCallback(() => {
    navigate('/home');
  }, [navigate]);
  const [time, setTime] = useState(5);
  const latestTime = useRef(time);
  // 更新latestTime
  useEffect(() => {
    latestTime.current = time;
  });
  // 执行定时器
  useEffect(() => {
    const timer = setInterval(() => {
      if (latestTime.current === 0) {
        clearInterval(timer);
        toPage();
        return;
      }
      // 注:在setCount中使用箭头函数是最好方式之一
      setTime((t) => --t);
    }, 1000);
    // return 在组件被销毁之前执行的逻辑
    return () => {
      clearInterval(timer);
    };
  }, [toPage]);

  return (
    <div id='error-container'>
      <div className='not-found-content'>
        <div className='pic-error'>
          <img src={four} alt='' className='pic-error__parent' />
          <img src={cloud} alt='' className='pic-error__child left' />
          <img src={cloud} alt='' className='pic-error__child mid' />
          <img src={cloud} alt='' className='pic-error__child right' />
        </div>
        <div className='bullshit'>
          <div className='bullshit__oops'>401</div>
          <div className='bullshit__headline'>您没有操作权限...</div>
          <div className='bullshit__info'>
            当前帐号没有操作权限，请联系管理员
          </div>
          <Button size='large' type='primary' shape='round' onClick={toPage}>
            {time}s后 返回首页
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error401;
