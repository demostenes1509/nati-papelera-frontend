import { AxiosRequestConfig } from 'axios';
import request from '../../../helpers/Api';

export default {
  fetch(categoryUrl: string) {
    const config: AxiosRequestConfig = {
      url: 'home/get-category-products' + categoryUrl,
      method: 'GET',
    };
    return request(config);
  },
};
