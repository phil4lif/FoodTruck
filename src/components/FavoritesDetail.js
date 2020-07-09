import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FavoritesDetail = ({ result }) => {
    return (
        <View>
            <Text>Static</Text>
            <Text>{result.truckname}</Text>
            <Image source={{ uri: result.image }}
                style={{ height: 200, width: 200 }}
            />
        </View>
    )
}

export default FavoritesDetail;