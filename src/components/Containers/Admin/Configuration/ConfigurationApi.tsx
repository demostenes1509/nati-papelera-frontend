import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  fetch() {
    const config: AxiosRequestConfig = {
      url: '/configuration/get',
      method: 'GET',
    };
    return request(config);
  },
};
