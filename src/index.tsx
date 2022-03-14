import ReactDOM from "react-dom";
import App from "./App";
import "@/style/index.scss";
/**
 * 需要在最顶层添加BrowserRouter，它提供了一个历史上下文，才能使用useRoutes()
 */
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById("root")
);
