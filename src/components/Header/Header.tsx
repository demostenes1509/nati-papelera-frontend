import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="main-header clear-fix">
        <div className="logo-section">
          <h1 className="logo">
            <a href="#">Plastico Mania</a>
          </h1>
        </div>
        <div className="header-labels">
          <img src="/images/tel-tab.png" alt="" />
          <img src="/images/header-image.png" alt="" />
        </div>
        <div className="header-details">
          <ul>
            <li>
              <a href="#">contacto</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">mapa sitio</a>
            </li>
            <li className="cart-box">
              <a href="#" className="header-cart">
                Carrito: vacio
              </a>
            </li>
            <li>
              <a href="#">Bienvenido</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#" className="user-login">
                Entra
              </a>
              <a href="#" className="user-logout">
                cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;