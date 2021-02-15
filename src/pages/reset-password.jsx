import React, { useState } from 'react';
import AuthCard from '@components/auth-components/auth-card';
import ResetPasswordForm from '@components/auth-components/reset-password-form';
import { useHistory } from 'react-router-dom';
import { Button, Card, Result } from 'antd';

const ResetPassword = () => {
  const [send, setSend] = useState(false);

  const renderResult = () => {
    const history = useHistory();
    return (
      <div className="auth" key="reset">
        <Card className="auth__card card__auth" bordered={false}>
          <Result
            className="auth__result"
            status="success"
            title="Successfully change password!"
            subTitle=" Please use this password to login in app."
            extra={[
              <Button
                type="primary"
                key="reset-result=button"
                onClick={() => history.push('/login')}
              >
                Login
              </Button>,
            ]}
          />
        </Card>
      </div>
    );
  };

  return !send ? (
    <AuthCard desc="Reset your password">
      <ResetPasswordForm setResult={setSend} />
    </AuthCard>
  ) : (
    renderResult()
  );
};

export default ResetPassword;
