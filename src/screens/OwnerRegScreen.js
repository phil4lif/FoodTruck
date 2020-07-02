import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import OwnerRegForm from '../components/OwnerRegForm';
import NavLink from '../components/NavLink';

const OwnerRegScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
                <Text style={styles.text}>Register as an owner</Text>
                <OwnerRegForm />
                <NavLink
                    routeName="Signin"
                    text="Already Registered? Switch to Sign In" />
            </ImageBackground>
        </View>
    )
}

OwnerRegScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 200,
        justifyContent: 'center'
    },    
    image: {
        height: '100%',
        resizeMode: "cover",
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        alignSelf: 'center'
    }
})
export default OwnerRegScreen;