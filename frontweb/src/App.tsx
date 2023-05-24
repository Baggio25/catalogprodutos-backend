import { Router } from 'react-router-dom';

import './assets/styles/custom.scss';
import './App.css';

import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import history from 'util/history';

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
