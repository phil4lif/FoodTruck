import React, { useContext } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import SignInForm from '../components/SignInForm';

const SignInScreen = ({ navigation }) => {
  const { state, signIn } = useContext(AuthContext);
  return (
    <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
      <Text style={{ fontSize: 48 }}>SignInScreen</Text>
      <SignInForm onSubmit={signIn} />
      <NavLink routeName="" text="Not Registered? Switch to Sign In" />
    </ImageBackground>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
  },
});

export default SignInScreen;
