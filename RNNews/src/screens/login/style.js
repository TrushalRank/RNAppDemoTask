import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex:1,
    backgroundColor:Color.WHITE
  },
  styleLogo: {
    resizeMode: 'contain',
    width: wp('22%'),
    height: hp('17%')
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  }, 
  statictext: {
    color: Color.silver,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR
  }, 
  titletext: {
    color: Color.BLACK,
    fontSize: Constants.EXTRA_LARGE,
    fontFamily: Constants.FONT_BOLD,
    marginBottom: hp('0.5%')
  }, 
  part12: {
    flex: 1, justifyContent: "center", alignItems: 'center'
  }, 
  part3: {
    flex: 1, flexDirection: "column-reverse", alignItems: "center"
  }, 
  createText: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    marginBottom: hp('3.5%')
  }, 
  statictext3: {
    color: Color.silver,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  }, 
  clicktext: {
    color: Color.BLUE,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  }, 
  forgotclick: {
    flexDirection: 'row-reverse', width: ('90%'), marginTop: hp('2%')
  }, 
  falsebtnview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: Color.silver,
    padding: ('4%'),
    borderRadius: 15
  }, 
  falsebtntext: {
    color: Color.BLACK,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  }
});
module.exports = styles;