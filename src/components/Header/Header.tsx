import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouterWrapper } from '../../helpers/UIUtil';
// import telTab from '../../images/tel-tab.png';
// import headerImage from '../../images/header-image.png';
import sessionActions from '../Containers/Authentication/SessionActions';

interface IStateProps {
  isLoggedIn?: boolean;
  fullName: string;
}

interface IPathProps {
  logout(): void;
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

        <HeaderDetails isLoggedIn={isLoggedIn} fullName={fullName} onClick={() => this.handleClick()} />
      </header>
    );
  }

  handleClick = () => {
    this.props.logout();
  };
}

const HeaderDetails = (props) => {
  const { isLoggedIn, fullName, onClick } = props;
  if (isLoggedIn) {
    return (
      <div className="header-details">
        <ul>
          <li>
            <a href="#">Bienvenido</a>&nbsp;{fullName}&nbsp;|&nbsp;&nbsp;
            <Link to="/" onClick={onClick} className="user-logout">
              Cerrar sesión
            </Link>
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

const mapDispatchToProps = (dispatch): IPathProps => ({
  logout: () => dispatch(sessionActions.notLoggedIn()),
});

// Typescript issue
export default withRouterWrapper(connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(Header));
