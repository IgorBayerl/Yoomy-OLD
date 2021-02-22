import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, TextInput, Modal, TouchableHighlight, FlatList, ScrollView } from 'react-native';
import { LiteCreditCardInput, CreditCardInput } from 'react-native-credit-card-input';

import styles from './styles';

export default function TesteCheckout() {
    const route = useRoute();
    const car = route.params.car;
    const userId = route.params.userId;
    const sitCode = route.params.sitCode;
    const carestaurant_idr = route.params.restaurant_id;

    const [data, setData] = useState([])

    useEffect(() => {
        console.log(route.params)
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.cardPrincipal}>
                    <View style={styles.cardHeader}>
                        <Text>
                            Seu pedido
                        </Text>
                    </View>
                    <View style={styles.cardMain}>
                        <View style={styles.cupomSaida} />
                        <View
                            style={styles.cupomContainer}
                        >
                            {/* <FlatList
                                data={data}
                                // keyExtractor={car => String(car.id)}
                                renderItem={({ item: item }) => (
                                    <View >
                                        <Text >{item.dishName}</Text>
                                    </View>
                                )}
                            /> */}
                            <Text>Pedido numero #1231244124210002401</Text>
                            <Text>a</Text>

                            <View style={styles.cupomBottom}>
                                <Text style={{ fontSize: 18 }}>Total</Text>
                                <Text style={{ fontSize: 20 }}>--- R$ 20,20 ---</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBotton}>

                    </View>
                </View>
            </View>
        </View >
    );
}