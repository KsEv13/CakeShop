import React, { useState } from 'react';
import AuthForm from './components/AuthForm/AuthForm';
import CakeForm from './components/CakeForm/CakeForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Cake Order App</h1>
      {isLoggedIn ? <CakeForm /> : <AuthForm onLogin={handleLogin} />}
    </div>
  );
}

export default App;

