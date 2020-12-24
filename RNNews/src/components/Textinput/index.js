import React from 'react';
import { View, Text, TextInput, } from 'react-native';
import styles from './style'

const Input = ({ valueText = '', value , placeholderget = '', onChangeTextValue, autoCompleteType, secureTextEntry, keyboardType, onBlur }) => {
    return (
        <View>
            {/* <Text style={styles.textstyle}>{valueText}</Text> */}
            <TextInput style={styles.textinputstyle}
                value={value}
                // onChangeText={(text)=>onChangeText(text)}
                onChangeText={onChangeTextValue}
                placeholder={placeholderget}
                autoCompleteType={autoCompleteType}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onBlur={onBlur}>
                </TextInput>
                
        </View>
    )
}

export default Input;