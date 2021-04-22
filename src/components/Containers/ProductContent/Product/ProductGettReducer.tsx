import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ProductGetActions } from './ProductGetActions';

const initialState = {
  loading: false,
  payload: { name: null, description: null, packaging: [] },
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, ProductGetActions);
};
