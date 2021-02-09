import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import ModalDemo from '@components/demo-components/modal-demo';
import DemoTab from '@components/demo-components/tabs-demo';
import CardDemo from '@components/demo-components/card-demo';
import ButtonDemo from '@components/demo-components/button-demo';
import RouteDemo from '@components/demo-components/route-demo';
import TypographyDemo from '@components/demo-components/typography-demo';
import InputDemo from '@components/demo-components/input-demo';
import FormDemo from '@components/demo-components/form-demo';
import SelectDemo from '../components/demo-components/select-demo';
import TableDemo from '../components/demo-components/table-demo';

const Demo = (props) => {
  console.log(props);
  return (
    <div
      style={{
        gridGap: '5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        // alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
      }}
    >
      <div style={{ width: '100%' }}>
        <Divider>Button Demo</Divider>
        <div>
          <ButtonDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Route Demo</Divider>
        <div>
          <RouteDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Tab Demo</Divider>
        <div>
          <DemoTab />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Modal Demo</Divider>
        <div>
          <ModalDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Input Demo</Divider>
        <div>
          <InputDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Card Demo</Divider>
        <div>
          <CardDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Select Demo</Divider>
        <div>
          <SelectDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Form Demo</Divider>
        <div>
          <FormDemo />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Divider>Typography Demo</Divider>
        <div>
          <TypographyDemo />
        </div>
      </div>
      
      <div style={{ width: '100%', gridColumn: '1 / -1' }}>
        <Divider>Table Demo</Divider>
        <div>
          <TableDemo />
        </div>
      </div>
    </div>
  );
};

export default Demo;
