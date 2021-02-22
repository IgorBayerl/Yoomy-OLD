import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    AsyncStorage,
    Image,
    RefreshControl,
    Modal,
} from 'react-native';
import styles from './styles';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import NearbyButton from '../../components/nearbyButton'
import QRButton from '../../components/QRButton'
import ClockButton from '../../components/ClockButton'
import ModalAwaitingOrders from '../../components/ModalAwaitingOrders'
import Payment from '../payment/index'


import getPosition from '../../functions/getCurrentPosition'




export default function Main() {

    const [modalQrScanner, setModalQrScanner] = React.useState(false)
    const [modalAwaitingOrders, setModalAwaitingOrders] = React.useState(false)


    const navigation = useNavigation();

    function navigateToNearby() {
        getPosition();
        navigation.navigate('Nearby')
    }

    function navigateToPayment() {
        navigation.navigate('Payment')
    }


    function navigateToProfile(restaurant, user) {
        navigation.navigate('Profile', { restaurant, user });
    }


    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        })
    }

    ///////////////////////////////////////////////////////////////////

    const [refreshing, setRefreshing] = React.useState(false)

    const onRefresh = React.useCallback(() => {
        try {
            setRefreshing(true)
            getPosition()
            onPageLoad();
            loadAwaitingOrders();

            wait(1500).then(() => {
                loadRestaurantGroup()
                loadFollowingRestaurants()
                setRefreshing(false)
                loadAwaitingOrders();

            }), [refreshing]
        } catch (error) {
            alert('onRefresh() : ' + error)
        }
    })


    //////////////////////////////////////////////////////////////



    const [restaurantGroup, setRestaurantGroup] = useState([]);

    async function loadRestaurantGroup() {
        try {
            let latitude = await AsyncStorage.getItem('@YoomyLocate:lat');
            let longitude = await AsyncStorage.getItem('@YoomyLocate:lng');

            const response = await api.post('nearby_group_restaurant', {
                lng: longitude,
                lat: latitude,
                apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
            })
            //console.log(response.data)
            setRestaurantGroup(response.data);

        } catch (error) {
            alert('loadRestaurantGroup() : ' + error)
        }

    }



    /////////////////////////////////////////////////////////////////
    const [followingRestaurants, setFollowingRestaurants] = useState([]);


    async function loadFollowingRestaurants() {

        try {
            const userId = await AsyncStorage.getItem('@YoomyStorage:userId');
            console.log(userId)

            const response = await api.post('list_followed_restaurants', {
                id_user: userId,
                apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
            })

            setFollowingRestaurants(response.data);


            //console.log(response.data);

        } catch (error) {
            alert('loadFollowingRestaurants() : ' + error)
        }

    }

    const [awaitingOrders, setAwaitingOrders] = useState([]);
    async function loadAwaitingOrders() {

        try {
            const userId = await AsyncStorage.getItem('@YoomyStorage:userId');

            const response = await api.post('check_user_order', {
                id_user: userId,
                apikey: '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
            })

            setAwaitingOrders(response.data);
            // console.log(response.data);

        } catch (error) {
            alert('loadFollowingRestaurants() : ' + error)
        }

    }

    /////////////////////////////////////////////////////////////////
    const [userId, setUserId] = useState([]);
    async function onPageLoad() {
        const Id = await AsyncStorage.getItem('@YoomyStorage:userId');
        setUserId(Id);
    }

    async function getOldInformation() {
        try {

            const Old_RestaurantGroup = await AsyncStorage.getItem('@YoomyStorage:Old_RestaurantGroup');
            const Old_FollowingRestaurants = await AsyncStorage.getItem('@YoomyStorage:Old_FollowingRestaurants');
            if (Old_RestaurantGroup && Old_FollowingRestaurants == null) {
                setRestaurantGroup(JSON.parse(Old_RestaurantGroup));
                setFollowingRestaurants(JSON.parse(Old_FollowingRestaurants));
                console.log('Get Old Information')
            }
        } catch (error) {
            alert('getOldInformation() ' + error)
        }
    }

    async function saveNewOldInformation() {
        try {
            await AsyncStorage.multiSet([
                ['@YoomyStorage:Old_RestaurantGroup', JSON.stringify(restaurantGroup)],
                ['@YoomyStorage:Old_FollowingRestaurants', JSON.stringify(followingRestaurants)]
            ]);
            console.log('Save Old Information')
        } catch (error) {
            alert('saveNewOldInformation() ' + error)
        }
    }


    useEffect(() => {
        getOldInformation();
        onPageLoad();
        getPosition();
        loadRestaurantGroup();
        loadFollowingRestaurants();
        loadAwaitingOrders();
        saveNewOldInformation();
    }, []);




    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {restaurantGroup.length === 0 && (
                    <FlatList
                        data={[1]}
                        style={styles.cardsListPrincipais}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        renderItem={() => (
                            <View
                                style={styles.groupPlaceHolder}
                            >
                                <Text style={styles.groupPlaceHolderText}>Nenhum restaurante destaque na sua região</Text>
                            </View>
                        )}
                    />


                )}
                {restaurantGroup.length > 0 && (
                    <FlatList
                        data={restaurantGroup}
                        style={styles.cardsListPrincipais}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        keyExtractor={restaurantGroup => String(restaurantGroup.id)}
                        renderItem={({ item: restaurantGroup }) => (
                            <View style={styles.cardContainer}>
                                <TouchableOpacity
                                    style={styles.card}
                                    onPress={() => navigateToProfile(restaurantGroup, userId)}
                                >
                                    <View style={styles.cardContent}>
                                        <Image
                                            style={styles.cardImage}
                                            source={{ uri: restaurantGroup.logo }}
                                        />
                                        <View style={styles.cardDetails}>
                                            <View style={styles.cardText}>
                                                <Text style={styles.cardTitle}>{restaurantGroup.name}</Text>
                                                <View style={styles.cardTags}>
                                                    <Text style={styles.cardTag}>{restaurantGroup.tag_primaria}</Text>
                                                    <Text style={styles.cardTag}>{restaurantGroup.tag_secundaria}</Text>
                                                </View>
                                                <View style={styles.cardNota}>
                                                    <Feather name="star" size={25} color="white" />
                                                    <Text style={styles.cardNota_Nota}>{restaurantGroup.score}</Text>
                                                    <Text style={styles.cardNota_Avaliations}>{restaurantGroup.number_ratings} avaliações</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                )}




            </View>

            <FlatList
                data={followingRestaurants}
                style={styles.cardsListSeguindo}
                horizontal={true}
                keyExtractor={followingRestaurants => String(followingRestaurants.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item: followingRestaurants }) => (
                    <View style={styles.cardMenorContainer}>
                        <TouchableOpacity
                            style={styles.cardMenor}
                            onPress={() => navigateToProfile(followingRestaurants, userId)}
                        >
                            <View style={styles.cardMenorContent}>
                                <Image
                                    style={styles.cardMenorImage}
                                    source={{ uri: followingRestaurants.logo }}
                                />
                                <View style={styles.cardMenorText}>
                                    <Text> {followingRestaurants.name}  </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalQrScanner}
                onRequestClose={() => setModalQrScanner(!modalQrScanner)}
            >
                <Payment
                    functionOnPress={() => setModalQrScanner(false)}
                />

            </Modal>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalAwaitingOrders}
                onRequestClose={() => setModalAwaitingOrders(!modalAwaitingOrders)}
            >
                <ModalAwaitingOrders
                    data={awaitingOrders}
                    functionOnPress={() => setModalAwaitingOrders(false)}
                />

            </Modal>
            <QRButton
                functionOnPress={() => setModalQrScanner(true)}
            />
            <NearbyButton />
            {awaitingOrders.length > 0 ? <ClockButton functionOnPress={() => setModalAwaitingOrders(true)} /> : <View style={{ position: "absolute" }} />}
        </View>
    );
}