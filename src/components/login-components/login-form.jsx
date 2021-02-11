import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Divider, Image } from 'antd';
import { UserOutlined, LockFilled } from '@ant-design/icons';

const LoginForm = (props) => {
  console.log(props);
  const { history } = props;

  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/projects');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const validate = (_, value) => {
    if (value === 'demo') {
      return Promise.resolve();
    }
    if (!value) {
      return Promise.reject(`${_.field} is required`);
    }

    return Promise.reject(`The ${_.field} is incorrect`);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item label="Username">
        <Form.Item
          name="username"
          noStyle
          rules={[
            // { required: true, message: 'Username is required' },
            {
              validator: validate,
            },
          ]}
        >
          <Input
            placeholder="Username"
            addonBefore={<UserOutlined />}
            // prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Password" className="margin-0">
        <Form.Item
          name="password"
          rules={[
            // { required: true, message: 'Please input your password!' },
            {
              validator: validate,
            },
          ]}
        >
          <Input.Password placeholder="Password" addonBefore={<LockFilled />} />
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Input.Group className="login__grid--two">
          <Form.Item
            name="remember"
            className="margin-0"
            // noStyle
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div style={{ textAlign: 'end' }}>
            <Link to="/reset-password" className="selected text__small">
              Forget Password
            </Link>
          </div>
        </Input.Group>
      </Form.Item>

      <Form.Item>
        <Input.Group className="login__grid--two">
          <Form.Item className="margin-0">
            <Button block type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
          <Form.Item className="margin-0">
            <Button block type="default">
              <Link to="/register">Create ccount</Link>
            </Button>
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item>
        <Divider plain className="margin-0">
          Product of
        </Divider>
      </Form.Item>
      <Form.Item className="margin-0">
        <Image
          className="image"
          preview={false}
          src="https://www.petrolern.com/wp-content/uploads/2018/09/PETROLERN-logo-PNG-HQ-1.png"
        />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
