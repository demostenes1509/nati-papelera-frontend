import { fork, take } from 'redux-saga/effects';
import { defaultPut } from '../../../../../helpers/SagasUtil';
import Actions, { PackagingUpdateActions } from './PackagingActions';
import PackagingUpdateApi from './PackagingApi';

/* --------------------- Watchers ------------------ */
const watchPackagingUpdate = function* () {
  while (true) {
    const { params } = yield take(PackagingUpdateActions.PUT);
    yield fork(() => defaultPut(Actions, PackagingUpdateApi, params));
  }
};

export default { watchPackagingUpdate };
