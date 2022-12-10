import axios from "axios";


const request = axios.create({
  baseURL: 'http://localhost:5003/api/',
});

request.defaults.headers.post['Content-Type'] = 'application/json';

// request 요청 인터셉터
request.interceptors.request.use(
  (request) => 
  {
    console.log('No error req');
    return request;
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