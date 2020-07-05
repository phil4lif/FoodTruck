import React, { useContext } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import SignInForm from '../components/SignInForm';

const SignInScreen = ({ navigation }) => {
  const { state, signIn } = useContext(AuthContext);
  return (
    <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
    <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
        <SignInForm onSubmit={signIn} />
        <NavLink routeName="Home" text="Not Registered? Switch to Registraition" />
    </View>
    </ImageBackground>

  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 200,
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

export default SignInScreen;
