import { all, fork } from 'redux-saga/effects';
import FetchSidebar from '../components/PageContainer/MainSideBar/MainSideBarSagas';

export default function* rootSaga() {
  yield all([fork(FetchSidebar.watchFetchSidebar)]);
}
