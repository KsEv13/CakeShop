import React, { useState } from 'react';
import './AuthForm.css';

interface AuthFormProps {
  onLogin?: () => void;
}

function AuthForm({ onLogin }: AuthFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    if (onLogin) {
      onLogin();
    }
  };

  if (isLoggedIn) {
    return <p>Welcome, {username}!</p>;
  }

  return (
    <div className="auth-form-container">
      <h2>Authentication</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthForm;
