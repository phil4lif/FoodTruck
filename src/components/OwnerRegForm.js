import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'

const UserRegForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [truckname, setTruckname] = useState('')
    return (
        <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>User Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    value={username}
                    onChangeText={text => setUsername(text)}
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
                    value={truckname}
                    onChangeText={text => setTruckname(text)}
                />
                <Text style={styles.labelStyle}>Password</Text>
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Button title="Register"
                onPress={() => onSubmit({ username, email, password, truckname})}
                    style={styles.button}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18
    },
    image: {
        height: '100%',
        resizeMode: "cover",
        alignItems: 'center'
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