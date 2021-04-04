import React, { Component } from "react";

class Authentication extends Component {
  render() {
    return (
      <section className="authentication-section">
        <div className="breadcrumb-container">
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
        </div>
        <div className="authentication-forms clear-fix">
          <h2 className="main-title">Autentificacion</h2>
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
          </div>
          <div className="returning-customer">
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
          </div>
        </div>
      </section>
    );
  }
}

export default Authentication;
