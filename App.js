import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import UserRegScreen from './src/screens/UserRegScreen'
import OwnerRegScreen from './src/screens/OwnerRegScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import UserHomeScreen from './src/screens/UserHomeScreen';
import OwnerHomeScreen from './src/screens/OwnerHomeScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';

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



const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
    <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  )
}