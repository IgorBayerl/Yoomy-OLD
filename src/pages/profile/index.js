import React from 'react';
import { View, Text, AsyncStorage, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Feather, AntDesign } from '@expo/vector-icons';



import styles from './styles';


export default function profile() {

    const route = useRoute();
    const apiKey = '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'

    const restaurant = route.params.restaurant;
    const userId = route.params.user;

    const [restaurantImages, setRestaurantImages] = useState([]);

    const [isFollowingRestaurants, setIsFollowingRestaurants] = useState(false);

    async function loadPage() {

        const response = await api.post('is_user_following_restaurant', {
            id_user: userId,
            id_restaurant: restaurant.id,
            apikey: apiKey
        })
        setIsFollowingRestaurants(response.data.response);
        loadImages()
        console.log(`User ${userId} is following restaurant ${restaurant.id} : ${response.data.response}`);
    }

    async function loadImages() {
        console.log(restaurant.id)
        const response = await api.post('get_photos_restaurant', {
            id: restaurant.id,
        })
        setRestaurantImages(response.data);
    }

    async function userUnfollowRestaurant() {

        await api.post('user_unfollow_restaurant', {
            id_user: userId,
            id_restaurant: restaurant.id,
            apikey: apiKey
        })
        setIsFollowingRestaurants(false)
        console.log(`unfollowing  ${restaurant.name}`);
    }

    async function userFollowRestaurant() {
        await api.post('user_follow_restaurant', {
            id_user: userId,
            id_restaurant: restaurant.id,
            apikey: apiKey
        })
        setIsFollowingRestaurants(true)
        console.log(`Following  ${restaurant.name}`);
    }


    function followUnfollowActions() {
        if (isFollowingRestaurants == true) {
            userUnfollowRestaurant()
        }
        if (isFollowingRestaurants == false) {
            userFollowRestaurant()
        }
    }

    useEffect(() => {
        loadPage();
    }, []);

    /////////////////////////////////////////////////////////////////

    return (

        <View style={styles.container}>
            <View style={styles.containerMargin}>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.profileLogo}
                        source={{ uri: restaurant.logo }}
                    />
                    <Text style={styles.profileName}>{restaurant.name}</Text>
                    <View style={styles.tagContainer}>

                        <Text style={styles.tag}>
                            {restaurant.tag_primaria}
                        </Text>
                        <Text style={styles.tag}>
                            {restaurant.tag_secundaria}
                        </Text>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity

                            onPress={() => followUnfollowActions()}
                        >
                            {isFollowingRestaurants ? <AntDesign name="heart" size={24} color="#86E2AB" /> : <AntDesign name="heart" size={24} color="#dedede" />}
                        </TouchableOpacity>

                    </View>
                    <View style={styles.ratingContainer}>
                        <Feather name="star" size={30} color="gray" />
                        <Text style={styles.score}>{restaurant.score}</Text>
                        <Text>{restaurant.number_ratings} Avaliações</Text>
                    </View>
                    <Text>
                        {restaurant.description}
                    </Text>


                    <FlatList
                        data={restaurantImages}
                        horizontal={true}
                        keyExtractor={restaurantImages => String(restaurantImages.photos)}
                        renderItem={({ item: restaurantImages }) => (
                            <View style={styles.cardContainer}>
                                <Image
                                    style={styles.restaurantImages}
                                    source={{ uri: restaurantImages.photourl }}
                                />
                            </View>
                        )}
                    />

                </View>
            </View>
        </View>
    );
}