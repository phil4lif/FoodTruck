import * as React from 'react';
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import HomeScreen from './src/screens/HomeScreen';
import UserRegScreen from './src/screens/UserRegScreen';
import OwnerRegScreen from './src/screens/OwnerRegScreen';
import SignInScreen from './src/screens/SignInScreen';
import AccountScreen from './src/screens/AccountScreen';
import UserHomeScreen from './src/screens/UserHomeScreen';
import OwnerHomeScreen from './src/screens/OwnerHomeScreen';
<<<<<<< HEAD
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import BrowseTrucksScreen from './src/screens/BrowseTrucksScreen';
=======
import MapScreen from './src/screens/MapScreen';
>>>>>>> 4b3f38545540bb69a08eff864b1292e728e5a40c

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Home: HomeScreen,
    SignIn: SignInScreen,
    UserReg: UserRegScreen,
    OwnerReg: OwnerRegScreen,
    Map: MapScreen,
  }),
  userFlow: createBottomTabNavigator({
    UserHome: UserHomeScreen,
<<<<<<< HEAD
    BrowseTrucks: BrowseTrucksScreen,
    Account: AccountScreen
=======
    Account: AccountScreen,
    Map: MapScreen,
>>>>>>> 4b3f38545540bb69a08eff864b1292e728e5a40c
  }),
  ownerFlow: createBottomTabNavigator({
    OwnerHome: OwnerHomeScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
