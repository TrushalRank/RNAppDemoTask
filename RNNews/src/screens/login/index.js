import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import image from '../../common/helper/Images'
import style from './style'
import { Input, ButtonSet, ErrorSet, LoadingComponent } from '../../components/index'
import { Color, Constants } from '../../common/styles/index'
import { validateEmail } from '../../common/helper/common'
import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import { CommonActions } from '@react-navigation/native'
import firebaseSetup from '../../components/OTP/Firebase'

const { Firebase, auth } = firebaseSetup();

class login extends React.Component {

    constructor() {
        super()
        this.state = { email: '', pass: '', error: '', errorshow: false, loading: false }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ errorshow: false }), 4000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    storetoken = async (token, email, datat) => {
        // alert(JSON.stringify(datat))
        Storage.setItem(AsynchStorageKey.loginusertoken, token)
        Storage.setItem(AsynchStorageKey.loginuseremail, email)
        Storage.setItem(AsynchStorageKey.loginuserfull, JSON.stringify(datat))
        this.setState({ loading: false }, () => this.goToNextView('home'))
    }

    goToNextView = (nextView = null) => {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: nextView }],
            }),
        )
        return
    }

    Show = (nextView = null) => {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: nextView }],
            }),
        )
        return
    }

    showbtn = async (email, pass) => {
        this.setState({loading:true})
        const validemail = validateEmail(email)
        // alert(validemail)
        if (email != '' && pass != '') {
            if (validemail != false) {
                let latpass = pass.length
                if (latpass >= 8) {
                    const Data = await auth().signInWithEmailAndPassword(email, pass);
                    Firebase.database()
                        .ref(`Userdata/${JSON.stringify(Data.user._user.uid)}`)
                        .once('value')
                        .then(snapshot => {
                            console.log(snapshot.val().email)
                            this.setState({loading:false})
                            if (snapshot.val().email != undefined) {
                                this.Show('home')
                                Storage.setItem(AsynchStorageKey.loginuserid, JSON.stringify(Data.user._user.uid))
                                Storage.setItem(AsynchStorageKey.loginuserdata, JSON.stringify(snapshot.val()))
                            }else{
                                this.setState({ errorshow: true, error: 'User not register' })
                            }
                        })
                } else {
                    // alert(JSON.stringify(param)
                    this.setState({ errorshow: true, error: 'Please enter minimum 8 word password' })
                }
            }
            else {
                this.setState({ errorshow: true, error: 'Plase enter valid email' })
            }
        } else if (email == '') {
            this.setState({ errorshow: true, error: 'Please enter email' })
        }
        else {

        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                    <SafeAreaView style={style.info}>
                        <View style={style.info}>
                            {/* <LoadingComponent text={'Loading'}/> */}
                            <View style={style.part12}>
                                <Image source={image.img_splash} style={style.styleLogo} resizeMode='contain'></Image>
                                <Text style={style.titletext}>Log in</Text>
                                <Text style={style.statictext}>Welcome back,</Text>
                                <Text style={style.statictext}>Sign in to continue</Text>
                            </View>
                            <View style={style.part12}>
                                <Input placeholderget={'Email'} value={this.state.email} onChangeTextValue={text => this.setState({ email: text })} keyboardType={'default'} />
                                <View style={{ marginTop: 10 }}>
                                    <Input placeholderget={'Password'} value={this.state.pass} secureTextEntry={true} onChangeTextValue={text => this.setState({ pass: text })} keyboardType={'default'} />
                                </View>
                                <TouchableOpacity style={style.forgotclick} onPress={() => this.props.navigation.navigate('forgot_pass')}>
                                    <Text style={[style.statictext, { color: Color.BLUE }]}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={style.part3}>
                                <View style={style.createText}>
                                    <Text style={style.statictext3}>Don't have account?</Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')} >
                                        <Text style={style.clicktext}>Create account</Text>
                                    </TouchableOpacity>
                                </View>
                                {this.state.pass != '' ? <ButtonSet ClickText={'Log in'} Press={() => this.showbtn(this.state.email, this.state.pass)} /> :
                                    <View style={style.falsebtnview}>
                                        <Text style={style.falsebtntext}>Log in</Text>
                                    </View>
                                }
                                {this.state.errorshow ?
                                    <ErrorSet error={this.state.error} /> : null
                                }
                            </View>
                        </View>
                        <Modal transparent={true} visible={this.state.loading}>
                            <LoadingComponent text={'Loading'} />
                        </Modal>
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}


export default login

