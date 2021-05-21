import { AxiosRequestConfig } from 'axios';
import request from '../../../helpers/Api';

export default {
  fetch(data) {
    const { provider, params } = data;
    const config: AxiosRequestConfig = {
      url: `auth/${provider}`,
      method: 'POST',
      params: {
        code: params.code, // For Mercado Libre
        access_token: params.accessToken, // For Facebook
      },
    };
    return request(config);
  },
};
