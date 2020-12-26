import { Color ,Constants} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
export default (styles = {
  styleLogo: {
    width: wp('25%'),
    height: hp('25%'),
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  styleName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleBottom: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('3.5%'),
  },
  loginText: {
    flexDirection: 'row',
    marginTop: hp('3%')
  }, statictext: {
    color: Color.silver,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  },clicktext : {
    color: Color.BLUE,
    fontSize: Constants.NORMAL,
    fontFamily: Constants.FONT_REGULAR
  }
});
module.exports = styles;
