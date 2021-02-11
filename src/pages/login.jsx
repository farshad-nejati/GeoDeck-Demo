import React from 'react';
import LoginForm from '@components/auth-components/login-form';
import AuthCard from '@components/auth-components/auth-card';

const Login = () => {
  return (
    <AuthCard desc="immerse yourself in Geo data">
      <LoginForm />
    </AuthCard>
  );
};

export default Login;
