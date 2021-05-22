import { AxiosRequestConfig } from 'axios';
import request from '../../../helpers/Api';

export default {
  fetch(params) {
    const config: AxiosRequestConfig = {
      url: 'sidebar/get-all',
      method: 'GET',
      params: {
        url: params.url,
      },
    };
    return request(config);
  },
};
