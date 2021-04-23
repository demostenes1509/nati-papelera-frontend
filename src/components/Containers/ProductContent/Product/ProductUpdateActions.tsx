export const ProductUpdateActions = {
  POST: 'PRODUCT',
  POST_WAITING: 'PRODUCT_WAITING',
  POST_SUCCESS: 'PRODUCT_SUCCESS',
  POST_ERROR: 'PRODUCT_ERROR',
};

const post = (id, name, description) => ({ type: ProductUpdateActions.POST, params: { id, name, description } });
const postWaiting = () => ({ type: ProductUpdateActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProductUpdateActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProductUpdateActions.POST_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
};
