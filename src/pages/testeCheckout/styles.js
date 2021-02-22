import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    contentContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 15,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cardPrincipal: {
        backgroundColor: '#e8e8e8',
        height: '95%',
        width: '90%',
        borderRadius: 20
    },
    cardHeader: {
        // backgroundColor: 'grey',
        height: '10%',

    },
    cardMain: {
        // backgroundColor: '#dedede',
        height: '60%',
        alignItems: 'center'
    },
    cardBotton: {
        // backgroundColor: 'grey',
        height: '30%'
    },
    cupomSaida: {
        backgroundColor: 'green',
        height: 20,
        width: '95%',
        marginBottom: -10,
        borderRadius: 20

    },
    cupomContainer: {
        backgroundColor: '#c9c9c9',
        height: '95%',
        width: '90%',
        // alignItems: 'center'
    },
    cupomBottom: {
        alignItems: 'center'
    },
});