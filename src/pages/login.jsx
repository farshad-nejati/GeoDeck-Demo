import React from 'react';
import { Link } from 'react-router-dom';
import FormDemo from '@components/demo-components/form-demo';
import { Card } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Login = (props) => {
  const renderLoginHeader = () => (
    <div className="login__header">
      <img
        className="image login__header__image"
        alt="logo"
        src="img/logo/logo-highRes.png"
      />
      <Title level={3} className="login__header__title">
        Welcome to <Text strong>Geo</Text>
        <Text strong className="text-primary">
          Deck
        </Text>
      </Title>
      <Text type="secondary" className="login__header__subtitle text__small">
        immerse yourself in Geo data
      </Text>
    </div>
  );
  return (
    <div className="login">
      <Card className="login__layout card__login" bordered={false}>
        {renderLoginHeader()}
        <FormDemo />
      </Card>
    </div>
  );
};

export default Login;
