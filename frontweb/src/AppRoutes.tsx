import { Navigate, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Admin from "./pages/Admin";
import ProductDetails from './pages/ProductDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />

      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
