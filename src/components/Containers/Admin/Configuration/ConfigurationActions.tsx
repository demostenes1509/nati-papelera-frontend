export const ConfigurationGetActions = {
  FETCH: 'FETCH_CONFIGURATION',
  FETCH_LOADING: 'FETCH_CONFIGURATION_WAITING',
  FETCH_SUCCESS: 'FETCH_CONFIGURATION_SUCCESS',
  FETCH_ERROR: 'FETCH_CONFIGURATIONS_ERROR',
};

export const ConfigurationPutActions = {
  PUT: 'PUT_CONFIGURATION',
  PUT_WAITING: 'PUT_CONFIGURATION_WAITING',
  PUT_SUCCESS: 'PUT_CONFIGURATION_SUCCESS',
  PUT_ERROR: 'PUT_CONFIGURATION_ERROR',
};

const fetch = () => ({ type: ConfigurationGetActions.FETCH });
const fetchLoading = () => ({ type: ConfigurationGetActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ConfigurationGetActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ConfigurationGetActions.FETCH_ERROR, error });

const put = (id, mlCommissionPercentage, mlGainPercentage) => ({
  type: ConfigurationPutActions.PUT,
  body: { id, mlCommissionPercentage, mlGainPercentage },
});
//'e3281d9c-9e30-4bbc-a2b4-d26c4341decf'
const putWaiting = () => ({ type: ConfigurationPutActions.PUT_WAITING });
const putSuccess = (response) => ({ type: ConfigurationPutActions.PUT_SUCCESS, response });
const putError = (error) => ({ type: ConfigurationPutActions.PUT_ERROR, error });

export default {
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
  put,
  putWaiting,
  putSuccess,
  putError,
};
