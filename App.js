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

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Home: HomeScreen,
    Signin: SigninScreen,
    UserReg: UserRegScreen,
    OwnerReg: OwnerRegScreen
  }),
  mainFlow: createBottomTabNavigator({
    Account: AccountScreen,
    OwnerHome: OwnerHomeScreen,
    UserHome: UserHomeScreen
  }),
});



const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
    <App />
    </AuthProvider>
  )
}