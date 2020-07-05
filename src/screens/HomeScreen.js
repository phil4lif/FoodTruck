import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TopSpacer from '../components/TopSpacer';
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/should-wang-ye5T5R0G-GA-unsplash.jpg')} style={styles.image}>
                <TopSpacer />
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonStyle}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UserReg')}>
                    <Text style={styles.buttonStyle}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OwnerReg')}>
                    <Text style={styles.buttonStyle}>Register as FoodTruck Owner</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

HomeScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 15,
        fontSize: 28,
    },
    container: {
    },
    image: {
        height: '100%',
        resizeMode: "cover",
        alignItems: 'center'
    },
})
export default HomeScreen;