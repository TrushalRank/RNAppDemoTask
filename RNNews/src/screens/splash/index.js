import React from 'react';
import { Image, View, Text, Platform, Linking } from 'react-native';
import image from '../../common/helper/Images'
import style from './style'
import { CommonActions } from '@react-navigation/native'
// import { Storage } from '../../common/localStorage';
// import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
// import NetInfo from "@react-native-community/netinfo";

export default class Splash extends React.Component {

    NetInfoSubscribtion = null;

    constructor() {
        super();
        this.state = {
            connection_status: false, connection_type: null, connection_net_rechable: false, connection_wifi_enable: false,
            connection_details: null
        }
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
    componentDidMount() {
        this.GetUser();
    }

    componentWillUnmount() {
        this.NetInfoSubscribtion && this.NetInfoSubscribtion();
    }

    _handleConnectivityChange = (state) => {
        this.setState({
            connection_status: state.isConnected,
            connection_type: state.type,
            connection_net_rechable: state.isInternetReachable,
            connection_wifi_enable: state.isWifiEnabled,
            connection_details: state.details
        })
        // alert(this.state.connection_status)
    }

    GetUser = async () => {
        // alert(this.state.connection_status)
        setTimeout(() => {
            this.Show('select_log_sign')
        }, 3000);
        // Storage.removeItem(AsynchStorageKey.creategrouparr)
        // console.log('token', await Storage.getItem(AsynchStorageKey.loginusertoken));
        // if (await Storage.getItem(AsynchStorageKey.loginusertoken) != null) {
        //     setTimeout(() => {
        //         this.Show('select_log_sign')
        //     }, 3000);
        // } else {
        //     this.Show('select_log_sign')
        // }
    }
    render() {

        return (
            <View style={style.container}>
                <Image style={style.styleLogo} source={image.img_splash} />
            </View>
        )
    }
}
