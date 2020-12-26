import React, { useState } from 'react';
import { TouchableOpacity, View, Text, FlatList, Image, Share, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import style from './style'
import { Color, Constants } from '../../common/styles/index'
import moment from 'moment'
import images from '../../common/helper/Images';


const ListEvent = ({ datamain = [], onPress }) => {

    const [text, setText] = useState('');
    const [arr, setArr] = useState([]);
    const [newArray, setnewArray] = useState([]);
    const [show, setShow] = useState(1);

    const onShare = async () => {
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
    console.log('detail'.onPress);

    if (show == 1) {
        console.log('show', show);
        text != '' ?
            datamain.map((data) => {
                console.log('text', text);
                if (data.title.includes(text) == true) {
                    console.log('data', data);
                    arr.push(data)
                }
            }) : null
        // datamain.map((data) => console.log(data.title.includes('Very')))
        setShow(2)
    }
    return (
        <View>
            <View style={style.textinputview}>
                <TextInput style={[style.textinput, { width: wp('90%') }]}
                    value={text}
                    onChangeText={text => [setText(text), setArr([]), setShow(1)]} placeholder={'Search'}></TextInput>
            </View>
            {text != '' ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={arr}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => onPress.navigate('detail', { item: item })} >
                            <View style={[style.buttonContainer, { marginHorizontal: wp('5%') }]}>
                                <View style={{ flex: 2.5, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginVertical: hp('1%'), marginRight: wp('5%') }}>
                                        <Text numberOfLines={1} style={[style.attentext, { color: Color.Btn }]}>{item.source.name}</Text>
                                        <Text numberOfLines={3} style={[style.attentext, { marginTop: hp('1%') }]}>{item.title}</Text>
                                    </View>
                                    <Image style={style.atteflatimg} resizeMode='cover' source={{
                                        uri: item.urlToImage != null ?
                                            item.urlToImage
                                            : 'https://blestrac.sirv.com/veed-frontend/img/tools/Howto/upload.png'
                                    }} />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
                                    <View style={{ flex: 1.5, flexDirection: 'row' }}>
                                        <Text numberOfLines={1} style={[style.attenstatictext, { width: wp('30%') }]}>{item.author}</Text>
                                        <Text numberOfLines={1} style={[style.attenstatictext, { width: wp('20%'), }]}>{moment(item.publishedAt.slice(0, 10)).format('L')}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Image resizeMode={'cover'} style={{ width: wp('6%'), height: hp('2%'), marginLeft: wp('12%'), tintColor: Color.silverlight }} source={images.img_save} />
                                        <TouchableOpacity onPress={() => onShare()}>
                                            <Image resizeMode={'cover'} style={{ width: wp('4%'), height: hp('2%'), marginLeft: wp('8%'), tintColor: Color.silverlight }} source={images.img_share} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={datamain}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => onPress.navigate('detail', { item: item })} >
                            <View style={[style.buttonContainer, { marginHorizontal: wp('5%') }]}>
                                <View style={{ flex: 2.5, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginVertical: hp('1%'), marginRight: wp('5%') }}>
                                        <Text numberOfLines={1} style={[style.attentext, { color: Color.Btn }]}>{item.source.name}</Text>
                                        <Text numberOfLines={3} style={[style.attentext, { marginTop: hp('1%') }]}>{item.title}</Text>
                                    </View>
                                    <Image style={style.atteflatimg} resizeMode='cover' source={{
                                        uri: item.urlToImage != null ?
                                            item.urlToImage
                                            : 'https://blestrac.sirv.com/veed-frontend/img/tools/Howto/upload.png'
                                    }} />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
                                    <View style={{ flex: 1.5, flexDirection: 'row' }}>
                                        <Text numberOfLines={1} style={[style.attenstatictext, { width: wp('30%') }]}>{item.author}</Text>
                                        <Text numberOfLines={1} style={[style.attenstatictext, { width: wp('20%'), }]}>{moment(item.publishedAt.slice(0, 10)).format('L')}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Image resizeMode={'cover'} style={{ width: wp('6%'), height: hp('2%'), marginLeft: wp('12%'), tintColor: Color.silverlight }} source={images.img_save} />
                                        <TouchableOpacity onPress={() => onShare()}>
                                            <Image resizeMode={'cover'} style={{ width: wp('4%'), height: hp('2%'), marginLeft: wp('8%'), tintColor: Color.silverlight }} source={images.img_share} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />}
        </View>
    )
}


export default ListEvent;