export const ConfigurationGetActions = {
  FETCH: 'FETCH_CONFIGURATION',
  FETCH_LOADING: 'FETCH_CONFIGURATION_WAITING',
  FETCH_SUCCESS: 'FETCH_CONFIGURATION_SUCCESS',
  FETCH_ERROR: 'FETCH_CONFIGURATIONS_ERROR',
};

const fetch = () => ({ type: ConfigurationGetActions.FETCH });
const fetchLoading = () => ({ type: ConfigurationGetActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ConfigurationGetActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ConfigurationGetActions.FETCH_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
