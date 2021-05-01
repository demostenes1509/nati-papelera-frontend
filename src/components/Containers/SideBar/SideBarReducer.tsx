import ReducersUtil from '../../../helpers/ReducersUtil';
import { SideBarActions } from './SideBarActions';

const initialState = {
  loading: false,
  payload: { categories: [], offers: [] },
  error: null,
};

const fetchState = (state, action) => {
  const {
    payload: { categories },
    loading,
    error,
  } = ReducersUtil.defaultFetch(initialState, state, action, SideBarActions);
  for (const category of categories) {
    category.selected = false;
    category.expanded = false;
    for (const product of category.products) {
      product.selected = false;
    }
  }
  return { payload: { categories }, loading, error };
};

const selectHasToChange = (element, id) => {
  return (element.id === id && element.selected === false) || (element.id !== id && element.selected === true);
};

const expandHasToChange = (element, id) => {
  return element.id === id;
};

const selectState = (state, action) => {
  const {
    payload: { categories: originalCategories },
    loading,
    error,
  } = state;

  const categories = originalCategories
    .map((c) => {
      const element = { ...c };
      if (selectHasToChange(c, action.id)) {
        element.selected = !element.selected;
      }

      if (expandHasToChange(c, action.id)) {
        element.expanded = !element.expanded;
      }

      return element;
    })
    .map((c) => {
      const products = c.products.map((p) => {
        if (selectHasToChange(p, action.id)) {
          return { ...p, selected: !p.selected };
        }
        return p;
      });
      return { ...c, products };
    });

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
