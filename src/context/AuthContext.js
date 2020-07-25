import * as React from 'react';
import { Alert, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';
import ftn from '../api/ftn';

const fillAsyncStorage = async (id, screen) => {
  try {
    await AsyncStorage.setItem('id', id);
  } catch (err) {
    // User was not found (response.data.id == null)
    console.log('err: ', err);
    navigate(screen);
  }
};

const getUserLocation = (dispatch) => async () => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  // latitudeDelta = default map zoom level
  // Increase to zoom out
  const LATITUDE_DELTA = 0.012;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  let { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
  }
  const loc = await Location.getCurrentPositionAsync({});
  const userLocation = {
    latitude: loc.coords.latitude,
    longitude: loc.coords.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  dispatch({ type: 'getUserLocation', payload: userLocation });
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SignIn':
      return {
        userId: action.payload,
        errorMessage: '',
      };
    case 'getUserLocation':
      return {
        userLocation: action.payload,
        errorMessage: '',
      };
    case 'add_error':
      return {
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

const signupuser = (dispatch) => async ({ username, email, password }) => {
  try {
    const response = await ftn.post('/api/create-user', { username, email, password });
    if (response.data.id) {
      fillAsyncStorage(response.data.id, 'UserReg');
      dispatch({ type: 'SignIn', payload: response.data.id });
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
    const response = await ftn.post('/api/create-owner', { username, email, password });
    if (response.data.id) {
      fillAsyncStorage(response.data.id, 'OwnerReg')
      dispatch({ type: 'SignIn', payload: response.data.id });
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
      // console.log(response.data.id)
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
    if (userId) {
      dispatch({ type: 'SignIn', payload: userId });
    }
    const response = await ftn.post('/api/check-auth', { userId: userId });
    console.log('response.status: ', response.status);
  } catch (err) {
    console.log('err: ', err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with checking user auth' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signupuser, signupowner, signIn, logout, checkAuth, getUserLocation },
  { userId: null, errorMessage: '', userLocation: null }
);
