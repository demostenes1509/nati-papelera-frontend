import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import PackagingReducer from '../components/Containers/ProductContent/Product/Packaging/PackagingReducer';
import ProductPictureReducer from '../components/Containers/ProductContent/Product/Picture/ProductPictureReducer';
import ProductReducer from '../components/Containers/ProductContent/Product/ProductReducer';
import ProductsListReducer from '../components/Containers/ProductsList/ProductsListReducer';
import ProviderReducer from '../components/Containers/ProviderContent/ProviderReducer';
import ProvidersReducer from '../components/Containers/SideBar/ProvidersReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer.get,
  authenticationReducer: AuthenticationReducer.get,
  sessionReducer: SessionReducer.login,
  productsListReducer: ProductsListReducer.get,
  productGetReducer: ProductReducer.fetch,
  productUpdateReducer: ProductReducer.put,
  productSelectPictureReducer: ProductReducer.selectPicture,
  packagingUpdateReducer: PackagingReducer.put,
  productPictureSaveReducer: ProductPictureReducer.post,
  productPictureDialogReducer: ProductPictureReducer.dialog,
  providersReducer: ProvidersReducer.get,
  providerUploadReducer: ProviderReducer.upload,
});

export default rootReducers;
