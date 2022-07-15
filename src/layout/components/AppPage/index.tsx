import React from 'react';
import { useLocation } from 'react-router-dom';
// 结合react-transition-group 实现路由切换动画
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Permission from '@/routes/permission';
import './index.scss';

const AppPage: React.FC = () => {
  const location = useLocation();
  // 监听路由变化
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
  return (
    // react-transition-group实现转场切换路由跳转动画
    <SwitchTransition mode='out-in'>
      {/* 注意：这里是classNames */}
      <CSSTransition
        key={location.pathname}
        timeout={10000}
        appear={true}
        classNames='page-fade'>
        {/* 此处不能直接用 <Outlet /> 会造成路由切换时，组件重复渲染 */}
        {/* 可以用封装一层的组件，或者用"const outlet = useOutlet();{outlet}" */}
        <Permission />
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AppPage;
