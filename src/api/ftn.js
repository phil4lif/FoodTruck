import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://7d20d29a1549.ngrok.io'
});

export default instance;