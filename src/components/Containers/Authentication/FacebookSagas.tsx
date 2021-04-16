import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import Actions, { FacebookActions } from './FacebookActions';
import FacebookApi from './FacebookApi';

/* --------------------- Watchers ------------------ */
const watchFetchFacebook = function* () {
  while (true) {
    const { data } = yield take(FacebookActions.FETCH);
    yield fork(() => defaultFetch(Actions, FacebookApi, data));
  }
};

export default { watchFetchFacebook };
