import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import ProductsListReducer from '../components/Containers/ProductsList/ProductsListReducer';
import ProvidersReducer from '../components/Containers/SideBar/ProvidersReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';
import ProductReducer from '../components/Containers/ProductContent/Product/ProductReducer';
import PackagingReducer from '../components/Containers/ProductContent/Product/Packaging/PackagingReducer';
import ProductPictureReducer from '../components/Containers/ProductContent/Product/Picture/ProductPictureReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer.get,
  providersReducer: ProvidersReducer.get,
  authenticationReducer: AuthenticationReducer.get,
  sessionReducer: SessionReducer.login,
  productsListReducer: ProductsListReducer.get,
  productGetReducer: ProductReducer.fetch,
  packagingUpdateReducer: PackagingReducer.put,
  productUpdateReducer: ProductReducer.put,
  productPictureSaveReducer: ProductPictureReducer.post,
  productPictureDialogReducer: ProductPictureReducer.dialog,
});

export default rootReducers;
