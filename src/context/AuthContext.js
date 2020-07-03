import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import ftn from '../api/ftn';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SignIn':
      return { errorMessage: '', response: action.payload };
    case 'add_error':
      return { errorMessage: action.payload };
  }
};
const signupuser = (dispatch) => async ({ username, email, password }) => {
  console.log(username, email, password);
  try {
    const response = await ftn.post('/api/create-user', { username, email, password });
    // await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SignIn', payload: response });
    navigate('UserHome');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signupowner = (dispatch) => async ({ username, email, truckname, password }) => {
  console.log(username, email, truckname, password);
  try {
    const response = await ftn.post('/api/create-owner', { username, password });
    dispatch({ type: 'SignIn', payload: response });
    navigate('OwnerHome');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signIn = (dispatch) => async ({ username, password }) => {
  console.log('Attempting to sign in user ' + username);
  try {
    const response = await ftn.post('/api/login', { username, password });
    console.log('response: ', response);
    dispatch({ type: 'MapScreen', payload: response });
    navigate('MapScreen');
  } catch (err) {
    dispatch({ type: 'add-error', payload: 'Something went wrong' });
  }
};

export const { Provider, Context } = createDataContext(authReducer, { signupuser, signupowner, signIn }, {});
