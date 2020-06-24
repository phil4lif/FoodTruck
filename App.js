import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import UserRegScreen from './src/screens/UserRegScreen'
import OwnerRegScreen from './src/screens/OwnerRegScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    UserReg: UserRegScreen,
    OwnerReg: OwnerRegScreen
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Account: AccountScreen
  }),

});



const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  )
}