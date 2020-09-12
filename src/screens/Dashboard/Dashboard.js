import React from 'react';
import {View} from 'react-native';
import { appColors } from '@values/colors';
import _Text from '@text/_Text';
import _Container from '@container/_Container';
import {strings} from '@values/strings';

export default class Dashboard extends React.Component {
  render() {
    return (
      <_Container hasHeader title={strings.dashboard} showMenu>
      <View style={{flex: 1, backgroundColor: appColors, alignItems:'center', justifyContent:'center'}}>
        <_Text>{strings.dashboard}</_Text>
      </View>
      </_Container>
    );
  }
}
