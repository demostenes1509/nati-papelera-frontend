import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  fetch() {
    const config: AxiosRequestConfig = {
      url: '/mercado-libre/categories',
      method: 'GET',
    };
    return request(config);
  },

  post(data) {
    const { file } = data;

    const formData = new FormData();
    formData.append('file', file, file.name);

    const config: AxiosRequestConfig = {
      url: '/mercado-libre/process-categories',
      method: 'POST',
      data: formData,
    };
    return request(config);
  },
};
