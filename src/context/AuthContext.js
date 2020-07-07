import * as React from 'react';
import { Alert } from 'react-native';
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';
import ftn from '../api/ftn';

const fillAsyncStorage = async (id, screen) => {
  try {
    await AsyncStorage.setItem('id', id);
  }
  // User was not found (response.data.id == null)
  catch (err) {
    console.log('err: ', err);
    navigate(screen);
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
    if (response.data.id) {
      fillAsyncStorage(response.data.id, 'UserReg');
      dispatch({ type: 'SignIn', payload: response });
      navigate('UserHome');
    } else {
      Alert.alert('Registration error', response.data);
      // navigate('UserReg');
    }
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signupowner = (dispatch) => async ({ username, email, password }) => {
  try {
    const response = await ftn.post('/api/create-owner', { username, password });
    if (response.data.id) {
      dispatch({ type: 'SignIn', payload: response });
      navigate('OwnerHome');
    } else {
      Alert.alert('Registration error', response.data);
    }
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong' });
  }
};

const signIn = (dispatch) => async ({ username, password }) => {
  try {
    const response = await ftn.post('/api/login', { username, password });
    if (response.data.id) {
      console.log(response.data.id)
      await fillAsyncStorage(response.data.id, 'SignIn');
      dispatch({ type: 'SignIn', payload: response.data.id });
      navigate('UserHome');
    } else {
      Alert.alert('Sign in error', response.data);
    }
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
