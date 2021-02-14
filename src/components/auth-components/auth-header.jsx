import React from 'react';
import { Typography } from 'antd';
import { BASE_URL } from '@app/constant';

const { Title, Text } = Typography;

const AuthHeader = ({ desc }) => (
  <div className="header__auth">
    <img
      className="image header__auth__image"
      alt="logo"
      src= {`${BASE_URL}/logo/logo-highRes.png `}
    />
    <Title level={3} className="header__auth__title">
      Welcome to <Text strong>Geo</Text>
      <Text strong className="text-primary">
        Deck
      </Text>
    </Title>
    {!!desc && (
      <Text type="secondary" className="header__auth__subtitle text__small">
        {desc}
      </Text>
    )}
  </div>
);

export default AuthHeader;
