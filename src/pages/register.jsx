import React from 'react';
import AuthCard from '@components/auth-components/auth-card';
import RegisterForm from '@components/auth-components/register-form';

const Register = () => {
  return (
    <AuthCard desc="Create an account">
      <RegisterForm />
    </AuthCard>
  );
};

export default Register;
