import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/store/features/sidebarSlice';
import { SIDEBAR_REDUCER } from '@/store/rootReducer';

const Hamburder: React.FC = () => {
  // 通过useSelector拿到store中定义的value
  const { open } = useSelector((store) => store[SIDEBAR_REDUCER]);
  // 通过useDispatch派发事件
  const dispatch = useDispatch();
  return (
    <div className='hamburger' onClick={() => dispatch(toggleSidebar())}>
      {/* <div onClick={() => dispatch(toggleSidebar())}>切换按钮</div>
      {sidebarState.opened ? <div>打开状态</div> : <div>关闭状态</div>} */}
      <svg
        className={`hamburger-icon ${open ? 'is-active' : ''} `}
        viewBox='0 0 1024 1024'
        xmlns='http://www.w3.org/2000/svg'
        width='64'
        height='64'>
        <path d='M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z' />
      </svg>
    </div>
  );
};

export default Hamburder;
