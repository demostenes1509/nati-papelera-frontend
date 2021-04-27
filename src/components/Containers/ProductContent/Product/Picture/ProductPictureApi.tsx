import { AxiosRequestConfig } from 'axios';
import request from '../../../../../helpers/Api';

export default {
  post(data) {
    const { file, productId } = data;

    const formData = new FormData();
    formData.append('file', file, file.name);

    const config: AxiosRequestConfig = {
      url: 'products-pictures/',
      method: 'POST',
      data: formData,
      params: {
        productId: productId,
      },
    };
    return request(config);
  },
};
