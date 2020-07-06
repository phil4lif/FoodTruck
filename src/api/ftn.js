import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const instance = axios.create({
  baseURL: 'http://a7960c7a734c.ngrok.io',
});

export default instance;
