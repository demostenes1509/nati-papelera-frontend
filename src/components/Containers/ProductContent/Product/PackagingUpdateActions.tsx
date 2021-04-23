export const PackagingUpdateActions = {
  POST: 'PACKAGING',
  POST_WAITING: 'PACKAGING_WAITING',
  POST_SUCCESS: 'PACKAGING_SUCCESS',
  POST_ERROR: 'PACKAGING_ERROR',
};

const post = (id, name, price) => ({ type: PackagingUpdateActions.POST, params: { id, name, price } });
const postWaiting = () => ({ type: PackagingUpdateActions.POST_WAITING });
const postSuccess = (response) => ({ type: PackagingUpdateActions.POST_SUCCESS, response });
const postError = (error) => ({ type: PackagingUpdateActions.POST_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
};
