import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const AuthHeader = ({ desc }) => (
  <div className="auth__header">
    <img
      className="image auth__header__image"
      alt="logo"
      src="img/logo/logo-highRes.png"
    />
    <Title level={3} className="auth__header__title">
      Welcome to <Text strong>Geo</Text>
      <Text strong className="text-primary">
        Deck
      </Text>
    </Title>
    {!!desc && (
      <Text type="secondary" className="auth__header__subtitle text__small">
        {desc}
      </Text>
    )}
  </div>
);

export default AuthHeader;
