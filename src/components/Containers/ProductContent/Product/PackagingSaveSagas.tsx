import { fork, take } from 'redux-saga/effects';
import { defaultPost } from '../../../../helpers/SagasUtil';
import Actions, { PackagingSaveActions } from './PackagingSaveActions';
import PackagingSaveApi from './PackagingSaveApi';

/* --------------------- Watchers ------------------ */
const watchPostPackagingSave = function* () {
  while (true) {
    const { params } = yield take(PackagingSaveActions.POST);
    yield fork(() => defaultPost(Actions, PackagingSaveApi, params));
  }
};

export default { watchPostPackagingSave };
