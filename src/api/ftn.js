import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://20acabae49c8.ngrok.io',
});

export default instance;
