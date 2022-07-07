import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { getCode } from '@/api/login';

// 规范：文件中的类型定义，应使用PascalCase拼写法命名，并写在组件实现的前面
interface LoginParams {
  username: string;
  password: string;
  verifyCode: string;
  captchaId: string;
}

const initialValues: LoginParams = {
  username: '',
  password: '',
  verifyCode: '',
  captchaId: '',
};

const LoginAccount: React.FC = () => {
  const [imgUrl, setImgUrl] = useState<string>('');

  const fetchVerify = async () => {
    let {
      data: { id, img },
    } = await getCode();
    initialValues.captchaId = id;
    setImgUrl(img);
  };

  useEffect(() => {
    fetchVerify();
  }, []);

  return (
    <Form
      name='basic'
      labelCol={{ span: 0 }}
      wrapperCol={{ span: 24 }}
      initialValues={initialValues}
      autoComplete='off'
      style={{ width: '350px' }}>
      <Form.Item
        name='username'
        rules={[{ required: true, message: '请输入账号!' }]}>
        <Input size='large' placeholder='账号' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: '请输入密码!' }]}>
        <Input.Password size='large' placeholder='密码' />
      </Form.Item>
      <Form.Item
        name='verifyCode'
        rules={[{ required: true, message: '请输入验证码！' }]}>
        <Row>
          <Col span={15}>
            <Input size='large' placeholder='请输入验证码' />
          </Col>
          <Col span={7} offset={2}>
            {imgUrl ? (
              <img src={imgUrl} onClick={fetchVerify} alt='图片验证码' />
            ) : (
              <img
                src='@/assets/image/checkcode.png'
                onClick={fetchVerify}
                alt='找不到验证码'
              />
            )}
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

export default LoginAccount;
