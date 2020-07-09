import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import ftn from '../api/ftn';

const AddToFavoritesButton = ({ truckid }) => {
    
const saveFavorite = async () => {
const userid = await AsyncStorage.getItem('id')

ftn.put(`/api/addfavorite/${userid}/${truckid}`)
}
    return (
        <>
            <TouchableOpacity onPress={saveFavorite}>
                <Text style={styles.buttonStyle}>Add to Favorites</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    buttonStyle : {
        fontSize: 20,
        color: 'blue'
    }
});

export default AddToFavoritesButton;