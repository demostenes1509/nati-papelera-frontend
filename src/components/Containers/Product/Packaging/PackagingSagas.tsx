import { fork, take } from 'redux-saga/effects';
import { defaultPut, defaultPost } from '../../../../helpers/SagasUtil';
import Actions, { PackagingPublishActions, PackagingUpdateActions } from './PackagingActions';
import PackagingApi from './PackagingApi';

/* --------------------- Watchers ------------------ */
const watchPackagingUpdate = function* () {
  while (true) {
    const { params } = yield take(PackagingUpdateActions.PUT);
    yield fork(() => defaultPut(Actions, PackagingApi, params));
  }
};

const watchPackagingPost = function* () {
  while (true) {
    const { params } = yield take(PackagingPublishActions.POST);
    yield fork(() => defaultPost(Actions, PackagingApi, params));
  }
};

export default { watchPackagingUpdate, watchPackagingPost };
