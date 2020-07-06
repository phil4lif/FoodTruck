import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const SplashScreen = (dispatch) => {
  React.useEffect(() => {
    const getLocalCreds = async () => {
      let userCreds;
      try {
        userCreds = await AsyncStorage.getItem('creds');
        console.log('userCreds: ', userCreds);
        dispatch({ type: 'SignIn', payload: userCreds });
        navigate('UserHome');
      } catch (err) {
        console.log('Restoring user creds failed');
      }
      // dispatch({ type: 'RestoreToken', creds: userCreds });
    };

    getLocalCreds();
  });

  return (
    <View>
      <Text style={{ margin: 'auto' }}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
