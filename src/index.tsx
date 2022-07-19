import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
import ErrorBoundary from '@/components/error-boundary';
import { FullPageErrorFallback } from '@/components/error-boundary/lib';
// 引入全局阿里图标库
import '@/assets/font/iconfont.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={FullPageErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
