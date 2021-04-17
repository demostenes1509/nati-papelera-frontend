import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import telTab from '../../images/tel-tab.png';
// import headerImage from '../../images/header-image.png';

interface IStateProps {
  isLoggedIn?: boolean;
  fullName: string;
}

interface IPathProps {
  login(): string;
}

class Header extends Component<IStateProps & IPathProps> {
  render() {
    const { isLoggedIn, fullName } = this.props;

    return (
      <header className="main-header clear-fix">
        <div className="logo-section">
          <h1 className="logo">
            <a href="/">Nati Papelera</a>
          </h1>
        </div>

        <HeaderDetails isLoggedIn={isLoggedIn} fullName={fullName} />
      </header>
    );
  }
}

const HeaderDetails = (props: IStateProps) => {
  const { isLoggedIn, fullName } = props;
  if (isLoggedIn) {
    return (
      <div className="header-details">
        <ul>
          <li>
            <a href="#">Bienvenido</a>&nbsp;{fullName}&nbsp;|&nbsp;&nbsp;
            <a href="#" className="user-logout">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="header-details">
        <ul>
          <li>
            <a href="#">Contacto</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Mapa del sitio</a>
          </li>
          {/* <li className="cart-box">
            <a href="#" className="header-cart">
              Carrito: vacio
            </a>
          </li> */}
          <li>
            <a href="/login" className="user-login">
              Login
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state): IStateProps => ({
  isLoggedIn: state.sessionReducer.isLoggedIn,
  fullName: state.sessionReducer.fullName,
});

const mapDispatchToProps = (): IPathProps => ({
  login: () => {
    console.log('LOGIN');
    return 'A';
  },
});

// Typescript issue
const addWithRouter = (conn) => {
  return withRouter(conn);
};

export default addWithRouter(connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(Header));
