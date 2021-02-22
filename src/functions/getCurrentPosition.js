
import { AsyncStorage } from 'react-native';

export default function getPosition() {
    navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
            await AsyncStorage.multiSet([
                ['@YoomyLocate:lat', JSON.stringify(latitude)],
                ['@YoomyLocate:lng', JSON.stringify(longitude)]
            ]);
        }, //sucesso
        () => { console.log('erro ao atualizar a localização') }, //erro
        {
            timeout: 2000,
            enableHighAccuracy: true,
            maximumAge: 1000,
        }
    );
};






