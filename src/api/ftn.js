import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://5ac4c2244b70.ngrok.io',
});

export default instance;
