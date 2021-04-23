import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sidebarActions from './SideBarActions';
import deliveryVan from '../../../images/delivery-van.png';
import deliveryVan2 from '../../../images/delivery-van2.png';
import { ICategory, IProvider } from '../../../interfaces/interfaces';
import { withRouterWrapper } from '../../../helpers/UIUtil';

interface IStateProps {
  sidebarPayload: {
    categories: Array<ICategory>;
  };
  providersPayload: {
    providers: Array<IProvider>;
  };
  isAdmin: boolean;
}

interface IPathProps {
  fetch(): string;
  select(id: string): string;
}

const SideBar = ({
  isAdmin,
  sidebarPayload: { categories },
  providersPayload: { providers },
  fetch,
  select,
}: IStateProps & IPathProps) => {
  useEffect(() => {
    fetch();
  }, []);

  const handleClick = (id: string) => {
    select(id);
  };

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
                onClick={() => handleClick(category.id)}
                className={category.selected ? 'aside-active' : ''}
              >
                {category.name}
              </Link>
              <ul className="aside-sub-menu">
                {category.products.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/${category.url}/${product.url}`}
                      onClick={() => handleClick(product.id)}
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

      <Providers isAdmin={isAdmin} providers={providers} />
    </aside>
  );
};

const Providers = (props) => {
  const { isAdmin, providers } = props;
  if (isAdmin) {
    return (
      <section className="category-aside">
        <h2 className="aside-title">Proveedores</h2>
        <ul className="aside-menu">
          {providers.map((provider) => (
            <li key={provider.id}>
              <Link to={`/providers/${provider.url}`}>{provider.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state): IStateProps => {
  return {
    sidebarPayload: state.sidebarReducer.payload,
    isAdmin: state.sessionReducer.isAdmin,
    providersPayload: state.providersReducer.payload,
  };
};

const mapDispatchToProps = (dispatch): IPathProps => ({
  fetch: () => dispatch(sidebarActions.fetch()),
  select: (id) => dispatch(sidebarActions.select(id)),
});

export default withRouterWrapper(connect(mapStateToProps, mapDispatchToProps)(SideBar));
