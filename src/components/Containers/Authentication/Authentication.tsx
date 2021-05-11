import getEnv from 'getenv';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import InstagramLogin from 'react-instagram-login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Error from '../Error/Error';
import AuthenticationActions from './AuthenticationActions';

const FACEBOOK_APP_ID = getEnv('REACT_APP_FACEBOOK_APP_ID');
const REACT_APP_INSTAGRAM_CLIENT_ID = getEnv('REACT_APP_INSTAGRAM_CLIENT_ID');
interface IStateProps {
  isLoggedIn: boolean;
  error: string;
}
interface IPathProps {
  passportLogin(provider, params): string;
}

const Authentication = ({ isLoggedIn, error, passportLogin }: IStateProps & IPathProps) => {
  const facebookLogin = (params) => {
    passportLogin('facebook', params);
  };

  const instagramLogin = (params) => {
    // passportLogin('instagram', params);
    console.log('================');
    console.log(params);
    console.log('================');
  };

  const instagramError = (params) => {
    // passportLogin('instagram', params);
    console.log('================');
    console.log(params);
    console.log('================');
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
          <h3 className="form-header">Instagram</h3>
          <p>Ingrese con su usuario de Instagram</p>
          <form>
            <InstagramLogin
              clientId={REACT_APP_INSTAGRAM_CLIENT_ID}
              buttonText="Login with Instagram"
              onSuccess={(response) => instagramLogin(response)}
              onFailure={(response) => instagramError(response)}
            />
            ,
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
