

import React, { useState, useEffect } from 'react';
import { Vibration } from 'react-native';
import Routes from './src/routes';
import { Platform, AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';
const { URLSchemes } = AppAuth;


export default function App() {


  const [expoPushToken, setExpoPushToken] = useState("")
  const [notification, setNotification] = useState({})

  async function initAsync() {
    try {
      await GoogleSignIn.initAsync({
        behavior: 'web',
        iosClientId: `364690284546-m5flgblbdcl1pqmt00hphduq70eegaol.apps.googleusercontent.com`,
        androidClientId: `364690284546-hbdnraa8pclql6dkjpafqdghtv16kou6.apps.googleusercontent.com`,
        iosStandaloneAppClientId: `364690284546-m5flgblbdcl1pqmt00hphduq70eegaol.apps.googleusercontent.com`,
        androidStandaloneAppClientId: `364690284546-hbdnraa8pclql6dkjpafqdghtv16kou6.apps.googleusercontent.com`,
        clientId: `364690284546-d0mkd4ju6f9hrcckgrvkih18uf1ak5vm.apps.googleusercontent.com`
      });
      console.log('hiii google')
    } catch ({ message }) {
      alert('GoogleSignIn.initAsync(): ' + message);
    }
  };

  //// notifications

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

      await AsyncStorage.multiSet([
        ['@YoomyStorage:expoToken', token]
      ]);

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


  const _handleNotification = (notification) => {
    Vibration.vibrate();
    console.log(notification);
  };




  useEffect(() => {
    initAsync()
    registerForPushNotificationsAsync();
    _notificationSubscription = Notifications.addListener(_handleNotification);
  }, []);

  return (
    <Routes />
  );
}
