import React from 'react';
import { Card } from 'antd';
import AuthHeader from '@components/auth-components/auth-header';

const AuthCard = ({ children, desc }) => {
  return (
    <div className="auth">
      <Card className="auth__card card__auth" bordered={false}>
        <AuthHeader desc={desc} />
        {children}
      </Card>
    </div>
  );
};

export default AuthCard;
