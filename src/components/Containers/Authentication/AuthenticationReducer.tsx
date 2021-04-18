import ReducersUtil from '../../../helpers/ReducersUtil';
import { AuthenticationActions } from './AuthenticationActions';

const initialState = {
  loading: false,
  payload: { accessToken: null },
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, AuthenticationActions);
};
