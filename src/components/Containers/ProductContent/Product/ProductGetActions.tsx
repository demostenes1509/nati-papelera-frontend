export const ProductGetActions = {
  FETCH: 'FETCH_PRODUCT_GET',
  FETCH_LOADING: 'FETCH_PRODUCT_GET_LOADING',
  FETCH_SUCCESS: 'FETCH_PRODUCT_GET_SUCCESS',
  FETCH_ERROR: 'FETCH_PRODUCT_GET_ERROR',
};

const fetch = (params) => ({ type: ProductGetActions.FETCH, params });
const fetchLoading = () => ({ type: ProductGetActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ProductGetActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ProductGetActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
