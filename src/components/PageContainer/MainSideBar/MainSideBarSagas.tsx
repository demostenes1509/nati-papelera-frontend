import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import SidebarFetchActions, { SidebarTypes } from './MainSideBarActions';
import SideBarApiFetch from './MainSideBarApi';

/* --------------------- Watchers ------------------ */
const watchFetchSidebar = function* () {
  while (true) {
    yield take(SidebarTypes.FETCH);
    yield fork(() => defaultFetch(SidebarFetchActions, SideBarApiFetch));
  }
};

export default { watchFetchSidebar };
