import React, { useState, useEffect }from 'react';
import { View, Text, FlatList } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import trucks from '../trucks.json';
import Axios from 'axios';

const BrowseTrucksScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')
    
    const getResult = async (id) => {
        const response = await Axios.get(trucks/id)
    }
    return (
        <View>
            <Text>Trucks Screen</Text>
        </View>
    )
}

export default BrowseTrucksScreen;