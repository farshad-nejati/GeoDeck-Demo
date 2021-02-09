import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectMultiple = () => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>,
    );
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Multiple Select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
      <br />

      <div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Multiple Select With MaxCount"
          onChange={handleChange}
          maxTagCount="responsive"
        >
          {children}
        </Select>
      </div>
      <br />
      <div>
        <Select
          mode="multiple"
          disabled
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
    </>
  );
};

export default SelectMultiple;
