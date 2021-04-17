import { call, put, take } from 'redux-saga/effects';
import { AuthenticationActions } from './AuthenticationActions';
import * as api from './SessionApi';
import SessionActions, { UserSessionTypes } from './SessionActions';

/* --------------------- Watchers ------------------ */
const watchSuccessfulLogin = function* () {
  while (true) {
    const {
      payload: { access_token },
    } = yield take(AuthenticationActions.FETCH_SUCCESS);
    const tokenInfo = yield call(() => api.userLoggedIn(access_token));
    yield put(SessionActions.loggedIn(tokenInfo));
  }
};

const watchLogout = function* () {
  while (true) {
    yield take(UserSessionTypes.NOT_LOGGED_IN);
    yield call(() => api.userLoggedOut());
  }
};

export default { watchSuccessfulLogin, watchLogout };
