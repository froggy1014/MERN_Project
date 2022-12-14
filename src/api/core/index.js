import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/`,
});

request.defaults.headers.post['Content-Type'] = 'application/json';

// request 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    // if(config.method !== 'get') {
    //   config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    //   return config;
    // }
    console.log('No error req');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// request 응답 인터셉터
request.interceptors.response.use(
  (response) => {
    console.log('No error res');
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);


export default request;