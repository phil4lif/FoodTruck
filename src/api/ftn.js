import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3a6f1542e8c5.ngrok.io',
});

export default instance;
