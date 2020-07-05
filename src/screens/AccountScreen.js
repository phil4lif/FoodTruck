import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    return <Text style={{ fontSize: 48 }}>Settings Button
    LogOut Button</Text>
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
}
const styles = StyleSheet.create({});

export default AccountScreen;