import { fork, take } from 'redux-saga/effects';
import { defaultPost } from '../../../../../helpers/SagasUtil';
import Actions, { ProductPictureSaveActions } from './ProductPictureActions';
import ProductPictureApi from './ProductPictureApi';

/* --------------------- Watchers ------------------ */
const watchProductPictureSave = function* () {
  while (true) {
    const { params } = yield take(ProductPictureSaveActions.POST);
    yield fork(() => defaultPost(Actions, ProductPictureApi, params));
  }
};

export default { watchProductPictureSave };
