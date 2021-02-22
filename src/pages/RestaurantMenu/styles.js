import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const corClaro = '#86E2AB';
const corMedio = '#2D9556';
const corBranco = '#fff';


export default StyleSheet.create({



    container: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: corClaro
    },
    containerMargin: {
        marginTop: Constants.statusBarHeight + 35,
        height: '89%',
        width: '90%',
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
        height: '100%'
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
        marginTop: -35,
        marginBottom: 10,
        borderRadius: 20
    },
    followButton: {
        backgroundColor: corMedio,
        padding: 7,
        borderRadius: 20
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: corBranco,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',

    },
    cardImage: {
        height: 50,
        width: 50
    },
    cardModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: corBranco,
        borderRadius: 20,
        paddingTop: 20,
        alignItems: "center",
        height: '75%',
        width: "92%",
        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,

        elevation: 10,
        ////////////////////
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    circleButton: {
        backgroundColor: '#86E2AB',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        height: '20%',
        alignItems: 'center',
        width: '100%'
    },
    categoryListContainer: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
    },
    categoryList: {
        marginTop: 5,
        //width: '100%',
        //backgroundColor: '#E4E4E4',
        paddingVertical: 10,
    },
    categoryContainer: {
        //backgroundColor: 'grey',
        marginHorizontal: 8,
        alignItems: 'center',
        width: 80
    },
    categoryIcon: {
        backgroundColor: corClaro,
        padding: 12,
        borderRadius: 20
    },
    itemListContainer: {
        width: '100%',
        height: '60%'
    },
    itemList: {
        // backgroundColor: 'grey',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 2
    },
    itemCard: {
        backgroundColor: corClaro,
        padding: 12,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'

    },
    itemCard_Icon: {
        width: '20%',
        //alignItems: 'center'
    },
    itemCard_Info: {
        paddingHorizontal: 5,
        width: '80%',
    },
    itemContainer: {
        marginVertical: 5
    },
    profileContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: 'blue',
        width: '90%'
    },
    profileContainerHeader_ImageTitle: {
        marginHorizontal: 25,
        alignItems: 'center'
    },
    modalQuantityNumber: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    notificationIndicator: {
        backgroundColor: '#de2424',
        width: 10,
        height: 10,
        borderRadius: 5,
        position: "absolute",
        top: 0,
        right: -5
    },
    carItemList: {
        height: 150,
        width: '100%',
        //backgroundColor: corClaro,
    },
    noCarItemList: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
        //backgroundColor: corClaro,
    },
    carCardModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    carModalView: {
        margin: 20,
        backgroundColor: corBranco,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        height: '98%',
        width: "90%",
        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 15,

        elevation: 15,
        ////////////////////
    },



    carCard: {
        //backgroundColor: '#dedede',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        //height: 110,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginVertical: 5,
        paddingBottom: 5
    },


    carItem_title: {
        fontWeight: 'bold',
        fontSize: 20

    },
    carItem_quantity: {
        color: 'grey'
    },
    carItem_value: {

    },
    carRemoveItem_button: {
        backgroundColor: '#dedede',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    carCardContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

    itemCard_dish_name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    itemCard_category: {},
    itemCard_dish_price: {
        fontWeight: 'bold',
    },
    categoryTitle: {
        width: '100%',
        textAlign: 'center'
    },


    additional_container: {
        flex: 1,
        // backgroundColor: 'yellow',
        borderTopWidth: 1,
        borderColor: '#dedede',
        justifyContent: 'center',
        // marginVertical: 10,
        paddingVertical: 10

    },


    additional_List: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },
    additional_container_mais_e_menos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'gray'
    },
    additionalsCategory__Button: {
        padding: 5,
        backgroundColor: corClaro,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 80,
        // fontSize: 17
    },
    additionalsCategory__Text: {
        fontSize: 17,
        fontWeight: "bold"
    },
    tableModalAsk_Container: {
        // flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent: "flex-end"
        // backgroundColor: 'blue'

    },
    tableModalAsk: {
        margin: 20,
        backgroundColor: corBranco,
        borderRadius: 20,
        // padding: 20,
        alignItems: "center",
        height: '40%',
        width: "91%",
        paddingTop: 20,

        justifyContent: 'space-between',
        ////////////////////
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.30,
        shadowRadius: 15,

        elevation: 15,
        ////////////////////
    },
    Additionals__Category__Flatlist: {
        //backgroundColor: "blue",

        paddingTop: 5
    },
    modalAskButton: {
        width: '50%',
        backgroundColor: '#dedede',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        // height: '20%',

    },
    modalAskTextInput: {
        borderColor: '#dedede',
        borderWidth: 3,
        padding: 10,
        borderRadius: 15,
        width: '60%',
        textAlign: 'center',
        fontSize: 20,
        marginRight: 20
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
    bottonDishContainer: {
        backgroundColor: '#e9e9e9',
        width: '100%',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingBottom: 15,
        position: 'relative',

    },
    textDishTotal: {
        fontSize: 20,
        paddingVertical: 10
    },
    cartegoryListContainer: {
        height: 55,
        width: '100%',
        backgroundColor: '#e9e9e9',
        marginVertical: 10,
        alignItems: 'center',
    },
    option0_SelectDishCategoryType: {
        width: '100%',
        height: '52%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioSelectionContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5
    },


});