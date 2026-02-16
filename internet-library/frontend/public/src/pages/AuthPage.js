import React from 'react';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h2>Авторизация</h2>
      <AuthForm />
    </div>
  );
};

export default AuthPage;