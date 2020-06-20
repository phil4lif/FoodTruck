import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import OwnerRegForm from '../components/OwnerRegForm';

const OwnerRegScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Register as an owner</Text>
            <OwnerRegForm />
        </View>
    )
}
export default OwnerRegScreen;