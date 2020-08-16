import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, TextInput } from 'react-native';


const AddTruckForm = ({ onSubmit }) => {
    const [truckname, setTruckName] = useState('');
    const [keywords, setKeyWords] = useState('');
    const [mainphotolink, setMainPhotoLink] = useState('')
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>Truck Name</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Truck Name"
                value={truckname}
                onChangeText={text => setTruckName(text)}
                />
            <Text style={styles.labelStyle}>Add Keywords seperated by commas</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="eg. tacos, burritos, vegan, barbecue, etc"
                value={keywords}
                onChangeText={text => setKeyWords(text)}
                />
            <Text style={styles.labelStyle}>Link a Main Photo</Text>
            <TextInput
                autocapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Link to Main Photo"
                value={mainphotolink}
                onChangeText={text => setMainPhotoLink(text)}
                />
                <Button title="Submit"
                style={styles.button}
                onPress={() => onSubmit({ truckname, keywords, mainphotolink })}
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
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        height: 30,
        width: 200,
    },
})
export default AddTruckForm;