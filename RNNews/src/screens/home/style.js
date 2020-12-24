import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  textinputview: {
    width: wp('90%'), height: hp('4.5%'), marginTop: hp('1.5%')
    , borderRadius: hp('1%'), marginHorizontal: wp('5%'), flexDirection: "row"
  },
  textinput: {
    width: wp('90%'), height: hp('4.5%'), backgroundColor: Color.silverlight
    , borderRadius: hp('1%'), paddingLeft: wp('2%'), padding: 0
  },
  tabmainview: { flex: 1, backgroundColor: Color.WHITE },
  tabviewline: { marginTop: wp('3%'), width: wp('100%'), borderWidth: 0.5, borderColor: 'silver' },
  tabview: { flex: 1, marginTop: wp('2%'), width: wp('100%'), alignItems: 'center' },

  buttonContainer: {
    backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    height: hp('25%'),
    width: wp('90%'),
    margin: wp('1%'),
    elevation: 5,
    marginVertical: hp('1%')
  },
  statictext: {
    color: Color.black, fontWeight: '500',
    fontSize: Constants.NORMAL, marginHorizontal: wp('2%'),
    fontFamily: Constants.FONT_REGULAR
  },

  flatview: {
    width: wp('90%'), flexDirection: 'row', alignItems: 'center', height: hp('8%'), backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: hp('1%'), padding: wp('2%'), marginHorizontal: wp('5%'), marginVertical: wp('1%')
  }, flatimgview: { width: wp('10%'), height: wp('10%'), borderRadius: wp('5%'), marginRight: wp('2%'), }
  , touchable1: { width: wp('18%'), height: hp('3%'), alignItems: 'center', justifyContent: 'center' },
  touchable2: {
    backgroundColor: Color.green, borderRadius: wp('2%'), width: wp('18%'), height: hp('3%'),
    alignItems: 'center', justifyContent: 'center'
  }


  ,friendsview: {
    alignSelf: "center", width: wp('90%'),
    backgroundColor: 'white', borderRadius:  wp('3%'), paddingLeft: wp('4%'), paddingVertical: hp('1.5%')
  },
  friendstouchable : { paddingVertical: hp('0.4%'), marginBottom: hp('1%'), borderBottomWidth: 1.5, borderColor: 'silver' },
  friendstouchableview :  { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  friendstouchableimg : { height: hp('3%'), width: wp('10%'), paddingRight: wp('2%') },
  touchable: {
    flexDirection: "row", backgroundColor: "red", width: wp('28.5%'), height: hp('3%'), borderRadius: hp('1%'), backgroundColor: Color.Btn,
    justifyContent: "space-between", paddingRight: wp('2%')
  },
  statictexttoch: {
    color: Color.WHITE,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR,
    paddingLeft: wp('2%')
    , alignSelf: "center"
  },

});
module.exports = styles;