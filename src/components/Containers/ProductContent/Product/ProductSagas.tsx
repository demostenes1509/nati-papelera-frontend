import { fork, put, take } from 'redux-saga/effects';
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

const watchProductGetSuccess = function* () {
  while (true) {
    const {
      payload: { pictures },
    } = yield take(ProductGetActions.FETCH_SUCCESS);
    if (pictures.length > 0) {
      yield put(Actions.selectPicture(pictures[0]));
    } else {
      yield put(Actions.selectPicture({ id: null }));
    }
  }
};

export default { watchProductGet, watchProductUpdate, watchProductSave, watchProductGetSuccess };
