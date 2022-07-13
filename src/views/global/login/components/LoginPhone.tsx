import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
interface LoginParams {
  telephone: string;
  verifyCode: string;
}

const initialValues: LoginParams = {
  telephone: '',
  verifyCode: '',
};

let interval;

const LoginPhone: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const fetchVerify = () => {
    // console.log('运行了');
    setTime(60);
    // 注意，不要使用 setTime(time-1) ： 闭包问题会导致time一直为-1
    // 通过回调函数来调用，回调函数返回的是最新的 state
    interval = window.setInterval(() => setTime((t) => --t), 1000);
  };
  useEffect(() => {
    if (time === 0) {
      clearInterval(interval);
      setTime(0);
    }
  }, [time]);

  return (
    <Form
      name='basic'
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      initialValues={initialValues}
      autoComplete='off'
      style={{ width: '350px' }}>
      <Form.Item
        name='telephone'
        rules={[{ required: true, message: '请输入手机号!' }]}>
        <Input size='large' placeholder='手机号' />
      </Form.Item>
      <Form.Item
        name='verifyCode'
        rules={[{ required: true, message: '请输入验证码！' }]}>
        <Row>
          <Col span={14}>
            <Input size='large' placeholder='请输入验证码' />
          </Col>
          <Col span={8} offset={2}>
            <Button
              size='large'
              style={{ width: '100%' }}
              disabled={!!time}
              onClick={fetchVerify}>
              {time ? `${time}s` : '获取验证码'}
            </Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item name='remember' valuePropName='checked'>
        <Row>
          <Col span={18}>
            <Checkbox>自动登录</Checkbox>
          </Col>
          <Col span={6}>
            <Button type='link'>忘记密码?</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button
          size='large'
          style={{ width: '100%' }}
          type='primary'
          htmlType='submit'>
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPhone;
