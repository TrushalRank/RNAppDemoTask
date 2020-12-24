import {Color,Constants} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
export default (styles = {
    textstyle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: hp('1.5%'),
        color: 'grey'
    },
    textinputstyle: {
        height: hp('7%'),
        width: wp('90%'),
        borderBottomColor: Color.silver,
        borderBottomWidth: 1,
    }
});
module.exports = styles;
