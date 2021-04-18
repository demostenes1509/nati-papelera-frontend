import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import Actions, { AuthenticationActions } from './AuthenticationActions';
import FacebookApi from './AuthenticationApi';

/* --------------------- Watchers ------------------ */
const watchFetchAuthorization = function* () {
  while (true) {
    const { data } = yield take(AuthenticationActions.FETCH);
    yield fork(() => defaultFetch(Actions, FacebookApi, data));
  }
};

export default { watchFetchAuthorization };
