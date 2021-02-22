import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const corClaro = '#86E2AB';
const corMedio = '#2D9556';
const corBranco = '#fff';


// const corClaro = '#ed8c32';
// const corMedio = '#2D9556';
// const corBranco = '#fff';


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 15,
        backgroundColor: corClaro
    },

    content: {
        //marginTop: 0,
        backgroundColor: corBranco,
        marginHorizontal: '5%',
        borderRadius: 20,
        height: '65 %',
        position: 'relative',
        top: -65,
        left: 0,
        justifyContent: 'space-evenly',
        paddingBottom: 0,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },

    cardsListPrincipais: {
        //flexBasis: 0,
        //height: 50,
        //justifyContent: 'space-between',
        //backgroundColor: 'blue'
    },
    cardContainer: {
        paddingHorizontal: 12,
        paddingTop: 11
    },
    card: {
        backgroundColor: corClaro,
        marginTop: 0,
        marginHorizontal: 0,
        padding: 8,
        alignItems: 'center',
        //height: 120,
        height: 120,
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    cardMenorContainer: {
        marginHorizontal: 8,
    },
    cardMenor: {
        backgroundColor: corBranco,
        marginHorizontal: 0,
        height: 100,
        width: 100,
        padding: 8,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',

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
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cardMenorContent: {
        //justifyContent: 'flex-start',
        marginBottom: 0,
        width: '100%',
        alignItems: 'center'
    },
    cardImage: {
        backgroundColor: corMedio,
        height: 105,
        width: 105,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardDetails: {
        justifyContent: 'space-between',
        width: '65%',
        marginLeft: 5
    },
    cardMenorImage: {
        backgroundColor: corClaro,
        height: 55,
        width: 55,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardsListSeguindo: {
        position: 'absolute',
        height: 108,
        bottom: 50,
        marginBottom: 8
        // backgroundColor: 'blue'
    },

    bottonNavigator: {
        //backgroundColor: '#2D9556',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 5,
        left: 0,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    qrButton: {
        //backgroundColor: '#2D9556',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 10,
        left: 0,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },

    buttonHolding: {
        backgroundColor: corBranco,
        height: 45,
        width: 350,
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        paddingHorizontal: 15,
        height: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 18,
        color: 'grey'
    },
    cardTags: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardTag: {
        backgroundColor: corBranco,
        // width: '30%',
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 25,
        marginVertical: 5,
        marginRight: 5,
        paddingHorizontal: 7
    },
    cardNota: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardNota_Nota: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 5,
        fontSize: 20
    },
    cardNota_Avaliations: {
        color: 'black',
        paddingHorizontal: 5,
        fontSize: 15
    },


});