import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  post(data) {
    const config: AxiosRequestConfig = {
      url: 'products/update',
      method: 'POST',
      data,
    };
    return request(config);
  },
};
