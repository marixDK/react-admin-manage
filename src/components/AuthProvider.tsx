import React from 'react';
import Cookies from 'js-cookie';

// 验证上下文空间
let AuthContext = React.createContext(null);

// 利用useContext导出验证上下文，供其它组件使用
export function useAuth() {
  return React.useContext(AuthContext);
}

// 验证提供者
export default function AuthProvider({ children }) {
  const token = Cookies.get('token');

  // 传递验证上下文(AuthContext)属性给嵌套的插槽children子组件(App)
  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
}
