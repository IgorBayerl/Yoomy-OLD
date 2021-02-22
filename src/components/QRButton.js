import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, AsyncStorage, StyleSheet } from 'react-native';
// import styles from './styles';

const styles = StyleSheet.create({

    qrButton: {
        //backgroundColor: '#2D9556',
        backgroundColor: '#2D9556',
        borderRadius: 35,
        height: 50,
        width: 50,
        position: 'absolute',
        bottom: 110,
        right: 30,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',

        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        elevation: 6,
        ////////////////////
    },
    buttonHolding: {
        //backgroundColor: '#dedede',
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: 'center',
        // flexDirection: 'row',
        alignItems: 'center'
    },

});

const QRButton = (props) => {


    //////////////////////////////////



    const [userPosition, setUserPosition] = useState([]);

    async function getUserPosition() {
        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                await setUserPosition({
                    latitude,
                    longitude
                });
                await AsyncStorage.multiSet([
                    ['@YoomyLocate:lat', JSON.stringify(latitude)],
                    ['@YoomyLocate:lng', JSON.stringify(longitude)]
                ]);
            }, //sucesso
            () => { console.log('erro') }, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        );

    }
    ///////////////////////////////////////////////////////////////////

    const navigation = useNavigation();

    function navigateToPayment() {
        getUserPosition();
        navigation.navigate('Payment')
    }


    return (
        <View style={styles.qrButton}>

            <TouchableOpacity
                style={styles.buttonHolding}
                onPress={() => {
                    // navigateToPayment()
                    props.functionOnPress()
                }}
            >
                <FontAwesome name="qrcode" size={25} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default QRButton;