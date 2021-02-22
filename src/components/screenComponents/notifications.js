import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, RefreshControl } from 'react-native';

import styles from './styles';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';


function LeftActions() {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Concluir</Text>
        </View>
    );
}

function Card() {
    return (
        <Swipeable
            renderLeftActions={LeftActions}
            renderRightActions={LeftActions}
        >
            <View style={styles.cardContainer}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => { }}
                >
                    <View style={styles.cardContent}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                style={styles.cardImage}
                            />
                            <View style={styles.cardDetails}>
                                <Text style={styles.cardTitle}>SUBWAY</Text>
                                <Text style={styles.cardTag}>description</Text>
                            </View>
                        </View>
                        <Text style={styles.notificationDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores harum perspiciatis iusto ea ut rerum odio! Ipsa sapiente minima, natus perspiciatis commodi corrupti qui suscipit eveniet. Vel, molestiae eveniet.</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Swipeable>
    );
}



const NotificationsScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Notificações</Text>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]}

                    style={styles.cardsListPrincipais}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={notification => notification}
                    renderItem={({ item }) => (
                        <Card />
                    )}
                />
            </View>
        </View>
    );
};

export default NotificationsScreen;