import { all, fork } from 'redux-saga/effects';
import CategorySagas from '../components/Containers/Admin/Category/CategorySagas';
import MercadoLibreCategorySagas from '../components/Containers/Admin/Category/MercadoLibreCategorySagas';
import ProviderSagas from '../components/Containers/Admin/Providers/ProviderSagas';
import FetchAuthentication from '../components/Containers/Authentication/AuthenticationSagas';
import SessionSagas from '../components/Containers/Authentication/SessionSagas';
import PackagingSagas from '../components/Containers/Product/Packaging/PackagingSagas';
import ProductPictureSagas from '../components/Containers/Product/Picture/ProductPictureSagas';
import ProductSagas from '../components/Containers/Product/ProductSagas';
import ProductsListSagas from '../components/Containers/ProductsList/ProductsListSagas';
import FetchSidebar from '../components/Containers/SideBar/SideBarSagas';
import ConfigurationSagas from '../components/Containers/Admin/Configuration/ConfigurationSagas';

export default function* rootSaga() {
  yield all([
    fork(CategorySagas.watchCategoryGetAll),
    fork(FetchSidebar.watchFetchSidebar),
    fork(FetchAuthentication.watchFetchAuthorization),
    fork(MercadoLibreCategorySagas.watchMercadoLibreCategoryGetAll),
    fork(MercadoLibreCategorySagas.watchMercadoLibreCategoryUpload),
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
    fork(ConfigurationSagas.watchConfigurationGet),
    fork(ConfigurationSagas.watchConfigurationPut),
  ]);
}
