import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import UserRegForm from '../components/UserRegForm';

const UserRegScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign up to follow your favorite food trucks</Text>
            <UserRegForm />
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