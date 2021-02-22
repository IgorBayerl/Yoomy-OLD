import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import NumberFormat from 'react-number-format';
import api from '../services/api';
import RestaurantMenu from '../pages/RestaurantMenu'



const styles = StyleSheet.create({

    bottonNavigator: {
        //backgroundColor: '#2D9556',
        backgroundColor: '#2D9556',
        borderRadius: 35,
        height: 70,
        //width: 70,
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 12,

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
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: 'center',
        // flexDirection: 'row',
        alignItems: 'center'
    },

});

const ConfirmButton = (props) => {


    //////////////////////////////////




    ///////////////////////////////////////////////////////////////////

    const navigation = useNavigation();

    function navigateToNearby() {
        navigation.navigate('Nearby')
    }

    function Payment() {
        navigation.navigate('Payment')
    }

    function navigateToTesteCheckout() {
        navigation.navigate('TesteCheckout')
    }





    return (
        <View style={styles.bottonNavigator}>
            <TouchableOpacity
                style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => props.functionForComponent()}
            >
                <View>
                    <NumberFormat
                        value={props.value}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix={'R$'}
                        renderText={formattedValue => <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>{formattedValue}</Text>}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonHolding}
                    onPress={() => { }}
                >
                    <Feather name="send" size={30} color="white" />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>

    );
};

export default ConfirmButton;