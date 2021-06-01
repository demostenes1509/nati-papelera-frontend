export const MercadoLibreCategoriesGetAllActions = {
  FETCH: 'FETCH_MELI_CATEGORIES',
  FETCH_LOADING: 'FETCH_MELI_CATEGORIES_WAITING',
  FETCH_SUCCESS: 'FETCH_MELI_CATEGORIES_SUCCESS',
  FETCH_ERROR: 'FETCH_MELI_CATEGORIES_ERROR',
};

export const MercadoLibreCategoriesUploadActions = {
  POST: 'UPLOAD_MERCADO_LIBRE_CATEGORIES_FILE',
  POST_WAITING: 'UPLOAD_MERCADO_LIBRE_CATEGORIES_FILE_WAITING',
  POST_SUCCESS: 'UPLOAD_MERCADO_LIBRE_CATEGORIES_FILE_SUCCESS',
  POST_ERROR: 'UPLOAD_MERCADO_LIBRE_CATEGORIES_FILE_ERROR',
};

const fetch = () => ({ type: MercadoLibreCategoriesGetAllActions.FETCH });
const fetchLoading = () => ({ type: MercadoLibreCategoriesGetAllActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: MercadoLibreCategoriesGetAllActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: MercadoLibreCategoriesGetAllActions.FETCH_ERROR, error });

const post = (file: File) => ({
  type: MercadoLibreCategoriesUploadActions.POST,
  params: { file },
});
const postWaiting = () => ({ type: MercadoLibreCategoriesUploadActions.POST_WAITING });
const postSuccess = (response) => ({ type: MercadoLibreCategoriesUploadActions.POST_SUCCESS, response });
const postError = (error) => ({ type: MercadoLibreCategoriesUploadActions.POST_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
  post,
  postWaiting,
  postSuccess,
  postError,
};
