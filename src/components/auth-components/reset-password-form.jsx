import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { MailFilled } from '@ant-design/icons';

const ResetPasswordForm = (props) => {
  console.log(props);
  const [form] = Form.useForm();

  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
    props.setResult(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: '${label} is required!',
    pattern: {
      mismatch: "'${name}' does not match pattern ${pattern}",
    },
  };

  const validator = (_, value) => {
    if (!value) {
      return Promise.reject(`${_.field} is required`);
    }
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="register-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item label="New Password">
        <Form.Item name="password" noStyle rules={[{ validator }]}>
          <Input.Password placeholder="password" addonBefore={<MailFilled />} />
        </Form.Item>
      </Form.Item>

      <Form.Item label="New Password Confirm">
        <Form.Item
          name="password-confirm"
          noStyle
          dependencies={['password']}
          rules={[
            { validator },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!',
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="password confirm"
            addonBefore={<MailFilled />}
          />
        </Form.Item>
      </Form.Item>

      <Form.Item className="margin-0" style={{ paddingTop: '1rem' }}>
        <Button type="primary" htmlType="submit">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;
