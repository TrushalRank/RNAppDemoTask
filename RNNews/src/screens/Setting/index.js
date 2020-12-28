import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import style from './style'
import { Input, ButtonSet, ErrorSet } from '../../components/index'
import { validateEmail } from '../../common/helper/common'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class login extends React.Component {
    constructor() {
        super()
        this.state = { email: "", error: '', errorshow: false }
    }

    render() {
        return (
            <SafeAreaView style={style.info}>
                <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                    <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={[style.info, {}]}>
                            <TouchableOpacity style={style.btn} onPress={() => this.props.navigation.navigate('profile')}>
                                <Text style={[style.falsebtntext, { padding: wp('5%'), }]}>Edit profile</Text></TouchableOpacity>
                            <TouchableOpacity style={style.btn}>
                                <Text style={[style.falsebtntext, { padding: wp('5%'), }]}>Recommended list</Text></TouchableOpacity>
                            <TouchableOpacity style={style.btn}onPress={() => this.props.navigation.navigate('changedefultsetting')}>
                                <Text style={[style.falsebtntext, { padding: wp('5%'), }]}>Change default settings</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView >
        )
    }
}

