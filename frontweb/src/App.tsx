import { useState } from 'react';
import { Router } from 'react-router-dom';

import './assets/styles/custom.scss';
import './App.css';

import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import history from 'util/history';
import { AuthContext, AuthContextData } from 'AuthContext';

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Router history={history}>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
