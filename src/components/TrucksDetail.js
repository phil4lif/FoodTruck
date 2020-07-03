import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TrucksDetail = ({ result }) => {
    console.log(result)
return (
    <View style={styles.containerStyle}>
        <Image source={{ uri: result.image }}
        style={styles.imageStyle} />
        <Text style={StyleSheet.name}>{result.truckname}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 180,
        height: 180,
        borderRadius: 5,
        marginBottom: 5,
        marginRight: 25
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    containerStyle: {
        height: 200,
        width: 200,
        marginLeft: 15,


    }
});

export default TrucksDetail;