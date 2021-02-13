import React, { useState } from 'react';
import AuthCard from '@components/auth-components/auth-card';
import ForgetPasswordForm from '@components/auth-components/forget-password-form';
import { useHistory } from 'react-router-dom';
import { Button, Card, Result } from 'antd';

const ForgetPassword = () => {
  const [send, setSend] = useState(false);

  const renderResult = () => {
    const history = useHistory();
    return (
      <div className="auth">
        <Card className="auth__card card__auth" bordered={false}>
          <Result
            className="auth__result"
            status="success"
            title="Successfully send reset link!"
            subTitle=" you will receive a password recovery link at your email address in a few minutes."
            extra={[
              <Button type="primary" key="forget-button-back" onClick={() => history.goBack()}>
                Go Back
              </Button>,
            ]}
          />
        </Card>
      </div>
    );
  };

  return !send ? (
    <AuthCard desc="Forget your password?">
      <ForgetPasswordForm setResult={setSend} />
    </AuthCard>
  ) : (
    renderResult()
  );
};

export default ForgetPassword;
