import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import OwnerRegForm from '../components/OwnerRegForm';

const OwnerRegScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Register as an owner</Text>
            <OwnerRegForm />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        alignSelf: 'center'
    }
})
export default OwnerRegScreen;