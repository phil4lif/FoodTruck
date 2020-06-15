import React from 'react';
import { View, Text, TextInput } from 'react-native'

export default function UserRegForm() {
    return (
        <View>
            <Text>User Name</Text>
            <TextInput placeholder = "User Name" />
            <Text>Email</Text>
            <TextInput placeholder = "Email" />
            <Text>Password</Text>
            <TextInput placeholder = "Password" />
        </View>
    )
}
