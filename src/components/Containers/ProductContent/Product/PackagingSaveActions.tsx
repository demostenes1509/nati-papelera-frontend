export const PackagingSaveActions = {
  POST: 'PACKAGING',
  POST_WAITING: 'PACKAGING_WAITING',
  POST_SUCCESS: 'PACKAGING_SUCCESS',
  POST_ERROR: 'PACKAGING_ERROR',
};

const post = (id, name, price) => ({ type: PackagingSaveActions.POST, params: { id, name, price } });
const postWaiting = () => ({ type: PackagingSaveActions.POST_WAITING });
const postSuccess = (response) => ({ type: PackagingSaveActions.POST_SUCCESS, response });
const postError = (error) => ({ type: PackagingSaveActions.POST_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
};
