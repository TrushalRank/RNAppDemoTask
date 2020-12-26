import {Color ,Constants} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex:1,
    backgroundColor:Color.WHITE
  },
  btn: { height: hp('6%'), justifyContent: 'center', marginTop: wp('1%'), borderBottomWidth: 1, borderColor: Color.silverlight },
  falsebtntext: {
    color: Color.BLACK,
    fontSize: Constants.LARGE,
    fontFamily: Constants.FONT_REGULAR
  },
});
module.exports = styles;