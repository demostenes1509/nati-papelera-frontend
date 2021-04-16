export const FacebookActions = {
  FETCH: 'FACEBOOK_LOGIN',
  FETCH_LOADING: 'FACEBOOK_LOGIN_LOADING',
  FETCH_SUCCESS: 'FACEBOOK_LOGIN_SUCCESS',
  FETCH_ERROR: 'FACEBOOK_LOGIN_ERROR',
};

const fetch = (provider, params) => ({ type: FacebookActions.FETCH, data: { provider, params } });
const fetchLoading = () => ({ type: FacebookActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: FacebookActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: FacebookActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
