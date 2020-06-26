import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import OwnerRegForm from '../components/OwnerRegForm';
import NavLink from '../components/NavLink';

const OwnerRegScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register as an owner</Text>
            <OwnerRegForm />
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
export default OwnerRegScreen;