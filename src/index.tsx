import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
// 引入全局阿里图标库
import '@/assets/font/iconfont.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

ReactDOM.render(
  // StrictMode会开启 react 中的严格模式
  // 使用某些第三方库，特别涉及到css效果可能会有如下报错信息，删除或者不用管，不会影响生产
  // findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead,
  // add a ref directly to the element you want to reference. Learn more about using refs safely here
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
