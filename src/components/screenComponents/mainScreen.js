import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    AsyncStorage,
    Image,
    RefreshControl,
} from 'react-native';
import styles from './styles';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import api from '../../services/api'
import { useState, useEffect } from 'react';
import NearbyButton from '../../components/nearbyButton'
import getPosition from '../../functions/getCurrentPosition'




const MainScreen = () => {

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        })
    }

    async function onPageLoad() {

    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        getPosition()
        onPageLoad();

        wait(1500).then(() => {
            loadRestaurantGroup()
            loadFollowingRestaurants()
            setRefreshing(false)

        }), [refreshing]
    })


    const [switchEnable, setSwitchEnable] = React.useState(false)
    const [userName, setUserName] = React.useState('')
    const [webViewActive, setWebViewActive] = React.useState(false)
    const [page, setPage] = useState('main');
    const [refreshing, setRefreshing] = React.useState(false)
    const [restaurantGroup, setRestaurantGroup] = useState([]);
    const [followingRestaurants, setFollowingRestaurants] = useState([]);
    const [userId, setUserId] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.topBarIcons_Icon}
                    onPress={() => setPage('notifications')}
                >
                    <Feather name="bell" size={30} color="grey" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setPage('main') }}
                >
                    <View>
                        <Text style={styles.topBarTitle}> {page} </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.topBarIcons_Icon}
                    onPress={() => setPage('settings')}
                >
                    <Feather name="settings" size={30} color="grey" />
                </TouchableOpacity>
            </View>
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
            <NearbyButton />
        </View>
    );
};

export default MainScreen;