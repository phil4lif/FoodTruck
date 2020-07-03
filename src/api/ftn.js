import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: ' http://80248d1dc2a3.ngrok.io',
});

export default instance;
