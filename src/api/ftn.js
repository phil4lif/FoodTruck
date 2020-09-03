import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://eb97e295dd24.ngrok.io',
});

export default instance;
