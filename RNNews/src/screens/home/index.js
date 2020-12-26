import React from 'react';
import { SafeAreaView, View, Text, Image, Linking, TouchableOpacity,DeviceEventEmitter, Modal, FlatList, Button, LogBox } from 'react-native';
import style from './style'
import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tab1Watcher, tab2Watcher, tab3Watcher, tab4Watcher, tab5Watcher } from "../../store/actions";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '../../common/helper/Images';
import { ListEvent, LoadingComponent } from '../../components/index'

const Tab = createMaterialTopTabNavigator();

function Invited1(props) {
    console.log('nav',props.nav);
    return (
        <View style={style.tabmainview} >
            <View style={style.tabviewline} />
            <View style={[style.tabview, { backgroundColor: 'white', }]}>
                <ListEvent datamain={props.tab1} onPress={props.nav}/>
            </View>
        </View>
    );
}
function Invited2(props) {
    return (
        <View style={style.tabmainview} >
            <View style={style.tabviewline} />
            <View style={[style.tabview, { backgroundColor: 'white', }]}>
                <ListEvent datamain={props.tab2} onPress={props.nav}/>
            </View>
        </View>
    );
}
function Invited3(props) {
    return (
        <View style={style.tabmainview} >
            <View style={style.tabviewline} />
            <View style={[style.tabview, { backgroundColor: 'white', }]}>
                <ListEvent datamain={props.tab3} onPress={props.nav}/>
            </View>
        </View>
    );
}
function Invited4(props) {
    return (
        <View style={style.tabmainview} >
            <View style={style.tabviewline} />
            <View style={[style.tabview, { backgroundColor: 'white', }]}>
                <ListEvent datamain={props.tab4} onPress={props.nav}/>
            </View>
        </View>
    );
}
function Invited5(props) {
    return (
        <View style={style.tabmainview} >
            <View style={style.tabviewline} />
            <View style={[style.tabview, { backgroundColor: 'white', }]}>
                <ListEvent datamain={props.tab5} onPress={props.nav}/>
            </View>
        </View>
    );
}


class home extends React.Component {

    constructor() {
        super()
        this.state = { value: '', tab1: [], tab2: [], tba3: [], tab4: [], tab5: [],loading: true }
    }

    componentDidMount() {
        DeviceEventEmitter.addListener(
            'Menu', () => {
                this.props.navigation.navigate('setting')
            },
        )
        this.interval = setInterval(() => this.setState({ loading: false }), 4000);
        const param = '0'
        this.props.tab1Watcher(
            param,
            (value) => {
                if (value.status == "ok") {
                    this.setState({ tab1: value.articles,loading:false })
                } else {
                    this.setState({ errorshow: true, error: 'Data not available' })
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.tab2Watcher(
            param,
            (value) => {
                if (value.status == "ok") {
                    this.setState({ tab2: value.articles,loading:false })
                    // console.log('data2',value);
                } else {
                    this.setState({ errorshow: true, error: 'Data not available' })
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.tab3Watcher(
            param,
            (value) => {
                if (value.status == "ok") {
                    this.setState({ tab3: value.articles,loading:false })
                    // console.log('data3',value);
                } else {
                    this.setState({ errorshow: true, error: 'Data not available' })
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.tab4Watcher(
            param,
            (value) => {
                if (value.status == "ok") {
                    this.setState({ tab4: value.articles,loading:false })
                    // console.log('data4',value);
                } else {
                    this.setState({ errorshow: true, error: 'Data not available' })
                }
            },
            (error) => {
                console.log(error)
            }
        );
        this.props.tab5Watcher(
            param,
            (value) => {
                if (value.status == "ok") {
                    this.setState({ tab5: value.articles,loading:false })
                    // console.log('data5',value);
                } else {
                    this.setState({ errorshow: true, error: 'Data not available' })
                }
            },
            (error) => {
                console.log(error)
            }
        );
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getdata = async () => {
        console.log('getitem', await AsyncStorage.getItem('loginusertoken'))
        console.log('home', await Storage.getItem(AsynchStorageKey.loginusertoken));
    }

    _pressCall = () => {
        const url = 'tel:+123456789'
        Linking.openURL(url)
    }

    render() {
        console.log('log', this.props);
        LogBox.ignoreAllLogs()
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* <Text>1234</Text>
                    <Button title='call' onPress={this._pressCall} /> */}
                    <Tab.Navigator tabBarOptions={{
                        scrollEnabled: true,
                        labelStyle: { fontSize: wp('2.8%'), fontWeight: 'bold' },
                        activeTintColor: Color.Btn,
                        inactiveTintColor: Color.silver,
                        tabStyle: { width: wp('32%'), marginTop: hp('1%') },
                        style: { backgroundColor: Color.WHITE, width: wp('100%'), alignSelf: 'center' },
                        indicatorStyle: { backgroundColor: Color.Btn, },
                    }}>
                        <Tab.Screen name="Top" children={() => <Invited1 tab1={this.state.tab1} nav={this.props.navigation}/>} />
                        <Tab.Screen name="Recommended" children={() => <Invited2 tab2={this.state.tab2} nav={this.props.navigation}/>} />
                        <Tab.Screen name="New York Times" children={() => <Invited3 tab3={this.state.tab3} nav={this.props.navigation}/>} />
                        <Tab.Screen name="Business" children={() => <Invited4 tab4={this.state.tab4} nav={this.props.navigation}/>} />
                        <Tab.Screen name="Bitcoin" children={() => <Invited5 tab5={this.state.tab5} nav={this.props.navigation}/>} />
                    </Tab.Navigator>
                </View>
                <Modal transparent={true} visible={this.state.loading}>
                    <LoadingComponent text={'Loading'} />
                </Modal>
            </SafeAreaView>
        )
    }
}

function mapStateToProps({ login }) {
    return login;
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            tab1Watcher, tab2Watcher, tab3Watcher, tab4Watcher, tab5Watcher
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(home)

