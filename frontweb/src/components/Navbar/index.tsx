import { Link, NavLink } from 'react-router-dom';

import './styles.css';

import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-3 main-menu">
            <li>
              <NavLink to="/home" className={(navData) => navData.isActive ? "active" : "" }>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={(navData) => navData.isActive ? "active" : "" }>
                CATÁLOGO
               </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={(navData) => navData.isActive ? "active" : "" }>ADMINISTRADOR</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
