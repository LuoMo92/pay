import axios from '@/axios';

export default {

  getList(data){
    return axios({
      url: '/custom',
      method: 'get',
      params:data
    });
  }
}
