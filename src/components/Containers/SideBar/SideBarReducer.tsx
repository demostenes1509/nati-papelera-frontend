import ReducersUtil from '../../../helpers/ReducersUtil';
import { SidebarActions } from './SideBarActions';

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
  } = ReducersUtil.defaultFetch(initialState, state, action, SidebarActions);
  for (const category of categories) {
    category.selected = false;
    for (const product of category.products) {
      product.selected = false;
    }
  }
  return { payload: { categories }, loading, error };
};

const hastoChange = (element, id) => {
  return (element.id === id && element.selected === false) || (element.id !== id && element.selected === true);
};

const selectState = (state, action) => {
  const {
    payload: { categories: originalCategories },
    loading,
    error,
  } = state;

  const categories = originalCategories
    .map((c) => {
      if (hastoChange(c, action.id)) {
        return {
          ...c,
          selected: !c.selected,
        };
      }
      return c;
    })
    .map((c) => {
      const products = c.products.map((p) => {
        if (hastoChange(p, action.id)) {
          return { ...p, selected: !p.selected };
        }
        return p;
      });
      return { ...c, products };
    });

  return { payload: { categories }, loading, error };
};

const SideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SidebarActions.FETCH:
    case SidebarActions.FETCH_SUCCESS:
    case SidebarActions.FETCH_ERROR:
      return fetchState(state, action);
    case SidebarActions.SELECT:
      return selectState(state, action);
    default:
      return state;
  }
};

export default SideBarReducer;
