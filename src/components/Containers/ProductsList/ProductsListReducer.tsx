import ReducersUtil from '../../../helpers/ReducersUtil';
import { ProductsListActions } from './ProductsListActions';

const initialState = {
  loading: false,
  payload: { categoryName: null, products: [] },
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultFetch(initialState, state, action, ProductsListActions);
};
