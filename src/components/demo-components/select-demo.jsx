import React from 'react';
import { Select } from 'antd';
import UserRemoteSelect from './select-remote';
import SelectMultiple from './select-multiple';
import SelectWithHiddenSelectedOptions from './select-multiple-with-hide';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SelectDemo = () => {
  return (
    <>
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: '100%' }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <br />
      <div>
        <Select defaultValue="lucy" style={{ width: '100%' }} size='large' disabled>
          <Option value="lucy">Large Select</Option>
        </Select>
      </div>
      <br />
      <div>
        <Select defaultValue="lucy" style={{ width: '100%' }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
      <br />
      <div>
        <Select defaultValue="lucy" style={{ width: '100%' }} allowClear>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
      <br />
      <div>
        <UserRemoteSelect />
      </div>
      <br />
      <div>
        <SelectMultiple />
      </div>
      <br />
      <div>
        <SelectWithHiddenSelectedOptions />
      </div>
    </>
  );
};

export default SelectDemo;
