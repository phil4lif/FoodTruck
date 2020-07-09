import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import TopSpacer from '../components/TopSpacer';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import ftn from '../api/ftn'
import FavoritesList from '../components/FavoritesList';
import { Context as AuthContext} from '../context/AuthContext'

const UserHomeScreen = () => {
  const [results, setResults] = useState([]);
  const { state: { userId } } = useContext(AuthContext);

//  console.log(userId + 'from userhome')

  const getFavorites = async () => {
      try {
          const response = await ftn.get(`/api/getfavorite/${userId}`)
          setResults(response.data[0].favorites)
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
      getFavorites();
  }, [userId]);

  return (
    <SafeAreaView>
      <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>Welcome to the Food Truck Network</Text>
        <Image style={styles.profImageStyle} source={{ uri: 'https://picsum.photos/200'}} />
        <ScrollView>
        <FavoritesList results={results}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  faveContainerStyle:{
  },
  containerStyle: {
  height: 800
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
