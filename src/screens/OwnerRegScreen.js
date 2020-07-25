import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import OwnerRegForm from '../components/OwnerRegForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const OwnerRegScreen = ({ navigation }) => {
  const { state, signupowner } = useContext(AuthContext);
  return (
    <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
    <View style={styles.container}>
        <Text style={styles.text}>Register as an owner</Text>
        <OwnerRegForm onSubmit={signupowner} />
        <NavLink routeName="SignIn" text="Already Registered? Switch to Sign In" />
    </View>
    </ImageBackground>

  );
};

OwnerRegScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginTop: 200,
    borderRadius: 15,
    marginBottom: 200,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 163, 163,0.5)'
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
export default OwnerRegScreen;
