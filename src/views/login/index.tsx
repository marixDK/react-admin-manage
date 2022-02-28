import React from "react";

import { Button } from "antd";

const Login: React.FC = () => {
  return (
    <div id="login">
      <Button
        htmlType="submit"
        type="primary"
        className="login-page-form_button"
      >
        登录
      </Button>
    </div>
  );
};

export default Login;
