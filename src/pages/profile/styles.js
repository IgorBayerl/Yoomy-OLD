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
        backgroundColor: corClaro
    },
    containerMargin: {
        width: '90%',
        backgroundColor: corBranco,
        padding: 15,
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
        borderRadius: 20,
        paddingHorizontal: 20
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tag: {
        backgroundColor: corClaro,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        margin: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    score: {
        fontWeight: 'bold',
        paddingHorizontal: 5,
        color: corBranco,
        fontSize: 20
    },
    profileLogo: {
        backgroundColor: corMedio,
        height: 80,
        width: 80,
        marginTop: -50,
        marginBottom: 10,
        borderRadius: 20
    },
    followButton: {
        backgroundColor: corMedio,
        padding: 7,
        borderRadius: 20
    },
    containerButton: {
        margin: 10
    },
    card: {
        backgroundColor: corBranco,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    cardImage: {
        height: 50,
        width: 50
    },
    imageList: {
        height: 200
    },
    restaurantImages: {
        height: 200,
        width: 250
    },


});