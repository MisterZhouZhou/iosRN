import React, { Component } from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class HomeScreen extends Component {

	static navigationOptions = ({navigation}) => ({
	    title: 'HomeScreen' 
	});

	nextTo(){
		this.props.navigation.navigate('second');
	}

	render(){
		return(
			<TouchableOpacity onPress={this.nextTo.bind(this)}>
				<Text>HomeScreen</Text>
			</TouchableOpacity>
		);
	}
}