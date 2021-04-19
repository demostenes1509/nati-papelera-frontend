import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import { UserSessionTypes } from '../Authentication/SessionActions';
import Actions from './ProvidersActions';
import ProvidersApi from './ProvidersApi';

/* --------------------- Watchers ------------------ */
const watchFetchProviders = function* () {
  while (true) {
    const {
      payload: { isAdmin },
    } = yield take(UserSessionTypes.LOGGED_IN);
    if (isAdmin) {
      yield fork(() => defaultFetch(Actions, ProvidersApi));
    }
  }
};

export default { watchFetchProviders };
