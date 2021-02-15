import React from 'react';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const ProjectForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    props.onCreate(values);
    form.resetFields();
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

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  return (
    <Form
      //   layout="vertical"
      {...formItemLayout}
      name="project-form"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Project Title">
        <Form.Item name="title" noStyle rules={[{ validator: validate }]}>
          <Input placeholder="Title" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Data Endpoint URL">
        <Form.Item
          name="url"
          noStyle
          rules={[
            {
              type: 'url',
              message: 'please enter a url!',
            },
            {
              validator: validate,
            },
          ]}
        >
          <Input placeholder="https://example.com" type="url" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Password">
        <Form.Item noStyle name="password" rules={[{ validator: validate }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
      </Form.Item>
      <Form.Item label="Collaboration Group">
        <Form.Item
          name="collaboration"
          noStyle
          rules={[{ validator: validate }]}
        >
          <Select placeholder="Collaboration Group">
            <Option value="lab internal">Lab Internal</Option>
            <Option value="smart group">Smart Group</Option>
            <Option value="default group">Default Group</Option>
          </Select>
        </Form.Item>
      </Form.Item>

      <Form.Item label="Description">
        <Form.Item name="description" noStyle rules={[{ validator: validate }]}>
          <Input placeholder="Type description here" />
        </Form.Item>
      </Form.Item>

      <Form.Item
        className="margin-0 project__form__buttons"
        // style={{ display: 'grid', justifyContent: 'end' }}
      >
        <Input.Group className="grid__two">
          <Form.Item className="margin-0">
            <Button block type="default" onClick={props.onCancel}>
              Cancel
            </Button>
          </Form.Item>
          <Form.Item className="margin-0">
            <Button block type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Form>
  );
};

export default ProjectForm;
