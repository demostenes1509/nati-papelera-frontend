import getEnv from 'getenv';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouterWrapper } from '../../../helpers/UIUtil';
import productImg1 from '../../../images/product-img1.jpg';
import { IProduct } from '../../../interfaces/interfaces';
import productsListActions from './ProductsListActions';

const API_URL = getEnv('REACT_APP_API_URL');

interface IStateProps {
  payload: {
    categoryName: string;
    categoryUrl: string;
    products: Array<IProduct>;
  };
}
interface IPathProps {
  fetch(categoryUrl: string);
}

const ProductsList = ({ payload, fetch }: IStateProps & IPathProps) => {
  const { categoryName, categoryUrl, products } = payload;

  useEffect(() => {
    fetch(location.pathname);
  }, [location.pathname]);

  return (
    <section className="main-content clear-fix">
      <div className="main-products">
        <h2 className="main-title">{categoryName}</h2>
        <ul className="main-products-list clear-fix">
          <div className="clear-fix">
            {products.map((product) => (
              <li key={product.id}>
                {product.pictures.length > 0 ? (
                  <Link to={`/${categoryUrl}/${product.url}`}>
                    <img
                      className="main-products-list-image"
                      src={`${API_URL}/products-pictures/${product.pictures[0].id}`}
                    />
                  </Link>
                ) : (
                  <Link to={`/${categoryUrl}/${product.url}`}>
                    <img className="main-products-list-image" src={productImg1} alt="" />
                  </Link>
                )}

                <h3 className="main-product-title">
                  <Link to={`/${categoryUrl}/${product.url}`}>{product.name}</Link>
                </h3>
                <p className="main-product-description">
                  <Link to={`/${categoryUrl}/${product.url}`}>{product.description}</Link>
                </p>

                <div className="product-prices">
                  {product.packaging.map((pack) => (
                    <p key={pack.id}>
                      {pack.name} <span className="price-con">$ {Math.ceil(pack.price)}.00</span>
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    payload: state.productsListReducer.payload,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (categoryUrl) => dispatch(productsListActions.fetch(categoryUrl)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(ProductsList));
