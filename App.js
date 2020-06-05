import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}></Image>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 50
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
})

export default App;