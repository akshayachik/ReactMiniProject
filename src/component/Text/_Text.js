import React, {Component} from 'react';
import {Text} from 'react-native';
import {fontSize, fontFamily} from '@values/dimens';

var defaultFontSize = fontSize.fsPrimary;
var defaultFontWeight = fontFamily.familyRobotoRegular;

export default class _Text extends Component {
  render() {
    const {
      children: propChildren,
      fsHeading,
      fsPrimary,
      fsSecondary,
      fsNote,
      fsExtraLarge,
      familyRobotoRegular,
      familyRobotoMedium,
      familyRobotoThin,
      familyRobotoBold,
      familyRobotoBlack,
      familyAllerBold,
      familyOpenSansBold,
      familyOpenSansLight,
      familyOpenSansRegular,
      familyOpenSansSemiBold,
      numberOfLines,
      style,
      onPress,
      adjustsFontSizeToFit
    } = this.props;

    if (fsHeading) {
      defaultFontSize = fontSize.fsHeading;
    } else if (fsExtraLarge) {
      defaultFontSize = fontSize.fsExtraLarge;
    } else if (fsPrimary) {
      defaultFontSize = fontSize.fsPrimary;
    } else if (fsSecondary) {
      defaultFontSize = fontSize.fsSecondary;
    } else if (fsNote) {
      defaultFontSize = fontSize.fsNote;
    } else {
      defaultFontSize = fontSize.fsPrimary;
    }

    if (familyRobotoRegular) {
      defaultFontWeight = fontFamily.familyRobotoRegular;
    } else if (familyRobotoMedium) {
      defaultFontWeight = fontFamily.familyRobotoMedium;
    } else if (familyRobotoThin) {
      defaultFontWeight = fontFamily.familyRobotoThin;
    } else if (familyRobotoBold) {
      defaultFontWeight = fontFamily.familyRobotoBold;
    } else if (familyRobotoBlack) {
      defaultFontWeight = fontFamily.familyRobotoBlack;
    } else if (familyAllerBold) {
      defaultFontWeight = fontFamily.familyAllerBold;
    } else if (familyOpenSansBold) {
      defaultFontWeight = fontFamily.familyOpenSansBold;
    } else if (familyOpenSansLight) {
      defaultFontWeight = fontFamily.familyOpenSansLight;
    } else if (familyOpenSansRegular) {
      defaultFontWeight = fontFamily.familyOpenSansRegular;
    } else if (familyOpenSansSemiBold) {
      defaultFontWeight = fontFamily.familyOpenSansSemiBold;
    } else {
      defaultFontWeight = fontFamily.familyRobotoRegular;
    }

    return (
      <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[
          style,
          {
            fontSize: defaultFontSize,
            fontFamily: defaultFontWeight,
          },
        ]}>
        {propChildren}
      </Text>
    );
  }
}
