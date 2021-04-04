import React, { Component } from "react";
import fbIcon from "../../images/fb-icon.png";
import twitterIcon from "../../images/twitter-icon.png";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <section className="footer-subscribe clear-fix">
          <p>Subscribe a nuestras novedades y ofertas</p>
          <div className="subscribe-form">
            <div className="subscribe-input clear-fix">
              <input type="text" placeholder="su email" />
              <button className="subscribe-btn">Enviar</button>
            </div>
            <div className="subscribe-checkbox">
              <input type="checkbox" />
              <span>
                He leido y estoy conforme con la <a href="#">Politica de proteccion de Datos</a>
              </span>
            </div>
          </div>
        </section>
        <section className="footer-columns clear-fix">
          <div className="footer-links">
            <h4>Categorias</h4>
            <ul>
              <li>
                <a href="#">Vasos de Plastico</a>
              </li>
              <li>
                <a href="#">Vasos Personalizados</a>
              </li>
              <li>
                <a href="#">Vasos de Cubata, Mojito y Sidra</a>
              </li>
              <li>
                <a href="#">Copas de Plastico</a>
              </li>
              <li>
                <a href="#">Chupitos de Plastico</a>
              </li>
              <li>
                <a href="#">Jarras de Plastico</a>
              </li>
              <li>
                <a href="#">Vasos de Carton</a>
              </li>
              <li>
                <a href="#">Vasos de Plastico</a>
              </li>
              <li>
                <a href="#">Vasos Personalizados</a>
              </li>
              <li>
                <a href="#">Vasos de Cubata, Mojito y Sidra</a>
              </li>
              <li>
                <a href="#">Copas de Plastico</a>
              </li>
              <li>
                <a href="#">Chupitos de Plastico</a>
              </li>
              <li>
                <a href="#">Jarras de Plastico</a>
              </li>
              <li>
                <a href="#">Vasos de Carton</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Infomacion</h4>
            <ul>
              <li>
                <a href="#">Contacte con nostros</a>
              </li>
              <li>
                <a href="#">Envios y Devoluciones</a>
              </li>
              <li>
                <a href="#">Quienes somos</a>
              </li>
              <li>
                <a href="#">Avisio legal</a>
              </li>
              <li>
                <a href="#">Condiciones generales</a>
              </li>
              <li>
                <a href="#">Formas de pago</a>
              </li>
              <li>
                <a href="#">Proteccion de datos</a>
              </li>
              <li>
                <a href="#">Politica de Cookies</a>
              </li>
              <li>
                <a href="#">Descuentos</a>
              </li>
              <li>
                <a href="#">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#">Mapa del sitito</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Mi Cuenta</h4>
            <ul>
              <li>
                <a href="#">Mis pedidos</a>
              </li>
              <li>
                <a href="#">Mis vales descuento</a>
              </li>
              <li>
                <a href="#">Mis direcciones</a>
              </li>
              <li>
                <a href="#">Mis datos presonales</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contacte Con Nosotros</h4>
            <ul>
              <li>
                <a href="#">PlasticoMania.com</a>
              </li>
              <li>
                <a href="#">Tel: 34 644 319 409</a>
              </li>
              <li>
                <a href="#">Email: info@plasticomania.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Siguenos</h4>
            <ul className="social-links">
              <li>
                <a href="#">
                  <img src={fbIcon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitterIcon} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
