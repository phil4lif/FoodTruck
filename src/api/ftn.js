import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'http://7b82b419f2e1.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const creds = await AsyncStorage.getItem('creds');
    if (creds) {
      console.log('Xcreds: ', creds);
      config.body = creds;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
