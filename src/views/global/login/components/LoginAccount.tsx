import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";

const LoginAccount: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: "400px" }}
    >
      <Form.Item>
        <h2>仿协同管理平台</h2>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入账号!" }]}
      >
        <Input placeholder="账号" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input.Password placeholder="密码" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Row>
          <Col span={18}>
            <Checkbox>自动登录</Checkbox>
          </Col>
          <Col span={6}>
            <a>忘记密码?</a>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginAccount;
