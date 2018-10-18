import axios from 'axios';
import settings from '../settings';


const instance = axios.create({
  baseURL: settings.apiURL,
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || '';
  return config;
});

export default instance;
