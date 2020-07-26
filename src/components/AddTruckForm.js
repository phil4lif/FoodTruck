import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native';


const AddTruckForm = () => {
    const [truckname, setTruckName] = useState('');
    const [keywords, setKeyWords] = useState('')
    return(
        <View>
            <Text>Truck Name</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={}
                placeholder="Truck Name"
                value={truckname}
                onChangeText={text => setTruckName(text)}
                />
            <Text>Add Search Keywords up to 5 seperated by commas</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={}
                placeholder="eg. tacos, burritos, vegan, barbecue, etc"
                value={keywords}
                onChangeText={text => setKeyWords(text)}
                />
        </View>
    )
}