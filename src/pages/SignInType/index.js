import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import {
    View,
    Text,
    AsyncStorage,
    ImageBackground,
} from 'react-native';

import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';
const { URLSchemes } = AppAuth;


import { Platform } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


import styles from './styles';
import bg from '../../source/bg2.png'
import api from '../../services/api'


export default function SignInType() {
    const [user, setUser] = useState(null);
    const [expoPushToken, setExpoPushToken] = React.useState("")

    async function registerForPushNotificationsAsync() {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
            setExpoPushToken(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            });
        }
    };

    useEffect(() => {
        initAsync()
        registerForPushNotificationsAsync()
    }, []);

    initAsync = async () => {
        try {
            await GoogleSignIn.initAsync({
                behavior: 'web',
                iosClientId: `364690284546-m5flgblbdcl1pqmt00hphduq70eegaol.apps.googleusercontent.com`,
                androidClientId: `364690284546-hbdnraa8pclql6dkjpafqdghtv16kou6.apps.googleusercontent.com`,
                iosStandaloneAppClientId: `364690284546-m5flgblbdcl1pqmt00hphduq70eegaol.apps.googleusercontent.com`,
                androidStandaloneAppClientId: `364690284546-hbdnraa8pclql6dkjpafqdghtv16kou6.apps.googleusercontent.com`,
                clientId: `364690284546-d0mkd4ju6f9hrcckgrvkih18uf1ak5vm.apps.googleusercontent.com`
            });
        } catch ({ message }) {
            alert('GoogleSignIn.initAsync(): ' + message);
        }
    };


    _syncUserWithStateAsync = async () => {
        const userG = await GoogleSignIn.signInSilentlyAsync();
        setUser(userG);
    };

    signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        setUser(null);
    };

    signInGoogleAsync = async () => {
        try {


            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type == 'success') {

                _syncUserWithStateAsync();
                const response = await api.post('create_app_user_google', {
                    google_email: user.email,
                    apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99',
                    google_id: user.uid,
                    google_name: user.displayName,
                    expo_token: expoPushToken
                });

                await AsyncStorage.multiSet([
                    ['@YoomyStorage:remember_token', JSON.stringify(response.data.remember_token)],
                    ['@YoomyStorage:userId', JSON.stringify(response.data.id)],
                    ['@YoomyStorage:name', JSON.stringify(user.displayName)],
                ]);
                navigateToMain();
            }
        } catch ({ message }) {
            alert('login: Error : ' + message);
        }
    }



    forceSignIn = async () => {
        await AsyncStorage.multiSet([
            ['@YoomyStorage:userId', '5'],
        ]);
        navigateToMain();
    }




    const navigation = useNavigation();

    function navigateToLogin() {
        console.log('Login');
        navigation.navigate('Login');
    }
    function navigateToMain() {
        console.log('Main');
        navigation.navigate('Main');
    }
    /////////////////////////////////
    /////////////////////////////////




    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.containerItems}>
                <Text style={styles.title}> YOOMY </Text>
                <View style={styles.containerItemsInput}>
                    <Text style={styles.text}>{user}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigateToLogin()}
                    >
                        <Entypo name="phone" size={30} color="white" />
                        <Text style={styles.buttonText}> Telefone </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            signOutAsync();
                            signInGoogleAsync();
                        }}
                        style={styles.GoogleButton}
                    >
                        <AntDesign name="google" size={30} color="grey" />
                        <Text style={styles.buttonTextGoogle}> Google </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => signOutAsync()}
                        //onPress={() => { alert(expoPushToken); }}
                        style={styles.FacebookButton}
                    >
                        <AntDesign name="facebook-square" size={30} color="white" />
                        <Text style={styles.buttonText}> Facebook </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => forceSignIn()}
                        style={styles.GoogleButton}
                    >
                        <AntDesign name="smileo" size={30} color="grey" />
                        <Text style={styles.buttonTextGoogle}> Force </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}