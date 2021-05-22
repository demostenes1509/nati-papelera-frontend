import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouterWrapper } from '../../../helpers/UIUtil';
import deliveryVan from '../../../images/delivery-van.png';
import deliveryVan2 from '../../../images/delivery-van2.png';
import { ICategory, IProvider } from '../../../interfaces/interfaces';
import sidebarActions from './SideBarActions';
import Error from '../Error/Error';
interface IStateProps {
  sidebarPayload: {
    categories: Array<ICategory>;
  };
  providersPayload: {
    providers: Array<IProvider>;
  };
  isAdmin: boolean;
  error: string;
}

interface IPathProps {
  fetch(): string;
  select(id: string): string;
}

const SideBar = ({
  isAdmin,
  error,
  sidebarPayload: { categories },
  providersPayload: { providers },
  fetch,
  select,
}: IStateProps & IPathProps) => {
  useEffect(() => {
    console.log('SE DISPARA USE EFFECT DE SIDEBAR 1');
    fetch();
  }, []);

  useEffect(() => {
    console.log('SE DISPARA USE EFFECT DE SIDEBAR 2');
  }, [location.pathname]);

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
          {error ? <Error error={error} /> : null}
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/${category.url}`}
                onClick={() => handleClick(category.id)}
                className={category.selected ? 'aside-active' : ''}
              >
                {category.name}
              </Link>

              {category.expanded ? (
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
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {isAdmin ? <Providers providers={providers} /> : null}
    </aside>
  );
};

const Providers = (props) => {
  const { providers } = props;
  return (
    <section className="category-aside">
      <h2 className="aside-title">Proveedores</h2>
      <ul className="aside-menu">
        {providers.map((provider) => (
          <li key={provider.id}>
            <span>{provider.name}</span>
            <ul className="aside-sub-menu">
              <li>
                <Link to={`/providers/${provider.url}/fileupload`}>Carga de Precios</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state): IStateProps => {
  return {
    error: state.sidebarReducer.error,
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
