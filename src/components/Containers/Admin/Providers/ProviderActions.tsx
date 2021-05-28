export const ProviderUploadActions = {
  POST: 'UPLOAD_PROVIDER_FILE',
  POST_WAITING: 'UPLOAD_PROVIDER_FILE_WAITING',
  POST_SUCCESS: 'UPLOAD_PROVIDER_FILE_SUCCESS',
  POST_ERROR: 'UPLOAD_PROVIDER_FILE_ERROR',
};

export const ProviderGetAllActions = {
  FETCH: 'FETCH_PROVIDERS',
  FETCH_LOADING: 'FETCH_PROVIDERS_WAITING',
  FETCH_SUCCESS: 'FETCH_PROVIDERS_SUCCESS',
  FETCH_ERROR: 'FETCH_PROVIDERS_ERROR',
};

const post = (providerId: string, file: File) => ({
  type: ProviderUploadActions.POST,
  params: { providerId, file },
});
const postWaiting = () => ({ type: ProviderUploadActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProviderUploadActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProviderUploadActions.POST_ERROR, error });

const fetch = () => ({ type: ProviderGetAllActions.FETCH });
const fetchLoading = () => ({ type: ProviderGetAllActions.FETCH_LOADING });
const fetchSuccess = (payload) => ({ type: ProviderGetAllActions.FETCH_SUCCESS, payload });
const fetchError = (error) => ({ type: ProviderGetAllActions.FETCH_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
  fetch,
  fetchLoading,
  fetchSuccess,
  fetchError,
};
