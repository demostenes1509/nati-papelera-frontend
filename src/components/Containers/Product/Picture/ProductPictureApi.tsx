import { AxiosRequestConfig } from 'axios';
import request from '../../../../helpers/Api';

export default {
  post(data) {
    const { nologoFile, logoFile, productId } = data;
    const formData = new FormData();
    formData.append('files', logoFile, 'logo');
    formData.append('files', nologoFile, 'nologo');
    formData.append('productId', productId);

    const config: AxiosRequestConfig = {
      url: 'products-pictures/',
      method: 'POST',
      data: formData,
    };
    return request(config);
  },
};
