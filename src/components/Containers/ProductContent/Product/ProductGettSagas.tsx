import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../../helpers/SagasUtil';
import Actions, { ProductGetActions } from './ProductGetActions';
import ProductGetApi from './ProductGetApi';

/* --------------------- Watchers ------------------ */
const watchFetchProductGet = function* () {
  while (true) {
    const { params } = yield take(ProductGetActions.FETCH);
    yield fork(() => defaultFetch(Actions, ProductGetApi, params));
  }
};

export default { watchFetchProductGet };
