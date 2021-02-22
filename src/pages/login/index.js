import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    View,
    Text,
    AsyncStorage,
    TextInput,
    ImageBackground,
} from 'react-native';

import styles from './styles';
import api from '../../services/api'

export default function Login() {

    const navigation = useNavigation();
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

    function navigateToProfile() {
        navigation.navigate('Profile');
    }
    function navigateToConfirm() {
        console.log('Confirmation')
        navigation.navigate('Confirm');
    }

    async function makePostRequest(number) {

        const response = await api.post('create_app_user', {
            phone_number: number,
            apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99',
            expo_token: expoPushToken
        })

        const { phone_number, remember_token, id } = response.data;

        console.log('Resposta ok');
        console.log(phone_number);
        console.log(remember_token);
        console.log('id = ' + id);

        await AsyncStorage.multiSet([
            ['@YoomyStorage:remember_token', JSON.stringify(remember_token)],
            ['@YoomyStorage:phone_number', JSON.stringify(phone_number)],
            ['@YoomyStorage:userId', JSON.stringify(id)],
        ]);

        console.log('ok');
        navigateToConfirm();

    }
    const [value, onChangeText] = React.useState('');
    const valueCountry = `+55${value}`


    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <Text style={styles.title}> YOOMY </Text>
                <View style={styles.containerItemsInput}>
                    <Text style={styles.text}> Yoomy lhe enviará uma mensagem SMS para verificar seu numero de telefone</Text>
                    <View style={styles.viewTextInput}>
                        <Text style={styles.country}> +55 </Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType={"phone-pad"}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => makePostRequest(valueCountry)}
                        // onPress={() => navigateToConfirm()}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText} > Continuar </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}