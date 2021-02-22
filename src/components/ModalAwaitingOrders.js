import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, AsyncStorage, StyleSheet, FlatList, Text, TouchableHighlight } from 'react-native';
import NumberFormat from 'react-number-format';
// import styles from './styles';

const styles = StyleSheet.create({

    containerMaster: {
        // backgroundColor: '#dedede',
        flex: 1,
        // borderRadius: 10,
        // width: 
    },
    container: {
        // backgroundColor: 'blue',
        paddingHorizontal: 15,
        paddingVertical: 4,
    },
    card: {
        backgroundColor: '#86E2AB',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5
    },
    card_fechado: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }


});



const ModalAwaitingOrders = (props) => {
    const data = props.data

    const [array, setArray] = useState(data)

    function activateCard(order) {
        try {
            
            for (let i = 0; i < aditional.length; i++) {

                aditionalsArray.push({
                    "id": String(i + 1),
                    "quantity": 0,
                    "category": aditional[i].category,
                    "category_id": aditional[i].category_id,
                    "type": aditional[i].type,
                    "max_additional": aditional[i].max_additional,
                    "additional": String(aditional[i].dish_additional_name),
                    "additional_value": String(aditional[i].dish_additional_price)
                })

            }
            

        } catch (error) {
            alert('makingArray() : ' + error)
        }
    }



    return (
        <View style={styles.containerMaster}>
            <View style={styles.topBar}>
                <TouchableHighlight
                    style={styles.cardMenor}
                    activeOpacity={0.6}
                    underlayColor="#fff"
                    onPress={() => {
                        props.functionOnPress()
                        console.log(array)
                    }}
                >
                    <Text style={styles.title}>
                        {"<--"}
                    </Text>
                </TouchableHighlight>
                <Text style={styles.title}>
                    Seus pedidos em andamento!
                        </Text>

            </View>
            <FlatList
                data={array}
                keyExtractor={data => String(data.order_id)}
                renderItem={({ item: order }) => (
                    <View style={styles.container}>
                        <TouchableHighlight
                            style={styles.cardMenor}
                            activeOpacity={0.6}
                            underlayColor="#fff"
                            onPress={() => {
                                activateCard(order)
                            }}
                        >



                            <View style={styles.card}>
                                {order.ativo == 0 ?
                                    <View style={styles.card_fechado}>
                                        <Text style={{ fontWeight: 'bold' }}> {order.name}  </Text>
                                        <Text> {order.order}  </Text>
                                        <NumberFormat
                                            value={order.order_value}
                                            displayType={'text'}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            prefix={'R$ '}
                                            renderText={formattedValue => <Text >{formattedValue}</Text>}
                                        />
                                    </View>
                                    :
                                    <View style={styles.card_fechado}>

                                        <Text style={{ fontWeight: 'bold' }}> {order.name}  </Text>

                                        <View>
                                            <Text> {order.order}  </Text>
                                            <Text>Mesa {order.table_id}  </Text>
                                            <Text>Quantidade {order.quantity}  </Text>
                                        </View>
                                        <NumberFormat
                                            value={order.order_value}
                                            displayType={'text'}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            prefix={'R$ '}
                                            renderText={formattedValue => <Text >{formattedValue}</Text>}
                                        />
                                    </View>
                                }


                            </View>
                        </TouchableHighlight>
                    </View>
                )}
            />
        </View>
    );
};

export default ModalAwaitingOrders;