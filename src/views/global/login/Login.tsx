import React from "react";
import styles from "./Login.module.scss";
import bgUrl from "@/assets/image/login-box-bg.svg";
import LoginAccount from "./components/LoginAccount";
const Login: React.FC = () => {
  // 1.useEffect 的回调参数返回的是一个清除副作用的 clean-up 函数。
  // 因此无法返回 Promise，更无法使用 async/await

  // 2.传递一个空数组（[]）作为第二个参数，这个 Effect 将永远不会重复执行，
  // 因此可以达到componentDidMount的效果。
  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div id={styles["login"]}>
      <div className={styles["login-bg"]}>
        <div className={styles["login-desc"]}>
          <img src={bgUrl} />
          <h3>系统介绍</h3>
          <p>主要提供用户、角色、菜单、字典、指标等配置功能</p>
        </div>
      </div>
      <LoginAccount></LoginAccount>
    </div>
  );
};

export default Login;
