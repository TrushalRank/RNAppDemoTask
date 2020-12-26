import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import image from '../../common/helper/Images'
import style from './style'
import { Input, ButtonSet, ErrorSet ,Success} from '../../components/index'
import { Color, Constants } from '../../common/styles/index'
import { validateEmail } from '../../common/helper/common'
import CheckBox from '@react-native-community/checkbox';
import firebaseSetup from '../../components/OTP/Firebase'

const {Firebase, auth } = firebaseSetup();

export default class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '', pass: '', name: '', phone: '', checkbox: false,
            error: '', errorshow: false, confirmpass: '', Success : false
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ errorshow: false,Success : false }), 4000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showbtn = (email, pass, name, phone, confpass) => {
        const validemail = validateEmail(email)
        // alert(validemail)
        if (email != '' && pass != '' && name != '' && phone != '' && confpass != '') {
            if (validemail != false) {
                let latphone = phone.length
                if (latphone == 10) {
                    let latpass = pass.length
                    let latconfirmpass = confpass.length
                    if (latpass >= 8 && latconfirmpass >= 8) {
                        this.setState({ errorshow: false })
                        this.register(email, pass, name , phone)
                        // alert(email + pass + name + phone)
                    } else {
                        this.setState({ errorshow: true, error: 'Please enter minimum 8 word password' })
                    }
                } else {
                    this.setState({ errorshow: true, error: 'Please enter 10 digite number' })
                }
            }
            else {
                this.setState({ errorshow: true, error: 'Plase enter valid email' })
            }
        } else if (name == '') {
            this.setState({ errorshow: true, error: 'Please enter name' })
        } else if (email == '') {
            this.setState({ errorshow: true, error: 'Please enter email' })
        } else if (phone == '') {
            this.setState({ errorshow: true, error: 'Please enter phone number' })
        } else if (confpass == '') {
            this.setState({ errorshow: true, error: 'Please enter confirm password' })
        }
        else {

        }
    }

    register = async (email, password, name , phone) => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            this.lodemore(email, password, name , phone);
        } catch (error) {
            console.log({ passerror: error })
        }
    }

    lodemore = async (email, password, name , phone ) => {
        try {
            const Data = await auth().signInWithEmailAndPassword(email, password);
            this.fun(JSON.stringify(Data.user._user.uid),email,password,name , phone);
            this.setState({ authid: Data.user._user.uid })
        } catch (error) {
            console.log({ passerror: error })
        }
    }

    fun = (data,email,password,name,phone) => {
        if (data != '') {
            console.log('data',data);
            Firebase.database().ref('Userdata/' + data).set({ authid: JSON.parse(data), email: email, password: password, name: name , phone: phone })
            auth().signOut();
            this.setState({Success : true})
        } else {

        }
    }

    render() {
        return (
            <SafeAreaView style={style.info}>
                <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                    <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={style.info}>
                            <View style={style.part12}>
                                <Input placeholderget={'Name'} value={this.state.name} onChangeTextValue={text => this.setState({ name: text })} keyboardType={'default'} />
                                <Input placeholderget={'Email'} value={this.state.email} onChangeTextValue={text => this.setState({ email: text })} keyboardType={'default'} />
                                <Input placeholderget={'Phone number'} value={this.state.phone} onChangeTextValue={text => this.setState({ phone: text })} keyboardType={'numeric'} />
                                <Input placeholderget={'Password'} value={this.state.pass} secureTextEntry={true} onChangeTextValue={text => this.setState({ pass: text })} keyboardType={'default'} />
                                <Input placeholderget={'Confirm Password'} value={this.state.confirmpass} secureTextEntry={true} onChangeTextValue={text => this.setState({ confirmpass: text })} keyboardType={'default'} />
                            </View>
                            <View style={style.part3}>
                                <View style={[style.createText]}>
                                    <Text style={style.statictext3}>Already have account? </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('login')} >
                                        <Text style={style.clicktext}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>
                                {this.state.pass == '' ?
                                    <View style={style.falsebtnview}>
                                        <Text style={style.falsebtntext}>Create account</Text>
                                    </View> : this.state.checkbox ?
                                        <ButtonSet ClickText={'Create account'} Press={() => this.showbtn(this.state.email, this.state.pass, this.state.name, this.state.phone, this.state.confirmpass)} /> :
                                        <View style={style.falsebtnview}>
                                            <Text style={style.falsebtntext}>Create account</Text>
                                        </View>

                                }
                                <View style={style.term}>
                                    <CheckBox
                                        value={this.state.checkbox}
                                        onValueChange={text => this.setState({ checkbox: text })}
                                        style={style.checkbox}
                                    />
                                    <Text style={style.statictext3}>I agree with the </Text>
                                    <TouchableOpacity >
                                        <Text style={style.clicktext}>Terms</Text>
                                    </TouchableOpacity>
                                    <Text style={style.statictext3}> and </Text>
                                    <TouchableOpacity>
                                        <Text style={style.clicktext}>Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                                {this.state.errorshow ?
                                    <ErrorSet error={this.state.error} /> : null
                                }
                                {this.state.Success ?
                                    <Success error={"Successfully create account"} /> : null
                                }
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}


