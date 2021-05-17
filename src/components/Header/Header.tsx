import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouterWrapper } from '../../helpers/UIUtil';
import sessionActions from '../Containers/Authentication/SessionActions';

interface IStateProps {
  isLoggedIn?: boolean;
  fullName: string;
}

interface IPathProps {
  logout(): void;
}

const Header = ({ isLoggedIn, fullName, logout }: IStateProps & IPathProps) => {
  const handleClick = () => {
    logout();
  };

  return (
    <header className="main-header clear-fix">
      <div className="logo-section">
        <h1 className="logo">
          <a href="/">Nati Papelera</a>
        </h1>
      </div>

      <HeaderDetails isLoggedIn={isLoggedIn} fullName={fullName} onClick={() => handleClick()} />
    </header>
  );
};

const HeaderDetails = (props) => {
  const { isLoggedIn, fullName, onClick } = props;
  if (isLoggedIn) {
    return (
      <div className="header-details">
        <ul>
          <li>
            <a href="#">Bienvenido</a>&nbsp;{fullName}
          </li>
          <li>
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

export default withRouterWrapper(connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(Header));
