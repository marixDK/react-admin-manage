import React, { FC } from "react";
import styles from "./Login.module.scss";
import { getData } from "@/api/login";
const Login: FC = () => {
  const fetchData = async () => {
    let res = await getData();
    console.log(res);
  };
  // 1.useEffect 的回调参数返回的是一个清除副作用的 clean-up 函数。
  // 因此无法返回 Promise，更无法使用 async/await

  // 2.传递一个空数组（[]）作为第二个参数，这个 Effect 将永远不会重复执行，
  // 因此可以达到componentDidMount的效果。
  React.useEffect(() => {
    fetchData();
  }, []);

  return <div className={styles["login-form"]}>login</div>;
};

export default Login;
