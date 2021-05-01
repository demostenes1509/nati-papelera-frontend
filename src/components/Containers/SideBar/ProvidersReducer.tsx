import ReducersUtil from '../../../helpers/ReducersUtil';
import { ProvidersActions } from './ProvidersActions';

const initialState = {
  loading: false,
  payload: { providers: [] },
  error: null,
};

const get = (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, ProvidersActions);
};

export default {
  get,
};
