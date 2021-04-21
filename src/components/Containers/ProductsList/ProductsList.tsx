import React, { Component } from 'react';
import productImg1 from '../../../images/product-img1.jpg';
import productImg2 from '../../../images/product-img2.jpg';
import productImg3 from '../../../images/product-img3.jpg';
import productImg4 from '../../../images/product-img4.jpg';
import productImg5 from '../../../images/product-img5.jpg';
import productImg6 from '../../../images/product-img6.jpg';
import productImg7 from '../../../images/product-img7.jpg';
import productImg8 from '../../../images/product-img8.jpg';
import productImg9 from '../../../images/product-img9.jpg';
import { connect } from 'react-redux';
import { withRouterWrapper } from '../../../helpers/UIUtil';
import { IProduct } from '../../../interfaces/interfaces';
import productListActions from './ProductsListActions';

interface IStateProps {
  payload: {
    categoryName: string;
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
    const { categoryName, products } = this.props.payload;
    console.log(products);

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
                  <a href={`/${product.url}`}>{product.name}</a>
                </h3>
                <p className="main-product-description">
                  <a href="#">Descripcion</a>
                </p>

                <div className="product-prices">
                  {product.packaging.map((pack) => (
                    <p>
                      {pack.name} <span className="price-con">{Math.ceil(pack.price)}.00</span>
                    </p>
                  ))}
                </div>
              </li>
            ))}

            <li>
              <a href="#">
                <img src={productImg1} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Sed ut perspiciatis unde omnis iste</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">1,25€</span> con IVA
                </p>
                <p>1,25€ sin IVA</p>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={productImg2} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Et iusto odio dignissimos ducimus qui blanditiis</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Totam rem aperiam. Esse cillum dolore eu fugiat nulla pariatur. Nihil molestiae consequatur, vel illum
                  qui dolorem eum...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">3,57€</span> con IVA
                </p>
                <p>2,95€ sin IVA</p>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={productImg3} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Corrupti quos dolores et quas</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Eaque ipsa quae ab illo inventore veritatis et quasi. Totam rem aperiam. Nihil molestiae
                  consequatur...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">2,64€</span> con IVA
                </p>
                <p>2,18€ sin IVA</p>
              </div>
            </li>
          </div>
          <div className="clear-fix">
            <li>
              <a href="#">
                <img src={productImg4} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Quia consequuntur magni dolores eos</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Ut enim ad minim veniam,
                  quis nostrud exercitation...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">1,05€</span> con IVA
                </p>
                <p>0,86€ sin IVA</p>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={productImg5} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">At vero eos et accusamus</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">3,27€</span> con IVA
                </p>
                <p>2,70€ sin IVA</p>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={productImg6} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Esse cillum dolore eu fugiat nulla</a>
              </h3>
              <p className="main-product-description">
                <a href="#">Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo...</a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">58,56€</span> con IVA
                </p>
                <p>48,40€ sin IVA</p>
              </div>
            </li>
          </div>
          <div className="clear-fix">
            <li>
              <a href="#">
                <img src={productImg7} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Laboris nisi ut aliquip ex ea commodo</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Totam rem aperiam. Itaque earum rerum hic tenetur a sapiente delectus. At vero eos et accusamus...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">78,17€</span> con IVA
                </p>
                <p>64,60€ sin IVA</p>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={productImg8} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Quia consequuntur magni dolores</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Totam rem aperiam.
                  Architecto beatae vitae dicta...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">1,37€</span> con IVA
                </p>
                <p>1,13€ sin IVA</p>
              </div>
            </li>
            <li>
              <a href="#">
                <img src={productImg9} alt="" />
              </a>
              <h3 className="main-product-title">
                <a href="#">Neque porro quisquam est</a>
              </h3>
              <p className="main-product-description">
                <a href="#">
                  Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                  repellat...
                </a>
              </p>
              <div className="product-prices">
                <p>
                  <span className="price-con">1,27€</span> con IVA
                </p>
                <p>1,05€ sin IVA</p>
              </div>
            </li>
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
  fetch: (categoryUrl) => dispatch(productListActions.fetch(categoryUrl)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(ProductsList));
