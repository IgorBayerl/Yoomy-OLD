import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const corClaro = '#86E2AB';
const corMedio = '#2D9556';
const corBranco = '#fff';

export default StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: corClaro
    },
    topBar: {
        top: Constants.statusBarHeight + 5,
        height: 40,
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        //backgroundColor: '#de2424',
        position: 'absolute'
    },
    topBarTitle: {
        fontSize: 40,
        color: 'white'
    },
    content: {
        marginTop: 50,
        backgroundColor: corBranco,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginHorizontal: '7%',

        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        ////////////////////

    },
    topBarIcons: {
        flexDirection: 'row'
    },
    topBarIcons_Icon: {
        height: 40,
        width: 40,
        borderRadius: 15,
        backgroundColor: corBranco,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardsListPrincipais: {
        height: '50%',
    },
    cardContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    card: {
        backgroundColor: corClaro,
        marginTop: 0,
        marginHorizontal: 0,
        padding: 5,
        alignItems: 'center',
        height: 100,
        justifyContent: 'space-between',
        borderRadius: 20,

        // ////////////////////
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,

        // elevation: 6,
        // ////////////////////
    },

    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    },
    cardImage: {
        backgroundColor: corMedio,
        height: 90,
        width: 90,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardDetails: {
        justifyContent: 'space-between',
        width: '65%'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center'
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


    cardTitle: {
        fontWeight: 'bold'
    },
    cardTags: {
        flexDirection: 'row'
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

    title: {
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        //paddingHorizontal: 93,
        width: 340
    },



    bottonNavigator: {
        //backgroundColor: '#2D9556',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },

    buttonHolding: {
        backgroundColor: corClaro,
        height: 45,
        width: 200,
        borderRadius: 20
    },



});