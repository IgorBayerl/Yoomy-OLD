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
        marginVertical: 0,
        backgroundColor: '#86E2AB',
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
        fontSize: 80,
        marginBottom: 80,
    },
    text: {
        textAlign: "center",
        color: 'white',
        width: 200,
        marginTop: 30
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
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: 'center',
    },




});