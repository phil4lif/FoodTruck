import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://386e4ab1e4ca.ngrok.io'
});

export default instance;