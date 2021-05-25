import ReducersUtil from '../../../../helpers/ReducersUtil';
import { PackagingUpdateActions, PackagingPublishActions } from './PackagingActions';

const initialPutState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

const initialPublishState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

const put = (state = initialPutState, action) => {
  return ReducersUtil.defaultPut(initialPutState, state, action, PackagingUpdateActions);
};

const post = (state = initialPublishState, action) => {
  return ReducersUtil.defaultPost(initialPublishState, state, action, PackagingPublishActions);
};

export default {
  put,
  post,
};
