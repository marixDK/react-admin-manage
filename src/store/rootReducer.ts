import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebarSlice';

export const SIDEBAR_REDUCER = 'sidebar';

// 合并所有的状态切片（festures文件夹装着所有的状态切片）
const rootReducer = combineReducers({
  [SIDEBAR_REDUCER]: sidebarReducer,
});

export default rootReducer;
