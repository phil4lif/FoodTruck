import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://e446efbcbe9b.ngrok.io',
});

export default instance;
