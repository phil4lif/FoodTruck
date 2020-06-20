import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'


const UserRegForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [truckName, setTruckName] = useState('')
    return (
        <View>
            <Text>User Name</Text>
            <TextInput style={styles.input}
                placeholder="User Name"
                value={userName}
                onChangeText={text => setUserName(text)}
            />
            <Text>Email</Text>
            <TextInput placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text>Name of foodtruck</Text>
            <TextInput placeholder="Truck Name"
                value={truckName}
                onChangeText={text => setTruckName(text)}
            />
            <Text>Password</Text>
            <TextInput placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button title="Register"
                style={styles.button}
            />
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

export default UserRegForm;