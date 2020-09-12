import React from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {appColors} from '@values/colors';
import _Text from '@text/_Text';
import _Container from '@container/_Container';
import LinearGradient from 'react-native-linear-gradient';
import {Toast} from 'native-base';
import MathText from 'react-native-math';
import {strings} from '@values/strings';
import multipleChoiceStyle from '@multipleChoice/MultipleChoiceStyle';

var question1 = strings.question1;
var question2 = strings.question2;
var ans1 = strings.answer1;
var ans2 = strings.answer2;

const Data = [
  {
    questionId: 1,
    questionNo: '01',
    correctAnswerId: 2,
    htmlForm: false,
    question:
      'The Venetian traveler who travelled with his wife and reached Vijayanagar around 1420 was ?',
    answerArray: [
      {
        answerId: 1,
        name: 'A',
        answerName: 'Athanasius Nikitin',
      },
      {
        name: 'B',
        answerId: 2,
        answerName: 'Nicolo de Conti',
      },
      {
        name: 'C',
        answerId: 3,
        answerName: 'Ibn Batuta',
      },
      {
        name: 'D',
        answerId: 4,
        answerName: 'Ferishta',
      },
    ],
  },

  {
    questionId: 2,
    questionNo: '02',
    htmlForm: false,
    correctAnswerId: 5,
    question: 'The weekly Commonweal was founded by ?',
    answerArray: [
      {
        name: 'A',
        answerId: 5,
        answerName: 'Annie Besant',
      },
      {
        name: 'B',
        answerId: 6,
        answerName: 'Bipan Chandra Pal',
      },
      {
        name: 'C',
        answerId: 7,
        answerName: 'Bal Gangadhar Tilak',
      },
      {
        name: 'D',
        answerId: 8,
        answerName: 'Sarojini Naidu',
      },
    ],
  },

  {
    questionId: 3,
    questionNo: '03',
    htmlForm: true,
    correctAnswerId: 1,
    question: question1,
    question1: question2,
    answerArray: [
      {
        name: 'A',
        answerId: 1,
        answerName: ans1,
      },
      {
        name: 'B',
        answerId: 2,
        answerName: ans2,
      },
      {
        name: 'C',
        answerId: 3,
        answerName: ans2,
      },
    ],
  },
];

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 0,
      correct: 0,
      selectedId: '',
      correctAnswerCount: 0,
      wrongCount: 0,
      questionCount: 0,
      disabledFlag: false,
    };
  }

  onRadioPress(item, data) {
    const {correctAnswerCount, wrongCount} = this.state;
    if (item.answerId == data.correctAnswerId) {
      this.setState({
        correct: 1,
        selectedId: item.answerId,
        correctAnswerCount: correctAnswerCount + 1,
        disabledFlag: true,
      });
    } else {
      this.setState({
        correct: 2,
        selectedId: item.answerId,
        wrongCount: wrongCount + 1,
        disabledFlag: true,
      });
    }
  }

  //For render Emoji's
  renderEmojis(image, text, text1) {
    const {
      emojiMainView,
      emojiSecondView,
      emojiImageStyle,
      emojiText1,
      emojiText2,
    } = multipleChoiceStyle;
    return (
      <View style={emojiMainView}>
        <View style={emojiSecondView}>
          <Image resizeMode="contain" style={emojiImageStyle} source={image} />
          <View>
            <_Text familyOpenSansSemiBold style={emojiText1}>
              {text}
            </_Text>
            {text1 ? (
              <_Text familyOpenSansSemiBold style={emojiText2}>
                {text1}
              </_Text>
            ) : null}
          </View>
        </View>
      </View>
    );
  }

    //For render Question
  renderQuestion() {
    const {
      questionMainView,
      questionSecondView,
      questionLinearGradient,
      questionView,
      questionNo,
      questionMathMainView,
      questionMathText,
      questionMathText1,
    } = multipleChoiceStyle;
    const {increment} = this.state;
    var item = Data[increment];
    return (
      <View style={questionMainView}>
        {item.htmlForm == false ? (
          <>
            <View style={questionSecondView}>
              <LinearGradient
                colors={[
                  appColors.greenGradient1,
                  appColors.greenGradient2,
                  appColors.greenGradient3,
                  appColors.greenGradient4,
                ]}
                style={questionLinearGradient}>
                <_Text familyRobotoBold fsExtraLarge style={questionNo}>
                  {item.questionNo}
                </_Text>
              </LinearGradient>
            </View>
            <View style={questionView}>
              <_Text familyOpenSansLight fsPrimary>
                {item.question}
              </_Text>
            </View>
          </>
        ) : (
          <>
            <View style={questionSecondView}>
              <LinearGradient
                colors={[
                  appColors.greenGradient1,
                  appColors.greenGradient2,
                  appColors.greenGradient3,
                  appColors.greenGradient4,
                ]}
                style={questionLinearGradient}>
                <_Text familyRobotoBold fsExtraLarge style={questionNo}>
                  {item.questionNo}
                </_Text>
              </LinearGradient>
            </View>
            <View style={questionMathMainView}>
              <MathText
                value={item.question}
                style={questionMathText}
                textSize={16}
                textColor={'#000000'}
              />
              <MathText
                value={item.question1}
                style={questionMathText1}
                textSize={16}
                textColor={'#000000'}
              />
            </View>
          </>
        )}
      </View>
    );
  }

  //For render Answer
  renderAnswer() {
    const{answerMainView,answerKeyView,radioView,radioBtnStyle,answerView,mathView,mathAnswer,borderLine} = multipleChoiceStyle
    const {increment, correct, selectedId,disabledFlag} = this.state;
    var data = Data[increment];
    return (
      <View>
        {data.answerArray.map((item, i) => {
          return (
            <View
              style={answerMainView}>
              <View>
                <View
                  key={item.answerId}
                  style={answerKeyView}>
                  <View
                    style={radioView}>
                    <TouchableOpacity
                      disabled={disabledFlag}
                      onPress={() => this.onRadioPress(item, data)}
                      style={[radioBtnStyle,{
                        backgroundColor:
                        correct == 0
                          ? null
                          : correct == 1 &&
                            item.answerId == data.correctAnswerId
                          ? appColors.green
                          : correct == 2 && selectedId == item.answerId
                          ? appColors.red
                          : item.answerId == data.correctAnswerId
                          ? appColors.green
                          : null}]}
                     >
                      <_Text
                        style={{
                          color:
                            correct == 0
                              ? appColors.textPrimary
                              : correct == 1 &&
                                item.answerId == data.correctAnswerId
                              ? appColors.white
                              : correct == 2 && selectedId == item.answerId
                              ? appColors.white
                              : item.answerId == data.correctAnswerId
                              ? appColors.white
                              : appColors.textPrimary,
                        }}
                        familyOpenSansLight
                        fsSecondary
                        familyRobotoBold>
                        {item.name}
                      </_Text>
                    </TouchableOpacity>
                  </View>

                  <View style={answerView}>
                    {data.htmlForm == false ? (
                      <_Text
                        fsPrimary
                        style={{
                          color:
                            correct == 0
                              ? appColors.blue
                              : correct == 1 &&
                                item.answerId == data.correctAnswerId
                              ? appColors.green
                              : correct == 2 && selectedId == item.answerId
                              ? appColors.red
                              : item.answerId == data.correctAnswerId
                              ? appColors.green
                              : appColors.blue
                        }}>
                        {' '}
                        {item.answerName}
                      </_Text>
                    ) : (
                      <View style={mathView}>
                        <MathText
                          value={item.answerName}
                          style={mathAnswer}
                          textSize={16}
                          textColor={
                            correct == 0
                              ? appColors.blue
                              : correct == 1 &&
                                item.answerId == data.correctAnswerId
                              ? appColors.green
                              : correct == 2 && selectedId == item.answerId
                              ? appColors.red
                              : item.answerId == data.correctAnswerId
                              ?appColors.green
                              :appColors.blue
                          }
                        />
                        <View
                          style={borderLine}></View>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  //For Next buttom
  nextBtn() {
    const{correctAnswerCount,wrongCount} = this.state
    if (this.state.selectedId !== '') {
      var arrayLength = Data.length;
      const {increment} = this.state;
      if (increment == arrayLength - 1) {
        this.props.navigation.navigate('DisplayResult', {
          correct: correctAnswerCount,
          total: Data.length,
          wrong: wrongCount,
        });
      } else {
        this.setState({
          increment: increment + 1,
          correct: 0,
          disabledFlag: false,
          selectedId: '',
        });
      }
    } else {
      Toast.show({
        text: strings.errorMsg,
      });
    }
  }

  //For render Explanation
  renderExplanation() {
    const{explanationView,explanationImgView,explanationImg,explanationText,explanationViewStyle,explanationTextStyle} = multipleChoiceStyle
    return (
      <View
        style={explanationView}>
        <View
          style={explanationImgView}>
          <Image
            resizeMode="contain"
            style={explanationImg}
            source={require('../../Images/comment.png')}
          />
          <_Text
            familyRobotoBold
            fsPrimary
            style={explanationText}>
            {strings.explanation}
          </_Text>
        </View>
        <View
          style={explanationViewStyle}>
          <_Text
            familyRobotoMedium
            style={explanationTextStyle}>
            {strings.explanationText}
          </_Text>
        </View>
      </View>
    );
  }

  render() {
    const {correct, selectedId} = this.state;
    const{renderView,renderQuestion,renderAnswer,renderExplanationView,renderBtnView,renderBtn,renderLinearGradient,renderNext} = multipleChoiceStyle
    return (
      <_Container hasHeader title={strings.chapterName} showMenu>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={renderView}>
          <View style={renderView}>
            <View
              style={renderQuestion}>
              {this.renderQuestion()}
            </View>

            <View style={renderAnswer}>{this.renderAnswer()}</View>

            <View style={renderExplanationView}>
              {correct == 1
                ? this.renderExplanation()
                : correct == 2
                ? this.renderExplanation()
                : null}
              {correct == 1
                ? this.renderEmojis(
                    require('../../Images/emoji.png'),
                    strings.emojiText1,
                  )
                : correct == 2
                ? this.renderEmojis(
                    require('../../Images/sad.png'),
                    strings.emojiText2,
                    strings.emojiText3,
                  )
                : null}
            </View>

            <View style={renderBtnView}>
              <TouchableOpacity
                onPress={() => this.nextBtn()}
                style={renderBtn}>
                <LinearGradient
                  colors={[appColors.gradient4, appColors.gradient5,appColors.gradient6]}
                  style={renderLinearGradient}>
                  <_Text
                    familyOpenSansLight
                    fsHeading
                    style={renderNext}>
                    {strings.next}
                  </_Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </_Container>
    );
  }
}
