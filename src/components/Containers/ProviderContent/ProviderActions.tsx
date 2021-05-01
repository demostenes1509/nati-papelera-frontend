export const ProviderUploadActions = {
  POST: 'UPLOAD_PROVIDER_FILE',
  POST_WAITING: 'UPLOAD_PROVIDER_FILE_WAITING',
  POST_SUCCESS: 'UPLOAD_PROVIDER_FILE_SUCCESS',
  POST_ERROR: 'UPLOAD_PROVIDER_FILE_ERROR',
};

const post = (providerUrl: string, file: File) => ({
  type: ProviderUploadActions.POST,
  params: { providerUrl, file },
});
const postWaiting = () => ({ type: ProviderUploadActions.POST_WAITING });
const postSuccess = (response) => ({ type: ProviderUploadActions.POST_SUCCESS, response });
const postError = (error) => ({ type: ProviderUploadActions.POST_ERROR, error });

export default {
  post,
  postWaiting,
  postSuccess,
  postError,
};
