import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import ProductsListReducer from '../components/Containers/ProductsList/ProductsListReducer';
import ProvidersReducer from '../components/Containers/SideBar/ProvidersReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';
import ProductGetReducer from '../components/Containers/ProductContent/Product/ProductGettReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer,
  providersReducer: ProvidersReducer,
  authenticationReducer: AuthenticationReducer,
  sessionReducer: SessionReducer,
  productsListReducer: ProductsListReducer,
  productGetReducer: ProductGetReducer,
});

export default rootReducers;
