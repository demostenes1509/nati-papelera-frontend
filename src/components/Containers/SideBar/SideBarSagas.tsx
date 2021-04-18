import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import Actions, { SidebarActions } from './SideBarActions';
import SidebarApi from './SideBarApi';

/* --------------------- Watchers ------------------ */
const watchFetchSidebar = function* () {
  while (true) {
    yield take(SidebarActions.FETCH);
    yield fork(() => defaultFetch(Actions, SidebarApi));
  }
};

export default { watchFetchSidebar };
