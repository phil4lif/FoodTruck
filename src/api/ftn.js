import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const instance = axios.create({
  baseURL: 'http://18e8613672f9.ngrok.io',
});

export default instance;
