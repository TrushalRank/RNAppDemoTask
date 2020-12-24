import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import style from './style'

const ButtonSet = ({ClickText= '', Press}) => {
    return (
        <TouchableOpacity style={style.TouchableOpacitySet} onPress={Press}>
            <Text style={style.Text}>{ClickText}</Text>
        </TouchableOpacity>
    )
}
export default ButtonSet;