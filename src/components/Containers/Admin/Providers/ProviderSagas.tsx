import { fork, take } from 'redux-saga/effects';
import { defaultPost, defaultFetch } from '../../../../helpers/SagasUtil';
import Actions, { ProviderGetAllActions, ProviderUploadActions } from './ProviderActions';
import ProviderApi from './ProviderApi';

/* --------------------- Watchers ------------------ */
const watchProviderUpload = function* () {
  while (true) {
    const { params } = yield take(ProviderUploadActions.POST);
    yield fork(() => defaultPost(Actions, ProviderApi, params));
  }
};

const watchProviderGetAll = function* () {
  while (true) {
    yield take(ProviderGetAllActions.FETCH);
    yield fork(() => defaultFetch(Actions, ProviderApi));
  }
};

export default { watchProviderUpload, watchProviderGetAll };
