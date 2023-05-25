import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import NavbarAdmin from './NavbarAdmin';
import Users from './User';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavbarAdmin />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/dashboard">
            <h1>Dashboard</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/products">
            <h1>Product CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>Category CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users">
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
