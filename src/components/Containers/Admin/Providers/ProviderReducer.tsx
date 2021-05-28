import ReducersUtil from '../../../../helpers/ReducersUtil';
import { ProviderGetAllActions, ProviderUploadActions } from './ProviderActions';

const initialPostState = {
  waiting: false,
  response: { insertedRecords: 0, updatedRecords: 0 },
  request: null,
  error: null,
};

const upload = (state = initialPostState, action) => {
  return ReducersUtil.defaultPost(initialPostState, state, action, ProviderUploadActions);
};

const initialGetAllState = {
  loading: false,
  payload: { providers: [] },
  error: null,
};

const fetch = (state = initialGetAllState, action) => {
  return ReducersUtil.defaultFetch(initialGetAllState, state, action, ProviderGetAllActions);
};

export default {
  upload,
  fetch,
};
