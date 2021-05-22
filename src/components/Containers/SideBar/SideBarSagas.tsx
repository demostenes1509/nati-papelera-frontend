import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import Actions, { SideBarActions } from './SideBarActions';
import SidebarApi from './SideBarApi';

/* --------------------- Watchers ------------------ */
const watchFetchSidebar = function* () {
  while (true) {
    const params = yield take(SideBarActions.FETCH);
    yield fork(() => defaultFetch(Actions, SidebarApi, params));
  }
};

export default { watchFetchSidebar };
