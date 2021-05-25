import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  put(data) {
    const config: AxiosRequestConfig = {
      url: 'packaging/',
      method: 'PUT',
      data,
    };
    return request(config);
  },
  post(data) {
    const config: AxiosRequestConfig = {
      url: 'packaging/publish',
      method: 'POST',
      data,
    };
    return request(config);
  },
};
