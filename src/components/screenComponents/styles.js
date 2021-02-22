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
        fontSize: 30,
        color: corBranco,
        //fontFamily: 'GoogleSans-Bold'
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
    topBarIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
        // backgroundColor: corMedio
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardMenor: {
        backgroundColor: corBranco,
        marginHorizontal: 0,
        height: 130,
        width: 130,
        padding: 8,
        borderRadius: 20,
        justifyContent: 'center',
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
        height: 65,
        width: 65,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardsListSeguindo: {
        position: 'absolute',
        height: 132,
        bottom: 15,
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
    cardTitle: {
        fontWeight: 'bold'
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
    groupPlaceHolder: {
        width: '100%'
    },
    groupPlaceHolderText: {
        padding: 20,
        fontSize: 18,
        textAlign: 'center'

    },


});