import ReducersUtil from '../../../../../helpers/ReducersUtil';
import { PackagingUpdateActions } from './PackagingActions';

const initialPutState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

const put = (state = initialPutState, action) => {
  return ReducersUtil.defaultPut(initialPutState, state, action, PackagingUpdateActions);
};

export default {
  put,
};
