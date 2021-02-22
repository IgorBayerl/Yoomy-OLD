import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    AsyncStorage,
    Image,
    RefreshControl,
    Alert,
} from 'react-native';

import styles from './styles';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Header from '../../components/header'

import api from '../../services/api'

import { useState, useEffect } from 'react';
import getPosition from '../../functions/getCurrentPosition';


export default function Nearby() {

    const [restaurant, setRestaurant] = useState([]);
    const [userId, setUserId] = useState([]);

    /////////////////////////////////////////////////////////////////
    async function logOut() {
        console.log('LoginnOFF')

        await AsyncStorage.removeItem('@YoomyStorage:remember_token');
        await AsyncStorage.removeItem('@YoomyPhone:phone_number');
        await AsyncStorage.removeItem('@YoomyStorage:userId');

        Alert.alert('loggedOut')
    }
    ///////////////////////////////////////////////////////////////////

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        })
    }

    //////////////////////////////////////////////////////////////////


    useEffect(() => {
        loadRestaurant();

    }, []);

    async function loadRestaurant() {

        let latitude = await AsyncStorage.getItem('@YoomyLocate:lat');
        let longitude = await AsyncStorage.getItem('@YoomyLocate:lng');

        const response = await api.post('nearby_restaurant', {
            lng: longitude,
            lat: latitude,
            apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
        })
        console.log('Load Restaurants')
        getUserId()
        setRestaurant(response.data);


    }

    async function getUserId() {
        const Id = await AsyncStorage.getItem('@YoomyStorage:userId');
        await setUserId(Id);
        console.log(Id)
    }



    //////////////////////////////////////////////////////////////////////
    const navigation = useNavigation();

    function navigateToMain() {
        navigation.navigate('Main')
    }



    async function navigateToRestaurantMenu(restaurant, user, sit_code) {
        const userId = await AsyncStorage.getItem('@YoomyStorage:userId');
        navigation.navigate('RestaurantMenu', { restaurant, userId, sit_code });
    }

    //////////////////////////////////////////////////////////////////////

    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        getPosition()

        wait(1500).then(() => {
            loadRestaurant()
            setRefreshing(false)

        }), [refreshing]
    })





    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>Restaurantes proximos</Text>
                <FlatList
                    data={restaurant}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    style={styles.cardsListPrincipais}
                    keyExtractor={restaurant => String(restaurant.id)}
                    renderItem={({ item: restaurant }) => (
                        <View style={styles.cardContainer}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => {
                                    console.log("restaurant : " + JSON.stringify(restaurant))
                                    navigateToRestaurantMenu(restaurant, userId, null)
                                }}
                            >
                                <View style={styles.cardContent}>
                                    <Image
                                        style={styles.cardImage}
                                        source={{ uri: restaurant.logo }}
                                    />
                                    <View style={styles.cardDetails}>
                                        <View style={styles.cardText}>
                                            <Text style={styles.cardTitle}>{restaurant.name}</Text>
                                            <View style={styles.cardTags}>
                                                <Text style={styles.cardTag}>{restaurant.tag_primaria}</Text>
                                                <Text style={styles.cardTag}>{restaurant.tag_secundaria}</Text>
                                            </View>
                                            <View style={styles.cardNota}>
                                                <Feather name="star" size={25} color="white" />
                                                <Text style={styles.cardNota_Nota}>{restaurant.score}</Text>
                                                <Text style={styles.cardNota_Avaliations}>{restaurant.number_ratings} avaliações</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}