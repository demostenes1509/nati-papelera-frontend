export const ProductPictureSaveActions = {
  POST: 'POST_PRODUCT_PICTURE',
  POST_WAITING: 'POST_PRODUCT_PICTURE_WAITING',
  POST_SUCCESS: 'POST_PRODUCT_PICTURE_SUCCESS',
  POST_ERROR: 'POST_PRODUCT_PICTURE_ERROR',
};

const post = (productId: string, file: File) => ({ type: ProductPictureSaveActions.POST, params: { productId, file } });
const postWaiting = () => ({ type: ProductPictureSaveActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProductPictureSaveActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProductPictureSaveActions.POST_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
};
