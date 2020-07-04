import React, { useState, useEffect }from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import trucks from '../trucks.json';
import TrucksList from '../components/TrucksList';
import { FontAwesome } from '@expo/vector-icons';

const BrowseTrucksScreen = ({ navigation }) => {
    const results = trucks
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
};

BrowseTrucksScreen.navigationOptions = {
    title: 'Browse',
    tabBarIcon: <FontAwesome name="search" size={20} color="black" />
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