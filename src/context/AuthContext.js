import * as React from 'react';
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';
import ftn from '../api/ftn';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'RestoreCreds':
      return {
        // ...prevState,
      };
    case 'SignIn':
      return {
        // ...prevState,
        errorMessage: '',
        response: action.payload,
        isSignout: false,
        userCreds: action.creds,
      };
    case 'add_error':
      return {
        // ...prevState,
        errorMessage: '',
        isSignout: true,
        userCreds: null,
      };
    case 'add_error':
      return {
        errorMessage: action.payload,
      };
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
    const creds = JSON.stringify(response.config.data);
    await AsyncStorage.setItem('creds', creds);
    console.log('response: ', creds);
    dispatch({ type: 'SignIn', payload: response.data.token });
    navigate('UserHome');
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  try {
    const creds = await AsyncStorage.getItem('creds');
    console.log('creds: ', creds);
    creds != null ? JSON.parse(creds) : null;
    if (creds) {
      dispatch({ type: 'SignIn', payload: creds });
      navigate('UserHome');
    } else {
      navigate('SignIn');
    }
  } catch (err) {
    console.log('Error: ', err);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signupuser, signupowner, signIn, tryLocalSignIn },
  {}
);
