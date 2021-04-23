import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ProductGetActions, ProductUpdateActions, ProductSaveActions } from './ProductActions';

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

const initialPutState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

const fetch = (state = initialFetchState, action) => {
  return ReducersUtil.defaultFetch(initialFetchState, state, action, ProductGetActions);
};

const put = (state = initialPutState, action) => {
  return ReducersUtil.defaultPut(initialPostState, state, action, ProductUpdateActions);
};

const post = (state = initialPostState, action) => {
  return ReducersUtil.defaultPost(initialPostState, state, action, ProductSaveActions);
};

export default {
  fetch,
  post,
  put,
};
