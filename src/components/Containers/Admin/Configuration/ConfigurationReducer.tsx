import { string } from 'getenv';
import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ConfigurationGetActions } from './ConfigurationActions';

const initialGetAllState = {
  loading: false,
  payload: { configuration: { id: string } },
  error: null,
};

const fetch = (state = initialGetAllState, action) => {
  return ReducersUtil.defaultFetch(initialGetAllState, state, action, ConfigurationGetActions);
};

const put = (state = initialGetAllState, action) => {
  return ReducersUtil.defaultPut(initialGetAllState, state, action, ConfigurationGetActions);
};

export default {
  fetch,
  put,
};
