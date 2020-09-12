import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import _Text from '@text/_Text';
import _Header from '@header/_Header';
import containerStyle from '@container/_ContainerStyle';

class _Container extends Component {
  render() {
    const {
      children: propChildren,
      style: propStyle,
      hasHeader,
      showBack,
      showMenu,
      title,
      showNotification,
      showError,
    } = this.props;
    const {mainContainer, safeAreaView, viewStyle} = containerStyle;
    return (
      <View style={mainContainer}>
        {hasHeader && (
          <_Header
            showBack={showBack}
            showMenu={showMenu}
            title={title}
            showNotification={showNotification}
          />
        )}

        <SafeAreaView style={safeAreaView}>
          {!showError && <View style={viewStyle}>{propChildren}</View>}
        </SafeAreaView>
      </View>
    );
  }
}

export default _Container;
