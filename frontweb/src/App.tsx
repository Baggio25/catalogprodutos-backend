import { BrowserRouter } from 'react-router-dom';

import './assets/styles/custom.scss';
import './App.css';

import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
