import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    containerItems: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    containerItemsInput: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '40%',
        position: 'absolute',
        justifyContent: 'space-between',
        bottom: 100,
        //marginBottom: 30
    },
    textInput: {
        height: 60,
        width: 200,
        borderRadius: 15,
        paddingHorizontal: 10,
        textAlign: "center",
        marginVertical: 2,
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 25,
    },
    country: {
        height: 60,
        width: 60,
        borderRadius: 15,
        backgroundColor: '#86E2AB',
        textAlign: "center",
        textAlignVertical: 'center',
        fontSize: 20,
        marginRight: 20,
        fontWeight: 'bold'
    },
    title: {
        textAlign: "center",
        color: 'white',
        marginTop: 80,
        fontSize: 70,
        marginBottom: 10,
    },
    titleModOn: {
        textAlign: "center",
        color: 'white',
        paddingTop: Constants.statusBarHeight + 15,
        fontSize: 50,
        marginBottom: 80,
    },
    text: {
        textAlign: "center",
        color: 'white',
        width: 200,
        marginTop: 30,
        fontSize: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginVertical: 0,
    },


    button: {
        backgroundColor: '#2D9556',
        height: 50,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    modalButton: {

        backgroundColor: '#2D9556',
        height: 50,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    optionButton: {
        backgroundColor: '#2D9556',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: 'center',
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'blue',
        //opacity: 0.5
    },

    modal_Card: {
        height: '70%',
        width: '88%',
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
    modal_Card_Container: {
        justifyContent: 'space-around',
        //backgroundColor: 'blue',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    modalText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'grey',
        paddingVertical: 15,
        paddingHorizontal: 50
    },
    modalOptionButtons: {
        height: '35%',
        justifyContent: 'space-around'
    },
    sendButton: {
        backgroundColor: '#2D9556',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 30
    },
    formContainer: {
        paddingTop: 10,
        paddingBottom: 15,
        width: '100%',
        alignItems: 'center',
        //backgroundColor: 'blue',

        justifyContent: 'space-around',
        height: '85%'
    },
    headerModal: {
        width: '100%',
        alignItems: 'center',
        height: '20%',
        // backgroundColor: 'green',
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        height: '15%',
        justifyContent: 'space-around',
        paddingTop: 10
        //backgroundColor: 'grey',
    },



});