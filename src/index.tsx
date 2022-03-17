import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// react组件全局样式引入
import "@/style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* loading配置 可以根据自己喜欢用GIF 或者loading插件 */}
      <Suspense fallback={<span>loading...</span>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
