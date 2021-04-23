import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  fetch(categoryUrl: string) {
    const config: AxiosRequestConfig = {
      url: 'products/get' + categoryUrl,
      method: 'GET',
    };
    return request(config);
  },

  put(data) {
    const config: AxiosRequestConfig = {
      url: 'products/',
      method: 'PUT',
      data,
    };
    return request(config);
  },

  post(data) {
    const config: AxiosRequestConfig = {
      url: 'products/',
      method: 'POST',
      data,
    };
    return request(config);
  },
};
