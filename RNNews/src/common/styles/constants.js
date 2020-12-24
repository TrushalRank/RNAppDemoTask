import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const constants = {
  // LARGE: 18,
  // EXTRA_LARGE: 22,
  // NORMAL: 16,
  // SMALL: 14,
  // XXXLARGE: 30,
  LARGE: hp('2%'),
  EXTRA_LARGE: hp('2.5%'),
  NORMAL: hp('1.8%'),
  SMALL: hp('1.5%'),
  EXTRA_SMALL: hp('1.2%'),
  XXXLARGE: hp('4%'),

  FONT_BOLD: 'Montserrat-Bold',
  FONT_EXTRA_BOLD: 'Montserrat-ExtraBold',
  FONT_REGULAR: 'Montserrat-Regular',
  FONT_MEDIUM: 'Montserrat-Medium',
  FONT_SEMIBOLD: 'Montserrat-SemiBold',
};
export default constants;
