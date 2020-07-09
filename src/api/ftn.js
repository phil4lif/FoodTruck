import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3e745098eff9.ngrok.io',
});

export default instance;
