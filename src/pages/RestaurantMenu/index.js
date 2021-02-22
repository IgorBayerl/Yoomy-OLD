import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, AsyncStorage, Modal, Image, RefreshControl, TouchableHighlight } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Feather, AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import ConfirmButton from '../../components/ConfirmButton';
import NumberFormat from 'react-number-format';
import Payment from '../payment/index'

import styles from './styles';


export default function RestaurantMenu() {


    const navigation = useNavigation();
    const apiKey = '9283r9qd0w8dy27^&YH&!^F&*hashak9q99'
    function navigateToPayment() {
        navigation.navigate('Payment')
    }
    function navigateToNearby() {
        navigation.navigate('Nearby')
    }
    function navigateToTesteCheckout(car, userId, sitCode, restaurant_id) {
        navigation.navigate('TesteCheckout', { car, userId, sitCode, restaurant_id })
    }


    const [modalVisible, setModalVisible] = useState(false);
    const [carModalVisible, setCarModalVisible] = useState(false);

    const route = useRoute();

    const restaurant = route.params.restaurant;
    const userId = route.params.userId;
    const sitCode = route.params.sit_code;



    const [CategoryLIST, setCategoryLIST] = useState([{ id: '1', category: 'todos' }]);


    const [sitCodeText, setSitCodeText] = useState(sitCode)
    const [selectedDish, setSelectedDish] = useState([]);
    const [dishes, setDishes] = useState(null);
    const [categoryDishes, setCategoryDishes] = useState(dishes);
    const [tableModalAsk, setTableModalAsk] = useState(null);
    const [modalDishQuantity, setModalDishQuantity] = useState(1);
    const [car, setCar] = useState([]);
    const [paymentValue, setPaymentValue] = useState(0);
    const [isFollowingRestaurants, setIsFollowingRestaurants] = useState(false);
    const [aditionals, setAditionals] = useState(null);
    const [aditionalsCategory, setAditionalsCategory] = useState(null);
    const [aditionalsArraySTATE, setAditionalsArraySTATE] = useState([]);
    const [totalADDPrice, setTotalADDPrice] = useState(0);
    const [selectedCategoryAdditionals, setSelectedCategoryAdditionals] = useState(null);
    const [aditionalsCategoryType, setAditionalsCategoryType] = useState(0);
    const [updateState, setUpdateState] = useState(false);
    const [modalQrScanner, setModalQrScanner] = useState(false);
    const [allAditionals, setAllAditionals] = useState([]);
    const [allAditionalsCategoryes, setAllAditionalsCategoryes] = useState([]);


    let aditionalsArray = []

    async function additionals_adding(aditionals) {

        if (aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity < aditionalsArraySTATE[aditionals.dish_additional_id - 1].max_additional) {
            let tempArray = aditionalsArraySTATE
            tempArray[aditionals.dish_additional_id - 1].quantity = tempArray[aditionals.dish_additional_id - 1].quantity + 1
            console.log('-- AARRAY -- ' + JSON.stringify(aditionalsArraySTATE[aditionals.dish_additional_id - 1]))
            setTotalADDPrice(totalADDPrice + parseFloat(aditionals.dish_additional_price))
            setUpdateState(!updateState)
            setAditionalsArraySTATE(tempArray)
        }

    }
    function additionals_removing(aditionals) {
        if (aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity > 0) {
            let tempArray = aditionalsArraySTATE
            aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity = aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity - 1
            console.log('-- AARRAY -- ' + JSON.stringify(aditionalsArraySTATE[aditionals.dish_additional_id - 1]))
            setUpdateState(!updateState)
            setTotalADDPrice(totalADDPrice - parseFloat(aditionals.dish_additional_price))

        }
    }
    function additionals_seting(aditionals) {
        let tempArray = aditionalsArraySTATE
        if (tempArray[aditionals.dish_additional_id - 1].quantity == 0) {
            for (let i = 0; i <= tempArray.length - 1; i++) {
                if (tempArray[i].category_id == tempArray[aditionals.dish_additional_id - 1].category_id) {
                    tempArray[i].quantity = 0
                }
            }
            tempArray[aditionals.dish_additional_id - 1].quantity = 1
            setAditionalsArraySTATE(tempArray)
            setUpdateState(!updateState)
            setTotalADDPrice(parseFloat(aditionals.dish_additional_price))
            console.log('teste')
        } else {

        }

    }

    async function loadDishes() {
        try {

            const responseAppGetDishes = await api.post('app_get_dishes', {
                restaurant_id: restaurant.id
            })

            setDishes(Object.values((responseAppGetDishes.data[1])));
            setCategoryDishes(Object.values((responseAppGetDishes.data[1])))

            setCategoryLIST(Object.values((responseAppGetDishes.data[0].categories)));
            setAllAditionalsCategoryes(Object.values((responseAppGetDishes.data[2].categories)))
            setAllAditionals(Object.values((responseAppGetDishes.data[3])));

        } catch (error) {
            alert('loadDishes() : ' + error)
        }
    }


    async function setAditionalsOfTheDish(id) {
        try {
            const aditionalsCategoryesNew = Object.values(allAditionalsCategoryes[id - 1])

            if (allAditionals[id - 1].length > 0) {
                setAditionals(allAditionals[id - 1]);
                setTotalADDPrice(0)
                setAditionalsCategory(Object.values(aditionalsCategoryesNew))
                makingArray(allAditionals[id - 1])
                setSelectedCategoryAdditionals(allAditionals[id - 1])
                const Category = Object.values(aditionalsCategoryesNew)
                if (Category != null) {
                    selectFirstCategory(Category[0], allAditionals[id - 1])
                }
            } else {
                setAditionals(null);
                setTotalADDPrice(0)
                setAditionalsCategory(null)
                makingArray(allAditionals[id - 1])
                setSelectedCategoryAdditionals(null)
            }
        } catch (error) {
            alert('setAditionalsOfTheDish(id) : ' + error)
        }

    }

    function makingArray(aditional) {
        try {
            if (aditional != null) {
                setAditionals(aditional);

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
                setAditionalsArraySTATE(aditionalsArray)
            }

        } catch (error) {
            alert('makingArray() : ' + error)
        }
    }




    async function loadPage() {

        try {
            const response = await api.post('is_user_following_restaurant', {
                id_user: userId,
                id_restaurant: restaurant.id,
                apikey: apiKey
            })
            setIsFollowingRestaurants(response.data.response);

        } catch (error) {
            alert('loadPage() : ' + error)
        }
    }

    function filterDishes(Category) {
        console.log('filterDishes(Category) == > ' + Category)

        try {
            console.log('filtering...')
            if (Category != 'null') {
                const TestSelected = dishes.filter(function (select) {
                    return select.category == Category;
                });
                setCategoryDishes(TestSelected)
            } else {
                setCategoryDishes(dishes)
            }

        } catch (error) {
            alert('filterDishes() : ' + error)
        }
    };

    function selectFirstCategory(Category, aditionals) {
        try {

            if (Category.category != 'null') {
                console.log('okokokokokokok')
                setAditionalsCategoryType(Category.type)
                const TestSelected = aditionals.filter(function (select) {
                    return select.category == Category.category;
                });
                console.log(' ========= TestSelected ========= ')
                console.log(TestSelected)
                setSelectedCategoryAdditionals(TestSelected)
            } else {
                setSelectedCategoryAdditionals(aditionals)
            }
        } catch (error) {
            alert('selectFirstCategory() : ' + error)
        }
    };

    function filterAdditionals(Category) {
        try {
            console.log('filterAdditionals(Category) ==> ' + JSON.stringify(Category))
            if (Category.category != 'null') {
                setAditionalsCategoryType(Category.type)
                const TestSelected = aditionals.filter(function (select) {
                    return select.category == Category.category;
                });

                setSelectedCategoryAdditionals(TestSelected)
            } else {
                setSelectedCategoryAdditionals(aditionals)
            }
        } catch (error) {
            alert('filterAdditionals() : ' + error)
        }
    };


    function addToCar(dish, quantity, price) {
        try {

            const totalValue = aditionalsArraySTATE.reduce(getTotal, 0);

            function getTotal(totalValue, item) {
                return totalValue + (item.additional_value * item.quantity);
            }

            car.push(
                {
                    'dishName': dish.dish_name,
                    'quantity': quantity,
                    'value': price,
                    'totalValue': totalValue,
                    'id': car.length + 1,
                    'additionals': aditionalsArraySTATE
                }
            );
            setModalVisible(!modalVisible);
            aditionalsArray = []
            paymentValueFunction()
        } catch (error) {
            alert('addToCar() : ' + error)
        }


    };


    function totalValueAditionalAndDish() {

        const total = car[0].additionals.reduce(getTotal, 0);

        function getTotal(total, item) {
            return total + (item.additional_value * item.quantity);
        }
    };



    function paymentValueFunction() {
        const total = car.reduce(getTotal, 0);
        function getTotal(total, item) {
            return total + ((item.totalValue + item.value) * item.quantity);
        }
        setPaymentValue(total)

    };



    function removeFromCar(dish) {
        const indice = car.indexOf(dish);
        car.splice(indice, 1);
        paymentValueFunction()
        setUpdateState(!updateState)
    };

    async function userUnfollowRestaurant() {

        await api.post('user_unfollow_restaurant', {
            id_user: userId,
            id_restaurant: restaurant.id,
            apikey: apiKey
        })
        setIsFollowingRestaurants(false)

    }

    async function userFollowRestaurant() {
        await api.post('user_follow_restaurant', {
            id_user: userId,
            id_restaurant: restaurant.id,
            apikey: apiKey
        })
        setIsFollowingRestaurants(true)

    }


    function followUnfollowActions() {
        if (isFollowingRestaurants == true) {
            userUnfollowRestaurant()
        }
        if (isFollowingRestaurants == false) {
            userFollowRestaurant()
        }
    }


    ////////////////////////////// ENVIANDO PEDIDO ///////////////////////////////////



    async function makingOrder() {
        if (sitCodeText != null) {

            try {


                const response = await api.post('app_user_make_order', {
                    user_id: userId,
                    restaurant_id: restaurant.id,
                    table_id: String(sitCodeText),
                    dishes_array: car
                })
                setCar([])
                setCarModalVisible(false)
                setTableModalAsk(false)
                navigateToTesteCheckout(response, userId, sitCodeText, restaurant.id)

                alert("Pedido feito com sucesso ..")
            } catch (error) {
                alert(error)
            }
        } else {
            setTableModalAsk(!tableModalAsk)
        }
    }


    async function buttonDish(dishes) {
        await setAditionalsOfTheDish(dishes.dish_id)
        setSelectedDish(dishes);
        setModalDishQuantity(1);
        setModalVisible(true);
    }


    //////////////////////////////////////////////////////////////////////////////////


    useEffect(() => {
        loadDishes()
        loadPage()
    }, []);


    //////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////
    return (

        <View style={styles.container}>
            <View style={styles.containerMargin}>
                <View style={styles.contentContainer}>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileContainerHeader}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => navigateToNearby()}
                                >
                                    <Feather name="x" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View visible={false} style={styles.profileContainerHeader_ImageTitle}>

                                <Image
                                    style={styles.profileLogo}
                                    source={{ uri: restaurant.logo }}
                                />
                                <TouchableOpacity

                                    onPress={() => followUnfollowActions()}
                                >
                                    {isFollowingRestaurants ? <AntDesign name="heart" size={24} color="#86E2AB" /> : <AntDesign name="heart" size={24} color="#dedede" />}
                                </TouchableOpacity>
                                <Text style={styles.profileName}>{restaurant.name}</Text>
                            </View>
                            <View>
                                {car.length > 0 ? <View style={styles.notificationIndicator} /> : <View />}
                                <TouchableOpacity
                                    onPress={() => {
                                        setCarModalVisible(!carModalVisible)
                                        // console.log(car)
                                        paymentValueFunction()
                                    }}
                                >
                                    <AntDesign name="shoppingcart" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.categoryListContainer}>
                        <FlatList
                            data={CategoryLIST}
                            style={styles.categoryList}
                            horizontal={true}
                            keyExtractor={CategoryLIST => String(CategoryLIST.id)}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item: Category }) => (
                                <View style={styles.categoryContainer}>
                                    <TouchableOpacity
                                        style={styles.categoryIcon}
                                        onPress={() => {
                                            filterDishes(String(Category.category))
                                        }}
                                    >
                                        <FontAwesome5 name="hamburger" size={40} color="white" />
                                    </TouchableOpacity>
                                    <Text style={styles.categoryTitle}>{Category.category}</Text>
                                </View>
                            )}
                        />
                    </View>


                    <View style={styles.itemListContainer}>
                        <FlatList
                            data={categoryDishes}
                            style={styles.itemList}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={dishes => String(dishes.dish_id)}
                            renderItem={({ item: dishes }) => (
                                <View style={styles.itemContainer}>
                                    <TouchableOpacity
                                        style={styles.itemCard}
                                        onPress={async () => buttonDish(dishes)}
                                    >
                                        <View style={styles.itemCard_Icon}>
                                            <FontAwesome5 name="hamburger" size={40} color="white" />
                                        </View>
                                        <View style={styles.itemCard_Info}>
                                            <Text style={styles.itemCard_dish_name}>{dishes.dish_name}</Text>
                                            <Text style={styles.itemCard_category}>{dishes.category}</Text>
                                            <NumberFormat
                                                value={dishes.dish_price}
                                                displayType={'text'}
                                                decimalScale={2}
                                                fixedDecimalScale={true}
                                                prefix={'R$'}
                                                renderText={formattedValue => <Text style={styles.itemCard_dish_price}>{formattedValue}</Text>}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                    {car.length > 0 ?
                        <ConfirmButton
                            functionForComponent={() => makingOrder()}
                            value={paymentValue}
                        />
                        :
                        <View />
                    }

                </View>

                {/*  //////////////////////////////////    Dish    ////////////////////////////////// */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onBackdropPress={() => setModalVisible(!modalVisible)}
                    onRequestClose={() => { setModalVisible(!modalVisible); }}
                >
                    <View style={styles.cardModal}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{selectedDish.dish_name}</Text>
                            <View style={styles.modalHeader}>

                                <TouchableHighlight
                                    style={styles.circleButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"

                                    onPress={() => { modalDishQuantity > 0 ? setModalDishQuantity(modalDishQuantity - 1) : setModalDishQuantity(modalDishQuantity - 0) }}>
                                    <Feather name="minus" size={20} color="black" />
                                </TouchableHighlight>
                                <Text style={styles.modalQuantityNumber}>{modalDishQuantity}</Text>
                                <TouchableHighlight
                                    style={styles.circleButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => { setModalDishQuantity(modalDishQuantity + 1) }}>
                                    <Feather name="plus" size={20} color="black" />
                                </TouchableHighlight>
                            </View>
                            {/* <Text>ADICIONAIS</Text> */}


                            <View style={styles.cartegoryListContainer}>
                                {aditionalsCategory != null ?
                                    <FlatList
                                        data={aditionalsCategory}
                                        horizontal={true}
                                        style={styles.Additionals__Category__Flatlist}
                                        keyExtractor={aditionalsCategory => aditionalsCategory.id}
                                        renderItem={({ item: aditionalsCategory }) => (
                                            <View >
                                                <TouchableHighlight
                                                    style={styles.additionalsCategory__Button}
                                                    activeOpacity={0.6}
                                                    underlayColor="#DDDDDD"
                                                    onPress={() => { filterAdditionals(aditionalsCategory) }}
                                                >
                                                    <Text style={styles.additionalsCategory__Text}>   {aditionalsCategory.category}   </Text>
                                                </TouchableHighlight>

                                            </View>
                                        )}
                                    />
                                    :
                                    <Text style={{ textAlignVertical: 'center', height: '100%', fontSize: 15 }}>Nenhuma Categoria de adicionais</Text>
                                }


                            </View>
                            {aditionalsCategoryType == 1 ?
                                <View style={styles.option0_SelectDishCategoryType}>
                                    <FlatList
                                        style={styles.additional_List}
                                        data={selectedCategoryAdditionals}
                                        extraData={updateState}
                                        keyExtractor={aditionals => String(aditionals.dish_additional_id)}
                                        renderItem={({ item: aditionals }) => (
                                            <View style={styles.additional_container}>

                                                <View >

                                                    <View style={styles.additional_container_mais_e_menos}>

                                                        <TouchableHighlight
                                                            style={aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity > 0 ? styles.circleButton : { ...styles.circleButton, backgroundColor: '#dedede' }}
                                                            activeOpacity={0.6}
                                                            underlayColor="#DDDDDD"
                                                            onPress={() => { additionals_removing(aditionals) }
                                                            }>

                                                            <Feather name='minus' size={20} color="black" />
                                                        </TouchableHighlight>
                                                        <View style={{ alignItems: 'center' }}>
                                                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{aditionals.dish_additional_name}</Text>
                                                            <NumberFormat
                                                                value={aditionals.dish_additional_price}
                                                                displayType={'text'}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                prefix={'R$'}
                                                                renderText={formattedValue => <Text style={{ textAlign: 'center' }} >{formattedValue}</Text>}
                                                            />
                                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{aditionalsArraySTATE.length > 0 ? aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity : 0}</Text>

                                                        </View>


                                                        <TouchableHighlight
                                                            style={aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity < aditionalsArraySTATE[aditionals.dish_additional_id - 1].max_additional ? styles.circleButton : { ...styles.circleButton, backgroundColor: '#dedede' }}
                                                            activeOpacity={0.6}
                                                            underlayColor="#DDDDDD"
                                                            onPress={() => { additionals_adding(aditionals) }
                                                            }>
                                                            <Feather name='plus' size={20} color="black" />
                                                        </TouchableHighlight>

                                                    </View>

                                                </View>

                                            </View>
                                        )}
                                    />
                                </View>
                                :
                                aditionalsCategory != null ?

                                    <View style={styles.option0_SelectDishCategoryType}>
                                        <FlatList
                                            style={styles.additional_List}
                                            data={selectedCategoryAdditionals}
                                            extraData={selectedCategoryAdditionals}
                                            keyExtractor={aditionals => String(aditionals.dish_additional_id)}
                                            renderItem={({ item: aditionals }) => (
                                                <View style={styles.additional_container}>
                                                    <TouchableHighlight
                                                        activeOpacity={0.6}
                                                        underlayColor="#fff"
                                                        onPress={() => additionals_seting(aditionals)}
                                                    >
                                                        <View style={styles.radioSelectionContainer}>
                                                            <FontAwesome name={aditionalsArraySTATE[aditionals.dish_additional_id - 1].quantity == 0 ? "circle-o" : "circle"} size={30} color="grey" />
                                                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{aditionals.dish_additional_name}</Text>
                                                            <NumberFormat
                                                                value={aditionals.dish_additional_price}
                                                                displayType={'text'}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                prefix={'R$'}
                                                                renderText={formattedValue => <Text style={{ textAlign: 'center' }} >{formattedValue}</Text>}
                                                            />
                                                        </View>
                                                    </TouchableHighlight>

                                                </View>
                                            )}
                                        />

                                    </View>
                                    :
                                    <View style={styles.option0_SelectDishCategoryType}>

                                    </View>
                            }



                            <View style={styles.bottonDishContainer}>
                                <NumberFormat
                                    value={modalDishQuantity * (selectedDish.dish_price + totalADDPrice)}
                                    displayType={'text'}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    prefix={'R$'}
                                    renderText={formattedValue => <Text style={styles.textDishTotal}>Total : {formattedValue}</Text>}
                                />

                                <TouchableHighlight
                                    style={styles.circleButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => addToCar(selectedDish, modalDishQuantity, selectedDish.dish_price)}>

                                    <Feather name="check" size={20} color="black" />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>


                {/*  //////////////////////////////////    CAR    ////////////////////////////////// */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={carModalVisible}
                    onBackdropPress={() => setCarModalVisible(!carModalVisible)}
                    onRequestClose={() => { setCarModalVisible(!carModalVisible); }}
                >
                    <View style={styles.carCardModal}>
                        <View style={styles.carModalView}>
                            {car.length > 0 ?


                                <FlatList
                                    data={car}
                                    extraData={updateState}
                                    style={styles.carItemList}
                                    showsHorizontalScrollIndicator={true}
                                    keyExtractor={car => String(car.id)}
                                    renderItem={({ item: car }) => (
                                        <View style={styles.carCard}>

                                            <View>
                                                <View style={styles.carCardContainer}>
                                                    <Text style={styles.carItem_title}>{car.dishName} </Text>
                                                    <Text style={styles.carItem_quantity}>{car.quantity}</Text>
                                                </View>

                                                <FlatList
                                                    //data={[1, 2, 3]}
                                                    data={car.additionals}
                                                    keyExtractor={item => item.id}
                                                    renderItem={({ item: additional }) => (
                                                        <View style={styles.carCardContainer}>
                                                            {additional.quantity > 0 ? <Text style={styles.carItem_quantity}>{additional.quantity}  -  {additional.additional} </Text> : <View />}

                                                        </View>
                                                    )}

                                                />
                                                <NumberFormat
                                                    value={(car.value + car.totalValue) * car.quantity}
                                                    displayType={'text'}
                                                    decimalScale={2}
                                                    fixedDecimalScale={true}
                                                    prefix={'R$'}
                                                    renderText={formattedValue => <Text >{formattedValue}</Text>}
                                                />
                                            </View>
                                            <TouchableHighlight
                                                style={styles.carRemoveItem_button}
                                                activeOpacity={0.6}
                                                underlayColor="#fff"
                                                onPress={() => removeFromCar(car)}>
                                                <Feather name="x" size={20} color="black" />
                                            </TouchableHighlight>
                                        </View>
                                    )}
                                />
                                :
                                <View style={styles.noCarItemList}>
                                    <Text style={{ fontSize: 30, textAlign: 'center', color: 'grey' }}>
                                        Você ainda não adicionou nenhum item ao seu carrinho
                                    </Text>

                                </View>
                            }


                            <View style={styles.bottonContainer}>
                                <TouchableHighlight
                                    style={styles.circleButton}
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => setCarModalVisible(!carModalVisible)}>

                                    <Feather name="x" size={20} color="black" />
                                </TouchableHighlight>
                                <TouchableHighlight

                                    activeOpacity={0.6}
                                    underlayColor="#fff"
                                    onPress={() => { }}
                                >
                                    <NumberFormat
                                        value={paymentValue}
                                        displayType={'text'}
                                        // thousandSeparator={true}
                                        decimalScale={2}
                                        fixedDecimalScale={true}
                                        prefix={'R$'}
                                        thousandSeparator={'.'}
                                        decimalSeparator={','}
                                        renderText={formattedValue => <Text style={styles.carItem_title}>{formattedValue}</Text>}
                                    />
                                    {/* <Text style={styles.carItem_title}>Total: R$ {paymentValue} </Text> */}
                                </TouchableHighlight>
                                {/* <Text style={styles.carItem_title}>Total: R$ {paymentValue} </Text> */}
                                {car.length > 0 ?
                                    <TouchableHighlight
                                        style={styles.circleButton}
                                        activeOpacity={0.6}
                                        underlayColor="#DDDDDD"
                                        onPress={() => makingOrder()}
                                    >
                                        <Feather name="check" size={20} color="black" />
                                    </TouchableHighlight>
                                    :
                                    <TouchableHighlight
                                        style={{ ...styles.circleButton, backgroundColor: '#dedede' }}
                                        activeOpacity={0.6}
                                        underlayColor="#DDDDDD"
                                        onPress={() => makingOrder()}
                                    >
                                        <Feather name="check" size={20} color="black" />
                                    </TouchableHighlight>

                                }
                            </View>
                        </View>
                    </View>
                </Modal>
                {/*  //////////////////////////////////    ModalQR?    ////////////////////////////////// */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={tableModalAsk}
                    onBackdropPress={() => setTableModalAsk(!tableModalAsk)}
                    onRequestClose={() => { setTableModalAsk(!tableModalAsk); }}
                >
                    <View style={styles.tableModalAsk_Container}>
                        <View style={styles.tableModalAsk}>

                            <Text style={{ fontSize: 20, paddingHorizontal: 30, textAlign: 'center' }}>Insira o numero da mesa ou escaneie o QR Code</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    keyboardType={'numeric'}
                                    placeholder={'####'}
                                    placeholderTextColor={'grey'}
                                    onChangeText={text => setSitCodeText(text)}
                                    style={styles.modalAskTextInput}
                                    value={sitCodeText}
                                />
                                <TouchableHighlight
                                    activeOpacity={0.5}
                                    underlayColor="#fff"
                                    onPress={() => setModalQrScanner(!modalQrScanner)}>
                                    {/* <Feather name="check" size={20} color="black" /> */}
                                    <FontAwesome name="qrcode" size={30} color="grey" />
                                </TouchableHighlight>

                            </View>
                            <View style={{ flexDirection: 'row', height: 60, width: '100%' }}>
                                <TouchableHighlight
                                    style={{ ...styles.modalAskButton, borderBottomLeftRadius: 20 }}
                                    activeOpacity={0.6}
                                    underlayColor="#ebebeb"
                                    onPress={() => setTableModalAsk(!tableModalAsk)}>
                                    {/* <Feather name="check" size={20} color="black" /> */}
                                    <Text>Cancelar</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ ...styles.modalAskButton, borderBottomRightRadius: 20, borderLeftWidth: 1, borderColor: 'white' }}
                                    activeOpacity={0.6}
                                    underlayColor="#ebebeb"
                                    onPress={() => {
                                        if (sitCodeText != null) {
                                            makingOrder()
                                        } else {
                                            alert('Insira o numero da mesa!')
                                        }
                                    }}>
                                    <Text>Ok</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalQrScanner}
                    onRequestClose={() => setModalQrScanner(!modalQrScanner)}
                >
                    <Payment
                        functionOnPress={(sitcode) => {
                            setSitCodeText(sitcode)
                            setModalQrScanner(false)
                        }}
                    />

                </Modal>
            </View>
        </View>

    );
}

