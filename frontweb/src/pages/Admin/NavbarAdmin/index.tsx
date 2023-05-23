import { ReactComponent as Product } from '../../../assets/images/product.svg';
import { ReactComponent as Category } from '../../../assets/images/categories.svg';
import { ReactComponent as User } from '../../../assets/images/user.svg';
import { ReactComponent as Dashboard } from '../../../assets/images/dashboard.svg';

import './styles.css';

const NavbarAdmin = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a href="link" className="admin-nav-item">
            <Dashboard />
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item active">
            <Product />
            <p>Produtos</p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item">
            <Category />
            <p>Categorias</p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item">
            <User />
            <p>Usuários</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
