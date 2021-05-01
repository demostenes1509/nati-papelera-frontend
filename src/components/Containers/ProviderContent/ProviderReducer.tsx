import ReducersUtil from '../../../helpers/ReducersUtil';
import { ProviderUploadActions } from './ProviderActions';

const initialPostState = {
  waiting: false,
  response: { insertedRecords: 0, updatedRecords: 0 },
  request: null,
  error: null,
};

const upload = (state = initialPostState, action) => {
  return ReducersUtil.defaultPost(initialPostState, state, action, ProviderUploadActions);
};

export default {
  upload,
};
