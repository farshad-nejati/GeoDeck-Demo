import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { KeyOutlined } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
  // labelCol: {
  //   span: 8,
  // },
  // wrapperCol: {
  //   span: 16,
  // },
};
const tailLayout = {
  // wrapperCol: {
  //   offset: 8,
  //   span: 16,
  // },
};

const FormDemo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
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

  return (
    <Form
      {...layout}
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
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input
            placeholder="Username"
            addonBefore={<UserOutlined />}

            // prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Password">
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            addonBefore={<LockOutlined />}
          />
        </Form.Item>
      </Form.Item>

      {/* <Form.Item
        style={{ justifyContent: 'flex-end' }}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Password" addonBefore={<KeyOutlined />} />
      </Form.Item> */}

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDemo;
