import React, { Component } from 'react';
import {Text} from 'react-native';

export default class SecondScreen extends Component {

	static navigationOptions = ({navigation}) => ({
	    title: 'SecondScreen',
	});

	render(){
		return(
			<Text>SecondScreen</Text>
		);
	}
}