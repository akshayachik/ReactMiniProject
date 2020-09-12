import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import _Text from '@text/_Text';
import {appColors} from '@values/colors';
import _Container from '@container/_Container';
import {CommonActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import displayResultStyle from '@displayResult/DisplayResultStyle';
import {strings} from '@values/strings';

export default class DisplayResult extends React.Component {
  constructor(props) {
    super(props);
  }

  btn() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'MultipleChoice'}],
      }),
    );
  }

  getRow(text, color, number) {
    const {rowView, row, rowCircle, numberText} = displayResultStyle;
    return (
      <View style={rowView}>
        <View style={row}>
          <_Text fsHeading style={{color: color}}>
            {text}:
          </_Text>
        </View>
        <View style={[rowCircle, {backgroundColor: color}]}>
          <_Text fsHeading style={numberText}>
            {number}
          </_Text>
        </View>
      </View>
    );
  }
  render() {
    const {correct, wrong, total} = this.props.route.params;
    const {
      mainContainer,
      text,
      retakeBtn,
      retakeLinearBtn,
      retakeText,
      rowMainView,
    } = displayResultStyle;
    return (
      <_Container hasHeader title={strings.score} showMenu>
        <View style={mainContainer}>
          <_Text familyRobotoBlack style={text} fsHeading>
            {strings.chapterNamePracticeTest}
          </_Text>
          <View style={rowMainView}>
            {this.getRow(strings.totalQuestion, appColors.darkestBlue, total)}
            {this.getRow(strings.correct, appColors.green, correct)}
            {this.getRow(strings.wrong, appColors.red, wrong)}
          </View>
          <TouchableOpacity onPress={() => this.btn()} style={retakeBtn}>
            <LinearGradient
              colors={[
                appColors.gradient7,
                appColors.gradient8,
                appColors.gradient8,
              ]}
              style={retakeLinearBtn}>
              <_Text familyOpenSansLight fsHeading style={retakeText}>
                {strings.retake}
              </_Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.btn()} style={retakeBtn}>
            <LinearGradient
              colors={[
                appColors.gradient4,
                appColors.gradient5,
                appColors.gradient6,
              ]}
              style={retakeLinearBtn}>
              <_Text familyOpenSansLight fsHeading style={retakeText}>
                {strings.practiceTest}
              </_Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </_Container>
    );
  }
}
