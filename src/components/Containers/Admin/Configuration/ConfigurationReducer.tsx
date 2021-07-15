//import { string } from 'getenv';
import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ConfigurationGetActions, ConfigurationPutActions } from './ConfigurationActions';

const initialGetState = {
  loading: false,
  payload: { configuration: {} },
  error: null,
};

const initialPutState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

const fetch = (state = initialGetState, action) => {
  return ReducersUtil.defaultFetch(initialGetState, state, action, ConfigurationGetActions);
};

const put = (state = initialPutState, action) => {
  return ReducersUtil.defaultPut(initialPutState, state, action, ConfigurationPutActions);
};

export default {
  fetch,
  put,
};
