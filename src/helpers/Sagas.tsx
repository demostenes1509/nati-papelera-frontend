import { all, fork } from 'redux-saga/effects';
import FetchSidebar from '../components/Containers/SideBar/SideBarSagas';
import FetchFacebook from '../components/Containers/Authentication/FacebookSagas';

export default function* rootSaga() {
  yield all([fork(FetchSidebar.watchFetchSidebar), fork(FetchFacebook.watchFetchFacebook)]);
}
