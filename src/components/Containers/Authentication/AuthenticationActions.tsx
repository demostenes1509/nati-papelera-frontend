export const AuthenticationActions = {
  FETCH: 'PROVIDER_LOGIN',
  FETCH_LOADING: 'PROVIDER_LOGIN_LOADING',
  FETCH_SUCCESS: 'PROVIDER_LOGIN_SUCCESS',
  FETCH_ERROR: 'PROVIDER_LOGIN_ERROR',
};

const fetch = (provider, params) => ({ type: AuthenticationActions.FETCH, data: { provider, params } });
const fetchLoading = () => ({ type: AuthenticationActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: AuthenticationActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: AuthenticationActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
