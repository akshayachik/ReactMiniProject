import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DisplayResult from '@displayResult/DisplayResult';
import MultipleChoice from '@multipleChoice/MultipleChoice';
import Dashboard from '@dashboard/Dashboard';
import Cart from '@cart/Cart';
import HomeScreen from '@homeScreen/HomeScreen';

const Stack = createStackNavigator();

class scene extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomeScreen}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MultipleChoice"
            component={MultipleChoice}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DisplayResult"
            component={DisplayResult}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default scene;
