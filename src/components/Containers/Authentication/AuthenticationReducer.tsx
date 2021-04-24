import ReducersUtil from '../../../helpers/ReducersUtil';
import { AuthenticationActions } from './AuthenticationActions';

const initialState = {
  loading: false,
  payload: { accessToken: null },
  error: null,
};

const get = (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, AuthenticationActions);
};

export default {
  get,
};
