import * as React from 'react';
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';
import ftn from '../api/ftn';

const fillAsyncStorage = async (response) => {
  const id = response.data.id;
  // response.data.id exists (user was found by server)
  if (id) {
    await AsyncStorage.setItem('id', id);
    dispatch({ type: 'SignIn', payload: response.data.id });
    navigate('UserHome');
  }
  // User was not found (response.data.id == null)
  else {
    console.log('User not found with those credentials: ', response.data);
    navigate('SignIn', { errorMessage: response.data });
  }
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SignIn':
      return {
        errorMessage: '',
      };
    case 'add_error':
      return {
        errorMessage: '',
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
    fillAsyncStorage(response);
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
    fillAsyncStorage(response);
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const logout = (dispatch) => async () => {
  console.log('logout');
  try {
    // const response = await ftn.post('/api/logout');
    await AsyncStorage.removeItem('id');
    navigate('Home');
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const checkAuth = (dispatch) => async () => {
  console.log('Checking user auth');
  try {
    const userId = await AsyncStorage.getItem('id');
    console.log('userId: ', userId);
    const response = await ftn.post('/api/check-auth', { userId: userId });
    console.log('response.status: ', response.status);
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with checking user auth' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signupuser, signupowner, signIn, logout, checkAuth },
  {}
);
