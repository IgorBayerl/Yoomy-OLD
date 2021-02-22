import React from 'react';
import { View, Text, AsyncStorage, Image, Alert, TextInput, Switch, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';
import Header from '../../components/header'
import { WebView } from 'react-native-webview';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';




const SettingsScreen = () => {


    const [switchEnable, setSwitchEnable] = React.useState(false)
    const [userName, setUserName] = React.useState('')
    const [webViewActive, setWebViewActive] = React.useState(false)


    return (
        <View style={styles.containerMargin}>
            <View style={styles.contentContainer}>
                <Feather
                    style={styles.pageLogo}
                    name="settings"
                    size={80}
                    color="grey"
                />

                <Text style={styles.profileName}>Configurações</Text>
                <Text style={styles.subTitle}>Nome de usuario</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={''}
                    onChangeText={text => setUserName(text)}
                    value={userName}
                >
                </TextInput>

                <View style={styles.ratingContainer}>
                    <Text >Notificações</Text>
                    <Switch
                        value={switchEnable}
                        onValueChange={(value) => setSwitchEnable(value)}
                        trackColor={{ true: '#86E2AB' }}
                    />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => openWebView()}
                    >
                        <Entypo name="credit-card" size={60} color="white" />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => navigateToUni()}
                    >
                        <Text style={styles.saveButtonText}>MainUni</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => logOutMessage()}
                    >
                        <Feather name="log-out" size={35} color="white" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default SettingsScreen;