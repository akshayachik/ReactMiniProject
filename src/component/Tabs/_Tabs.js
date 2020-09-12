import React, {Component, createRef} from 'react';
import {
  View,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _Container from '@container/_Container';
import _Text from '@text/_Text';
import {appColors} from '@values/colors';
import MultipleChoice from '@multipleChoice/MultipleChoice';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Cart from '../../screens/Cart/Cart';

class MultipleChoiceScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <MultipleChoice navigation={this.props.navigation}></MultipleChoice>
      </View>
    );
  }
}

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Dashboard navigation={this.props.navigation}></Dashboard>
      </View>
    );
  }
}

class CartScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Cart navigation={this.props.navigation}></Cart>
      </View>
    );
  }
}

const Tab = createMaterialBottomTabNavigator();

export default function _Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={appColors.white}
      barStyle={{backgroundColor: appColors.gradient2}}>
      <Tab.Screen
        name="Home"
        component={MultipleChoiceScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={appColors.white} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={appColors.white}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" color={appColors.white} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
