import React, { Component } from 'react';

class NavVar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <a href="" className="sub-menu-item menu-link">
          Menu
        </a>
        <ul className="main-nav clear-fix">
          <li>
            <a href="#" className="sub-menu-item">
              Inicio
            </a>
            <ul className="sub-menu-list">
              <li>
                <a href="#">List item 1</a>
              </li>
              <li>
                <a href="#">List item 2</a>
              </li>
              <li>
                <a href="#">List item 3</a>
              </li>
              <li>
                <a href="#">List item 4</a>
              </li>
              <li>
                <a href="#">List item 5</a>
              </li>
              <li>
                <a href="#">List item 6</a>
              </li>
              <li>
                <a href="#">List item 7</a>
              </li>
              <li>
                <a href="#">List item 8</a>
              </li>
            </ul>
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
          <li className="main-search">
            <input type="text" className="search-input" />
            <button className="search-btn">Search</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavVar;
