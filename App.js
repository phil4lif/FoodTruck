import * as React from 'react';
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import HomeScreen from './src/screens/HomeScreen';
import UserRegScreen from './src/screens/UserRegScreen'
import OwnerRegScreen from './src/screens/OwnerRegScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import UserHomeScreen from './src/screens/UserHomeScreen';
import OwnerHomeScreen from './src/screens/OwnerHomeScreen';
import Map from './components/Map.js';
import TruckCard from './components/TruckCard.js';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Home: HomeScreen,
    Signin: SigninScreen,
    UserReg: UserRegScreen,
    OwnerReg: OwnerRegScreen
  }),
  userFlow: createBottomTabNavigator({
    UserHome: UserHomeScreen,
    Account: AccountScreen
  }),
  ownerFlow: createBottomTabNavigator({
    OwnerHome: OwnerHomeScreen,
    Account: AccountScreen
  })
});

// Map screen code -> move to separate screen
    // <View style={styles.container}>
    //   <StatusBar backgroundColor="blue" barStyle="dark-content" />
    //   <Map />
    //   <View style={styles.textBox}>
    //     <Text style={styles.welcome}>Welcome to Food Truck</Text>
    //     <Text style={{ textAlign: 'center', margin: 'auto', color: 'gray' }}>Put a search bar here</Text>
    //   </View>
    //   <TruckCard />
    //   <View style={styles.bottomBar}>
    //     <Text style={{ textAlign: 'center', margin: 'auto', color: 'gray' }}>Put some icons here or something</Text>
    //   </View>
    // </View>

// Move style code to map screen
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
  }
});


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
    <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  )
}
