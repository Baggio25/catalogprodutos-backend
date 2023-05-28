import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import NavbarAdmin from './NavbarAdmin';
import Users from './Users';
import Dashboard from './Dashboard';
import Products from './Products';
import Categories from './Categories';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <Categories />
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
