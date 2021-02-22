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
        backgroundColor: corClaro,
        // 
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
        // marginHorizontal: '7%',
        // paddingHorizontal: 5,
        flex: 1,
        width: '90%',


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


    cardContainer: {
        //paddingHorizontal: 15,
        //paddingVertical: 10
        marginTop: 15
    },
    card: {
        backgroundColor: corClaro,
        marginTop: 0,
        marginHorizontal: 0,
        padding: 5,
        alignItems: 'center',
        //height: 130,
        justifyContent: 'space-between',
        borderRadius: 20,


    },

    cardContent: {
        //flexDirection: 'row',
        //backgroundColor: 'blue',
        justifyContent: 'space-between',
        width: '100%',
        //height: '100%'
    },
    cardImage: {
        backgroundColor: corMedio,
        height: 52,
        width: 52,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardDetails: {
        justifyContent: 'space-between',
        width: '80%'
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
    notificationDescription: {
        padding: 5
    },
    title: {
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%'
    },
    headerButton: {
        backgroundColor: '#e8e8e8',
        height: '100%',
        // flex: 1,
        justifyContent: 'center',
        width: '50%',
        alignItems: 'center'
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 10
        // backgroundColor: 'blue'
    },



});