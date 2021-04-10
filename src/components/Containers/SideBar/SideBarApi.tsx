import request from '../../../helpers/Api';

export default {
  fetch() {
    return request('sidebar/get-all', 'GET');
  },
};
