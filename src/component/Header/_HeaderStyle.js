import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {appColors} from '@values/colors';
import { Platform } from 'react-native';
const marginSide = Platform.OS === 'ios' ? wp('2%') : wp('1%');

export default {
    linearGradientStyle:{
        height: hp(7)
    },
    leftStyle:{
        flex: 0,
        width: wp(10),
        marginLeft: marginSide,
    },
    menuIconStyle:{
        color: appColors.white
    },
    bodyStyle:{
        flex: 1, width: wp(70)
    },
    titleStyle:{
        alignSelf: 'flex-start',
        color: appColors.white,
        letterSpacing: wp(0.25),
    }
}
