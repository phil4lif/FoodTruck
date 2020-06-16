import * as React from 'react';
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import Map from './components/Map.js';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <Map />
      <View style={styles.textBox}>
        <Text style={styles.welcome}>Welcome to Food Truck</Text>
        <Text style={{ textAlign: 'center', margin: 'auto', color: 'gray' }}>Put a search bar here</Text>
      </View>
      
      <View style={styles.bottomBar}>
        <Text style={{ textAlign: 'center', margin: 'auto', color: 'gray' }}>Put some icons here or something</Text>
      </View>
    </View>
  );
}

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
