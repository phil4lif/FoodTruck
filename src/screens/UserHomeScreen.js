import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import ftn from '../api/ftn'

const UserHomeScreen = () => {
  const [results, setResults] = useState([]);
  const userid = AsyncStorage.getItem('id');
  console.log(userid)
  const getFavorites = async () => {
    try {
      const response = await ftn.get(`/api/getfavorite/${userid}`)
      setResults(response.data)
      console.log(results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>Welcome to the Food Truck Network</Text>
        <Image style={styles.profImageStyle} source={{ uri: 'https://picsum.photos/200'}} />
        <View style={styles.faveContainerStyle}>
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <Text>favorites: {item.favorites}</Text>
              </TouchableOpacity>
            )
          }} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  faveContainerStyle:{
    borderColor: 'red',
    borderWidth: 2,
    height: 200
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
