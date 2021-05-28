import ReducersUtil from '../../../../helpers/ReducersUtil';
import { CategoriesGetAllActions } from './CategoryActions';

const initialGetAllState = {
  loading: false,
  payload: { categories: [] },
  error: null,
};

const fetch = (state = initialGetAllState, action) => {
  return ReducersUtil.defaultFetch(initialGetAllState, state, action, CategoriesGetAllActions);
};

export default {
  fetch,
};
