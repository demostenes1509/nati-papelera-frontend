import { fork, take } from 'redux-saga/effects';
import { defaultPost } from '../../../../helpers/SagasUtil';
import Actions, { PackagingUpdateActions } from './PackagingUpdateActions';
import PackagingUpdateApi from './PackagingUpdateApi';

/* --------------------- Watchers ------------------ */
const watchPostPackagingUpdate = function* () {
  while (true) {
    const { params } = yield take(PackagingUpdateActions.POST);
    yield fork(() => defaultPost(Actions, PackagingUpdateApi, params));
  }
};

export default { watchPostPackagingUpdate };
