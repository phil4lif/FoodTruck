import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList, Image, Modal, Alert, TouchableHighlight } from 'react-native';
// import MyModal from '../components/MyModal';
import AddTruckForm from '../components/AddTruckForm';
import { FontAwesome } from '@expo/vector-icons';

const OwnerHomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const onSubmit = () => {
        
    }
    return (
        <View>
            {/* <MyModal>
                <AddTruckForm />
            </MyModal> */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello Modal</Text>
                        <AddTruckForm />
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <Text style={{ fontSize: 48 }}>Owner Home Screen</Text>
            <Button
                onPress={() => {
                    setModalVisible(true);
                }} title='Add Your Truck' />
        </View>
    )
};

OwnerHomeScreen.navigationOptions = {
    title: 'Home',
    tabBarIcon: <FontAwesome name="home" size={20} />
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default OwnerHomeScreen;