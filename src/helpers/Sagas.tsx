import { all, fork } from 'redux-saga/effects';
import FetchProviders from '../components/Containers/SideBar/ProviderSagas';
import FetchSidebar from '../components/Containers/SideBar/SideBarSagas';
import FetchAuthentication from '../components/Containers/Authentication/AuthenticationSagas';
import SessionSagas from '../components/Containers/Authentication/SessionSagas';
import ProductsListSagas from '../components/Containers/ProductsList/ProductsListSagas';
import PackagingUpdateSagas from '../components/Containers/ProductContent/Product/PackagingUpdateSagas';
import ProductSagas from '../components/Containers/ProductContent/Product/ProductSagas';

export default function* rootSaga() {
  yield all([
    fork(FetchSidebar.watchFetchSidebar),
    fork(FetchProviders.watchFetchProviders),
    fork(FetchAuthentication.watchFetchAuthorization),
    fork(SessionSagas.watchSuccessfulLogin),
    fork(SessionSagas.watchLogout),
    fork(ProductsListSagas.watchFetchProductsList),
    fork(ProductSagas.watchProductGet),
    fork(ProductSagas.watchProductSave),
    fork(ProductSagas.watchProductUpdate),
    fork(PackagingUpdateSagas.watchPostPackagingUpdate),
  ]);
}
