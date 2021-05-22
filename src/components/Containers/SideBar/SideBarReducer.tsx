import ReducersUtil from '../../../helpers/ReducersUtil';
import { SideBarActions } from './SideBarActions';

const initialState = {
  loading: false,
  payload: { url: null, categories: [], offers: [] },
  error: null,
};

const fetchState = (state, action) => {
  const fetchState = ReducersUtil.defaultFetch(initialState, state, action, SideBarActions);
  return selectState(fetchState, action);
};

const selectState = (state, action) => {
  const {
    payload: { url: urlpayload, categories },
    loading,
    error,
  } = state;

  const url = urlpayload ? urlpayload : action.url;
  for (const category of categories) {
    category.selected = `/${category.url}` === url;
    if (category.selected) {
      category.expanded = !category.expanded;
    } else {
      category.expanded = false;
    }
    for (const product of category.products) {
      product.selected = `/${category.url}/${product.url}` === url;
      if (product.selected) {
        category.expanded = true;
      }
    }
  }
  return { payload: { categories }, loading, error };
};

const get = (state = initialState, action) => {
  switch (action.type) {
    case SideBarActions.FETCH:
    case SideBarActions.FETCH_SUCCESS:
    case SideBarActions.FETCH_ERROR:
      return fetchState(state, action);
    case SideBarActions.SELECT:
      return selectState(state, action);
    default:
      return state;
  }
};

export default {
  get,
};
