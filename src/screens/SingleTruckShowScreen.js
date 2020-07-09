import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import ftn from '../api/ftn';
import AddToFavoritesButton from '../components/AddToFavoritesButton'

const SingleTruckShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const _id = navigation.getParam('_id')

    const getResult = async (_id) => {
        const response = await ftn.get(`/api/trucks/${_id}`);
        response.data
        setResult(response.data);
    };
    useEffect(() => {
        getResult(_id);
    }, []);
    if (!result) {
        return null
    }

    return (
        <View style={styles.containerStyle}>
            <Text>{result.truckname}</Text>
            <Image style={styles.imageStyle} source={{ uri: result.image }} />
            <Text>More Photos</Text>
            <FlatList
                horizontal
                data={result.otherphotos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }} />
            <AddToFavoritesButton truckid={_id} />
        </View>
    )
};

SingleTruckShowScreen.navigationOptions = {
    title: 'Taco Man',
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        height: 600
    },
    imageStyle: {
        height: 300,
        width: 300,
        marginLeft: 15,
        marginBottom: 5,
        borderRadius: 5
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }
});

export default SingleTruckShowScreen;