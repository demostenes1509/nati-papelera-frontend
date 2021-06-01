import { fork, take } from 'redux-saga/effects';
import { defaultFetch, defaultPost } from '../../../../helpers/SagasUtil';
import Actions, {
  MercadoLibreCategoriesGetAllActions,
  MercadoLibreCategoriesUploadActions,
} from './MercadoLibreCategoryActions';
import MercadoLibreCategoriesApi from './MercadoLibreCategoryApi';

/* --------------------- Watchers ------------------ */

const watchMercadoLibreCategoryGetAll = function* () {
  while (true) {
    yield take(MercadoLibreCategoriesGetAllActions.FETCH);
    yield fork(() => defaultFetch(Actions, MercadoLibreCategoriesApi));
  }
};

const watchMercadoLibreCategoryUpload = function* () {
  while (true) {
    console.log('BEFORE SAGA');
    const { params } = yield take(MercadoLibreCategoriesUploadActions.POST);
    console.log('AFTER SAGA with');
    console.log(params);
    yield fork(() => defaultPost(Actions, MercadoLibreCategoriesApi, params));
  }
};

export default { watchMercadoLibreCategoryGetAll, watchMercadoLibreCategoryUpload };
