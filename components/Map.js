import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Svg, { Circle, Path } from 'react-native-svg';
import icon from '../assets/img/marker.png';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map() {
  const markerIcon = icon;
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 48.71,
    longitude: -122.45,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [markers, setMarkers] = useState([
    {
      title: 'Taco City',
      coordinates: {
        latitude: 48.71,
        longitude: -122.44778,
      },
      key: 0,
      active: true,
      color: '',
      zIndex: '',
    },
    {
      title: 'Wild Mushroom',
      coordinates: {
        latitude: 48.71,
        longitude: -122.44,
      },
      key: 1,
      active: false,
      color: '',
      zIndex: '',
    },
    {
      title: 'Just Sandwiches',
      coordinates: {
        latitude: 48.7111,
        longitude: -122.4399,
      },
      key: 2,
      active: false,
      color: '',
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    // setRegion(location);
  });

  useEffect(() => {});

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        // onPress={(e) => this.onMapPress(e)}
      >
        {markers.map((marker) => (
          // (markers.active ? (markers.color = '#f31c63') : markers.color = '#2c82ed')
          <Marker
            coordinate={marker.coordinates}
            title={marker.title}
            key={marker.key}
            style={styles.markerShadow, {zIndex: marker.coordinates.latitude}}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill={marker.active ? '#f31c63' : '#499aff'}
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-map-pin"
            >
              <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></Path>
              <Circle cx="12" cy="10" r="4.5" fill="white"></Circle>
            </Svg>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: height,
    width: width,
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  markerShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
