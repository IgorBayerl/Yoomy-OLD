import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Vibration, StyleSheet, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import getPosition from '../functions/getCurrentPosition';
import { Platform, AsyncStorage, AppState } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import FCM, { NotificationActionType } from "react-native-fcm";


const styles = StyleSheet.create({
    topBar: {
        top: Constants.statusBarHeight + 5,
        height: 40,
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'absolute'
    },

    topBarTitle: {
        fontSize: 30,
        color: '#fff',
    },
    topBarIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    topBarIcons_Icon: {
        height: 40,
        width: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

const Header = () => {

    const navigation = useNavigation();

    function navigateToNearby() {
        getUserPosition();
        navigation.navigate('Nearby')
    }

    function navigateToConfig() {
        navigation.navigate('Config')
    }

    function navigateToNotifications() {
        navigation.navigate('Notifications')
    }
    function navigateToMain() {
        navigation.navigate('Main')
    }



    const _handleNotification = () => {
        Vibration.vibrate();
    };




    return (
        <View style={styles.topBar}>
            <TouchableOpacity
                style={styles.topBarIcons_Icon}
                onPress={() => { navigateToNotifications() }}
            >
                <Feather name="bell" size={30} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigateToMain() }}
            >
                <View>
                    <Text style={styles.topBarTitle}> YOOMY </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.topBarIcons_Icon}
                onPress={() => navigateToConfig()}
            >
                <Feather name="settings" size={30} color="grey" />
            </TouchableOpacity>
        </View>
    );
};

export default Header;