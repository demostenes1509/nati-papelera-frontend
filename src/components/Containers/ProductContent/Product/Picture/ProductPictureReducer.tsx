import ReducersUtil from '../../../../../helpers/ReducersUtil';
import { ProductPictureSaveActions, ProductPictureDialogActions } from './ProductPictureActions';

const initialPostState = {
  waiting: false,
  response: { id: null },
  request: null,
  error: null,
};

const post = (state = initialPostState, action) => {
  return ReducersUtil.defaultPost(initialPostState, state, action, ProductPictureSaveActions);
};

const initialDialogState = {
  isDialogOpen: false,
  productId: null,
  productUrl: null,
  refreshPage: false,
};

const dialog = (state = initialDialogState, action) => {
  switch (action.type) {
    case ProductPictureDialogActions.OPEN_DIALOG:
      return {
        isDialogOpen: true,
        productId: action.productId,
        productUrl: action.productUrl,
        refreshPage: false,
      };
    case ProductPictureDialogActions.CLOSE_DIALOG:
      return {
        isDialogOpen: false,
        productId: null,
        productUrl: action.productUrl,
        refreshPage: action.refreshPage,
      };
    default:
      return state;
  }
};

export default {
  post,
  dialog,
};
