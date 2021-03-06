import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouterWrapper } from '../../helpers/UIUtil';

interface IStateProps {
  isAdmin: boolean;
}

const NavVar = ({ isAdmin }: IStateProps) => {
  const isInAdminPage = location.pathname.startsWith('/admin');
  const [showProvMenu, setShowProvMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);

  const clickProvider = (event) => {
    event.preventDefault();
    setShowProvMenu(!showProvMenu);
  };
  const clickCategories = (event) => {
    event.preventDefault();
    setShowCatMenu(!showCatMenu);
  };
  const hideMenues = () => {
    setShowProvMenu(false);
    setShowCatMenu(false);
  };

  return (
    <nav className="nav-bar">
      <a href="" className="sub-menu-item menu-link">
        Menu
      </a>
      <ul className="main-nav clear-fix">
        {isAdmin && !isInAdminPage ? (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        ) : null}
        {isAdmin && isInAdminPage ? (
          <>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a
                href="#"
                className={showProvMenu ? 'sub-menu-item' : 'sub-menu-item-left'}
                onClick={(event) => clickProvider(event)}
              >
                Proveedores
              </a>
              {showProvMenu ? (
                <ul className="sub-menu-list sub-menu-list-prov">
                  <li>
                    <a href="#">Gestión</a>
                    <Link to="/admin/providers/fileupload" onClick={() => hideMenues()}>
                      Carga de Archivos
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <a
                href="#"
                className={showCatMenu ? 'sub-menu-item' : 'sub-menu-item-left'}
                onClick={(event) => clickCategories(event)}
              >
                Categorías
              </a>
              {showCatMenu ? (
                <ul className="sub-menu-list sub-menu-list-cat">
                  <li>
                    <Link to="/admin/categories/management" onClick={() => hideMenues()}>
                      Gestión
                    </Link>
                    <Link to="/admin/categories/fileupload" onClick={() => hideMenues()}>
                      Carga de Categorías de Mercado Libre
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link to="/admin/configuration">Configuración</Link>
            </li>
          </>
        ) : null}

        {!isAdmin ? (
          <>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a href="#">Mi Cuenta</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Descuentos</a>
            </li>
            <li>
              <a href="#">Carrito</a>
            </li>
          </>
        ) : null}
        <li className="main-search">
          <input type="text" className="search-input" />
          <button className="search-btn">Search</button>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state): IStateProps => ({
  isAdmin: state.sessionReducer.isAdmin,
});

export default withRouterWrapper(connect(mapStateToProps, null)(NavVar));
