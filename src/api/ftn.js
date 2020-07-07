import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const instance = axios.create({
  baseURL: 'http://83bf667d3023.ngrok.io',
});

export default instance;
