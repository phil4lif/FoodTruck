import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const OwnerAccountScreen = () => {
  const { state, logout } = useContext(AuthContext);
  return (
    <View>

      <Text style={{ fontSize: 48 }}>Settings</Text>
      <Button title='Add New Food Truck' />
      <Button title='Switch Trucks' />
      <Button onPress={logout} title='Logout' />
    </View>
  );
};

OwnerAccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};
const styles = StyleSheet.create({});

export default OwnerAccountScreen;
