import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex:1,
    backgroundColor:Color.WHITE
  },
  styleLogo: {
    resizeMode: 'contain',
    width: wp('90%'),
    height: hp('17%'),backgroundColor:'white',marginTop: hp('2.5%')
  },
  part12: {
    flex: 2, alignItems: 'center'
  }, 
  part3: {
    flex: 1, flexDirection: "column-reverse",width: wp('90%'),marginHorizontal: wp('5%'),
  }, 
  falsebtnview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: Color.silver,
    padding: ('4%'),
    borderRadius: 15,
    marginBottom: hp('3%')
  }, 
  btn: { height: hp('6%'), justifyContent: 'center', marginTop: wp('1%'), borderBottomWidth: 1, borderColor: Color.silverlight },
  falsebtntext: {
    color: Color.BLACK,
    fontSize: Constants.LARGE,
    fontFamily: Constants.FONT_REGULAR
  },
  errorview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: Color.redlidth,
    padding: ('3%'),
    borderRadius: 15,
    marginBottom: hp('1.5%')
  }, 
  success: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: Color.Btn,
    padding: ('3%'),
    borderRadius: 15,
    marginBottom: hp('1.5%')
  },
  errortext: {
    color: Color.BLACK,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  },
  uplodeview: {
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: Color.white,
    padding: ('1.5%'),
    borderRadius: 10,
    marginVertical: hp('1.5%')
  }, 
  uploadtext: {
    color: Color.BLACK,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR
  }
});
module.exports = styles;