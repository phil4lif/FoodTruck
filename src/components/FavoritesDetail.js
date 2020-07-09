import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FavoritesDetail = ({ result }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{result.truckname}</Text>
            <Image source={{ uri: result.image }}
                style={styles.imageStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginRight: 15
    },
    titleStyle: {
        fontSize: 18
    }
})
export default FavoritesDetail;