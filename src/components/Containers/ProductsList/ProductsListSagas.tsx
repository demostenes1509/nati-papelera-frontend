import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../helpers/SagasUtil';
import Actions, { ProductsListActions } from './ProductsListActions';
import ProductsListApi from './ProductsListApi';

/* --------------------- Watchers ------------------ */
const watchFetchProductsList = function* () {
  while (true) {
    const { params } = yield take(ProductsListActions.FETCH);
    yield fork(() => defaultFetch(Actions, ProductsListApi, params));
  }
};

export default { watchFetchProductsList };
