import {appColors} from '@values/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  mainContainer: {
    alignItems: 'center',
    marginTop: hp(10),
  },
  text: {
    letterSpacing: wp(0.2),
    color: appColors.blue,
  },
  rowMainView: {
    width: wp(90),
    height: hp(35),
    backgroundColor: appColors.lightBlue,
    marginTop: hp(3),
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: wp(0.1),
    borderColor: appColors.borderDarkBlue,
  },
  retakeBtn: {
    height: hp(7),
    width: wp(70),
    borderRadius: 5,
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  retakeLinearBtn: {
    height: hp(7),
    width: wp(70),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retakeText: {
    color: appColors.white,
    letterSpacing: wp(0.3),
  },

  //getROw
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(4),
  },
  row: {
    width: wp(60),
  },
  rowCircle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp(4),
  },
  numberText: {
    color: appColors.white,
  },
};
