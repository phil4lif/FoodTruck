import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'


const UserRegForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [truckName, setTruckName] = useState('')
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>User Name</Text>
            <TextInput
                style={styles.input}
                placeholder="User Name"
                value={userName}
                onChangeText={text => setUserName(text)}
            />
            <Text style={styles.labelStyle}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={styles.labelStyle}>Name of foodtruck</Text>
            <TextInput
                style={styles.input}
                placeholder="Truck Name"
                value={truckName}
                onChangeText={text => setTruckName(text)}
            />
            <Text style={styles.labelStyle}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
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
    containerStyle:{
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        height: 30,
        width: 120,

    },
})

export default UserRegForm;