import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const instance = axios.create({
  baseURL: 'http://bea0567595cf.ngrok.io',
});

export default instance;
