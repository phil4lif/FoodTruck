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
    Home: HomeScreen,
    SignIn: SignInScreen,
    UserReg: UserRegScreen,
    OwnerReg: OwnerRegScreen,
    userFlow: createBottomTabNavigator({
    UserHome: UserHomeScreen,
    BrowseTrucks: createStackNavigator({
      BrowseTrucks: BrowseTrucksScreen,
      SingleTruckShow: SingleTruckShowScreen,
    }),
    Account: AccountScreen,
    Map: MapScreen,
  }),
  ownerFlow: createBottomTabNavigator({
    OwnerHome: OwnerHomeScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);
// const Stack = createStackNavigator();

export default () => {
  //   console.log('test')
  //   const [creds, setCreds] = useState(null);
  //   const [isSignIn, setIsSignIn] = useState(false);
  //   const [checkingCreds, setCheckingCreds] = useState(true);

  //   React.useEffect(() => {
  //     const credsOk = true;
  //     console.log('credsOk: ', credsOk);
  //     if (credsOk) {
  //       setIsSignIn(true);
  //     }
  //   }, []);

  //   console.log('checkingCreds: ', checkingCreds);
  //   if (checkingCreds) return <SplashScreen />;

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

// export default () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [userCreds, setUserCreds] = useState(null);
//   const [isSignout, setIsSignout] = useState(true);

//   // if (isLoading) {
//   //   return <SplashScreen />;
//   // }

//   React.useEffect(() => {
//     const getLocalCreds = async () => {
//       let userCreds;
//       try {
//         userCreds = await AsyncStorage.getItem('userCreds');
//         console.log('userCreds: ', userCreds);
//         setIsLoading(false)
//       } catch (err) {
//         console.log('Restoring user creds failed');
//       }
//       dispatchEvent({ type: 'RestoreToken', creds: userCreds });
//     };

//     getLocalCreds();
//   });

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {userCreds == null ? (
//           <>
//             <Stack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{
//                 title: 'Sign in',
//                 animationTypeForReplace: isSignout ? 'pop' : 'push',
//               }}
//             />
//             <Stack.Screen name="UserReg" component={UserRegScreen} />
//           </>
//         ) : (
//           <Stack.Screen name="UserHome" component={UserHomeScreen} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
