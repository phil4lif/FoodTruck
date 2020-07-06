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
  try {
    const response = await ftn.post('/api/create-user', { username, email, password });
    // await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'SignIn', payload: response });
    navigate('UserHome');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signupowner = (dispatch) => async ({ username, email, password }) => {
  try {
    const response = await ftn.post('/api/create-owner', { username, password });
    dispatch({ type: 'SignIn', payload: response });
    navigate('OwnerHome');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signIn = (dispatch) => async ({ username, password }) => {
  try {
    const response = await ftn.post('/api/login', { username, password });
    const creds = response.config.data;
    await AsyncStorage.setItem('creds', creds);
    dispatch({ type: 'SignIn', payload: response.data.token });
    navigate('UserHome');
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const logout = (dispatch) => async () => {
    console.log('logout')
  try {
    // const response = await ftn.post('/api/logout');
    await AsyncStorage.removeItem('creds', (err) => {
      console.log(err);
    });
    navigate('Home');
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signupuser, signupowner, signIn, logout },
  {}
);
