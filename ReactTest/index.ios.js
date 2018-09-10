import React, { Component } from 'react';
import { AppRegistry, NativeModules, Text, View} from 'react-native';
import {StackNavigator,createStackNavigator} from 'react-navigation'; 
import HomeScreen from './js/HomeScreen';
import SecondScreen from './js/SecondScreen';

const Root = createStackNavigator({
    home: {screen: HomeScreen},
    second: {screen: SecondScreen},
});


class RootView extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Root />
    );
  }
}

//  项目名要有所对应
AppRegistry.registerComponent('ReactNativeTest', () => RootView);

