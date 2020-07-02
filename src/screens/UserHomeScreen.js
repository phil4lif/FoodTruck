import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'

const UserHomeScreen = ({ username }) => {
    return <Text style={{ fontSize: 48 }}>Welcome {username}</Text>
};

const styles = StyleSheet.create({});

export default UserHomeScreen;