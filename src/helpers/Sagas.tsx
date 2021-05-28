import { all, fork } from 'redux-saga/effects';
import FetchAuthentication from '../components/Containers/Authentication/AuthenticationSagas';
import SessionSagas from '../components/Containers/Authentication/SessionSagas';
import PackagingSagas from '../components/Containers/Product/Packaging/PackagingSagas';
import ProductPictureSagas from '../components/Containers/Product/Picture/ProductPictureSagas';
import ProductSagas from '../components/Containers/Product/ProductSagas';
import ProductsListSagas from '../components/Containers/ProductsList/ProductsListSagas';
import FetchSidebar from '../components/Containers/SideBar/SideBarSagas';
import ProviderSagas from '../components/Containers/Admin/Providers/ProviderSagas';
import CategorySagas from '../components/Containers/Admin/Category/CategorySagas';

export default function* rootSaga() {
  yield all([
    fork(FetchSidebar.watchFetchSidebar),
    fork(FetchAuthentication.watchFetchAuthorization),
    fork(SessionSagas.watchSuccessfulLogin),
    fork(SessionSagas.watchLogout),
    fork(ProductsListSagas.watchFetchProductsList),
    fork(ProductSagas.watchProductGet),
    fork(ProductSagas.watchProductGetSuccess),
    fork(ProductSagas.watchProductSave),
    fork(ProductSagas.watchProductUpdate),
    fork(PackagingSagas.watchPackagingUpdate),
    fork(PackagingSagas.watchPackagingPost),
    fork(ProductPictureSagas.watchProductPictureSave),
    fork(ProductPictureSagas.watchProductPictureSaveSuccess),
    fork(ProviderSagas.watchProviderUpload),
    fork(ProviderSagas.watchProviderGetAll),
    fork(CategorySagas.watchCategoryGetAll),
  ]);
}
