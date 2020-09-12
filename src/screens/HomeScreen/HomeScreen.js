import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import _Tabs from '@tabs/_Tabs';
import { appColors } from '@values/colors';
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: appColors.white}}>
        <_Tabs />
      </View>
    );
  }
}
