import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { View, Text, AsyncStorage, TextInput, Modal, CheckBox, Image, RefreshControl, ActivityIndicator, TouchableHighlight } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';
const { URLSchemes } = AppAuth;
import NumberFormat from 'react-number-format'

import api from '../../services/api'
import styles from './styles';
import logo from '../../source/logo.png';

export default function StartPage() {

    const [text, onChangeText] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmCode, setConfirmCode] = useState('');
    const [user, setUser] = useState(null);
    const [tempSentPhoneNumberResponse, setTempSentPhoneNumberResponse] = useState(null);

    const [activityIndicator, setActivityIndicator] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [modal3Visible, setModal3Visible] = useState(false);
    const [modal4Visible, setModal4Visible] = useState(false);


    const navigation = useNavigation();

    function navigateToMain() {
        setModalVisible(false)
        setModal2Visible(false)
        setModal3Visible(false)
        setModal4Visible(false)
        navigation.navigate('Main')
    }


    ///////////////////////////////////////////////////// GOOGLE ////////////////////////////////////////////////////////////

    async function _syncUserWithStateAsync() {
        const userG = await GoogleSignIn.signInSilentlyAsync();
        setUser(userG);
    };

    async function signOutAsync() {
        await GoogleSignIn.signOutAsync();
        setUser(null);
    };

    async function signInGoogleAsync() {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type == 'success') {
                await _syncUserWithStateAsync();
                const expoPushToken = await AsyncStorage.getItem('@YoomyStorage:expoToken');
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
                    ['@YoomyStorage:logInStyle', 'google'],
                ]);
                navigateToMain();
            }
        } catch ({ message }) {
            alert('login: Error : ' + message);
        }
    }

    function signInGoogleButton() {
        if (user) {
            signOutAsync();
        } else {
            signInGoogleAsync();
        }
    }

    ////////////////////////////////////////////////// SMS ///////////////////////////////////////////////////

    async function sentPhoneNumber() {
        setActivityIndicator(true)
        const expoPushToken = await AsyncStorage.getItem('@YoomyStorage:expoToken');

        const response = await api.post('create_app_user', {
            phone_number: ('+55' + String(phoneNumber)),
            apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99',
            expo_token: expoPushToken
        })

        setTempSentPhoneNumberResponse(response)
        setActivityIndicator(false)
        setModal4Visible(!modal4Visible)
    }
    ////////// confirmation code /////////
    async function confirmSmsCode() {
        try {
            // setActivityIndicator(true)
            const response = await api.post('verify_app_user', {
                verification_code: confirmCode,
                phone_number: ('+55' + String(phoneNumber)),
                apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
            })
            // setActivityIndicator(false)
            console.log('response ==> ' + JSON.stringify(response.data))
            // const responseDataTrue = { "success": true }
            if (response.data.success == true) {
                await AsyncStorage.multiSet([
                    ['@YoomyStorage:remember_token', JSON.stringify(tempSentPhoneNumberResponse.data.remember_token)],
                    ['@YoomyStorage:userId', JSON.stringify(tempSentPhoneNumberResponse.data.id)],
                    ['@YoomyStorage:name', text],
                    ['@YoomyStorage:logInStyle', 'phoneNumber'],
                ]);
                navigateToMain();
            } else {
                alert('Codigo invalido')
            }
        } catch (error) {
            alert('error ==> ' + error)
        }
    }

    function ModalTermos() {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modal_Card}>
                    <View style={styles.modal_Card_Container}>
                        <Text style={styles.modalText}>Olá {text}! antes de tudo precisamos que você leia e concorde com nossos termos de privacidade e serviços. </Text>
                        <FontAwesome5 name="file-contract" size={100} color="grey" />
                        <Text style={styles.modalText}>naoseioq.com.br/contrato </Text>
                    </View>
                    <TouchableHighlight
                        style={{ marginBottom: -10, borderRadius: 15 }}
                        activeOpacity={0.6}
                        underlayColor="#fff"
                        onPress={() => setModal2Visible(!modal2Visible)}
                    >
                        <View style={styles.modalButton}>
                            <Text style={styles.buttonText}>Concordo</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async function forceLogIn() {
        await AsyncStorage.multiSet([

            ['@YoomyStorage:remember_token', 'TESTE_as54d654dwa54da56sd465w4da65s'],
            ['@YoomyStorage:userId', '5'],
            ['@YoomyStorage:name', 'Teste User'],
            ['@YoomyStorage:logInStyle', 'force'],
        ]);
        navigateToMain();


        console.log('force login...')
    }



    // useEffect(() => {
    //     
    // }, []);

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#86E2AB', flex: 1, width: '100%', alignItems: 'center' }}>
                <Text style={!modalVisible ? styles.title : styles.titleModOn}> YOOMY </Text>
                <Image
                    resizeMode={'center'}
                    source={logo}
                    style={{ height: '10%', marginBottom: 50 }}
                />
                <View style={styles.containerItemsInput}>
                    <Text style={styles.text}> Para iniciar .. gostariamos de saber seu nome =)</Text>
                    <View style={styles.viewTextInput}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => onChangeText(text)}
                            value={text}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={!modalVisible ? styles.button : { height: 0 }}
                    >
                        <Text style={styles.buttonText} >{text.length > 0 ? 'Continuar' : 'Pular'}  </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* /////////////////////////////////////////////  TERMOS  ///////////////////////////////////////////// */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <ModalTermos />

            </Modal>
            {/* /////////////////////////////////////////////  METODO  ///////////////////////////////////////////// */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2Visible}
                onRequestClose={() => setModal2Visible(!modal2Visible)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal_Card}>
                        <View style={styles.modal_Card_Container}>
                            <Text style={styles.modalText}>Muito bem {text}! para dar inicio eu gostaria que você escolhesse um, dentre nossos varios metodos de login! </Text>
                            <View style={styles.modalOptionButtons}>
                                <TouchableHighlight
                                    style={styles.optionButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => {
                                        signInGoogleButton()
                                        console.log('google')
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '80%' }}>
                                        <AntDesign name="google" size={30} color="white" />
                                        <Text style={styles.buttonText}>google</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.optionButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => { forceLogIn() }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '80%' }}>
                                        <Entypo name="facebook" size={30} color="white" />
                                        <Text style={styles.buttonText}>Force</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.optionButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => { setModal3Visible(!modal3Visible) }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '80%' }}>
                                        <Entypo name="phone" size={30} color="white" />
                                        <Text style={styles.buttonText}>telefone</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View >
                        <TouchableHighlight
                            style={{ marginBottom: -10, borderRadius: 15 }}
                            activeOpacity={0.6}
                            underlayColor="#fff"
                            onPress={() => setModal2Visible(!modal2Visible)}
                        >
                            <View style={styles.modalButton}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            {/* /////////////////////////////////////////////  PHONE  ///////////////////////////////////////////// */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal3Visible}
                onRequestClose={() => setModal3Visible(!modal3Visible)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal_Card}>
                        <View style={styles.modal_Card_Container}>
                            <Text style={styles.modalText}>Coloque o seu nomero de telefone aqui e lhe enviaremos um SMS !</Text>
                            <NumberFormat
                                value={phoneNumber}
                                displayType={'text'}
                                thousandSeparator={false}
                                decimalScale={2}
                                format={"(##) ##### ####"}
                                fixedDecimalScale={true}
                                renderText={formattedValue => <Text >{formattedValue}</Text>}
                            />
                            <ActivityIndicator
                                animating={activityIndicator}
                            />
                            <View style={styles.viewTextInput}>
                                <TextInput
                                    style={{ ...styles.textInput, color: 'white', backgroundColor: '#86E2AB', width: 70, marginRight: 20 }}
                                    value={'+55'}
                                />

                                <TextInput
                                    style={{ ...styles.textInput, color: 'white', backgroundColor: '#86E2AB' }}
                                    keyboardType={"phone-pad"}
                                    maxLength={11}
                                    onChangeText={text => setPhoneNumber(text)}
                                    value={phoneNumber}
                                />
                            </View>
                            <TouchableHighlight
                                style={styles.sendButton}
                                activeOpacity={0.6}
                                underlayColor="#DDDDDD"
                                onPress={() => sentPhoneNumber()}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '80%' }}>
                                    <Feather name="send" size={30} color="white" />
                                    <Text style={styles.buttonText}>Confirmar !</Text>
                                </View>
                            </TouchableHighlight>
                        </View >
                        <TouchableHighlight
                            style={{ marginBottom: -10, borderRadius: 15 }}
                            activeOpacity={0.6}
                            underlayColor="#fff"
                            onPress={() => setModal3Visible(!modal3Visible)}
                        >
                            <View style={styles.modalButton}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            {/* /////////////////////////////////////////////  CONFIRM SMS  ///////////////////////////////////////////// */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal4Visible}
                onRequestClose={() => setModal4Visible(!modal4Visible)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal_Card}>
                        <View style={styles.modal_Card_Container}>
                            <Text style={styles.modalText}>Nós lhe enviamos um codigo via SMS ,  por favor coloque-o abaixo! </Text>
                            <View style={styles.viewTextInput}>
                                <TextInput
                                    style={{ ...styles.textInput, color: 'white', backgroundColor: '#86E2AB', letterSpacing: 15 }}
                                    keyboardType={"numeric"}
                                    placeholder={'------'}
                                    placeholderTextColor={'#c6f7ca'}
                                    onChangeText={text => setConfirmCode(text)}
                                    value={confirmCode}
                                    maxLength={6}
                                />
                            </View>
                            <TouchableHighlight
                                style={styles.sendButton}
                                activeOpacity={0.6}
                                underlayColor="#DDDDDD"
                                onPress={() => { confirmSmsCode() }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '80%' }}>
                                    <Feather name="send" size={30} color="white" />
                                    <Text style={styles.buttonText}>Confirmar !</Text>
                                </View>
                            </TouchableHighlight>
                        </View >
                        <TouchableHighlight
                            style={{ marginBottom: -10, borderRadius: 15 }}
                            activeOpacity={0.6}
                            underlayColor="#fff"
                            onPress={() => setModal4Visible(!modal4Visible)}
                        >
                            <View style={styles.modalButton}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

        </View>
    );
}