import React from 'react';
import AppRoutes from './routes';
import ErrorBoundary from '@/components/error-boundary';
import { FullPageErrorFallback } from '@/components/error-boundary/lib';

const App: React.FC = () => {
  return (
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <AppRoutes />
    </ErrorBoundary>
  );
};

export default App;
