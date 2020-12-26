import React from 'react';
import { Image, Text, AppState, SafeAreaView, Alert, TouchableOpacity, View, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import image from '../../common/helper/Images'
import style from './style'
import { ButtonSet } from '../../components/index'


export default class Select_log_sign extends React.Component {

    render() {
        return (
            <SafeAreaView style={style.info}>
                <View style={style.mainView}>
                    <View style={style.styleName}>
                        <Image source={image.img_splash} style={style.styleLogo} resizeMode='contain'></Image>
                    </View>
                    <View style={style.styleBottom}>
                        <ButtonSet ClickText={'Sign Up'} Press={() => this.props.navigation.navigate('signup')}/>
                        <View style={style.loginText}>
                            <Text style={style.statictext}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('login')} >
                                <Text style={style.clicktext}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

