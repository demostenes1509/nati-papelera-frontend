import { all, fork } from 'redux-saga/effects';
import FetchSidebar from '../components/Containers/SideBar/SideBarSagas';

export default function* rootSaga() {
  yield all([fork(FetchSidebar.watchFetchSidebar)]);
}
