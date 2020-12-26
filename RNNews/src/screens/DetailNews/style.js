import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  attentext: {
    color: Color.black,fontWeight:'600',
    fontSize: Constants.EXTRA_LARGE,
    fontFamily: Constants.FONT_REGULAR
  },
  attenstatictext: {
    color: Color.silver,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR
  },
  attenstatictext2: {
    color: Color.BLACK,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR,
    lineHeight: hp('3.5%'),
  },
  coverimg: { width: wp('100%'), height: hp('35%'), },
  viewheder: { marginHorizontal: wp('5%'),},
  viewhedertext: { flex: 1, alignItems: 'center', flexDirection: 'row',marginVertical: hp('1.5%') },
  headeright: { flex: 1, flexDirection: 'row-reverse' },
  headerleft:{ flex: 1.5, flexDirection: 'row' },
  imgshare: { width: wp('4%'), height: hp('2%'), marginLeft: wp('6%'), tintColor: Color.silverlight },
  imgsave: { width: wp('6%'), height: hp('2%'), tintColor: Color.silverlight }
});
module.exports = styles;