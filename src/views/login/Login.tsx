import React from "react";
import "./Login.scss";
import { Tabs } from "antd";
import { LoginAccount, LoginPhone } from "./components";

const Login: React.FC = () => {
  const { TabPane } = Tabs;

  function callback(key:any) {
    console.log(key);
  }
  return (
    <div id="login">
      <header>
        <div className="header-logo">
          <a href="http://www.lubaojun.com/">
            <img
              className="logo"
              src={require("@/assets/image/logo.jpg")}
              alt=""
            />
            <span className="title">BaoJun</span>
          </a>
        </div>
        <div className="header-desc">
          这是一个程序员的试验田，喜欢给个star～～
        </div>
      </header>
      <div className="info">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="账号密码登录" key="account">
            <LoginAccount></LoginAccount>
          </TabPane>
          <TabPane tab="手机号登录" key="phone">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
      <footer>闽ICP备19000630号-1</footer>
    </div>
  );
};

export default Login;
