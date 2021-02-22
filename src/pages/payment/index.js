import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, AsyncStorage, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Feather, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';

const instructions = require('../../source/qrscanerIcon.png');

import styles from './styles';


export default function Payment(props) {

    //const [type, setType] = useState(Camera.Constants.Type.back)
    const [havePermission, setHavePermission] = useState(null)
    const [scanned, setScanned] = useState(false);
    const [informationQR, setInformationQR] = useState({});
    const [QRData, SetQRData] = useState({})

    const handleBarCodeScanned = async ({ type, data }) => {

        parseData(JSON.parse(data))
        console.log(QRData)
        setScanned(true);
        setInformationQR({ type, data });


        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    useEffect(() => {

        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHavePermission(status === 'granted');
        })();

    }, []);

    if (havePermission === null) {
        return <View />;
    }
    if (havePermission === false) {
        return <Text>Acesso Negado!</Text>;
    }


    async function parseData(data) {
        const userId = await AsyncStorage.getItem('@YoomyStorage:userId');
        navigateToRestaurantMenu(data, userId, data.sit_code)
    }
    const navigation = useNavigation();

    function navigateToRestaurantMenu(restaurant, userId, sit_code) {
        console.log("SITCODE ===> " + sit_code)
        console.log("JSON.stringify() ===> " + JSON.stringify(restaurant))
        props.functionOnPress(sit_code)
        navigation.navigate('RestaurantMenu', { restaurant, userId, sit_code });
    }

    return (

        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.card}>
                    <Text
                        style={{ fontSize: 20, textAlign: 'center', paddingHorizontal: 20 }}
                    >Use a camera para escanear o codigo da mesa</Text>
                </View>
            </View>
            <View style={styles.containerMain}>

                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    // onBarCodeScanned={scanned ? undefined : console.log("scanned d")}
                    style={styles.camera}
                />
            </View>
            <View style={styles.containerBotton}>
                <View style={styles.card}>
                    <Image
                        style={{ height: '97 %', width: '100%', marginTop: '2%' }}
                        resizeMethod={'scale'}
                        resizeMode={'center'}
                        source={instructions}
                    />
                </View>
            </View>

        </ View>
    );
}