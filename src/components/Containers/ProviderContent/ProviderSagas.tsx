import { fork, take } from 'redux-saga/effects';
import { defaultPost } from '../../../helpers/SagasUtil';
import Actions, { ProviderUploadActions } from './ProviderActions';
import ProviderApi from './ProviderApi';

/* --------------------- Watchers ------------------ */
const watchproviderUpload = function* () {
  while (true) {
    const { params } = yield take(ProviderUploadActions.POST);
    yield fork(() => defaultPost(Actions, ProviderApi, params));
  }
};

export default { watchproviderUpload };
