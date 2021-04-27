import ReducersUtil from '../../../../../helpers/ReducersUtil';
import { ProductPictureSaveActions } from './ProductPictureActions';

const initialPostState = {
  waiting: false,
  response: { id: null },
  request: null,
  error: null,
};

const post = (state = initialPostState, action) => {
  return ReducersUtil.defaultPost(initialPostState, state, action, ProductPictureSaveActions);
};

export default {
  post,
};
