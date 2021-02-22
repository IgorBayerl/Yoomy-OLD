import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    View,
    Text,
    ActivityIndicator,
    AsyncStorage,
    TextInput,
    ImageBackground,
} from 'react-native';

import styles from './styles';



import api from '../../services/api'


export default function Confirm() {

    //Navigation
    const navigation = useNavigation();

    function navigateToMain() {
        navigation.navigate('Main');
    }




    //console.log(phone_number)
    async function makePostRequest(verify) {
        let phone_number = await AsyncStorage.getItem('@YoomyStorage:phone_number');

        let res = await api.post('verify_app_user', {
            verification_code: verify,
            phone_number: phone_number,
            apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
        })

        console.log(res.data);
        console.log('Resposta ok');
        navigateToMain();

    }
    /////

    const [value, onChangeText] = React.useState('');




    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <Text style={styles.title}> YOOMY </Text>
                <View style={styles.containerItemsInput}>
                    <Text style={styles.text}> Um SMS com um codigo de autenticação foi enviado para o seu numero.. insira-o abaixo </Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={"numeric"}
                        placeholder={'- - - - - -'}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => makePostRequest(value)}
                    >
                        <Text style={styles.buttonText}> Proximo </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}