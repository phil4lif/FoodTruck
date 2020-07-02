import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://b1017c37bce7.ngrok.io'
});

export default instance;