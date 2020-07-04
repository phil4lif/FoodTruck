import React, { useContext } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import TopSpacer from '../components/TopSpacer';
import { FontAwesome } from '@expo/vector-icons';
const UserHomeScreen = () => {

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 48 }}>Welcome to the Food Truck Network</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 36,
    },
    textStyle: {
        fontSize: 14
    }
});

UserHomeScreen.navigationOptions = {
    title: 'Home',
    tabBarIcon: <FontAwesome name="home" size={20} />
}
export default UserHomeScreen;