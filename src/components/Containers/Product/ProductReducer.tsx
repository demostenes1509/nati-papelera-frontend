import ReducersUtil from '../../../helpers/ReducersUtil';
import {
  ProductGetActions,
  ProductUpdateActions,
  ProductSaveActions,
  ProductSelectPictureActions,
} from './ProductActions';

const initialFetchState = {
  loading: false,
  payload: { name: '', description: '', packaging: [], pictures: [] },
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

const initialSelectedImageState = {
  selectedPicture: {
    id: null,
  },
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

const selectPicture = (state = initialSelectedImageState, action) => {
  switch (action.type) {
    case ProductSelectPictureActions.SELECT:
      return {
        selectedPicture: action.picture,
      };
    default:
      return state;
  }
};

export default {
  fetch,
  post,
  put,
  selectPicture,
};
