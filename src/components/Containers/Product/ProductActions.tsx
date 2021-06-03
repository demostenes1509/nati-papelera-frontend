export const ProductGetActions = {
  FETCH: 'FETCH_PRODUCT_GET',
  FETCH_LOADING: 'FETCH_PRODUCT_GET_LOADING',
  FETCH_SUCCESS: 'FETCH_PRODUCT_GET_SUCCESS',
  FETCH_ERROR: 'FETCH_PRODUCT_GET_ERROR',
};

export const ProductUpdateActions = {
  PUT: 'PUT_PRODUCT',
  PUT_WAITING: 'PUT_PRODUCT_WAITING',
  PUT_SUCCESS: 'PUT_PRODUCT_SUCCESS',
  PUT_ERROR: 'PUT_PRODUCT_ERROR',
};

export const ProductSaveActions = {
  POST: 'POST_PRODUCT',
  POST_WAITING: 'POST_PRODUCT_WAITING',
  POST_SUCCESS: 'POST_PRODUCT_SUCCESS',
  POST_ERROR: 'POST_PRODUCT_ERROR',
};

export const ProductSelectPictureActions = {
  SELECT: 'SELECT_PICTURE',
};

const fetch = (params) => ({ type: ProductGetActions.FETCH, params });
const fetchLoading = () => ({ type: ProductGetActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ProductGetActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ProductGetActions.FETCH_ERROR, error });

const put = (id, name, description, mlCategoryId) => ({
  type: ProductUpdateActions.PUT,
  params: { id, name, description, mlCategoryId },
});
const putWaiting = () => ({ type: ProductUpdateActions.PUT_WAITING });
const putSuccess = (response) => ({ type: ProductUpdateActions.PUT_SUCCESS, response });
const putError = (error) => ({ type: ProductUpdateActions.PUT_ERROR, error });

const post = (id, name, description) => ({ type: ProductSaveActions.POST, params: { id, name, description } });
const postWaiting = () => ({ type: ProductSaveActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProductSaveActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProductSaveActions.POST_ERROR, error });

const selectPicture = (picture) => ({ type: ProductSelectPictureActions.SELECT, picture });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
  post,
  postWaiting,
  postSuccess,
  postError,
  put,
  putWaiting,
  putSuccess,
  putError,
  selectPicture,
};
