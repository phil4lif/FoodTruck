import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import TrucksDetail from './TrucksDetail';
import { withNavigation } from 'react-navigation'

const TrucksList = ({ title, results, navigation }) => {
    console.log(results)
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('TrucksShow', { _id: item._id })}>
                        <TrucksDetail result={item} />
                    </TouchableOpacity>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        marginBottom: 10
    }
});

export default withNavigation(TrucksList);
