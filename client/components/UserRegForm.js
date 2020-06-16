import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default function UserRegForm() {
    return (
        <View>
            <Text>User Name</Text>
            <TextInput style={styles.input} placeholder = "User Name" />
            <Text>Email</Text>
            <TextInput placeholder = "Email" />
            <Text>Password</Text>
            <TextInput placeholder = "Password" />
            <Text>Confirm Password</Text>
            <TextInput placeholder = "Type Password Again" />
            <TouchableOpacity style={styles.button}><Text>Register</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        border: '1 solid black'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        marginBottom: 10
      }
})
