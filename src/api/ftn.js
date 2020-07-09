import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://23b02efbd2e2.ngrok.io',
});

export default instance;
