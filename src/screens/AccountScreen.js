import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { state, logout } = useContext(AuthContext);
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Settings</Text>
      <Button onPress={logout} title='Logout' />
    </View>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};
const styles = StyleSheet.create({});

export default AccountScreen;
