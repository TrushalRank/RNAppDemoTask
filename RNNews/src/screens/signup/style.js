import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex:1,
    backgroundColor:Color.WHITE
  },
  statictext: {
    color: Color.silver,
    fontSize: Constants.SMALL,
    fontFamily: Constants.FONT_REGULAR
  },
  part12: {
    flex: 2, justifyContent: "center", alignItems: 'center'
  }, 
  part3: {
    flex: 1, flexDirection: "column-reverse",width: wp('90%'),marginHorizontal: wp('5%'),
  }, 
  createText: {
    justifyContent:'center',
    flexDirection: 'row',
    marginTop: hp('3%'),
    marginBottom: hp('3.5%')
  }, 
  term: {
    alignItems:"center",
    flexDirection: 'row',
    marginBottom: hp('2%')
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
    flexDirection: 'row-reverse', width: wp('90%'), marginTop: hp('2%')
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
  },
  checkbox: {
    width: wp('6%'),
    height: wp('4%')
  }
});
module.exports = styles;