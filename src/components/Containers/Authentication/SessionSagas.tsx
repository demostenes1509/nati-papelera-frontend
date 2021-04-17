import { call, put, take } from 'redux-saga/effects';
import { AuthenticationActions } from './AuthenticationActions';
import * as api from './SessionApi';
import Actions from './SessionActions';

/* --------------------- Watchers ------------------ */
const watchSession = function* () {
  while (true) {
    const {
      payload: { access_token },
    } = yield take(AuthenticationActions.FETCH_SUCCESS);
    console.log('WATCH SESSION DATA:' + JSON.stringify(access_token));
    const tokenInfo = yield call(() => api.userLoggedIn(access_token));
    console.log('WATCH SESSION TOKENINFO:' + JSON.stringify(tokenInfo));
    yield put(Actions.loggedIn(tokenInfo));
  }
};

export default { watchSession };
