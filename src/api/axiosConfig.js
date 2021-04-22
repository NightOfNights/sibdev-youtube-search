import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://www.googleapis.com/youtube',
  headers: {
    'content-type': 'multipart/form-data',
  },
});

export default axiosConfig;
