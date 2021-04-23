import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ProductUpdateActions } from './ProductUpdateActions';

const initialState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultPost(initialState, state, action, ProductUpdateActions);
};
