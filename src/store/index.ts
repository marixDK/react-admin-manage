// 引入创建配置store方法
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// 创建store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
