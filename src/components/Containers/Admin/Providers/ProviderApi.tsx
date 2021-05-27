import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  post(data) {
    const { file, providerUrl } = data;

    const regex = '/providers/(.+?)/';
    const res = providerUrl.match(regex);

    const formData = new FormData();
    formData.append('file', file, file.name);

    const config: AxiosRequestConfig = {
      url: 'providers/upload-new-file',
      method: 'POST',
      data: formData,
      params: {
        providerUrl: res[1],
      },
    };
    return request(config);
  },

  fetch() {
    const config: AxiosRequestConfig = {
      url: '/providers/get-all',
      method: 'GET',
    };
    return request(config);
  },
};
