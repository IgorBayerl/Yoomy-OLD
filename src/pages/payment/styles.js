import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const corClaro = '#86E2AB';
const corMedio = '#2D9556';
const corBranco = '#fff';


export default StyleSheet.create({



    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: corClaro
    },
    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%'
    },
    containerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60%',
        backgroundColor: corClaro,
        paddingVertical: 10,
    },
    containerBotton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%'
    },

    camera: {
        width: '100%',
        height: '100%',

    },

    card: {
        backgroundColor: corBranco,
        width: '90%',
        alignItems: 'center',
        height: '80%',
        justifyContent: 'center',
        borderRadius: 20
    }



});