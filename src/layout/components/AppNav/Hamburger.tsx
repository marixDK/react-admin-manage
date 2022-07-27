import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/store/features/sidebarSlice';
import { SIDEBAR_REDUCER } from '@/store/rootReducer';

const Hamburder: React.FC = () => {
  // 通过useSelector拿到store中定义的value
  const sidebarState = useSelector((store) => store[SIDEBAR_REDUCER]);
  // 通过useDispatch派发事件
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch(toggleSidebar())}>切换按钮</div>
      {sidebarState.opened ? <div>打开状态</div> : <div>关闭状态</div>}
    </div>
  );
};

export default Hamburder;
