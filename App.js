import 'react-native-gesture-handler';
import * as React from 'react';
import Scene from '@scene/scene';
import {View} from 'react-native';
import { Root } from 'native-base';

class App extends React.Component {

  componentDidMount = () => {
   console.disableYellowBox = true;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Root>
        <Scene />
        </Root>
       
      </View>
    );
  }
}

export default App;
