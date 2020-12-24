import {Color} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  styleLogo: {
    resizeMode: 'contain',
    width: wp('25%'), 
    height: hp('25%')
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
});
module.exports = styles;
