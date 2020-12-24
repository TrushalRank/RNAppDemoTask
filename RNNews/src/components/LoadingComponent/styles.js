import { Matrics, Fonts, Color,Constants } from "../../common/styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  LoaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: wp('100%'),
    height: hp('100%'),
  },
  LoaderWrapper: {
    width: 150,
    height: 150,
    backgroundColor: Color.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10
  },
  statictext: {
    color: Color.WHITE,
    fontFamily: Constants.FONT_MEDIUM,
    fontSize: Constants.NORMAL,
  }
});
module.exports = styles;
