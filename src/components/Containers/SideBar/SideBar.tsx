import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sidebarActions from './SideBarActions';
import deliveryVan from '../../../images/delivery-van.png';
import deliveryVan2 from '../../../images/delivery-van2.png';
import discountProduct from '../../../images/discount-product.jpg';
import paymentOptions from '../../../images/payment-options.png';

interface Category {
  id: string;
  name: string;
  url: string;
  selected: boolean;
  products: Array<Product>;
}

interface Product {
  id: string;
  name: string;
  url: string;
  selected: boolean;
}

interface SideBarProps {
  fetch(): string;
  select(id: string): string;
  payload: {
    categories: Array<Category>;
  };
}

class SideBar extends Component<SideBarProps> {
  render() {
    const { categories } = this.props.payload;
    return (
      <aside className="main-sidebar">
        <section className="advertising-aside">
          <img src={deliveryVan} alt="" className="delivery-img1" />
          <img src={deliveryVan2} alt="" className="delivery-img2" />
        </section>
        <section className="category-aside">
          <h2 className="aside-title">Categorias</h2>
          <ul className="aside-menu">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/${category.url}`}
                  onClick={() => this.handleClick(category.id)}
                  className={category.selected ? 'aside-active' : ''}
                >
                  {category.name}
                </Link>
                <ul className="aside-sub-menu">
                  {category.products.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={`/${category.url}/${product.url}`}
                        onClick={() => this.handleClick(product.id)}
                        className={product.selected ? 'aside-active' : ''}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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

  handleClick = (id: string) => {
    this.props.select(id);
  };
}

const mapStateToProps = (state) => {
  return {
    payload: state.sidebarReducer.payload,
    loading: state.sidebarReducer.loading,
    error: state.sidebarReducer.error,
    isadmin: state.sidebarReducer.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(sidebarActions.fetch()),
  select: (id) => dispatch(sidebarActions.select(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
