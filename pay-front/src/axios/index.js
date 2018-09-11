import axios from 'axios';


axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.BASE_API;

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers["Accept"] = "application/json";
    if (!config.url.endsWith('/login')) {
      config.headers["Content-Type"] = 'application/json';
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(response => {
  // if(response.data.code != 0){
  //   Message.error(response.data.data);
  // }else
    return response.data;
  },
  error => {
    return Promise.reject(error)
  });
export default axios;
