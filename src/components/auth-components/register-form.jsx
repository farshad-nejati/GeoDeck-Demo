import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockFilled, MailFilled } from '@ant-design/icons';

const RegisterForm = (props) => {
  console.log(props);
  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/projects');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validate = (_, value) => {
    if (!value) {
      return Promise.reject(`${_.field} is required`);
    }
    return Promise.resolve();
  };

  return (
    <Form
      layout="vertical"
      name="register-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Username">
        <Form.Item name="username" noStyle rules={[{ validator: validate }]}>
          <Input placeholder="Username" addonBefore={<UserOutlined />} />
        </Form.Item>
      </Form.Item>

      <Form.Item label="E-mail">
        <Form.Item
          name="email"
          noStyle
          rules={[
            {
              type: 'email',
              message: 'email format is incorrect!',
            },
            {
              validator: validate,
            },
          ]}
        >
          <Input
            placeholder="example@mail.com"
            addonBefore={<MailFilled />}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Password">
        <Form.Item noStyle name="password" rules={[{ validator: validate }]}>
          <Input.Password placeholder="Password" addonBefore={<LockFilled />} />
        </Form.Item>
      </Form.Item>

      <Form.Item className="margin-0" style={{ paddingTop: '1rem' }}>
        <Button block type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>

      <Form.Item style={{ textAlign: 'center' }}>
        Already have an account?{' '}
        <Link to="/login" className="selected">
          Login
        </Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
