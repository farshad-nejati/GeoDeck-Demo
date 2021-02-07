import React from 'react';
import { Link } from 'react-router-dom';
import ModalDemo from '../example/modal-demo';
import DemoTab from '../example/tabs-demo';
import CardDemo from '../example/card-demo';
import ButtonDemo from '../example/button-demo';
import RouteDemo from '../example/route-demo';
import TypographyDemo from '../example/typography-demo';
import InputDemo from '../example/input-demo';
import { Divider } from 'antd';

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
      <div style={{width: "100%"}}>
        <Divider>Button Demo</Divider>
        <div>
          <ButtonDemo />
        </div>
      </div>

      <div style={{width: "100%"}}>
        <Divider>Route Demo</Divider>
        <div>
          <RouteDemo />
        </div>
      </div>

      <div style={{width: "100%"}}>
        <Divider>Tab Demo</Divider>
        <div>
          <DemoTab />
        </div>
      </div>

      <div style={{width: "100%"}}>
        <Divider>Modal Demo</Divider>
        <div>
          <ModalDemo />
        </div>
      </div>

      <div style={{width: "100%"}}>
        <Divider>Input Demo</Divider>
        <div>
          <InputDemo />
        </div>
      </div>

      <div style={{width: "100%"}}>
        <Divider>Card Demo</Divider>
        <div>
          <CardDemo />
        </div>
      </div>

      <div style={{width: "100%"}}>
        <Divider>Typography Demo</Divider>
        <div>
          <TypographyDemo />
        </div>
      </div>
    </div>
  );
};

export default Demo;
