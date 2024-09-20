import axios from 'axios';

const appConfig = require('../../app.json');

const API_ROOT = appConfig.apiRoot;

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers['x-access-token'] = accessToken;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    return axios.delete(url, config);
  }
};

export default http;
