import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TrucksDetail from '../components/TrucksDetail'
const FavoritesList = ({ results, navigation }) => {

return (
<View style={styles.faveContainerStyle}>
    <Text>Favorites:</Text>
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <Text>{item.favorites[7].truckname}</Text>
              </TouchableOpacity>
            )
          }} 
          />
        </View>
)
}

const styles = StyleSheet.create({
    faveContainerStyle: {
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
})

export default FavoritesList;