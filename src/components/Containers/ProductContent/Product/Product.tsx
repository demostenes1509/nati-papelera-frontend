import React, { Component } from 'react';

import mainProductImg from '../../../../images/main-product-img.png';
import productThumbnail from '../../../../images/product-thumbnail.png';
import rotatorProduct from '../../../../images/rotator-product.png';
import { connect } from 'react-redux';
import { withRouterWrapper } from '../../../../helpers/UIUtil';
import { IProduct } from '../../../../interfaces/interfaces';
import productGetActions from './ProductGetActions';

interface IStateProps {
  payload: IProduct;
}

interface IPathProps {
  fetch(productUrl): string;
}

interface IProps {
  location: {
    pathname: string;
  };
}
class Product extends Component<IPathProps & IProps & IStateProps> {
  render() {
    const { name, description, packaging } = this.props.payload;

    console.log(this.props);
    console.log(name);
    console.log(packaging);

    return (
      <section className="main-content clear-fix">
        <section className="product-image-col">
          <div className="product-image-container">
            <a href="">
              <img src={mainProductImg} />
            </a>
            <a href="" className="enlarge-product-btn">
              Ver mas grande
            </a>
          </div>
          <div className="product-thumbnail-container">
            <a href="" className="active-thumbnail">
              <img src={productThumbnail} />
            </a>
          </div>
        </section>
        <section className="product-details-col">
          <h2>{name}</h2>
          <p>{description}</p>
          {/* <p>
            <span className="product-discount-text">AHORRO del 20% comprando la caja completa.</span>
          </p> */}
          {/* <div className="product-info">
            <ul className="info-list">
              <li>Envio Gratis</li>
              <li>Entregas 24/72h</li>
              <li>Pago 100% Seguro</li>
            </ul>
          </div> */}
          <div className="product-content-details">
            <ul>
              {packaging.map((pack) => (
                <li key={pack.id}>
                  {pack.name} <span className="product-price">$ {Math.ceil(pack.price)}.00</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <p>IVA includio</p> */}
        </section>
        <section className="product-details-section">
          <h2 className="main-title">Mas</h2>
          <ul>
            <li>
              <span className="utilities-title">Utilities:</span>She must have hidden the plans in the escape pod. Send
              a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us
              this time! But with the blast shield down, I can't even see! How am I supposed to fight? Escape is not his
              plan. I must face him, alone.
            </li>
            <li>
              <span>Capacidad: </span>80 CC
            </li>
            <li>
              <span>Color: </span>Blanco
            </li>
            <li>
              <span>Material: </span>Polipropileno alimentario (PP)
            </li>
            <li>
              <span>Caja: </span>De 4.800 Uds. distribuidas en 48 paquetes de 100 unidades
            </li>
          </ul>
        </section>
        <section className="product-rotator-section">
          <h2 className="main-title">Tambien puede que necesites...</h2>
          <a href="" className="rotator-left-btn">
            left
          </a>
          <ul className="product-rotator clear-fix">
            <li>
              <a href="">
                <img src={rotatorProduct} />
              </a>
              <a href="">Cucharas Catering Degustacion Arco Transparente</a>
              <p>
                1,25€ <span>con IVA</span>
              </p>
            </li>
            <li>
              <a href="">
                <img src={rotatorProduct} />
              </a>
              <a href="">Cucharas Catering Degustacion Arco Transparente</a>
              <p>
                1,25€ <span>con IVA</span>
              </p>
            </li>
            <li>
              <a href="">
                <img src={rotatorProduct} />
              </a>
              <a href="">Cucharas Catering Degustacion Arco Transparente</a>
              <p>
                1,25€ <span>con IVA</span>
              </p>
            </li>
            <li>
              <a href="">
                <img src={rotatorProduct} />
              </a>
              <a href="">Cucharas Catering Degustacion Arco Transparente</a>
              <p>
                1,25€ <span>con IVA</span>
              </p>
            </li>
          </ul>
          <a href="" className="rotator-right-btn">
            right
          </a>
        </section>
      </section>
    );
  }

  componentDidMount() {
    this.props.fetch(this.props.location.pathname);
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.location.pathname !== nextprops.location.pathname) {
      this.props.fetch(nextprops.location.pathname);
    }
  }
}

const mapStateToProps = (state): IStateProps => {
  return {
    payload: state.productGetReducer.payload,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (productUrl) => dispatch(productGetActions.fetch(productUrl)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(Product));
