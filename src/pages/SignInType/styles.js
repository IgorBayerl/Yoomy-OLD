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
        position: 'absolute',
        bottom: 100
    },
    title: {
        textAlign: "center",
        color: 'white',
        marginTop: 80,
        fontSize: 80,
        marginBottom: '65%'
    },
    text: {
        textAlign: "center",
        color: 'white',
        width: 200,
        marginTop: 0
    },
    link: {
        textAlign: "center",
        color: '#8AAEF2',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        width: 200,
        marginTop: 10
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
        letterSpacing: 10,
        marginTop: 10
    },
    button: {
        backgroundColor: '#2D9556',
        height: 50,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

        //position: 'absolute',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: 'center',
    },
    buttonTextGoogle: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: 'center',
    },
    FacebookButton: {
        backgroundColor: '#3b5998',
        height: 50,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 15
    },
    GoogleButton: {
        backgroundColor: '#fff',
        height: 50,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 15
    },


});