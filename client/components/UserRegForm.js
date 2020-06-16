import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import axios from 'axios';
function registerUser() {
    console.log("register new user")
    axios.post('/api/user', userdata);
}
export default function UserRegForm() {
    return (
        <View>
            <Text>User Name</Text>
            <TextInput style={styles.input}
             placeholder="User Name"
             name="username" />
            <Text>Email</Text>
            <TextInput placeholder="Email"
            name="email" />
            <Text>Password</Text>
            <TextInput placeholder="Password"
            name="password" />
            <Text>Confirm Password</Text>
            <TextInput placeholder="Type Password Again"
            name="passwordcheck" />
            <Button title="Register"
            style={styles.button}
            onPress={registerUser} />
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
