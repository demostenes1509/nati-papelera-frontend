export const ProductPictureSaveActions = {
  POST: 'POST_PRODUCT_PICTURE',
  POST_WAITING: 'POST_PRODUCT_PICTURE_WAITING',
  POST_SUCCESS: 'POST_PRODUCT_PICTURE_SUCCESS',
  POST_ERROR: 'POST_PRODUCT_PICTURE_ERROR',
};

export const ProductPictureDialogActions = {
  OPEN_DIALOG: 'OPEN_DIALOG_PRODUCT_PICTURE',
  CLOSE_DIALOG: 'CLOSE_DIALOG_PRODUCT_PICTURE',
};

const post = (productId: string, file: File) => ({ type: ProductPictureSaveActions.POST, params: { productId, file } });
const postWaiting = () => ({ type: ProductPictureSaveActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProductPictureSaveActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProductPictureSaveActions.POST_ERROR, error });

const openDialog = (productId: string) => ({ type: ProductPictureDialogActions.OPEN_DIALOG, productId });
const closeDialog = (refreshPage: boolean) => ({ type: ProductPictureDialogActions.CLOSE_DIALOG, refreshPage });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
  openDialog,
  closeDialog,
};
