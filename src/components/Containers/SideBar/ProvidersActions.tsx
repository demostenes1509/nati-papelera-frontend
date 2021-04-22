export const ProvidersActions = {
  FETCH_LOADING: 'FETCH_PROVIDERS_LOADING',
  FETCH_SUCCESS: 'FETCH_PROVIDERS_SUCCESS',
  FETCH_ERROR: 'FETCH_PROVIDERS_ERROR',
};

const fetchLoading = () => ({ type: ProvidersActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ProvidersActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ProvidersActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
