import ReducersUtil from '../../../../helpers/ReducersUtil';
import { PackagingSaveActions } from './PackagingSaveActions';

const initialState = {
  waiting: false,
  response: null,
  request: null,
  error: null,
};

export default (state = initialState, action) => {
  return ReducersUtil.defaultPost(initialState, state, action, PackagingSaveActions);
};
