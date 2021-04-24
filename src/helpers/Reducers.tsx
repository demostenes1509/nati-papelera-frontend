import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import ProductsListReducer from '../components/Containers/ProductsList/ProductsListReducer';
import ProvidersReducer from '../components/Containers/SideBar/ProvidersReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';
import PackagingReducer from '../components/Containers/ProductContent/Product/PackagingReducer';
import ProductReducer from '../components/Containers/ProductContent/Product/ProductReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer.get,
  providersReducer: ProvidersReducer.get,
  authenticationReducer: AuthenticationReducer.get,
  sessionReducer: SessionReducer.login,
  productsListReducer: ProductsListReducer.get,
  productGetReducer: ProductReducer.fetch,
  packagingUpdateReducer: PackagingReducer.put,
  productUpdateReducer: ProductReducer.put,
});

export default rootReducers;
