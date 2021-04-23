import { fork, take } from 'redux-saga/effects';
import { defaultPost } from '../../../../helpers/SagasUtil';
import Actions, { ProductUpdateActions } from './ProductUpdateActions';
import ProductUpdateApi from './ProductUpdateApi';

/* --------------------- Watchers ------------------ */
const watchPostProductUpdate = function* () {
  while (true) {
    const { params } = yield take(ProductUpdateActions.POST);
    yield fork(() => defaultPost(Actions, ProductUpdateApi, params));
  }
};

export default { watchPostProductUpdate };
