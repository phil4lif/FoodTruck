import React, { useState, useEffect }from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import trucks from '../trucks.json';
import TrucksList from '../components/TrucksList';

const BrowseTrucksScreen = ({ navigation }) => {
    // console.log(trucks)
    const results = trucks
    // console.log(results)
    const _id = navigation.getParam('_id')
    
    return (
        <View>
            <TopSpacer />
            <Text>Trucks Screen</Text>
            <ScrollView>
                <TrucksList results={results} title="Trucks in Your area" />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center'
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginLeft: 15,
        marginBottom: 5,
        borderRadius: 5
    },
    textStyle : {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }
});
export default BrowseTrucksScreen;