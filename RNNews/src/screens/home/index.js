import React from 'react';
import { SafeAreaView, View, Text, Image,Linking, TouchableOpacity, StyleSheet, ImageBackground, Button } from 'react-native';
import style from './style'
import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class login extends React.Component {

    constructor() {
        super()
        this.state = { value: '' }
    }
    // componentDidMount(){
    //     console.log('data',this.props.mapStateToProps());
    //     console.log('data',mapStateToProps());
    //     this.getdata()
    // }
    componentDidMount() {
        console.log('logindata', this.props.loginData)
        console.log('home', Storage.getItem(AsynchStorageKey.loginusertoken));
        this.getdata()
        MyDrawer()
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
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>1234</Text>
                    <Button title='call' onPress={this._pressCall} />
                </View>
            </SafeAreaView>
        )
    }
}

