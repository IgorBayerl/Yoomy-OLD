import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


const AppStack = createStackNavigator();

import Login from './pages/login';
import Confirm from './pages/confirm';
import Main from './pages/main';
import Profile from './pages/profile';
import Welcome from './pages/welcome';
import Nearby from './pages/nearby';
import Config from './pages/config';
import RestaurantMenu from './pages/RestaurantMenu';
import SignInType from './pages/SignInType';
import Payment from './pages/payment';
import Notifications from './pages/notifications';
import StartPage from './pages/startPage';
import TesteCheckout from './pages/testeCheckout';



export default function Routes() {



    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);




    async function veryfyUserLogin() {
        const userId = await AsyncStorage.getItem('@YoomyStorage:userId');
        //const userToken = await AsyncStorage.getItem('@YoomyStorage:remember_token')
        setUserToken(userId)
    }

    ///////////////////////////////////
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (isLoading) setIsLoading(false);
    }




    ///////////////////////////////////
    useEffect(() => {
        veryfyUserLogin()
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    // function Home(){
    //     return (
    //         <NavigationContainer>
    //             <AppStack.Navigator screenOptions={{ headerShown: false }}>
    //                 <AppStack.Screen name="Main" component={Main} />
    //                 <AppStack.Screen name="Config" component={Config} />
    //                 <AppStack.Screen name="Notifications" component={Notifications} />
    //             </AppStack.Navigator>
    //         </NavigationContainer>
    //     );
    // }



    if (userToken != null) {
        return (
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="Main" component={Main} />
                    <AppStack.Screen name="Profile" component={Profile} />
                    <AppStack.Screen name="Nearby" component={Nearby} />
                    <AppStack.Screen name="Config" component={Config} />
                    <AppStack.Screen name="RestaurantMenu" component={RestaurantMenu} />
                    <AppStack.Screen name="TesteCheckout" component={TesteCheckout} />
                    <AppStack.Screen name="Payment" component={Payment} />
                    <AppStack.Screen name="Notifications" component={Notifications} />
                </AppStack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="StartPage" component={StartPage} />
                    <AppStack.Screen name="TesteCheckout" component={TesteCheckout} />
                    <AppStack.Screen name="SignInType" component={SignInType} />
                    <AppStack.Screen name="Login" component={Login} />
                    <AppStack.Screen name="Confirm" component={Confirm} />
                    <AppStack.Screen name="Main" component={Main} />
                    <AppStack.Screen name="Profile" component={Profile} />
                    <AppStack.Screen name="Nearby" component={Nearby} />
                    <AppStack.Screen name="Config" component={Config} />
                    <AppStack.Screen name="RestaurantMenu" component={RestaurantMenu} />
                    <AppStack.Screen name="Payment" component={Payment} />
                    <AppStack.Screen name="Notifications" component={Notifications} />

                </AppStack.Navigator>
            </NavigationContainer>
        );

    }




}