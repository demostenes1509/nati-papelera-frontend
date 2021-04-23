export const PackagingUpdateActions = {
  PUT: 'PUT_PACKAGING',
  PUT_WAITING: 'PUT_PACKAGING_WAITING',
  PUT_SUCCESS: 'PUT_PACKAGING_SUCCESS',
  PUT_ERROR: 'PUT_PACKAGING_ERROR',
};

const put = (id, name, price) => ({ type: PackagingUpdateActions.PUT, params: { id, name, price } });
const putWaiting = () => ({ type: PackagingUpdateActions.PUT_WAITING });
const putSuccess = (response) => ({ type: PackagingUpdateActions.PUT_SUCCESS, response });
const putError = (error) => ({ type: PackagingUpdateActions.PUT_ERROR, error });

export default {
  put,
  putWaiting,
  putSuccess,
  putError,
};
