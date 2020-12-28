import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal, ImageBackground, KeyboardAvoidingView, ScrollView, DeviceEventEmitter, TextInput } from 'react-native';
import images from '../../common/helper/Images'
import style from './style'
import { Input, ButtonGreen, LoadingComponent, Success } from '../../components/index'
import { validateEmail } from '../../common/helper/common'
import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import { FlatList } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, Constants } from '../../common/styles';
import firebaseSetup from '../../components/OTP/Firebase'
import moment, { invalid } from 'moment'

const { Firebase, auth } = firebaseSetup();

export default class profile extends React.Component {

    constructor() {
        super()
        this.state = {
            tabname: '', input: '', tab3: 'New your times', tab4: 'Business', tab5: 'Bitcoin',
            report: '', country: '', instrest: '', error: '', errorshow: false,
            loading: true, success: false, show: false, val: 0
        }
    }

    componentDidMount() {
        // this.Gettoken();
        this.interval = setInterval(() => this.setState({ errorshow: false, loading: false, success: false }), 4000);
        console.log('props', this.props);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    Submit = () => {
        if (this.state.tabname != '') {
            if (this.state.val == 1) {
                if (this.state.report != '') {
                    DeviceEventEmitter.emit('report',{name : this.state.tabname, report : this.state.report})
                    this.setState({ show: false })
                } else {
                    this.setState({ errorshow: true, error: 'Please enter report name' })
                }
            }
            else if (this.state.val == 2) {
                if (this.state.country != '') {
                    DeviceEventEmitter.emit('country',{name : this.state.tabname, country : this.state.country})
                    this.setState({ show: false })
                } else {
                    this.setState({ errorshow: true, error: 'Please enter country name' })
                }
            }
            else if (this.state.val == 3) {
                if (this.state.instrest != '') {
                    DeviceEventEmitter.emit('instrest',{name : this.state.tabname, instrest : this.state.instrest})
                    this.setState({ show: false })
                } else {
                    this.setState({ errorshow: true, error: 'Please enter instrest name' })
                }
            }
        } else {
            this.setState({ errorshow: true, error: 'Please enter tab name' })
        }
    }

    render() {
        return (
            <SafeAreaView style={style.info}>
                <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                    <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={style.info}>
                            <Text style={[style.falsebtntext, { fontSize: Constants.NORMAL, marginLeft: wp('5%'), marginTop: wp('3%') }]}>Changes the defult setting</Text>
                            <TouchableOpacity style={style.btn} onPress={() => this.setState({ show: true, val: 1,tabname:'' })}>
                                <Text style={[style.falsebtntext, { padding: wp('5%'), }]}>{this.state.tab3}</Text></TouchableOpacity>
                            <TouchableOpacity style={style.btn} onPress={() => this.setState({ show: true, val: 2,tabname:''})}>
                                <Text style={[style.falsebtntext, { padding: wp('5%'), }]}>{this.state.tab4}</Text></TouchableOpacity>
                            <TouchableOpacity style={style.btn} onPress={() => this.setState({ show: true, val: 3,tabname:''})}>
                                <Text style={[style.falsebtntext, { padding: wp('5%'), }]}>{this.state.tab5}</Text></TouchableOpacity>
                        </View>
                        {/* <Modal transparent={true} visible={this.state.loading}>
                            <LoadingComponent text={'Loading'} />
                        </Modal> */}
                        <Modal transparent={true} visible={this.state.show}>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000000aa' }}>
                                <View style={{ height: hp('30%'), width: wp('90%'), backgroundColor: Color.WHITE, padding: wp('5%'), borderRadius: 10, marginHorizontal: wp('5%') }}>
                                    <View style={{ right: wp('3%'), top: wp('3%'), position: 'absolute' }}>
                                        <TouchableOpacity onPress={() => this.setState({ show: false })}>
                                            <Image style={[style.atteflatimg1, { tintColor: Color.BLACK, }]} resizeMode='cover' source={images.img_close} />
                                        </TouchableOpacity>
                                    </View>
                                    <View >{this.state.val == 1 ?
                                        <Text style={{ fontFamily: Constants.FONT_REGULAR, fontSize: hp('2.5%'), alignSelf: 'center' }}>{this.state.tab3}</Text>
                                        : this.state.val == 2 ? <Text style={{ fontFamily: Constants.FONT_REGULAR, fontSize: hp('2.5%'), alignSelf: 'center' }}>{this.state.tab4}</Text> :
                                            this.state.val == 3 ? <Text style={{ fontFamily: Constants.FONT_REGULAR, fontSize: hp('2.5%'), alignSelf: 'center' }}>{this.state.tab5}</Text> : null}
                                        <Text style={{ fontSize: hp('1.6%'), color: '#454545', alignSelf: 'center' }}>Choice your comfortable option</Text>
                                    </View>
                                    <Text style={[style.textstyle, { marginTop: hp('1.5%'), color: '#454545' }]}>Choice your tab name</Text>
                                    <TextInput style={style.textinputstyle} value={this.state.tabname} placeholder={'Tab name'} onChangeText={text => this.setState({ tabname: text })} keyboardType={'default'} />
                                    {this.state.val == 1 ?
                                        <View>
                                            <Text style={[style.textstyle, { marginTop: hp('1.5%'), color: '#454545' }]}>Choice your main pepar report</Text>
                                            <TextInput style={style.textinputstyle} value={this.state.report} placeholder={'Main pepar report'} onChangeText={text => this.setState({ report: text })} keyboardType={'default'} />
                                        </View>
                                        : this.state.val == 2 ? <View>
                                            <Text style={[style.textstyle, { marginTop: hp('1.5%'), color: '#454545' }]}>Choice your country</Text>
                                            <TextInput style={style.textinputstyle} value={this.state.country} placeholder={'your country name'} onChangeText={text => this.setState({ country: text })} keyboardType={'default'} />
                                        </View>
                                            : this.state.val == 3 ? <View>
                                                <Text style={[style.textstyle, { marginTop: hp('1.5%'), color: '#454545' }]}>Choice your insterst </Text>
                                                <TextInput style={style.textinputstyle} value={this.state.instrest} placeholder={'your insterst name'} onChangeText={text => this.setState({ instrest: text })} keyboardType={'default'} />
                                            </View>
                                                : null}
                                </View>
                                <View style={{ alignItems: 'center', marginTop: hp('3%') }}>
                                    <TouchableOpacity style={[style.touchable, { backgroundColor: Color.Btn, justifyContent: 'center', width: wp('30%'), height: hp('3.5%') }]}
                                        onPress={() => this.Submit()}>
                                        <Text style={[style.statictext, { fontSize: Constants.NORMAL, }]}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                {this.state.errorshow ?
                                    <View style={style.errorview}>
                                        <Text style={style.errortext}>{this.state.error}</Text>
                                    </View> : null
                                }
                            </View>
                        </Modal>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
