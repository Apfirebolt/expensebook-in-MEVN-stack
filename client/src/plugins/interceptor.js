import axios from 'axios';
import events from './events';
import router from '../routes';

let baseURL = process.env.VUE_APP_API_URL;
if (!baseURL) {
  baseURL = '/api';
}

function getErrorMessage(response) {
  let message = 'Something went wrong';
  if (response.data.message) {
    message = response.data.message;
  }
  return message;
}

const httpClient = axios.create({ baseURL });
// Add a request interceptor
httpClient.interceptors.request.use(
  async (config) => {
    const newConfig = config;
    const token = window.localStorage.getItem('Token');
    newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Add a response interceptor
httpClient.interceptors.response.use((response) => {
  if (response.data instanceof Blob) {
    return response.data;
  }
  return response.data || {};
},
(error) => {
  events.emit('hide_loading');
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      router.push({ name: 'Login' });
      window.localStorage.removeItem('access_token');
      events.emit('add_toast', {
        content: getErrorMessage(error.response),
        type: 'danger',
      });
    } else {
      events.emit('add_toast', {
        content: getErrorMessage(error.response),
        type: 'danger',
      });
    }
  } else {
    events.emit('add_toast', {
      content: 'Unable to connect to server. Please check your internet connectivity',
      type: 'danger',
    });
  }
});

export default httpClient;
