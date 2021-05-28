export const CategoriesGetAllActions = {
  FETCH: 'FETCH_CATEGORIES',
  FETCH_LOADING: 'FETCH_CATEGORIES_WAITING',
  FETCH_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
  FETCH_ERROR: 'FETCH_CATEGORIES_ERROR',
};

const fetch = () => ({ type: CategoriesGetAllActions.FETCH });
const fetchLoading = () => ({ type: CategoriesGetAllActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: CategoriesGetAllActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: CategoriesGetAllActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
