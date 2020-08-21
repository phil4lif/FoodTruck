import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://86310372da28.ngrok.io',
});

export default instance;
