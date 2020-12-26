import React from 'react';
import { SafeAreaView, View, Text, Image, Linking, TouchableOpacity, Modal, StyleSheet, Sra, Share, LogBox, ScrollView } from 'react-native';
import style from './style'
import { Storage } from '../../common/localStorage';
import AsynchStorageKey from '../../common/localStorage/AsynchStorageKey';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment'
import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '../../common/helper/Images';
import { ListEvent, LoadingComponent } from '../../components/index'
import { ViewPager } from 'react-native-viewpager-carousel'

export default class DetailNews extends React.Component {

    constructor() {
        super()
        this.state = { value: '', arr: [], loading: false }
    }

    componentDidMount() {
        console.log('full', this.props.route.params.item.description);
        this.state.arr.push(this.props.route.params.item.urlToImage)
    }

    getdata = async () => {
        console.log('getitem', await AsyncStorage.getItem('loginusertoken'))
        console.log('home', await Storage.getItem(AsynchStorageKey.loginusertoken));
    }

    _pressCall = () => {
        const url = 'tel:+123456789'
        Linking.openURL(url)
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    _renderPage = ({ data }) => {
        alert('call')
        return (<Image style={style.coverimg} resizeMode='cover' source={{ uri: data }} />)
    }

    render() {
        LogBox.ignoreAllLogs()
        const data = this.props.route.params.item
        console.log('imge', data.urlToImage);
        return (
            <SafeAreaView style={style.info}>
                <ScrollView style={style.info} showsVerticalScrollIndicator={false}>
                    <View style={style.info}>
                        {/* {
                            this.state.arr != null ? <ViewPager
                                data={this.state.arr}
                                renderPage={this._renderPage}
                            /> : <Image style={style.coverimg} resizeMode='cover' source={{ uri: 'https://blestrac.sirv.com/veed-frontend/img/tools/Howto/upload.png' }} />
                        } */}
                        <Image style={style.coverimg} resizeMode='cover' source={{
                            uri: data.urlToImage != null ?
                                data.urlToImage
                                : 'https://blestrac.sirv.com/veed-frontend/img/tools/Howto/upload.png'
                        }} />
                        <View style={style.viewheder}>
                            <Text numberOfLines={3} style={[style.attentext, { marginTop: hp('1%') }]}>{data.title}</Text>
                            <View style={style.viewhedertext}>
                                <View style={style.headerleft}>
                                    <Text numberOfLines={1} style={[style.attenstatictext, { width: wp('30%') }]}>{data.author}</Text>
                                    <Text numberOfLines={1} style={[style.attenstatictext, { width: wp('20%'), }]}>{moment(data.publishedAt.slice(0, 10)).format('L')}</Text>
                                </View>
                                <View style={style.headeright}>
                                    <TouchableOpacity onPress={() => this.onShare()}>
                                        <Image resizeMode={'cover'} style={style.imgshare} source={images.img_share} />
                                    </TouchableOpacity>
                                    <Image resizeMode={'cover'} style={style.imgsave} source={images.img_save} />
                                </View>
                            </View>
                            <Text style={[style.attenstatictext2,]}>{data.description}</Text>
                            <Text style={[style.attenstatictext2,]}>{data.content}</Text>
                        </View>
                    </View>
                    <Modal transparent={true} visible={this.state.loading}>
                        <LoadingComponent text={'Loading'} />
                    </Modal>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


