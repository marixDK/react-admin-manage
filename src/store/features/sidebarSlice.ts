// 引入创建状态切片的方法
import { createSlice } from '@reduxjs/toolkit';
import { handleSessionStorage } from '@/utils/storage';

interface SidebarState {
  opened: boolean;
}

const initialState: SidebarState = {
  // ES6 引入了一个新的 空值合并操作符??
  // 当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数
  opened: handleSessionStorage.get('opened') ?? true,
};

// 创建状态切片
const { reducer: sidebarReducer, actions } = createSlice({
  // 给状态切片取名
  name: 'sidebar',
  // 状态的初始值
  initialState,
  reducers: {
    // 侧边栏切换伸缩状态方法
    toggleSidebar: (state) => {
      state.opened = !state.opened;
      handleSessionStorage.set('opened', state.opened);
    },
  },
});

// 导出侧边栏切换的action方法
export const { toggleSidebar } = actions;

export default sidebarReducer;
