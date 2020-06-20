import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('UserReg')}
            title="Register as a food truck fan"
            />
            <Button
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('OwnerReg')}
            title="Register as a food truck"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: 5
    }
})
export default HomeScreen;