import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import ftn from '../api/ftn'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { errorMessage: '', response: action.payload };
    }
}
const signup = dispatch => async ({ username, email, password }) => {
    console.log(username, email, password)
    try {
        const response = await ftn.post('/api/create-user', { username, email, password });
        // await AsyncStorage.setItem('token', response.data.token);
        // console.log(username, email, password)
        dispatch({ type: 'signin', payload: response });
        navigate('mainFlow');
    } catch (err) {
        // dispatch({ type: 'add_error', payload: 'Something went wrong' })
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup },
    {}
);
