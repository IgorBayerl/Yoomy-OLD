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
    TouchableHighlight,
} from 'react-native';

import styles from './styles';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Header from '../../components/header'
import { GestureHandler } from 'expo';

import api from '../../services/api'

import { useState, useEffect } from 'react';
import getPosition from '../../functions/getCurrentPosition';


export default function Notifications() {

    const [restaurant, setRestaurant] = useState([]);
    const [userId, setUserId] = useState([]);


    ///////////////////////////////////////////////////////////////////

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        })
    }

    //////////////////////////////////////////////////////////////////


    useEffect(() => {
        loadHistory()

    }, []);

    async function loadHistory() {

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
        setUserId(Id);
        console.log(Id)
    }



    //////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////

    const [refreshing, setRefreshing] = React.useState(false)
    const [page, setPage] = React.useState('noti')

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        getPosition()

        wait(1500).then(() => {

            setRefreshing(false)

        }), [refreshing]
    })

    function LeftActions() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Concluir</Text>
            </View>
        );
    }


    const styleLeftButtonActive = { ...styles.headerButton, borderTopLeftRadius: 20, backgroundColor: '#fff' }
    const styleLeftButtonInactive = { ...styles.headerButton, borderTopLeftRadius: 20 }
    const styleRightButtonActive = { ...styles.headerButton, borderTopRightRadius: 20, backgroundColor: '#fff' }
    const styleRightButtonInactive = { ...styles.headerButton, borderTopRightRadius: 20 }



    function Card() {
        return (
            <Swipeable
                renderLeftActions={LeftActions}
                renderRightActions={LeftActions}
            >
                <View style={styles.cardContainer}>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => { }}
                    >
                        <View style={styles.cardContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    style={styles.cardImage}
                                />
                                <View style={styles.cardDetails}>
                                    <Text style={styles.cardTitle}>SUBWAY</Text>
                                    <Text style={styles.cardTag}>description</Text>
                                </View>
                            </View>
                            <Text style={styles.notificationDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores harum perspiciatis iusto ea ut rerum odio! Ipsa sapiente minima, natus perspiciatis commodi corrupti qui suscipit eveniet. Vel, molestiae eveniet.</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </Swipeable>
        );
    }
    function HistoricCard() {
        return (
            <Swipeable
                renderLeftActions={LeftActions}
                renderRightActions={LeftActions}
            >
                <View style={styles.cardContainer}>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => { }}
                    >
                        <View style={styles.cardContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    style={styles.cardImage}
                                />
                                <View style={styles.cardDetails}>
                                    <Text style={styles.cardTitle}>SUBWAY</Text>
                                    <Text style={styles.cardTag}>description</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </Swipeable>
        );
    }



    function NotificationsList() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                style={styles.cardsListPrincipais}
                showsVerticalScrollIndicator={false}
                keyExtractor={notification => notification}
                renderItem={({ item }) => (
                    <Card />
                )}
            />
        );
    }

    function HistoryList() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                style={styles.cardsListPrincipais}
                showsVerticalScrollIndicator={false}
                keyExtractor={notification => notification}
                renderItem={({ item }) => (
                    <HistoricCard />
                )}
            />
        );
    }


    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.header}>

                    <TouchableHighlight

                        style={page == 'noti' ? styleLeftButtonActive : styleLeftButtonInactive}
                        activeOpacity={0.6}
                        underlayColor="#fff"
                        onPress={() => { setPage('noti') }}>
                        <Text style={styles.title}>Notificações</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={page == 'hist' ? styleRightButtonActive : styleRightButtonInactive}
                        activeOpacity={0.6}
                        underlayColor="#fff"
                        onPress={() => { setPage('hist') }}>
                        <Text style={styles.title}>Historico</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.listContainer}>
                    {
                        page == 'noti' ?
                            <NotificationsList />
                            :
                            <HistoryList />
                    }
                </View>
            </View>
        </View>
    );
}



