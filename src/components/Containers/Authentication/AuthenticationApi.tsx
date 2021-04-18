import { AxiosRequestConfig } from 'axios';
import request from '../../../helpers/Api';

export default {
  fetch(data) {
    const { provider, params } = data;
    const config: AxiosRequestConfig = {
      url: `auth/${provider}`,
      method: 'POST',
      params: {
        access_token: params.accessToken,
      },
    };
    return request(config);
  },
};
