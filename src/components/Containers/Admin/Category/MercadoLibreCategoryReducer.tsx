import ReducersUtil from '../../../../helpers/ReducersUtil';
import {
  MercadoLibreCategoriesGetAllActions,
  MercadoLibreCategoriesUploadActions,
} from './MercadoLibreCategoryActions';

const initialGetAllState = {
  loading: false,
  payload: { categories: [] },
  error: null,
};

const fetch = (state = initialGetAllState, action) => {
  return ReducersUtil.defaultFetch(initialGetAllState, state, action, MercadoLibreCategoriesGetAllActions);
};

const initialPostState = {
  waiting: false,
  response: { insertedRecords: 0, updatedRecords: 0 },
  request: null,
  error: null,
};

const upload = (state = initialPostState, action) => {
  console.log('ESTADO DISPARADO');
  console.log(state);
  console.log('ESTADO DISPARADO');
  return ReducersUtil.defaultPost(initialPostState, state, action, MercadoLibreCategoriesUploadActions);
};

export default {
  fetch,
  upload,
};
