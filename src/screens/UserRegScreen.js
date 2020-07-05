import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import UserRegForm from '../components/UserRegForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import TopSpacer from '../components/TopSpacer';

const UserRegScreen = ({ navigation }) => {
  const { state, signupuser } = useContext(AuthContext);
  return (
    <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.text}>Sign up to find and follow your favorite food trucks</Text>
      <TopSpacer />
      <UserRegForm onSubmit={signupuser} />
      <NavLink routeName="SignIn" text="Already Registered? Switch to Sign In" />
    </View>
    </ImageBackground>

  );
};

UserRegScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 200,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    alignSelf: 'center',
  },
});
export default UserRegScreen;
