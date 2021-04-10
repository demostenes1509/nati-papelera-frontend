import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import SidebarFetchActions, { SidebarTypes } from './SideBarActions';
import SideBarApiFetch from './SideBarApi';

/* --------------------- Watchers ------------------ */
const watchFetchSidebar = function* () {
  while (true) {
    yield take(SidebarTypes.FETCH);
    yield fork(() => defaultFetch(SidebarFetchActions, SideBarApiFetch));
  }
};

export default { watchFetchSidebar };
