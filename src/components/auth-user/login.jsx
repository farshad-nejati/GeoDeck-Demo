import React from 'react';
import { Link } from 'react-router-dom';
import ModalDemo from '../example/modal-demo';
import DemoTab from '../example/tabs-demo';
import CardDemo from '../example/card-demo';
import ButtonDemo from '../example/button-demo';
import RouteDemo from '../example/route-demo';
import TypographyDemo from '../example/typography-demo';

const Login = (props) => {
  console.log(props);
  return (
    <div
      style={{
        gridGap: '5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        padding: '32px 8px',
      }}
    >
      <div>
        <ButtonDemo />
      </div>

      <div>
        <RouteDemo />
      </div>

      <div>
        <DemoTab />
      </div>

      <div>
        <ModalDemo />
      </div>

      <div>
        <CardDemo />
      </div>

      <div>
        <TypographyDemo />
      </div>
    </div>
  );
};

export default Login;
