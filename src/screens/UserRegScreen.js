import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import UserRegForm from '../components/UserRegForm';

const UserRegScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Register as a user</Text>
            <UserRegForm />
        </View>
    )
}
export default UserRegScreen;