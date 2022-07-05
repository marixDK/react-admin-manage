import React from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes';

const App: React.FC = () => {
  const element = useRoutes(appRoutes);
  return (
    // 用React.Suspense包裹懒加载组件
    <React.Suspense fallback={<div>Loading</div>}>{element}</React.Suspense>
  );
};

export default App;
