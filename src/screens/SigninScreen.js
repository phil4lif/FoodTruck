import React, { useContext } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import SignInForm from '../components/SignInForm';
import TopSpacer from '../components/TopSpacer';

const SignInScreen = ({ route, navigation }) => {
  console.log('typeof route: ', typeof route);
  console.log('route.params: ', route.params);
  const { state, signIn } = useContext(AuthContext);
  const { errorMessage } = route.params;
  return (
    <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign In</Text>
        <SignInForm onSubmit={signIn} />
        <Text style={styles.text}>{errorMessage}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <NavLink routeName="Home" text="Not Registered? Switch to Registration" />
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
