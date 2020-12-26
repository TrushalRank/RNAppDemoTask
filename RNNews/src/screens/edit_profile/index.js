import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal, ImageBackground, KeyboardAvoidingView, ScrollView, DeviceEventEmitter } from 'react-native';
import image from '../../common/helper/Images'
import style from './style'
import { Input, ButtonGreen, LoadingComponent, Success } from '../../components/index'
import { validateEmail } from '../../common/helper/common'
import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import { FlatList } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color } from '../../common/styles';
import firebaseSetup from '../../components/OTP/Firebase'
import moment, { invalid } from 'moment'

const { Firebase, auth } = firebaseSetup();

export default class profile extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '', phone: '', name: '', lastname: '', checkbox: false, id: '', pass: '', success: false, dob: '', address: '',
            error: '', errorshow: false, img: 'https://site.groupe-psa.com/content/uploads/sites/9/2016/12/white-background-2.jpg',
            loading: false
        }
    }

    componentDidMount() {
        this.Gettoken();
        this.interval = setInterval(() => this.setState({ errorshow: false, loading: false, success: false }), 4000);
        console.log('props', this.props);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    Gettoken = async () => {
        const data = await Storage.getItem(AsynchStorageKey.loginuserid)
        console.log('uid', await Storage.getItem(AsynchStorageKey.loginuserid));
        Firebase.database()
            .ref(`Userdata/${data}`)
            .once('value')
            .then(snapshot => {
                console.log('val', snapshot.val())
                if (snapshot.val() != null) {
                    this.setState({
                        id: snapshot.val().authid, email: snapshot.val().email, matchemail: snapshot.val().email,
                        name: snapshot.val().name, phone: snapshot.val().phone, pass: snapshot.val().password,
                        dob: snapshot.val().dob, address: snapshot.val().address
                    })
                }
            })
    }

    showbtn = async (email, address, name, phone, dob) => {
        console.log(moment(dob).format('L'))
        // await auth().currentUser.delete().then(function () {
        //     console.log('delete successful?')
        //     console.log(app.auth().currentUser)
        // }).catch(function (error) {
        //     console.error({ error })
        // })
        this.setState({ loading: true })
        const data = await Storage.getItem(AsynchStorageKey.loginuserid)
        const validemail = validateEmail(email)
        // alert(validemail)
        if (email != '' && address != '' && name != '' && phone != '' && dob != '') {
            if (validemail != false) {
                let latphone = phone.length
                if (latphone == 10) {
                    {
                        if (moment(dob).format('L') != 'invalid date') {
                            auth().currentUser.delete();
                            // console.log('currentuser', user);
                            if (this.state.matchemail != email) {
                                var user = auth().currentUser;
                                console.log('currentuser', user);
                                await auth().createUserWithEmailAndPassword(email, this.state.pass);
                                const Data = await auth().signInWithEmailAndPassword(email, this.state.pass);
                                this.fun(JSON.stringify(Data.user._user.uid), email, this.state.pass, name, phone, address, dob,data);
                            } else {
                                Firebase.database().ref('Userdata/' + data).set({ authid: this.state.id, email: email, password: this.state.pass, name: name, phone: phone, address: address, dob: moment(dob).format('L') })
                                this.setState({ success: true })
                            }
                        }
                        else {
                            this.setState({ errorshow: true, error: 'Please enter valid Dob' })
                        }
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
        } else if (address == '') {
            this.setState({ errorshow: true, error: 'Please enter address' })
        } else if (dob == '') {
            this.setState({ errorshow: true, error: 'Please enter Dob' })
        }
        else {

        }
    }

    fun = async (data, email, password, name, phone, address, dob, realdata) => {
        if (data != '') {
            console.log('data', data);
            Firebase.database().ref('Userdata/' + data).set({ authid: JSON.parse(data), email: email, password: password, name: name, phone: phone, address: address, dob: moment(dob).format('L') })
            auth().signOut();
            Firebase.database().ref('Userdata/' + realdata).set({ data : 'Not register' })
            Storage.setItem(AsynchStorageKey.loginuserid, data)
            this.setState({ Success: true, loading: false })
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
                                <Input placeholderget={'Dob    (mm-dd-yyyy)'}
                                    value={this.state.dob} onChangeTextValue={text => this.setState({ dob: text })} keyboardType={'default'} />
                                <Input placeholderget={'Address'} value={this.state.address} onChangeTextValue={text => this.setState({ address: text })} keyboardType={'default'} />
                            </View>
                            <View style={style.part3}>
                                {this.state.phone == '' ?
                                    <View style={style.falsebtnview}>
                                        <Text style={style.falsebtntext}>Save changes</Text>
                                    </View> :
                                    <ButtonGreen ClickText={'Save changes'} Press={() => this.showbtn(this.state.email, this.state.address, this.state.name, this.state.phone, this.state.dob)} />
                                }
                                {this.state.errorshow ?
                                    <View style={style.errorview}>
                                        <Text style={style.errortext}>{this.state.error}</Text>
                                    </View> : null
                                }
                                {this.state.success ?
                                    <View style={style.success}>
                                        <Text style={[style.errortext, { color: Color.WHITE }]}>Successfully update data</Text>
                                    </View> : null
                                }
                            </View>
                        </View>
                        {/* <Modal transparent={true} visible={this.state.loading}>
                            <LoadingComponent text={'Loading'} />
                        </Modal> */}
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
