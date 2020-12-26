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
    backgroundColor: Color.WHITE,
    height: hp('15%'),
    width: wp('90%'),
    margin: wp('1%'),

  },
  atteflatimg: { width: ('30%'), height: ('90%'), borderRadius: 10 ,alignSelf:'center'},
  attentext: {
    color: Color.black,fontWeight:'600',
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  },
  attenstatictext: {
    color: Color.silver,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR
  },

  

});
module.exports = styles;