import React from 'react';
import { Input, InputNumber } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const max = 30;
const InputDemo = () => (
  <>
    <Input
      size="large"
      placeholder="large size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      placeholder="default size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      size="small"
      placeholder="Small Size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      addonAfter={<UserOutlined />}
      defaultValue="username"
      placeholder="Defalut Value"
    />
    <br />
    <br />
    <Input
      addonBefore={<UserOutlined />}
      placeholder="Placeholder"
    />
    <br />
    <br />
    <Input
      addonBefore={<UserOutlined />}
      defaultValue="Disabled"
      placeholder="Disabled"
      disabled
    />
    <br />
    <br />
    <InputNumber min={1} max={30} defaultValue={3} /> &nbsp;
    <InputNumber
      defaultValue={0}
      formatter={(value) =>
        `${value} / ${max}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      //   onChange={onChange}
    />
    <br />
    <br />
    <Input.Password placeholder="input password" />
  </>
);

export default InputDemo;
