import React, { useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const SplashScreen = (dispatch) => {
  const { state, checkAuth } = useContext(AuthContext);

  React.useEffect(() => {
    const getLocalId = async () => {
      try {
        const userId = await AsyncStorage.getItem('id');
// console.log('AsyncStorage userId: ', userId);
        if (userId) {
          checkAuth();
          navigate('UserHome');
        } else {
          navigate('Home');
        }
      } catch (err) {
        // console.log('Restoring user id failed: ', err);
      }
    };

    getLocalId();
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default SplashScreen;
