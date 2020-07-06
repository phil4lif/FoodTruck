import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import TrucksList from '../components/TrucksList';
import { FontAwesome } from '@expo/vector-icons';
import useResults from '../hooks/useResults';

const BrowseTrucksScreen = ({ navigation }) => {
    const [searchApi, results, errorMessage] = useResults()
    const _id = navigation.getParam('_id')

    return (
        <SafeAreaView>
            <View>
                <Text></Text>
                <ScrollView>
                    <TrucksList results={results} title="All Food Trucks On the Network" />
                </ScrollView>
            </View>
        </SafeAreaView>
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
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }
});
export default BrowseTrucksScreen;