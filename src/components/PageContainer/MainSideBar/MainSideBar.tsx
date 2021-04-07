import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import deliveryVan from '../../../images/delivery-van.png';
import deliveryVan2 from '../../../images/delivery-van2.png';
import discountProduct from '../../../images/discount-product.jpg';
import paymentOptions from '../../../images/payment-options.png';
import { FetchComponent } from '../../../types/ComponentTypes';
import { State } from '../../../types/StateTypes';
import SidebarFetchActions, { SidebarPayload } from './MainSideBarActions';

class MainSideBar extends Component<FetchComponent<SidebarPayload>> {
  render() {
    console.log('=================');
    console.log(this.props);
    console.log('=================');

    return (
      <aside className="main-sidebar">
        <section className="advertising-aside">
          <img src={deliveryVan} alt="" className="delivery-img1" />
          <img src={deliveryVan2} alt="" className="delivery-img2" />
        </section>
        <section className="category-aside">
          <h2 className="aside-title">Categorias</h2>
          <ul className="aside-menu">
            <li>
              <a href="#" className="aside-active">
                Vasos de Plastico
              </a>
              <span className="expand"></span>
              <ul className="aside-sub-menu">
                <li>
                  <a href="#" className="aside-active">
                    Sub Item 1
                  </a>
                </li>
                <li>
                  <a href="#">Sub Item 2</a>
                </li>
                <li>
                  <a href="#">Sub Item 3</a>
                </li>
              </ul>
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
              <span className="expand"></span>
              <ul className="aside-sub-menu">
                <li>
                  <a href="#">Sub Item 1</a>
                </li>
                <li>
                  <a href="#">Sub Item 2</a>
                </li>
                <li>
                  <a href="#">Sub Item 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Vasos de Carton</a>
            </li>
            <li>
              <a href="#">Vasos de Plastico</a>
              <span className="expand"></span>
              <ul className="aside-sub-menu">
                <li>
                  <a href="#">Sub Item 1</a>
                </li>
                <li>
                  <a href="#">Sub Item 2</a>
                </li>
                <li>
                  <a href="#">Sub Item 3</a>
                </li>
              </ul>
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
              <span className="expand"></span>
              <ul className="aside-sub-menu">
                <li>
                  <a href="#">Sub Item 1</a>
                </li>
                <li>
                  <a href="#">Sub Item 2</a>
                </li>
                <li>
                  <a href="#">Sub Item 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Vasos de Carton</a>
            </li>
            <li>
              <a href="#">Vasos de Plastico</a>
              <span className="expand"></span>
              <ul className="aside-sub-menu">
                <li>
                  <a href="#">Sub Item 1</a>
                </li>
                <li>
                  <a href="#">Sub Item 2</a>
                </li>
                <li>
                  <a href="#">Sub Item 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Vasos Personalizados</a>
            </li>
            <li>
              <a href="#">Vasos de Cubata, Mojito y Sidra</a>
            </li>
          </ul>
        </section>
        <section className="descuentos-aside clear-fix">
          <h2 className="aside-title">Descuentos</h2>
          <div className="discount-container clear-fix">
            <div className="discount-image">
              <a href="#">
                <img src={discountProduct} alt="" />
              </a>
            </div>
            <div className="discount-details">
              <ul>
                <li className="item-name">
                  <span className="discount-tag">10%</span>
                  <a href="#">Vasos de Plastico Irrompibles 100cc Moca</a>
                </li>
                <li className="old-price">1,84 €</li>
                <li className="discount-price">1,47 €</li>
              </ul>
            </div>
          </div>
          <div className="discount-container clear-fix">
            <div className="discount-image">
              <a href="#">
                <img src={discountProduct} alt="" />
              </a>
            </div>
            <div className="discount-details">
              <ul>
                <li className="item-name">
                  <span className="discount-tag">10%</span>
                  <a href="#">Vasos de Plastico Irrompibles 100cc Moca</a>
                </li>
                <li className="old-price">1,84 €</li>
                <li className="discount-price">1,47 €</li>
              </ul>
            </div>
          </div>
          <p>
            <a href="#">&gt;&gt; Todos los descuentos</a>
          </p>
        </section>
        <section className="contactar-aside">
          <h2 className="aside-title">Contactar</h2>
          <div className="contact-details">
            <ul>
              <li className="aside-tel">
                <a href="#">644 319 409</a>
              </li>
              <li className="aside-email">
                <a href="#">E-Mail</a>
              </li>
            </ul>
          </div>
          <div className="payment-logos">
            <a href="#">
              <img src={paymentOptions} alt="an image of payment options" />
            </a>
          </div>
        </section>
        <section className="infomacion-aside">
          <h2 className="aside-title">Informacion</h2>
          <ul className="aside-menu">
            <li>
              <a href="#">Envios y Devoluciones</a>
            </li>
            <li>
              <a href="#">Quienes somos</a>
            </li>
            <li>
              <a href="#">Aviso legal</a>
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
              <a href="#">Politica de cookies</a>
            </li>
            <li>
              <a href="#">Preguntas Frecuentes</a>
            </li>
          </ul>
        </section>
      </aside>
    );
  }

  componentDidMount() {
    this.props.fetch();
  }
}

interface IExtraDispatchArguments {
  dummy: number;
}

interface MapToStateProps {
  mainSideBar: State<SidebarPayload>;
}

const mapStateToProps = (state: MapToStateProps) => ({
  payload: state.mainSideBar.payload,
  loading: state.mainSideBar.loading,
  error: state.mainSideBar.error,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<State<SidebarPayload>, IExtraDispatchArguments, AnyAction>) => ({
  fetch: () => dispatch(SidebarFetchActions.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSideBar);
