import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function TruckCard() {
  const [truckCards, setTruckCards] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={truckCards}
          sliderWidth={500}
          itemWidth={330}
          renderItem={this._renderItem}
          loop={true}
          decelerationRate={'fast'}
          activeSlideAlignment={'center'}
          inactiveSlideShift={20}
          onSnapToItem={(index) =>
            setActiveIndex({ index })
          } /*This should call a function to highlight the correct map pin */
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 170,
    width: 330,
    height: 130,
    // margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});
