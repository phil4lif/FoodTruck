import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import UserRegScreen from './src/screens/UserRegScreen'
import OwnerRegScreen from './src/screens/OwnerRegScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    UserReg: UserRegScreen,
    OwnerReg: OwnerRegScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home'
    }
  })

const App = createAppContainer(navigator);

export default () => {
  return (
      <App />
  )
}