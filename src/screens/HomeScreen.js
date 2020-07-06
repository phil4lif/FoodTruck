import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TopSpacer from '../components/TopSpacer';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '../navigationRef';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
      <View style={styles.container}>
        <TopSpacer />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonStyle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserReg')}>
          <Text style={styles.buttonStyle}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OwnerReg')}>
          <Text style={styles.buttonStyle}>Register as FoodTruck Owner</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 15,
    fontSize: 28,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
  },
});
export default HomeScreen;
