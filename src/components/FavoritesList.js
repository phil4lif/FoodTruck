import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FavoritesDetail from '../components/FavoritesDetail'
const FavoritesList = ({ results, navigation }) => {

    return (
        <View style={styles.faveContainerStyle}>
            <Text>Favorites:</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <FavoritesDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    faveContainerStyle: {
        height: 400,
        marginLeft: 15
    },
    containerStyle: {
    },
    headerStyle: {
        fontSize: 36,
    },
    profImageStyle: {
        height: 150,
        width: 150,
        borderRadius: 100,
        alignSelf: 'center'
    },
    textStyle: {
        fontSize: 14,
    },
})

export default FavoritesList;