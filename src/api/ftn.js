import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://c3ac351f847f.ngrok.io'
});

export default instance;