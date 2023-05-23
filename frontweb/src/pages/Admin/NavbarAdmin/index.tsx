import { ReactComponent as Product } from '../../../assets/images/product.svg';
import { ReactComponent as Category } from '../../../assets/images/categories.svg';
import { ReactComponent as User } from '../../../assets/images/user.svg';
import { ReactComponent as Dashboard } from '../../../assets/images/dashboard.svg';

import './styles.css';
import { NavLink } from 'react-router-dom';

const NavbarAdmin = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/dashboard" className="admin-nav-item">
            <Dashboard />
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <Product />
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="admin-nav-item">
            <Category />
            <p>Categorias</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className="admin-nav-item">
            <User />
            <p>Usuários</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
