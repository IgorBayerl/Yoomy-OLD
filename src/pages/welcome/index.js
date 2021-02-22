import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';


export default function Welcome() {

    const navigation = useNavigation();

    function navigateToSignInType() {
        console.log('SignInType');
        navigation.navigate('SignInType');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <Text style={styles.title}> YOOMY </Text>
                <View style={styles.containerItemsInput}>
                    <Text style={styles.text}> Bem vindo ao Yoomy... antes de continuar precisamos que você leia e concorde com os termos de uso </Text>
                    <Text style={styles.link}> Termos de contrato </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigateToSignInType()}
                    >
                        <Text style={styles.buttonText}> Eu concordo </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}