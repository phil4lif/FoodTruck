import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://c365ccdd577a.ngrok.io',
});

export default instance;
