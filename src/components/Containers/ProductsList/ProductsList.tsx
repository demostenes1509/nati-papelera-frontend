import React, { Component } from 'react';
import productImg1 from '../../../images/product-img1.jpg';
import { connect } from 'react-redux';
import { withRouterWrapper } from '../../../helpers/UIUtil';
import { IProduct } from '../../../interfaces/interfaces';
import productsListActions from './ProductsListActions';

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

interface IProps {
  location: {
    pathname: string;
  };
}

class ProductsList extends Component<IPathProps & IStateProps & IProps> {
  render() {
    const { categoryName, categoryUrl, products } = this.props.payload;

    return (
      <div className="main-products">
        <h2 className="main-title">{categoryName}</h2>
        <ul className="main-products-list clear-fix">
          <div className="clear-fix">
            {products.map((product) => (
              <li key={product.id}>
                <a href="#">
                  <img src={productImg1} alt="" />
                </a>
                <h3 className="main-product-title">
                  <a href={`/${categoryUrl}/${product.url}`}>{product.name}</a>
                </h3>
                <p className="main-product-description">
                  <a href={`/${categoryUrl}/${product.url}`}>{product.description}</a>
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
    payload: state.productsListReducer.payload,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: (categoryUrl) => dispatch(productsListActions.fetch(categoryUrl)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(ProductsList));
