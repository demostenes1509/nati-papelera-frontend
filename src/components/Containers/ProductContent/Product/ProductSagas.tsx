import { fork, take } from 'redux-saga/effects';
import { defaultFetch, defaultPost } from '../../../../helpers/SagasUtil';
import Actions, { ProductGetActions, ProductUpdateActions } from './ProductActions';
import ProductApi from './ProductApi';

/* --------------------- Watchers ------------------ */
const watchFetchProductGet = function* () {
  while (true) {
    const { params } = yield take(ProductGetActions.FETCH);
    yield fork(() => defaultFetch(Actions, ProductApi, params));
  }
};

const watchPostProductUpdate = function* () {
  while (true) {
    const { params } = yield take(ProductUpdateActions.POST);
    yield fork(() => defaultPost(Actions, ProductApi, params));
  }
};

export default { watchFetchProductGet, watchPostProductUpdate };
