import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

const Card = () => {
    return (
        <View>
            <TouchableOpacity >
                <View >
                    <View >
                        <View>
                            <Text >Burger King</Text>
                            <View >
                                <Text >natural</Text>
                                <Text >vaca</Text>
                            </View>
                            <View >

                                <Text >4.8</Text>
                                <Text >2mil avaliações</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Card;