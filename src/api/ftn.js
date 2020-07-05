import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://f11f9db3b822.ngrok.io',
});

export default instance;
