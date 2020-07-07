import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const AddToFavoritesButton = () => {
    return (
        <>
            <TouchableOpacity>
                <Text>Add to Favorites</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({});

export default AddToFavoritesButton;