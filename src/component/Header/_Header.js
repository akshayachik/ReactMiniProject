import React, {Component} from 'react';
import { TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';
import _Text from '@text/_Text';
import {Body, Header, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import headerStyle from '@header/_HeaderStyle';

class _Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {children: propChildren, showMenu, title} = this.props;
    const {linearGradientStyle,leftStyle,menuIconStyle,bodyStyle,titleStyle} = headerStyle
    return (
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={[appColors.gradient1, appColors.gradient2, appColors.gradient3]}
        style={linearGradientStyle}>
        <Header
          hasTabs
          style={{
            backgroundColor: [
              appColors.gradient1,
              appColors.gradient2,
              appColors.gradient3,
            ],
            elevation: 0,
            height: hp(7),
            marginBottom: 0,
          }}>
          <Left
            style={leftStyle}>
            {showMenu && (
              <TouchableOpacity>
                <Icon
                  name={'bars'}
                  size={20}
                  style={menuIconStyle}
                />
              </TouchableOpacity>
            )}
          </Left>
          <Body style={bodyStyle}>
            {title && (
              <_Text
                familyOpenSansRegular
                fsPrimary
                style={titleStyle}
                numberOfLines={1}>
                {title}
              </_Text>
            )}
          </Body>
        </Header>
      </LinearGradient>
    );
  }
}

export default _Header;
