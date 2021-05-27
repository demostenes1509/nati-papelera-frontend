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

  const clickProvider = (event) => {
    event.preventDefault();
    setShowProvMenu(!showProvMenu);
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
                    <Link to="/admin/providers/fileupload">Carga de Archivos</Link>
                    {/* <a href="#">Carga de Archivos</a> */}
                  </li>
                </ul>
              ) : null}
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
