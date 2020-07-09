import React, { useContext } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const UserHomeScreen = () => {
  const getFavorites = async () => {
    const userid =await AsyncStorage.getItem('id')
    const results = await ftn.get(`/api/getfavorite/${userid}`)
  }
  return (
    <SafeAreaView>
      <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>Welcome to the Food Truck Network</Text>
        <Image style={styles.profImageStyle} source={{ uri: 'https://picsum.photos/200'}} />
        <View style={styles.faveContainerStyle}>
          <Text>Favorites</Text>
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  faveContainerStyle:{
    borderColor: 'red',
    borderWidth: 2,
  },
  containerStyle: {
    borderColor: 'red',
    borderWidth: 2,
  },
  headerStyle: {
    fontSize: 36,
  },
  profImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 100,
    alignSelf: 'center'
  },
  textStyle: {
    fontSize: 14,
  },
});

UserHomeScreen.navigationOptions = {
  title: 'Home',
  tabBarIcon: <FontAwesome name="home" size={20} />,
};
export default UserHomeScreen;
