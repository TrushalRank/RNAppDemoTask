import {Color ,Constants} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex:1,
    backgroundColor:Color.WHITE
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },statictext: {
    color: Color.silver,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR
  },titletext : {
    color: Color.BLACK,
    fontSize: Constants.EXTRA_LARGE,
    fontFamily: Constants.FONT_BOLD,
    marginBottom: hp('0.5%')
  },part12 : {
    flex: 1.8, justifyContent: "center", alignItems: 'center'
  },part3 : {
    flex: 1,flexDirection:"column-reverse" ,alignItems:"center",marginBottom: hp('8.5%')
  },toptext : {
    marginTop: hp('2.5%')
  },topinput : {
    marginTop: hp('4.5%')
  },errorview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: Color.redlidth,
    padding: ('3%'),
    borderRadius: 15,
    marginBottom: hp('1.5%')
  }, 
  errortext: {
    color: Color.BLACK,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  }
});
module.exports = styles;