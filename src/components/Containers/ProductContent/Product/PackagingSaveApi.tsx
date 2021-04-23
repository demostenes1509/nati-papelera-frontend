import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  post(data) {
    const config: AxiosRequestConfig = {
      url: 'packaging/update',
      method: 'POST',
      data,
    };
    return request(config);
  },
};
