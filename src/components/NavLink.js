import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavLink = ({ navigation, text }) => {
    return (
        <TouchableOpacity>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default NavLink;