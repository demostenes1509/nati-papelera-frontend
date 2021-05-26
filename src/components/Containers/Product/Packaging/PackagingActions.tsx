export const PackagingUpdateActions = {
  PUT: 'PUT_PACKAGING',
  PUT_WAITING: 'PUT_PACKAGING_WAITING',
  PUT_SUCCESS: 'PUT_PACKAGING_SUCCESS',
  PUT_ERROR: 'PUT_PACKAGING_ERROR',
};

export const PackagingPublishActions = {
  POST: 'POST_PUBLISH',
  POST_WAITING: 'POST_PUBLISH_WAITING',
  POST_SUCCESS: 'POST_PUBLISH_SUCCESS',
  POST_ERROR: 'POST_PUBLISH_ERROR',
};

const put = (id, name, price) => ({ type: PackagingUpdateActions.PUT, params: { id, name, price } });
const putWaiting = () => ({ type: PackagingUpdateActions.PUT_WAITING });
const putSuccess = (response) => ({ type: PackagingUpdateActions.PUT_SUCCESS, response });
const putError = (error) => ({ type: PackagingUpdateActions.PUT_ERROR, error });

const post = (id) => ({ type: PackagingPublishActions.POST, params: { id } });
const postWaiting = () => ({ type: PackagingPublishActions.POST_WAITING });
const postSuccess = (response) => ({ type: PackagingPublishActions.POST_SUCCESS, response });
const postError = (error) => ({ type: PackagingPublishActions.POST_ERROR, error });

export default {
  put,
  putWaiting,
  putSuccess,
  putError,
  post,
  postWaiting,
  postSuccess,
  postError,
};
