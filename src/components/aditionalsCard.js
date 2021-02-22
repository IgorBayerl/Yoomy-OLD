import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Text, AsyncStorage, StyleSheet, TouchableHighlight } from 'react-native';
// import styles from './styles';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },


});

const AditionalCard = (dish_additional) => {


    //////////////////////////////////



    const navigation = useNavigation();

    const [quantity, setQuantity] = useState(1);


    return (

        <View >
            <Text>{dish_additional.name}</Text>
            <View style={styles.container}>

                <TouchableHighlight

                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => setQuantity(quantity - 1)}>
                    <Feather name="minus" size={40} color="black" />
                </TouchableHighlight>
                <Text >{quantity}</Text>
                <TouchableHighlight

                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => setQuantity(quantity + 1)}>
                    <Feather name="plus" size={40} color="black" />
                </TouchableHighlight>

            </View>
        </View>
    );
};


export default AditionalCard;