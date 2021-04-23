import React from 'react';
import FacebookLogin from 'react-facebook-login';
import getEnv from 'getenv';
import { connect } from 'react-redux';
import AuthenticationActions from './AuthenticationActions';
import { Redirect } from 'react-router-dom';

const FACEBOOK_APP_ID = getEnv('REACT_APP_FACEBOOK_APP_ID');

interface IStateProps {
  isLoggedIn: boolean;
}
interface IPathProps {
  passportLogin(provider, params): string;
}

const Authentication = ({ isLoggedIn, passportLogin }: IStateProps & IPathProps) => {
  const facebookLogin = (params) => {
    passportLogin('facebook', params);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <section className="authentication-section">
      <div className="authentication-forms clear-fix">
        <h2 className="main-title">Autentificacion</h2>
        <div className="new-customer">
          <h3 className="form-header">Facebook</h3>
          <p>Ingrese con su usuario de Facebook</p>
          <form>
            <FacebookLogin
              appId={FACEBOOK_APP_ID}
              fields="name,email,picture"
              callback={(response) => facebookLogin(response)}
            />
          </form>
        </div>
        <div className="returning-customer">
          <h3 className="form-header">Ingreso con Google</h3>
          <p>Ingrese con su usuario de Google</p>
          <form>{/* <OAuth provider="google" /> */}</form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => {
  return {
    passportLogin: (provider, params) => dispatch(AuthenticationActions.fetch(provider, params)),
  };
};

export default connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(Authentication);
