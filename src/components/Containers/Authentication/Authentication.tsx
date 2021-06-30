import getEnv from 'getenv';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import Error from '../Error/Error';
import AuthenticationActions from './AuthenticationActions';

const FACEBOOK_APP_ID = getEnv('REACT_APP_FACEBOOK_APP_ID');
const MERCADOLIBRE_APP_ID = getEnv('REACT_APP_MERCADOLIBRE_APP_ID');
const API_URL = getEnv('REACT_APP_API_URL');

interface IStateProps {
  isLoggedIn: boolean;
  error: string;
}
interface IPathProps {
  passportLogin(provider, params): string;
}

const Authentication = ({ isLoggedIn, error, passportLogin }: IStateProps & IPathProps) => {
  const mercadoLibreRedirectUri = `${API_URL}/auth/mercadolibre/redirecturi`;

  const facebookLogin = (params) => {
    passportLogin('facebook', params);
  };

  const mercadoLibreLogin = (params) => {
    passportLogin('mercadolibre', params);
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
            {error ? <Error error={error} /> : null}
          </form>
        </div>
        <div className="returning-customer">
          <h3 className="form-header">Mercado Libre</h3>
          <p>Ingrese con su usuario de Mercado Libre</p>
          <form>
            <OAuth2Login
              authorizationUrl="http://auth.mercadolibre.com.ar/authorization"
              responseType="code"
              clientId={MERCADOLIBRE_APP_ID}
              redirectUri={mercadoLibreRedirectUri}
              onSuccess={mercadoLibreLogin}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn,
    error: state.authenticationReducer.error,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => {
  return {
    passportLogin: (provider, params) => dispatch(AuthenticationActions.fetch(provider, params)),
  };
};

export default connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(Authentication);
