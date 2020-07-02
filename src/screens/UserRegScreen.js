import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserRegForm from '../components/UserRegForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const UserRegScreen = ({ navigation }) => {
const { state, signup } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign up to find and follow your favorite food trucks</Text>
            <UserRegForm
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already Registered? Switch to Sign In" />
        </View>
    )
}

UserRegScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 200,
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        alignSelf: 'center'
    }
})
export default UserRegScreen;