import React from 'react';
import { Card } from 'antd';
import { Typography } from 'antd';
import LoginForm from '../components/login-components/login-form';

const { Title, Text } = Typography;

const Login = ({...other}) => {
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
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
