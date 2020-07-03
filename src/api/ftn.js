import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://c2f380b65b56.ngrok.io',
});

export default instance;