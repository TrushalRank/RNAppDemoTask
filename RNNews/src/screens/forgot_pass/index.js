import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground,KeyboardAvoidingView ,ScrollView} from 'react-native';
import style from './style'
import { Input, ButtonSet, ErrorSet } from '../../components/index'
import { validateEmail } from '../../common/helper/common'

export default class login extends React.Component {
    constructor() {
        super()
        this.state = { email: "", error: '', errorshow: false }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ errorshow: false }), 4000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    Send = (email) => {
        const emailval = validateEmail(email)
        if (email != '') {
            if (emailval != false) {
                this.setState({ errorshow: true, error: 'Success' })
            }
            else {
                this.setState({ errorshow: true, error: 'Enter valid email' })
            }
        }
        else {
            this.setState({ errorshow: true, error: 'Please enter your email' })
        }
    }

    render() {
        return (
            <SafeAreaView style={style.info}>
                <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                    <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={style.info}>
                            <View style={style.part12}>
                                <Text style={style.titletext}>Forgot password?</Text>
                                <Text style={[style.statictext, style.top]}>Write your email address to recive password</Text>
                                <Text style={style.statictext}>recovery email from us</Text>
                                <View style={style.topinput}>
                                    <Input placeholderget={'Email'} value={this.state.email} onChangeTextValue={text => this.setState({ email: text })} keyboardType={'default'} />
                                </View>
                            </View>
                            <View style={style.part3}>
                                <ButtonSet ClickText={'Send the link'} Press={() => this.Send(this.state.email)} />
                                {this.state.errorshow ?
                                    <ErrorSet error={this.state.error} /> : null
                                }
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

