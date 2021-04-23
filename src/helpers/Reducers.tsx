import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import ProductsListReducer from '../components/Containers/ProductsList/ProductsListReducer';
import ProvidersReducer from '../components/Containers/SideBar/ProvidersReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';
import ProductGetReducer from '../components/Containers/ProductContent/Product/ProductGetReducer';
import PackagingUpdateReducer from '../components/Containers/ProductContent/Product/PackagingUpdateReducer';
import ProductUpdateReducer from '../components/Containers/ProductContent/Product/ProductUpdateReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer,
  providersReducer: ProvidersReducer,
  authenticationReducer: AuthenticationReducer,
  sessionReducer: SessionReducer,
  productsListReducer: ProductsListReducer,
  productGetReducer: ProductGetReducer,
  packagingUpdateReducer: PackagingUpdateReducer,
  productUpdateReducer: ProductUpdateReducer,
});

export default rootReducers;
