export const ProductsListActions = {
  FETCH: 'FETCH_PRODUCTS_LIST',
  FETCH_LOADING: 'FETCH_PRODUCTS_LIST_LOADING',
  FETCH_SUCCESS: 'FETCH_PRODUCTS_LIST_SUCCESS',
  FETCH_ERROR: 'FETCH_PRODUCTS_LIST_ERROR',
};

const fetch = (params) => ({ type: ProductsListActions.FETCH, params });
const fetchLoading = () => ({ type: ProductsListActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ProductsListActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ProductsListActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
