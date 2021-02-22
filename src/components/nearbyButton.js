import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, AsyncStorage, StyleSheet } from 'react-native';
// import styles from './styles';

const styles = StyleSheet.create({

    bottonNavigator: {
        //backgroundColor: '#2D9556',
        backgroundColor: '#2D9556',
        borderRadius: 35,
        height: 70,
        width: 70,
        position: 'absolute',
        bottom: 20,
        right: 20,
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

const NearbyButton = () => {


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

    function navigateToNearby() {
        getUserPosition();
        navigation.navigate('Nearby')
    }


    return (
        <View style={styles.bottonNavigator}>

            <TouchableOpacity
                style={styles.buttonHolding}
                onPress={() => navigateToNearby()}
            >
                <Feather name="map-pin" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default NearbyButton;