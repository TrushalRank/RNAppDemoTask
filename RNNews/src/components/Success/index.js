import React from 'react';
import { View, Text } from 'react-native';
import { call } from 'react-native-reanimated';
import style from './style'

const Success = ({ error }) => {
    return (
        <View style={style.errorview}>
            <Text style={style.errortext}>{error}</Text>
        </View>
    )
}
export default Success;