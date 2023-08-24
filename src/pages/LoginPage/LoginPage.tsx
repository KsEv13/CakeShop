import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page-container">
      <h1>Login Page</h1>
      <AuthForm />
    </div>
  );
}

export default LoginPage;
