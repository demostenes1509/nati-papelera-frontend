import ReducersUtil from '../../../helpers/ReducersUtil';
import { ProvidersActions } from './ProvidersActions';

const initialState = {
  loading: false,
  payload: { providers: [] },
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, ProvidersActions);
};
