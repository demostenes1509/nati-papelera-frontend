import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ProductGetActions, ProductUpdateActions } from './ProductActions';

const initialFetchState = {
  loading: false,
  payload: { name: null, description: null, packaging: [] },
  error: null,
};

const initialPostState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

const fetch = (state = initialFetchState, action) => {
  return ReducersUtil.defaultFetch(initialFetchState, state, action, ProductGetActions);
};

const post = (state = initialPostState, action) => {
  return ReducersUtil.defaultPost(initialPostState, state, action, ProductUpdateActions);
};

export default {
  fetch,
  post,
};
