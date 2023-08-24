import React from 'react';
import CakeForm from '../../components/CakeForm/CakeForm';

interface HomePageProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="home-page">
      <h2>Cake Order App</h2>
      {isLoggedIn ? (
        <div>
          <button onClick={onLogout}>Logout</button>
          <CakeForm />
        </div>
      ) : (
        <p>Please log in to access the cake form.</p>
      )}
    </div>
  );
};

export default HomePage;

