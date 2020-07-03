import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import NavLink from '../components/NavLink';
const SigninScreen = () => {
    return (
        <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
            <Text style={{ fontSize: 48 }}>SigninScreen</Text>
            <NavLink
                routeName=""
                text="Not Registered? Switch to Sign In" />
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    image: {
        height: '100%',
        resizeMode: "cover",
        alignItems: 'center'
    },
});

export default SigninScreen;