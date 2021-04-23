import { fork, take } from 'redux-saga/effects';
import { defaultFetch, defaultPost, defaultPut } from '../../../../helpers/SagasUtil';
import Actions, { ProductGetActions, ProductUpdateActions, ProductSaveActions } from './ProductActions';
import ProductApi from './ProductApi';

/* --------------------- Watchers ------------------ */
const watchProductGet = function* () {
  while (true) {
    const { params } = yield take(ProductGetActions.FETCH);
    yield fork(() => defaultFetch(Actions, ProductApi, params));
  }
};

const watchProductUpdate = function* () {
  while (true) {
    const { params } = yield take(ProductUpdateActions.PUT);
    yield fork(() => defaultPut(Actions, ProductApi, params));
  }
};

const watchProductSave = function* () {
  while (true) {
    const { params } = yield take(ProductSaveActions.POST);
    yield fork(() => defaultPost(Actions, ProductApi, params));
  }
};

export default { watchProductGet, watchProductUpdate, watchProductSave };
