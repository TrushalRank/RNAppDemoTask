import {Color,Constants} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
    errorview: {
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
      }
});
module.exports = styles;
