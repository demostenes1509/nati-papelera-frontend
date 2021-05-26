import { fork, put, take } from 'redux-saga/effects';
import { defaultPost } from '../../../../helpers/SagasUtil';
import Actions, { ProductPictureSaveActions } from './ProductPictureActions';
import ProductPictureApi from './ProductPictureApi';

/* --------------------- Watchers ------------------ */
const watchProductPictureSave = function* () {
  while (true) {
    const { params } = yield take(ProductPictureSaveActions.POST);
    yield fork(() => defaultPost(Actions, ProductPictureApi, params));
  }
};

const watchProductPictureSaveSuccess = function* () {
  while (true) {
    yield take(ProductPictureSaveActions.POST_SUCCESS);
    yield put(Actions.closeDialog(true));
  }
};

export default { watchProductPictureSave, watchProductPictureSaveSuccess };
