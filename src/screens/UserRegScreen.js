import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import UserRegForm from '../components/UserRegForm';
import NavLink from '../components/NavLink';

const UserRegScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign up to follow your favorite food trucks</Text>
            <UserRegForm />
            <NavLink 
            routeName="Signin"
            text="Already Registered? Switch to Sign In" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 200,
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        alignSelf: 'center'
    }
})
export default UserRegScreen;