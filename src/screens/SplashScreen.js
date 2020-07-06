import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const SplashScreen = (dispatch) => {
  React.useEffect(() => {
    const getLocalCreds = async () => {
      let userCreds;
      try {
        userCreds = await AsyncStorage.getItem('creds');
        userCreds ? navigate('UserHome') : navigate('Home');
      } catch (err) {
        console.log('Restoring user creds failed: ', err);
      }
    };

    getLocalCreds();
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default SplashScreen;
