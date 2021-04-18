import { AxiosRequestConfig } from 'axios';
import request from '../../../helpers/Api';

export default {
  fetch() {
    const config: AxiosRequestConfig = {
      url: 'sidebar/get-all',
      method: 'GET',
    };
    return request(config);
  },
};
