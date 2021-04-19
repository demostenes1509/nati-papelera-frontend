import { AxiosRequestConfig } from 'axios';
import request from '../../../helpers/Api';

export default {
  fetch() {
    const config: AxiosRequestConfig = {
      url: 'providers/get-all',
      method: 'GET',
    };
    return request(config);
  },
};
