import * as React from 'react';
import { Platform, StyleSheet, StatusBar, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import UserRegScreen from './src/screens/UserRegScreen';
import OwnerRegScreen from './src/screens/OwnerRegScreen';
import SignInScreen from './src/screens/SignInScreen';
import AccountScreen from './src/screens/AccountScreen';
import UserHomeScreen from './src/screens/UserHomeScreen';
import OwnerHomeScreen from './src/screens/OwnerHomeScreen';
import MapScreen from './src/screens/MapScreen';
import BrowseTrucksScreen from './src/screens/BrowseTrucksScreen';
import SingleTruckShowScreen from './src/screens/SingleTruckShowScreen';

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Home: HomeScreen,
  SignIn: SignInScreen,
  UserReg: UserRegScreen,
  OwnerReg: OwnerRegScreen,
  SingleTruckShow: createStackNavigator({
    BrowseTrucks: BrowseTrucksScreen,
    SingleTruckShow: SingleTruckShowScreen
  }),
  userFlow: createBottomTabNavigator({
    UserHome: UserHomeScreen,
    BrowseTrucks: BrowseTrucksScreen,
    Account: AccountScreen,
    Map: MapScreen,
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