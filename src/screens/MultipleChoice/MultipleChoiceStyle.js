import {appColors} from '@values/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  emojiMainView: {
    width: wp(80),
    marginTop: hp(4),
    backgroundColor: appColors.orange,
    alignSelf: 'center',
    borderRadius: 5,
  },
  emojiSecondView: {
    flexDirection: 'row',
    width: wp(78),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiImageStyle: {
    width: wp(10),
    height: hp(9),
  },
  emojiText1: {
    color: appColors.textPrimary,
    paddingLeft: wp(3),
  },
  emojiText2: {
    color: appColors.textPrimary,
    paddingLeft: wp(2),
  },
  questionMainView: {
    flexDirection: 'row',
    marginRight: wp(5),
  },
  questionSecondView: {
    width: wp(20),
    height: hp(9),
    backgroundColor: appColors.greenGradient4,
    borderBottomEndRadius: wp(6),
  },
  questionLinearGradient: {
    width: wp(19.5),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    borderBottomEndRadius: wp(10),
  },
  questionNo: {
    color: appColors.white,
    paddingTop: hp(2.4),
    letterSpacing: wp(0.3),
  },
  questionView: {
    paddingLeft: wp(3),
    width: wp(70),
  },
  questionMathMainView:{
    paddingLeft: wp(3), width: wp(70), flex: 1
  },
  questionMathText:{
    flex: 1
  },
  questionMathText1:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerMainView:{
    paddingRight: wp(5),
    paddingBottom: 5,
  },
  answerKeyView:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  radioView:{
    flex: 0.2,
    alignItems: 'center',
  },
  radioBtnStyle:{
    height: 25,
    width: 25,
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: appColors.grayBorder,
    alignItems: 'center',
  },
  answerView:{
    flex: 0.7
  },
  mathView:{
    height: hp(30)
  },
  mathAnswer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  borderLine:{
    borderBottomWidth: wp(0.1),
    borderBottomColor: appColors.black,
    marginTop: hp(3),
  },

  //Explanation
  explanationView:{
    width: wp(85),
    backgroundColor: appColors.lightBlue,
    borderColor: appColors.borderBlue,
    borderRadius: 5,
    borderWidth: wp(0.05),
  },
  explanationImgView:{
    flexDirection: 'row',
    paddingLeft: wp(5),
    alignItems: 'center',
    height: hp(7),
  },
  explanationImg:{
    width: wp(7), height: hp(7)
  },
  explanationText:{
    color: appColors.darkBlue,
    letterSpacing: wp(0.1),
    paddingLeft: wp(2),
  },
  explanationViewStyle:{
    paddingLeft: wp(5),
    paddingRight: wp(5),
    paddingBottom: hp(3),
  },
  explanationTextStyle:{
    letterSpacing: wp(0.1), color: appColors.darkGreen
  },
  renderView:{
    flex: 1
  },
  renderQuestion:{
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(5),
  },
  renderAnswer:{
    marginTop: hp(2)
  },
  renderExplanationView:{
    alignSelf: 'center', marginTop: hp(4)
  },
  renderBtnView:{
    alignSelf: 'center', marginTop: hp(10)
  },
  renderBtn:{
    height: hp(7),
    width: wp(80),
     borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  renderLinearGradient:{
    height: hp(7),
    width: wp(80),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
  },
  renderNext:{
    color: appColors.white, letterSpacing: wp(0.3)
  }
  
  
};
