export const ProductGetActions = {
  FETCH: 'FETCH_PRODUCT_GET',
  FETCH_LOADING: 'FETCH_PRODUCT_GET_LOADING',
  FETCH_SUCCESS: 'FETCH_PRODUCT_GET_SUCCESS',
  FETCH_ERROR: 'FETCH_PRODUCT_GET_ERROR',
};

export const ProductUpdateActions = {
  POST: 'PRODUCT',
  POST_WAITING: 'PRODUCT_WAITING',
  POST_SUCCESS: 'PRODUCT_SUCCESS',
  POST_ERROR: 'PRODUCT_ERROR',
};

const fetch = (params) => ({ type: ProductGetActions.FETCH, params });
const fetchLoading = () => ({ type: ProductGetActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ProductGetActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ProductGetActions.FETCH_ERROR, error });

const post = (id, name, description) => ({ type: ProductUpdateActions.POST, params: { id, name, description } });
const postWaiting = () => ({ type: ProductUpdateActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProductUpdateActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProductUpdateActions.POST_ERROR, error });

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
