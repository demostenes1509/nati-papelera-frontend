import ReducersUtil from '../../../helpers/ReducersUtil';
import { FacebookActions } from './FacebookActions';

const initialState = {
  loading: false,
  payload: { accessToken: null },
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, FacebookActions);
};
