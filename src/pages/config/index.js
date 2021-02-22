import React from 'react';
import { View, Text, AsyncStorage, Image, Alert, TextInput, Switch, Modal, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Feather, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import Header from '../../components/header'
import { WebView } from 'react-native-webview';
import { LiteCreditCardInput, CreditCardInput } from 'react-native-credit-card-input';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export default function Config() {

    function saveButton() {
        updateProfile()
    }

    const litleCreditCardInput = LiteCreditCardInput


    const navigation = useNavigation();
    function navigateToMain() {
        navigation.navigate('Main')
    }

    function navigateToTesteCheckout() {
        navigation.navigate('TesteCheckout')
    }

    function navigateToUni() {
        navigation.navigate('MainUni')
    }

    /////////////////////////////////////////////////////////////////
    async function logOut() {
        console.log('LoginnOFF')

        await AsyncStorage.removeItem('@YoomyStorage:remember_token');
        await AsyncStorage.removeItem('@YoomyStorage:phone_number');
        await AsyncStorage.removeItem('@YoomyStorage:userId');
        await AsyncStorage.removeItem('@YoomyStorage:name');
        await AsyncStorage.removeItem('@YoomyStorage:email');

        Alert.alert('loggedOut')
    }
    ///////////////////////////////////////////////////////////////////

    const [switchEnable, setSwitchEnable] = React.useState(false)
    const [userName, setUserName] = React.useState('')
    const [webViewActive, setWebViewActive] = React.useState(false)
    // const [radioProps, setRadioProps] = React.useState([
    //     { label: 'param1', value: 0 },
    //     { label: 'param2', value: 1 },
    //     { label: 'param3', value: 2 }
    // ]);
    const [selectedRadio, setSelectedRadio] = React.useState(1)
    const radioProps = [
        { label: 'param1', value: 0 },
        { label: 'param2', value: 1 }
    ];

    const [cardListActive, setCardListActive] = React.useState(false)
    const [cardData, setCardData] = React.useState('')

    // async function saveSettings() {
    // }

    async function updateProfile() {


        console.log(response.data);
        console.log('Resposta ok');
        navigateToMain();

    }

    function logOutMessage() {
        Alert.alert(
            "Deseja realmete sair ? ",
            "",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Canceled"),
                    style: "cancel"
                },
                { text: "Sair", onPress: () => logOut() }
            ],
            { cancelable: true }
        )
    }

    function openWebView() {
        setWebViewActive(!webViewActive)
        console.log('web view...')
    }


    const [cardValues, setCardValues] = useState({
        'cardNumber': '',
        'cvv': ''
    })

    function addCardButton() {
        if (cardData.valid) {
            alert('Cartão adicionado')
        } else {
            alert('Cartão invalido')
        }

    }


    return (

        <View style={styles.container}>

            <Header />
            <View style={styles.containerMargin}>
                <ScrollView showsVerticalScrollIndicator={false} snapToAlignment={"center"} >
                    <View style={styles.contentContainer}>

                        <Feather
                            //style={styles.pageLogo}
                            name="settings"
                            size={80}
                            color="grey"
                        />

                        <Text style={styles.profileName}>Configurações</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'Nome do Usuário'}
                            placeholderTextColor={'grey'}
                            onChangeText={text => setUserName(text)}
                            value={userName}
                        >
                        </TextInput>

                        <View style={styles.ratingContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Feather name="bell" size={20} color="grey" />
                                <Text style={{ marginHorizontal: 10, fontSize: 17 }} >Notificações</Text>
                            </View>

                            <Switch
                                value={switchEnable}
                                onValueChange={(value) => setSwitchEnable(value)}

                            />
                        </View>
                        <View style={{ ...styles.ratingContainer, backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Feather name="command" size={20} color="grey" />
                                <Text style={{ marginHorizontal: 10, fontSize: 17 }} >Alguma coisa ai</Text>
                            </View>

                            <Switch
                                value={switchEnable}
                                onValueChange={(value) => setSwitchEnable(value)}
                            // trackColor={{ true: '#86E2AB' }}
                            />
                        </View>
                        <View style={styles.cardSectionContainer}>
                            <TouchableOpacity
                                style={styles.touchableOpacitySection}
                                onPress={() => setCardListActive(!cardListActive)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Feather name="credit-card" size={20} color="grey" />
                                    <Text style={{ marginHorizontal: 10, fontSize: 17 }} >Seus Catões</Text>
                                </View>
                                {cardListActive ? <AntDesign name="upcircleo" size={20} color="grey" /> : <AntDesign name="downcircleo" size={20} color="grey" />}

                            </TouchableOpacity>

                        </View>
                        {cardListActive ?
                            <View style={{ width: '100%' }}>
                                {/* <FlatList
                                    data={['cc-mastercard', 'cc-visa', 'cc-paypal', 'cc-discover']}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item: card }) => (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, width: '100%', justifyContent: "space-between", paddingHorizontal: 20 }}>
                                            <FontAwesome name={card} size={35} color="grey" />
                                            <Text>#### #### #### 5498</Text>
                                            <Feather name="x-circle" size={24} color="grey" />
                                        </View>
                                    )}
                                /> */}
                                <View style={{ backgroundColor: '#f5f5f5', paddingHorizontal: 5, paddingBottom: 8 }}>
                                    <LiteCreditCardInput
                                        autoFocus={false}
                                        requireName={true}
                                        requireCVC={true}
                                        validColor="black"
                                        invalidColor="red"
                                        placeholderColor="darkgray"
                                        labelStyle={{ color: 'black', fontSize: 12 }}
                                        inputStyle={{ color: 'black', fontSize: 16 }}
                                        onFocus={() => { }}
                                        onChange={form => {
                                            setCardData(form)
                                            console.log(form)
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        {/* <TouchableOpacity
                                            style={{ backgroundColor: '#dedede', paddingVertical: 5, paddingHorizontal: 25, borderRadius: 5 }}
                                        >
                                            <FontAwesome name="close" size={24} color="black" />
                                        </TouchableOpacity> */}
                                        {cardData.valid ?
                                            <TouchableOpacity
                                                style={{ backgroundColor: '#86E2AB', paddingVertical: 5, paddingHorizontal: 25, borderRadius: 5 }}
                                                onPress={() => addCardButton()}
                                            >
                                                <FontAwesome name="check" size={24} color="black" />
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity
                                                style={{ backgroundColor: '#dedede', paddingVertical: 5, paddingHorizontal: 25, borderRadius: 5 }}
                                                onPress={() => addCardButton()}
                                            >
                                                <FontAwesome name="check" size={24} color="black" />
                                            </TouchableOpacity>

                                        }


                                    </View>


                                </View>

                            </View>
                            :
                            <View />
                        }

                        <View style={styles.containerButton}>

                            {/* <TouchableOpacity
                                style={styles.saveButton}
                                onPress={() => saveButton()}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity> */}

                            <TouchableOpacity
                                style={styles.logoutButton}
                                onPress={() => logOutMessage()}
                            >
                                <Feather name="log-out" size={35} color="white" />
                            </TouchableOpacity>
                        </View>


                    </View>
                </ScrollView>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={webViewActive}
                onRequestClose={() => setWebViewActive(!webViewActive)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal_Card}>
                        <WebView
                            source={{ uri: 'https://www.savatan.com/payment' }}
                            style={{ marginTop: 20, width: 300 }}
                        />
                    </View>
                </View>
            </Modal>


        </View>
    );
}

//