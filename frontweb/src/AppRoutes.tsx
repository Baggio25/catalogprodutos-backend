import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Admin/Auth';

const AppRoutes = () => {
  return (
    <Switch>
            
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect from="/home" to="/"/>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>     

      <Route path="/admin/auth">
        <Auth />
      </Route>

      <Redirect from="/admin" to="/admin/dashboard" exact/>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
