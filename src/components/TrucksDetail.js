import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TrucksDetail = ({ result }) => {
return (
    <View style={styles.containerStyle}>
        <Image source={{ uri: result.image }}
        style={styles.imageStyle} />
        <Text style={styles.name}>{result.truckname}</Text>
        <Text style={styles.name}>Keywords: {result.foodkeywords[0]}</Text>
        <Text style={styles.name}>{result._id}</Text>
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
        height: 250,
        width: 200,
        marginLeft: 15,


    }
});

export default TrucksDetail;