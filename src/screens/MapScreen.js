import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';
import ftn from '../api/ftn';
import { SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TopSpacer from '../components/TopSpacer';
import Map from '../components/Map.js';
import TruckCarousel from '../components/TruckCarousel.js';
import { FontAwesome } from '@expo/vector-icons';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="blue" barStyle="dark-content" /> */}
      <Map />
      <View style={styles.textBox}>
        <Text style={{ textAlign: 'center', margin: 'auto', color: 'gray' }}>Put a search bar here</Text>
      </View>
      {/* <TruckCarousel trucks={trucks} /> */}
      {/* <View style={styles.bottomBar}>
        <Text style={{ textAlign: 'center', margin: 'auto', color: 'gray' }}>Put some icons here or something</Text>
      </View> */}
    </View>
  );
};

MapScreen.navigationOptions = {
  title: 'Map',
  tabBarIcon: <FontAwesome name="map" size={20} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    width: '100%',
    paddingBottom: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    textAlign: 'center',
    shadowOffset: { width: 0, height: -1 },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default MapScreen;
