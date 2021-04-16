import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import getEnv from 'getenv';
import { connect } from 'react-redux';
import FacebookActions from './FacebookActions';

const FACEBOOK_APP_ID = getEnv('REACT_APP_FACEBOOK_APP_ID');

interface IStateProps {
  payload: {
    accessToken: string;
  };
}
interface IPathProps {
  passportLogin(provider, params): string;
}
class Authentication extends Component<IPathProps & IStateProps> {
  render() {
    return (
      <section className="authentication-section">
        {/* <div className="breadcrumb-container">
          <ul className="breadcrumb-list">
            <li>
              <a href="#" className="breadcrumb-home">
                Home
              </a>
            </li>
            <li>
              <span></span>
            </li>
            <li>Autentificacion</li>
          </ul>
        </div> */}
        <div className="authentication-forms clear-fix">
          <h2 className="main-title">Autentificacion</h2>
          <div className="new-customer">
            <h3 className="form-header">Facebook</h3>
            <p>Ingrese con su usuario de Facebook</p>
            <form>
              <FacebookLogin
                appId={FACEBOOK_APP_ID}
                fields="name,email,picture"
                // callback={responseFacebook}
                callback={(response) => this.facebookLogin(response)}
              />
            </form>
          </div>
          {/* <h2 className="main-title">Autentificacion</h2>
          <div className="new-customer">
            <h3 className="form-header">Registro Nuevo Cliente</h3>
            <p>Escriba su correo electronico para crear su cuenta</p>
            <form>
              <label>
                Correo Electronico<span className="form-error">Required</span>
              </label>
              <input type="email" className="customer-email form-error-input" name="" />
              <button type="button" className="form-btn">
                Registro Nuevo Cliente
              </button>
            </form>
          </div> */}
          <div className="returning-customer">
            <h3 className="form-header">Ingreso con Google</h3>
            <p>Ingrese con su usuario de Google</p>
            <form>{/* <OAuth provider="google" /> */}</form>
          </div>
          {/* <div className="returning-customer">
            <h3 className="form-header">Ya Soy Cliente</h3>
            <form>
              <label>
                Correo Electronico<span className="form-error">Required</span>
              </label>
              <input type="email" className="customer-email" name="" />
              <label>
                Contrasena<span className="form-error">Required</span>
              </label>
              <input type="password" className="customer-password" name="password" />
              <label className="form-check">
                This is a checkbox
                <input type="checkbox" className="form-check" />
              </label>
              <label className="form-check">
                This is a checkbox
                <input type="checkbox" />
              </label>
              <label className="form-select">
                This is a select
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
              </label>
              <label className="form-select">
                This is a select
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
              </label>
              <a href="#" className="forgot-password">
                Ha olvidado su contrasena?
              </a>
              <button type="button" className="form-btn">
                Autentificacion
              </button>
            </form>
          </div> */}
        </div>
      </section>
    );
  }

  facebookLogin = (params) => {
    this.props.passportLogin('facebook', params);
  };
}

const mapStateToProps = (state): IStateProps => {
  console.log('MAPSTATETOPROPS AUTHENTICATION');
  console.log(state);
  console.log('MAPSTATETOPROPS AUTHENTICATION');
  return {
    payload: state.facebookReducer.payload,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  passportLogin: (provider, params) => dispatch(FacebookActions.fetch(provider, params)),
});

export default connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(Authentication);
