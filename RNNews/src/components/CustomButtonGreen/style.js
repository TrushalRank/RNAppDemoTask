import {Color,Constants} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
    TouchableOpacitySet: {
        alignItems: "center", 
        width: wp('90%'), 
        backgroundColor: Color.Btn, 
        padding: ('4%'), 
        borderRadius: 15,
        marginBottom: hp('3%') 
    },
    Text: {
        color: 'white',
        fontSize: Constants.LARGE,
        fontFamily:Constants.FONT_REGULAR
    }
});
module.exports = styles;
