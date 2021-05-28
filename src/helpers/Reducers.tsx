import { combineReducers } from 'redux';
import AuthenticationReducer from '../components/Containers/Authentication/AuthenticationReducer';
import SessionReducer from '../components/Containers/Authentication/SessionReducer';
import PackagingReducer from '../components/Containers/Product/Packaging/PackagingReducer';
import ProductPictureReducer from '../components/Containers/Product/Picture/ProductPictureReducer';
import ProductReducer from '../components/Containers/Product/ProductReducer';
import ProductsListReducer from '../components/Containers/ProductsList/ProductsListReducer';
import SideBarReducer from '../components/Containers/SideBar/SideBarReducer';
import ProviderReducer from '../components/Containers/Admin/Providers/ProviderReducer';
import CategoryReducer from '../components/Containers/Admin/Category/CategoryReducer';

const rootReducers = combineReducers({
  sidebarReducer: SideBarReducer.get,
  authenticationReducer: AuthenticationReducer.get,
  sessionReducer: SessionReducer.login,
  productsListReducer: ProductsListReducer.get,
  productGetReducer: ProductReducer.fetch,
  productUpdateReducer: ProductReducer.put,
  productSelectPictureReducer: ProductReducer.selectPicture,
  packagingUpdateReducer: PackagingReducer.put,
  packagingPublishReducer: PackagingReducer.post,
  productPictureSaveReducer: ProductPictureReducer.post,
  productPictureDialogReducer: ProductPictureReducer.dialog,
  providerUploadReducer: ProviderReducer.upload,
  providerGetAllReducer: ProviderReducer.fetch,
  categoryGetAllReducer: CategoryReducer.fetch,
});

export default rootReducers;
