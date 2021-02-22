import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const corClaro = '#86E2AB';
const corMedio = '#2D9556';
const corBranco = '#fff';


export default StyleSheet.create({



    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: corClaro,
        paddingTop: Constants.statusBarHeight + 15
    },
    containerMargin: {
        marginTop: 20,
        width: '90%',
        height: '88%',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 20,

        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3,

        elevation: 4,
        ////////////////////
    },
    contentContainer: {
        alignItems: 'center',
        backgroundColor: corBranco,
        height: '100%',
        borderRadius: 20,
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    subTitle: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 15
    },
    textInput: {
        marginTop: 30,
        backgroundColor: corClaro,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginBottom: 30,
        width: '70%',
        textAlign: 'center'
    },
    ratingContainer: {
        paddingHorizontal: 20,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e8e8e8',
        width: '100 %'

    },
    score: {
        fontWeight: 'bold',
        paddingHorizontal: 5,
        color: corBranco,
        fontSize: 20
    },
    saveButton: {
        backgroundColor: corMedio,
        padding: 7,
        borderRadius: 20,
        margin: 15,
        alignItems: 'center'
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        paddingHorizontal: 5
    },
    logoutButton: {
        backgroundColor: '#dedede',
        padding: 7,
        borderRadius: 5
    },
    containerButton: {
        margin: 10
    },
    card: {
        backgroundColor: corClaro,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    cardImage: {
        height: 50,
        width: 50
    },
    pageLogo: {
        marginTop: -60,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'blue',
        //opacity: 0.5
    },

    modal_Card: {
        height: '80%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center',
        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,

        elevation: 6,
        ////////////////////
    },
    cardSectionContainer: {
        paddingHorizontal: 20,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#e8e8e8',
        width: '100%',
    },
    touchableOpacitySection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        marginHorizontal: 0
    }

});